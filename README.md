# FEDENE DataViz

Une application Svelte conçue pour la FEDENE, intégrant des fonctionnalités de scrollytelling et une composante cartographique.

Pour cloner ce dépôt Git et commencer à travailler sur le projet, suivez ces étapes :

1. **Cloner le dépôt**

   Utilisez la commande suivante pour cloner le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/your-username/fedene-dataviz.git
   ```

2. **Installation**

```bash
npm install
npm run dev
```

3. Ou démarrez le serveur et ouvrez l'application dans un nouvel onglet de navigateur

```bash
npm run dev -- --open
```

L'application sera disponible à l'adresse http://localhost:5173 par défaut.

Pour créer une version optimisée de l'application pour la production :

```bash
npm run build
```

Vous pouvez prévisualiser la version de production avec :

```bash
npm run preview
```

4. Déploiement

Pour déployer l'application, vous pourriez avoir besoin d'un adaptateur en fonction de votre environnement cible (cf: https://kit.svelte.dev/docs/adapters).

**Mise à jour des données**

L'ensemble de la donnée (chiffres, description et label) se trouve dans le fichier data/data.ts. 

La donnée de la dataviz n°2 (sur les réseaux de chaleur et froid) doit être modifiée directement sur FIGMA puis exportée au format svg : https://www.figma.com/design/uXxs2dudJ5drojEbeIz4Lm/FEDENE?node-id=102-345&t=PXoTMBllLkiIsfTc-1


Structure du projet

src/ : Contient tous les fichiers sources de l'application Svelte.

styles/ : Feuilles de style SCSS et CSS.

routes/ : Définition des pages et des routes de l'application.

```

```
