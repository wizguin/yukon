<?php

    include 'Database.php';
    include 'Validator.php';

    const HCAPTCHA_SECRET = '0x0000000000000000000000000000000000000000';

    error_reporting(0);

    $v = new Validator();

    $username = $v->name('username', 'Username')
        ->required()
        ->trim()
        ->pattern('/[^A-Za-z0-9 ]/')
        ->string()
        ->length(4, 12)
        ->getField();

    $email = $v->name('email', 'Email Address')
        ->required()
        ->trim()
        ->email()
        ->length(3, 254)
        ->getField();

    $password = $v->name('password', 'Password')
        ->required()
        ->trim()
        ->pattern($v::PASSWORD_PATTERN)
        ->length(8, 60)
        ->getField();

    $v->name('password-repeat', 'Repeat Password')
        ->required()
        ->trim()
        ->pattern($v::PASSWORD_PATTERN)
        ->length(8, 60)
        ->equals('password', 'Password');

    $v->name('h-captcha-response', 'Captcha')
        ->hcaptcha(HCAPTCHA_SECRET);

    if ($v->isFailure()) {
        die($v->getErrors());
    }

    $db = new Database();
    $db->insertUser($username, $email, $password);

?>
