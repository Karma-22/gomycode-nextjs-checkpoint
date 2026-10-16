import Link from 'next/link';

export default function HomePage() {
  const skills = [
    { name: 'React 18 & Next.js', category: 'Frontend', level: 'Avancé' },
    { name: 'TypeScript 5', category: 'Langage', level: 'Avancé' },
    { name: 'Redux Toolkit', category: 'State Management', level: 'Avancé' },
    { name: 'Node.js & Express', category: 'Backend', level: 'Avancé' },
    { name: 'MongoDB & Mongoose', category: 'Base de données', level: 'Avancé' },
    { name: 'REST API & Axios', category: 'Intégration', level: 'Avancé' },
  ];

  const featuredCheckpoints = [
    {
      title: 'CinéStream Movie Hub',
      desc: 'Application de cinéma complète avec routage dynamique React Router v6, bandes-annonces intégrées et filtrage en temps réel.',
      tag: 'React Router',
      link: '/projects'
    },
    {
      title: 'ReduxFlow State Manager',
      desc: 'Gestionnaire de tâches centralisé basé sur Redux Toolkit, actions synchrones, calcul de progression et persistance.',
      tag: 'Redux',
      link: '/projects'
    },
    {
      title: 'UserPulse API Directory',
      desc: 'Consommation asynchrone Axios avec useEffect, gestion du cycle de vie et affichage réactif des utilisateurs connectés.',
      tag: 'API REST',
      link: '/projects'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        <span className="hero-pill">Full Stack Software Developer • GoMyCode</span>
        <h1 className="hero-title">
          Construire des expériences web <span>modernes, rapides</span> et scalables.
        </h1>
        <p className="hero-desc">
          Bonjour, je suis <strong>Darius Ange (Karma-22)</strong>. Passionné d'ingénierie logicielle et d'écosystèmes JavaScript modernes,
          je conçois des architectures performantes avec React, TypeScript, Next.js et Node.js.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-primary">
            🚀 Découvrir mes réalisations
          </Link>
          <Link href="/contact" className="btn btn-outline">
            ✉️ Me contacter
          </Link>
        </div>
      </section>

      {/* Metrics Row */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-number">13+</div>
          <div className="metric-label">Checkpoints Validés</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">100%</div>
          <div className="metric-label">Code TypeScript & Modern JS</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">30+</div>
          <div className="metric-label">Dépôts GitHub Publics</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">Full MERN</div>
          <div className="metric-label">Stack Maîtrisée</div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="section-block">
        <h2 className="section-heading">✨ Projets Récents en Vedette</h2>
        <div className="grid-3">
          {featuredCheckpoints.map((p) => (
            <div key={p.title} className="card">
              <span className="card-tag">{p.tag}</span>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <Link href={p.link} className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-block">
        <h2 className="section-heading">🛠️ Compétences Techniques</h2>
        <div className="grid-3">
          {skills.map((s) => (
            <div key={s.name} className="card">
              <span className="card-tag">{s.category}</span>
              <h3 className="card-title">{s.name}</h3>
              <p className="card-desc">Niveau : <strong>{s.level}</strong></p>
              <div className="tag-list">
                <span className="tag-pill">GoMyCode Certified</span>
                <span className="tag-pill">Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
