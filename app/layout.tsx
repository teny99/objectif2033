import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Objectif 2033',
  description: 'Faire connaître et célébrer 2033 – Apokalyon, preuves, vidéos, communauté.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <nav className="nav">
            <Link href="/">Objectif 2033</Link>
            <div className="spacer" />
            <Link href="/claim" className="btn">🎁 Réclamer des APO</Link>
            <Link href="/chat" className="btn">💬 Chat IA</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Objectif 2033 · <a href="https://dieuexiste.com" target="_blank">dieuexiste.com</a></p>
        </footer>
      </body>
    </html>
  );
}
