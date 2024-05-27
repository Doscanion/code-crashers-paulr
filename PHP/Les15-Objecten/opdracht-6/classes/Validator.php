<?php
class Validator {

    public static function validateEmail(string $email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }

    public static function emailMessage(bool $boolEmail) {
        if ($boolEmail) {
            return 'email is Valid';
        } else {
            return 'email is Invalid';
        }
    }


    public static function validateLinkedIn(string $linkedin) {
        return preg_match("/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9-]+\/?$/", $linkedin) === 1;
    }

    public static function linkedInMessage(bool $boollinkedin) {
        return $boollinkedin ? 'LinkedIn profile is Valid' : 'LinkedIn profile is Invalid';
    }


    public static function validateGithubRepo(string $githubrepo) {
        return preg_match("/^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9-]+\/?$/", $githubrepo) === 1;
    }

    public static function githubrepoMessage(bool $boollinkedin) {
        return $boollinkedin ? 'Gitub repo is Valid' : 'Gitub repo is Invalid';
    }
}
