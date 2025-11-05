import type { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Objectif 2033 — Vitrine officielle",
  description:
    "Objectif 2033 : un mouvement mondial pour éclairer la conscience, célébrer 2000 ans d'espérance et bâtir une communauté (APOKALYON, NFT, vidéos, événements).",
  themeColor: "#0a1020",
  openGraph: {
    title: "Objectif 2033 — Vitrine officielle",
    description:
      "Rejoignez les Pèlerins de 2033. Découvrez la démonstration, réclamez des APO, et participez aux défis.",
    url: "https://objectif2033.netlify.app/",
    type: "website",
    images: [
      "https://raw.githubusercontent.com/teny99/logos/main/Logo-APOKALYON1.png",
    ],
  },
};

export default function Page() {
  return <ClientHome />;
}
