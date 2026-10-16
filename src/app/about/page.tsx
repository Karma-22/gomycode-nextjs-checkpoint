import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="section-block" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <span className="hero-pill">À Propos de l'Auteur</span>
      <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
        Darius Ange <span>(Karma-22)</span>
      </h1>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 className="card-title">👨‍💻 Parcours & Vision</h3>
        <p className="card-desc" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          Actuellement étudiant au sein du <strong>Full Stack Software Developer Bootcamp de GoMyCode</strong>,
          j'ai développé une solide rigueur d'ingénierie logicielle couvrant l'ensemble du cycle de développement :
          du prototypage d'interfaces réactives avec <strong>React et TypeScript</strong>, à la conception d'API
          performantes avec <strong>Node.js, Express et MongoDB</strong>.
        </p>
        <p className="card-desc" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          Mon approche repose sur l'écriture de code propre, testé unitairement, maintenable et aligné avec
          les meilleures pratiques de l'industrie (Clean Code, CI/CD, typage strict et Dark Mode natif).
        </p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: '2.5rem' }}>
        <div className="card">
          <span className="card-tag">Formation</span>
          <h4 className="card-title">GoMyCode Bootcamp</h4>
          <p className="card-desc">Programme intensif Full Stack Software Developer.</p>
        </div>

        <div className="card">
          <span className="card-tag">Plateforme GitHub</span>
          <h4 className="card-title">Karma-22</h4>
          <p className="card-desc">Dépôts ouverts, commits atomiques et documentation soignée.</p>
        </div>

        <div className="card">
          <span className="card-tag">Spécialisation</span>
          <h4 className="card-title">MERN + Next.js</h4>
          <p className="card-desc">Développement d'applications cloud-ready.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/contact" className="btn btn-primary">
          Engager la discussion →
        </Link>
      </div>
    </div>
  );
}
