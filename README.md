# Objectif 2033 – Netlify Starter

Un starter Next.js prêt pour Netlify avec 3 pages clés :
- `/` : landing
- `/claim` : lien/iframe vers votre page Thirdweb (claim/achat APO)
- `/chat` : petit chatbot via API OpenAI (clé en variable d’environnement)

## Démarrage en local

```bash
npm install
cp .env.example .env.local
# éditez .env.local et remplacez les variables
npm run dev
```

## Déploiement sur Netlify

1. Poussez ce dossier sur GitHub (ou GitLab/Bitbucket).
2. Sur Netlify : **Add new site → Import an existing project** puis connectez votre dépôt.
3. Build command : `npm run build` · Publish directory : `.next`
4. Ajoutez les variables d’environnement dans **Site settings → Build & deploy → Environment** :
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` (ex: `gpt-4o-mini`)
   - `NEXT_PUBLIC_THIRDWEB_CLAIM_URL` (URL de votre page Thirdweb)
5. Déployez.

### Domaine `objectif2033.com`

- Vous pouvez acheter/brancher le domaine **chez Netlify** (Domains → Register/Transfer) ou **chez un registrar externe** et **pointer les DNS** vers Netlify (nameservers ou enregistrements A/ALIAS + CNAME).
- Une fois connecté, ajoutez le domaine dans **Site → Domain management** puis suivez l’assistant. Les certificats Let’s Encrypt sont gérés automatiquement.

## Personnalisation

- Le style est dans `app/globals.css`.
- Le prompt système du chatbot est dans `app/api/chat/route.ts`. Adaptez-le à votre ligne éditoriale.
- La page `/claim` lit l’URL depuis `NEXT_PUBLIC_THIRDWEB_CLAIM_URL` (env publique).

## Sécurité

- Ne committez **jamais** `.env.local`.
- Limitez le **prompt injection** côté IA et posez des garde-fous si le chatbot sera public.

Bon build ! 🚀

Déploiement auto Netlify.
