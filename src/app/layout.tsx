import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Darius Ange (Karma-22) | Full Stack Developer Portfolio',
  description: 'Portfolio professionnel Next.js présentant les réalisations, architectures et compétences acquises lors du Bootcamp GoMyCode.',
  keywords: ['Full Stack', 'Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'GoMyCode']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <div className="header-container">
              <Link href="/" className="logo-group">
                <span className="logo-icon">🚀</span>
                <span className="logo-title">Karma-22<span>.dev</span></span>
              </Link>
              <nav className="nav-links">
                <Link href="/" className="nav-item">Accueil</Link>
                <Link href="/projects" className="nav-item">Projets</Link>
                <Link href="/about" className="nav-item">À propos</Link>
                <Link href="/contact" className="nav-item">Contact</Link>
              </nav>
            </div>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <div className="footer-inner">
              <p>
                Conçu & Développé avec <strong>Next.js 14 App Router</strong> par <strong>Darius Ange (Karma-22)</strong>.
              </p>
              <div className="tag-list">
                <span className="tag-pill">GoMyCode Bootcamp</span>
                <span className="tag-pill">Server-Side Rendering</span>
                <span className="tag-pill">TypeScript</span>
                <span className="tag-pill">Full Stack</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
