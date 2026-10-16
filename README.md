# 🚀 Next.js Portfolio Showcase - Checkpoint Next.js (GoMyCode)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.11-black?logo=next.js&logoColor=white)]()
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?logo=typescript&logoColor=white)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Application de portfolio développée avec **Next.js 14**, **App Router**, **TypeScript** et **Server-Side Rendering (SSR)** dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en œuvre le routage basé sur les dossiers, l'optimisation des métadonnées SEO, les composants serveur et client, ainsi qu'une interface Cyber Dark raffinée.

---

## 📋 Table des Matières

- [Objectifs du Checkpoint](#-objectifs-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [Architecture des Pages (App Router)](#-architecture-des-pages-app-router)
- [Installation & Démarrage](#-installation--démarrage)
- [Auteur](#-auteur)

---

## 🎯 Objectifs du Checkpoint

1. Créer une application Next.js complète exploitant le nouvel **App Router** (`src/app`).
2. Configurer le routage multi-pages :
   - `/` : Page d'accueil Hero avec compétences, métriques et aperçu des projets.
   - `/projects` : Galerie des réalisations avec liens directs vers les dépôts GitHub de Karma-22.
   - `/about` : Présentation du parcours développeur et de la vision logicielle.
   - `/contact` : Formulaire de contact interactif avec retour visuel immédiat.
3. Implémenter le design system global en Dark Mode avec glassmorphism et fluidité responsive.
4. Valider le build de production (`npm run build`).

---

## ✅ Cahier des Charges & Validation

| Consigne GoMyCode | Réalisation | Statut |
| :--- | :--- | :---: |
| **Framework Next.js** | Next.js 14 configuré avec App Router moderne | ✅ Conforme |
| **Navigation & Pages** | 4 pages interconnectées via `next/link` sans rechargement | ✅ Conforme |
| **Optimisation SEO** | Balises méta exportées dans `layout.tsx` (title, description, keywords) | ✅ Conforme |
| **Composants Client & Server** | Séparation `use client` pour le formulaire et SSR pour les pages statiques | ✅ Conforme |
| **Interface Responsive Dark Mode** | Palette de couleurs sombres, reflets néon et typographie soignée | ✅ Conforme |
| **Build de Production** | Compilation `next build` optimisée sans erreur | ✅ Conforme |

---

## 📂 Architecture des Pages (App Router)

```text
13-nextjs-checkpoint/
├── next.config.js
├── package.json
├── tsconfig.json
├── README.md
└── src/
    └── app/
        ├── layout.tsx     # Layout racine + Navbar + Footer + SEO
        ├── globals.css    # Design System & Variables CSS
        ├── page.tsx       # Page d'accueil (Hero + Skills + Metrics)
        ├── projects/
        │   └── page.tsx   # Liste complète des 12+ checkpoints
        ├── about/
        │   └── page.tsx   # Parcours de Darius Ange (Karma-22)
        └── contact/
            └── page.tsx   # Formulaire de contact interactif
```

---

## 🚀 Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/Karma-22/gomycode-nextjs-checkpoint.git
cd gomycode-nextjs-checkpoint

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Compiler pour la production
npm run build
npm start
```

---

## 👨‍💻 Auteur

- **Darius Ange (Karma-22)**  
- Profil GitHub : [https://github.com/Karma-22](https://github.com/Karma-22)  
- GoMyCode Full Stack Software Developer Bootcamp
