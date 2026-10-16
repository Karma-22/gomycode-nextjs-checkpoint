import Link from 'next/link';

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: 'ES6 Algorithms & Katas Checkpoint',
      module: 'Modern JavaScript (ES6+)',
      desc: 'Suite d’algorithmes avancés, katas CodeWars et 22 tests unitaires validés avec node --test.',
      tags: ['JavaScript ES6+', 'Unit Tests', 'Higher-Order Functions'],
      github: 'https://github.com/Karma-22/gomycode-es6-checkpoint'
    },
    {
      id: 2,
      title: 'React Components & JSX Checkpoint',
      module: 'React Foundations',
      desc: 'Architecture modulaire de composants React, intégration de React-Bootstrap et rendu conditionnel.',
      tags: ['React 18', 'JSX', 'React-Bootstrap'],
      github: 'https://github.com/Karma-22/gomycode-jsx-react-components-checkpoint'
    },
    {
      id: 3,
      title: 'React Props FIFA Player Cards',
      module: 'React Props & Styling',
      desc: 'Cartes interactives de joueurs FIFA avec defaultProps, propTypes et styles dynamiques.',
      tags: ['React Props', 'Inline Styling', 'Dynamic Cards'],
      github: 'https://github.com/Karma-22/gomycode-react-props-checkpoint'
    },
    {
      id: 4,
      title: 'React State Lifecycle Component',
      module: 'React State Management',
      desc: 'Composant de classe avec state réactif, timer setInterval et méthodes de cycle de vie.',
      tags: ['React State', 'Class Components', 'Lifecycle Methods'],
      github: 'https://github.com/Karma-22/gomycode-react-state-checkpoint'
    },
    {
      id: 5,
      title: 'React Debugging & DevTools Audit',
      module: 'React Debugging',
      desc: 'Audit approfondi avec React Developer Tools, correction de 5 anomalies critiques et mode démo.',
      tags: ['React DevTools', 'Debugging', 'State Mutation Fixes'],
      github: 'https://github.com/Karma-22/gomycode-react-debugging-checkpoint'
    },
    {
      id: 6,
      title: 'CinéVibe - React Hooks Checkpoint',
      module: 'React Hooks',
      desc: 'Application de cinéma complète avec MovieCard, MovieList, Filtre en direct et modale d’ajout.',
      tags: ['useState', 'useEffect', 'Custom Filters'],
      github: 'https://github.com/Karma-22/gomycode-react-hooks-checkpoint'
    },
    {
      id: 7,
      title: 'CinéStream - React Router DOM Checkpoint',
      module: 'Client-side Routing',
      desc: 'Routage dynamique v6, navigation vers la page de détails et lecteur de bandes-annonces intégré.',
      tags: ['React Router DOM v6', 'useParams', 'Embedded Video'],
      github: 'https://github.com/Karma-22/gomycode-react-router-checkpoint'
    },
    {
      id: 8,
      title: 'ReduxFlow - Redux Toolkit Checkpoint',
      module: 'Global State Architecture',
      desc: 'Gestionnaire de tâches centralisé avec Redux Toolkit, AddTask, ListTask et Task modulaire.',
      tags: ['Redux Toolkit', 'react-redux', 'State Slices'],
      github: 'https://github.com/Karma-22/gomycode-redux-checkpoint'
    },
    {
      id: 9,
      title: 'UserPulse - REST API Checkpoint',
      module: 'Asynchronous React & Axios',
      desc: 'Consommation de l’API JSONPlaceholder via Axios dans useEffect et stockage dans listOfUser.',
      tags: ['Axios', 'REST API', 'useEffect', 'listOfUser'],
      github: 'https://github.com/Karma-22/gomycode-api-checkpoint'
    },
    {
      id: 10,
      title: 'TypeScript 5 Fundamentals Checkpoint',
      module: 'TypeScript Core',
      desc: 'Interface Vehicle, classe Car, typage strict et suite de tests unitaires avec node --test.',
      tags: ['TypeScript 5', 'Interfaces', 'Classes', 'Unit Tests'],
      github: 'https://github.com/Karma-22/gomycode-typescript-fundamentals-checkpoint'
    },
    {
      id: 11,
      title: 'Building React Apps with TypeScript',
      module: 'React + TypeScript',
      desc: 'Conversion complète de composants fonctionnels et classes vers TypeScript avec typage strict.',
      tags: ['React.FC', 'Generics', 'TypeScript Strict Mode'],
      github: 'https://github.com/Karma-22/gomycode-building-react-apps-with-ts-checkpoint'
    },
    {
      id: 12,
      title: 'Next.js App Router Portfolio Showcase',
      module: 'Next.js & SSR',
      desc: 'Portfolio Next.js 14 avec App Router, optimisation SEO, rendu serveur et Dark Mode.',
      tags: ['Next.js 14', 'App Router', 'SSR', 'Full Stack'],
      github: 'https://github.com/Karma-22/gomycode-nextjs-checkpoint'
    }
  ];

  return (
    <div className="section-block">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="hero-pill">Galerie des Checkpoints GoMyCode</span>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>
            Tous mes <span>Projets & Checkpoints</span>
          </h1>
          <p className="hero-desc" style={{ textAlign: 'left' }}>
            Retrouvez l’ensemble des modules validés au cours du bootcamp, avec accès direct au code source sur GitHub.
          </p>
        </div>
      </div>

      <div className="grid-3">
        {allProjects.map((proj) => (
          <div key={proj.id} className="card">
            <span className="card-tag">{proj.module}</span>
            <h3 className="card-title">{proj.title}</h3>
            <p className="card-desc">{proj.desc}</p>

            <div className="tag-list" style={{ marginBottom: '1.25rem' }}>
              {proj.tags.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
            >
              Voir sur GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
