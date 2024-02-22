# Backend d'Actualités Esport

Ce backend d'actualités esport est une application Node.js qui permet de gérer et de fournir des actualités liées à l'esport. Il utilise une collection Postman pour tester les différentes fonctionnalités de l'API.

## Sommaire

- [Installation](#installation)
- [Utilisation de la Collection Postman](#utilisation-de-la-collection-postman)
- [Endpoints Principaux](#endpoints-principaux)
- [Tests](#tests)
- [Authentification](#authentification)

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Exécutez `npm install` pour installer les dépendances nécessaires.


## Utilisation de la Collection Postman

La collection Postman fournie vous permet de tester les différentes fonctionnalités de l'API. Voici comment l'utiliser :

1. Importez la collection dans Postman en utilisant le fichier `TP_NOTE_NODEJS.json`.
2. Configurez les variables d'environnement dans Postman en remplaçant `{{base_url}}` par l'URL de votre backend.
3. Exécutez les différentes requêtes pour tester les fonctionnalités CRUD de l'API.

## Endpoints Principaux

### Actualités

- **GET /api/v1/actus/** : Récupère toutes les actualités.
- **GET /api/v1/actus/{id}** : Récupère une actualité spécifique.
- **GET /api/v1/actus/suggestions/{id}** : Récupère les suggestions d'actualités associées à un ID.
- **POST /api/v1/actus/create** : Crée une nouvelle actualité.
- **PUT /api/v1/actus/{id}** : Met à jour une actualité existante.
- **DELETE /api/v1/actus/{id}** : Supprime une actualité.

### Commentaires

- **GET /api/v1/comments/** : Récupère tous les commentaires.
- **GET /api/v1/comments/{id}** : Récupère un commentaire spécifique.
- **GET /api/v1/comments/actu/{id}** : Récupère les commentaires associés à une actualité.
- **PUT /api/v1/comments** : Ajoute un nouveau commentaire.
- **DELETE /api/v1/comments/{id}** : Supprime un commentaire.

### Authentification

- **POST /api/v1/auth/login** : Connecte un utilisateur.
- **POST /api/v1/auth/register** : Enregistre un nouvel utilisateur.
- **PUT /api/v1/auth/forgotPassword** : Met à jour le mot de passe de l'utilisateur.

## Tests

Des tests sont inclus dans la collection Postman pour chaque requête. Assurez-vous d'exécuter les tests pour vérifier le bon fonctionnement de l'API.

## Authentification

L'API utilise un jeton JWT pour l'authentification. Assurez-vous de fournir un jeton valide dans les requêtes nécessitant une authentification.

---

Ce README fournit des instructions d'installation, de configuration, d'utilisation de la collection Postman, ainsi qu'un aperçu des principaux endpoints de l'API, regroupés par fonctionnalités.