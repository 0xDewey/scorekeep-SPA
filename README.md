# Single page application Scorekeep (récupération d'une partie des repositories API et PWA)

[English Version](/README_EN.md)

Cette application à pour but d'aider les associations de sports indoor d'inscrire et de gérer les bénévoles pour les tables de marques.

Dans ce projet, j'ai regroupé l'API ainsi que le front que j'avais dissocier dans ma première version.
Cela m'a permis de découvrir le fonctionnement d'inertia avec le rendu SSR proposé.
J'avais par ailleurs, migrer précedemment le code de React vers Next pour la même raison.

## Prérequis

Avant de commencer à travailler sur un projet Laravel 12 avec PHP 8.2, assurez-vous d'avoir installé les éléments suivants sur votre système :

1. **PHP 8.2** : Assurez-vous d'avoir PHP 8.2 installé sur votre système. Vous pouvez le vérifier en exécutant la commande suivante dans votre terminal :

    ```bash
    php -v
    ```

    Si PHP 8.2 n'est pas installé, vous pouvez le télécharger depuis le [site officiel PHP](https://www.php.net/downloads.php) ou utiliser un gestionnaire de paquets tel que [Composer](https://getcomposer.org/) pour l'installer.

2. **Composer** : Composer est un gestionnaire de dépendances essentiel pour les projets Laravel. Assurez-vous de l'avoir installé en suivant les instructions sur [getcomposer.org](https://getcomposer.org/download/).

3. **Git** : Git est utilisé pour gérer les versions de votre code. Si ce n'est pas déjà fait, installez Git en suivant les instructions sur [git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Récupération du projet avec Git

Une fois que vous avez vérifié que tous les prérequis sont installés, vous pouvez récupérer le projet en suivant ces étapes :

1. Ouvrez votre terminal et accédez au répertoire où vous souhaitez cloner le dépôt.

2. Utilisez Composer pour créer un nouveau projet Laravel en exécutant la commande suivante :

    ```bash
    git clone https://github.com/B45T13N/scorekeep-SPA.git nom-du-projet
    ```

    Remplacez `nom-du-projet` par le nom que vous souhaitez donner à votre projet.

3. Une fois la création du projet terminée, accédez au répertoire du projet en utilisant la commande `cd` :

    ```bash
    cd nom-du-projet
    ```

4. Récupérer les dépendances avec Composer :

    ```bash
    php composer install
    ```

5. Lancer les migrations de la base de données :

    ```bash
    php artisan migrate
    ```

6. Pour des données de tests vous pouvez modifier les fichiers de factory et utiliser la commande suivante :

    ```bash
    php artisan db:seed
    ```

## URL de Base

L'URL de base pour toutes les requêtes API est : `http://localhost:8000/`

## Authentification

Le système d'authentification est géré avec le package laravel-sanctum.

## A venir

Une mise à jour du code de l'API sera effectuée afin de redévelopper une application mobile correspondante.

## Conclusion

Ceci conclut la documentation pour l'API Scorekeep. Vous pouvez maintenant commencer à construire et à intégrer vos applications en utilisant les points d'accès fournis. Si vous avez des questions ou avez besoin d'assistance supplémentaire, n'hésitez pas à contacter notre équipe de support à l'adresse contact@scorekeep.org. Bon développement !

```

```
