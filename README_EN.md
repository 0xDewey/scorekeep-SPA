# Single page application Scorekeep (retrieval of part of the API repositories and PWA)

[Version française](/README.md)

This application aims to help indoor sports associations register and manage volunteers for scorekeeping tables.

In this project, I grouped the API and the front end that I had separated in my first version.
This allowed me to discover how inertia works with the provided SSR rendering.
I had also previously migrated the React code to Next for the same reason.

## Prerequisites

Before starting to work on a Laravel 12 project with PHP 8.2, make sure you have installed the following elements on your system:

1. **PHP 8.2**: Make sure you have PHP 8.2 installed on your system. You can check this by running the following command in your terminal:

    ```bash
    php -v
    ```

    If PHP 8.2 is not installed, you can download it from the [official PHP website](https://www.php.net/downloads.php) or use a package manager such as [Composer](https://getcomposer.org/) to install it.

2. **Composer**: Composer is an essential dependency manager for Laravel projects. Make sure you have it installed by following the instructions on [getcomposer.org](https://getcomposer.org/download/).

3. **Git**: Git is used to manage the versions of your code. If you haven't already, install Git by following the instructions on [git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Cloning the Project with Git

Once you have confirmed that all prerequisites are installed, you can retrieve the project by following these steps:

1. Open your terminal and navigate to the directory where you want to clone the repository.

2. Use Composer to create a new Laravel project by running the following command:

    ```bash
    git clone https://github.com/B45T13N/scorekeep-SPA.git project-name
    ```

    Replace `project-name` with the name you want to give to your project.

3. Once the project creation is complete, navigate to the project directory using the `cd` command:

    ```bash
    cd project-name
    ```

4. Retrieve the dependencies with Composer:

    ```bash
    php composer install
    ```

5. Run the database migrations:

    ```bash
    php artisan migrate
    ```

6. For test data, you can modify the factory files and use the following command:

    ```bash
    php artisan db:seed
    ```

## Base URL

The base URL for all API requests is: `http://localhost:8000/`

## Authentication

The authentication system is managed with the laravel-sanctum package.

## Coming Soon

An update of the API code will be made to develop a corresponding mobile application.

## Conclusion

This concludes the documentation for the Scorekeep API. You can now start building and integrating your applications using the provided endpoints. If you have any questions or need further assistance, feel free to contact our support team at contact@scorekeep.org. Happy coding!
