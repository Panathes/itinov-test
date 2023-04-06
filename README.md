# Introduction

Le repo https://github.com/Panathes/itinov-test contient un projet de test pour une application bancaire.

# Language et librairies Utilisés

TypeScript
ReactJs
React Router
Styled-Components
Bulma
React-Hook-Form
React Testing Library

# Structure du projet

Le repo est organisé de la manière suivante:

Asset: Contenant les images de l'application.
Component: Contenant les composants React réutilisables de l'application.
Context: Contenant les données de l'utilisateur.
Page: Contenant les différentes vues de l'application.
Utils: Contenant les données factice pour l'application et les tests.

# Commandes

Pour installer et lancer le projet, réalisés les commandes suivantes:

npm i
npm start

Pour lancer les tests, réalisé la commandes suivante:

npm run test

# Explication sur certains choix techniques

## useContext

J'ai longuement hésité entre Redux et useContext. J'ai préféré ce dernier car je trouvais que c'était overkill de placer un Redux.

un point améliorable avec l'utilisation du useContext dans ce repo: Comme la donnée est possiblement null je dois checké a chaque fois cette condition.

Une façon de procéder est de fournir un custom hook pour utiliser le context, et relevé une erreur si le context n'est pas fourni.

## Utilisation du Local Storage

Après la réalisation du test, j'ai pu remarqué que par moment, malgré le useContext. La donnée était par persisté. Avec du recul, j'aurais voulu utiliser le localStorage pour une meilleure persistance.

## Storybook

J'ai hésité à mettre en place un storybook pour montrer l'utilisation des composants de l'application. Je peux le réaliser si demandé.

## Formulaire de virement

Un point améliorable serait de rajouter certaines vérification (rendre impossible le choix du même compte comme créditeur et débiteur).
