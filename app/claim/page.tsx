'use client';
import { useEffect, useState } from 'react';

export default function ClaimPage() {
  const [claimUrl, setClaimUrl] = useState<string | null>(null);

  useEffect(() => {
    // Expose claim URL via env at build time; fallback to placeholder
    setClaimUrl(process.env.NEXT_PUBLIC_THIRDWEB_CLAIM_URL || process.env.THIRDWEB_CLAIM_URL || "");
  }, []);

  return (
    <section>
      <h1>Réclamer des Apokalyon (APO)</h1>
      <p>Utilisez le bouton ci-dessous pour accéder à la page de claim/achat.</p>
      <p className="note">Remplacez l’URL dans <code>.env.local</code> (THIRDWEB_CLAIM_URL ou NEXT_PUBLIC_THIRDWEB_CLAIM_URL).</p>

      {claimUrl ? (
        <a className="btn big" href={claimUrl} target="_blank" rel="noreferrer">Ouvrir la page de claim</a>
      ) : (
        <p>Claim URL non configurée.</p>
      )}

      <div className="embed">
        {/* Optionnel : Iframe d’aperçu si la page autorise l’embed */}
        {claimUrl && <iframe src={claimUrl} title="Claim APO" style={{width:'100%', height:'80vh', border:'1px solid var(--border)'}} />}
      </div>
    </section>
  );
}
