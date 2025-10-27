import Link from 'next/link';

export default function Page() {
  return (
    <section className="hero">
      <h1>Objectif 2033</h1>
      <p>
        D’ici avril 2033, faisons rayonner une idée simple et puissante : 
        <strong> la biologie seule ne suffit pas à expliquer la conscience.</strong>
      </p>
      <div className="cta">
        <Link href="/claim" className="btn big">🎁 Réclamer mes APO</Link>
        <Link href="/chat" className="btn outline">💬 Discuter avec l’IA</Link>
      </div>

      <div className="grid">
        <div className="card">
          <h3>🎯 Mission</h3>
          <p>Construire une communauté engagée pour préparer 2033 (manifeste, événements, vidéos, NFT, Apokalyon).</p>
        </div>
        <div className="card">
          <h3>🪙 Apokalyon (APO)</h3>
          <p>Un token communautaire pour récompenser l’engagement et accéder à des avantages.</p>
        </div>
        <div className="card">
          <h3>📺 Vidéos & Blog</h3>
          <p>Suivez nos Shorts et articles majeurs. Intégration à venir.</p>
        </div>
      </div>
    </section>
  );
}
