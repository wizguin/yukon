<?php

    class Validator {

        const PASSWORD_PATTERN = '/[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};\':"\\\\|,.<>\/?`~ ]/';

        private $name;
        private $label;

        private $field;

        private $errors = [];

        private $messages = [
            'provide' => 'Please provide a valid %s.',
            'min' => '%s must be at least %s characters.',
            'max' => '%s must not exceed %s characters.',
            'equals' => '%s does not match %s.'
        ];

        function name($name, $label) {
            $this->name = $name;
            $this->label = $label;

            $this->field = $_POST[$name] ?? '';

            return $this;
        }

        function required() {
            if ($this->isFieldError()) {
                return $this;
            }

            if (empty($this->field)) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this;
        }

        function trim() {
            if ($this->isFieldError()) {
                return $this;
            }

            $trimmed = trim($this->field);

            if ($trimmed !== $this->field) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this->pattern('/\s{2}/');
        }

        function pattern($pattern) {
            if ($this->isFieldError()) {
                return $this;
            }

            if (preg_match($pattern, $this->field, $matches)) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this;
        }

        function string() {
            if ($this->isFieldError()) {
                return $this;
            }

            $sanitized = filter_var($this->field, FILTER_SANITIZE_STRING);

            if ($sanitized !== $this->field) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this;
        }

        function email() {
            if ($this->isFieldError()) {
                return $this;
            }

            $sanitized = filter_var($this->field, FILTER_SANITIZE_STRING);
            $validated = filter_var($this->field, FILTER_VALIDATE_EMAIL);

            if ($sanitized !== $this->field || !$validated) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this;
        }

        function length($min, $max) {
            if ($this->isFieldError()) {
                return $this;
            }

            if (strlen($this->field) < $min) {
                $this->setFieldError($this->messages['min'], [$this->label, $min]);

            } else if (strlen($this->field) > $max) {
                $this->setFieldError($this->messages['max'], [$this->label, $max]);
            }

            return $this;
        }

        function equals($equals, $label) {
            if ($this->isFieldError()) {
                return $this;
            }

            if ($this->field !== $_POST[$equals]) {
                $this->setFieldError($this->messages['equals'], [$this->label, $label]);
            }

            return $this;
        }

        function hcaptcha($secret) {
            if ($this->isFieldError()) {
                return $this;
            }

            $data = array(
                'secret' => $secret,
                'response' => $this->field
            );

            $verify = curl_init();

            curl_setopt($verify, CURLOPT_URL, 'https://hcaptcha.com/siteverify');
            curl_setopt($verify, CURLOPT_POST, true);
            curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);

            $response = curl_exec($verify);
            $responseData = json_decode($response);

            if (!$responseData->success) {
                $this->setFieldError($this->messages['provide'], [$this->label]);
            }

            return $this;
        }

        function getField() {
            if (!$this->isFieldError()) {
                return $this->field;
            }
        }

        function setFieldError($error, $labels = []) {
            $this->errors[$this->name] = vsprintf($error, $labels);
        }

        function isFieldError() {
            return isset($this->errors[$this->name]);
        }

        function isFailure() {
            return boolval(count($this->errors));
        }

        function getErrors() {
            return json_encode($this->errors);
        }

    }

?>
