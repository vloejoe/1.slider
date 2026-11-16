# 1.slider — un carrousel d'images en React

Un carrousel de cinq images avec boutons précédent / suivant, retour au début en fin de liste, compteur (`n / 5`) et description de l'image.

## Pourquoi ce projet
Premier exercice de la série d'exercices numérotés (juillet–septembre 2023) : un carrousel d'images, pour s'exercer à l'état et aux listes en React.

## Ce que j'ai appris
- Garder la position courante avec `useState` et la faire boucler en fin de liste.
- Séparer les données (`src/data/sliderData.js`) de l'affichage (`src/components/slider.jsx`).
- Retrouver une description à partir d'un identifiant (`find`).
- Importer des icônes SVG comme images dans un composant.
- Le défilement automatique est écrit en commentaire dans `slider.jsx` : une piste non terminée.

## Stack
React 18, Vite 4 (plugin React avec SWC).

## Lancer en local
```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # version de production dans dist/
```

## Démo
Pas de démo en ligne.

## Crédits et transparence
Projet d'apprentissage personnel. Le fichier `src/components/slider cours.txt` contient mes notes de cours.
Code d'origine : 2023, exercice personnel. Novembre 2026 : README, charte de code et mise à jour des dépendances réalisés avec Claude Code (voir l'historique Git).

## État du projet
Entretien minimal (voir `AGENTS.md`). `npm run lint` ne fonctionne pas : le dépôt n'a pas de fichier de configuration ESLint.
