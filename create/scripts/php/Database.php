<?php

    class Database {

        const HOST = '127.0.0.1';
        const USER = 'root';
        const PASSWORD = 'password';
        const DATABASE = 'yukon';

        function __construct() {
            $this->db = new mysqli(self::HOST, self::USER, self::PASSWORD, self::DATABASE);

            if ($this->db->connect_error) {
                $this->dieWithMessage('username', 'Failed to connect.');
            }
        }

        function userExists($username) {
            $statement = $this->db->prepare('SELECT * FROM users WHERE username = ?');
            $statement->bind_param('s', $username);
            $statement->execute();

            $result = $statement->get_result();

            if ($result->num_rows) {
                return true;
            }
        }

        function insertUser($username, $email, $password) {
            if ($this->userExists($username)) {
                $this->dieWithMessage('username', 'That username is already taken.');
            }

            $password = $this->hashPassword($password);

            $statement = $this->db->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
            $statement->bind_param('sss', $username, $email, $password);

            if (!$statement->execute()) {
                $this->dieWithMessage('username', 'There was an error.');
            }

            $this->dieWithMessage('success', true);
        }

        function hashPassword($password) {
            $password = password_hash($password, PASSWORD_BCRYPT);

            return str_replace('$2y$', '$2a$', $password);
        }

        function dieWithMessage($key, $message) {
            die(json_encode(array($key => $message)));
        }

    }

?>
