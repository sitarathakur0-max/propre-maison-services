export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusPoints: string[];
  idealFor: string;
  iconName: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  category: string;
  shortAbout: string;
  services: ServiceItem[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  commitments: {
    title: string;
    description: string;
  }[];
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "Propre Maison Services",
  tagline: "Une maison propre, un quotidien plus serein",
  address: "36 Rue de Belleville, 75020 Paris, France",
  street: "36 Rue de Belleville",
  postalCode: "75020",
  city: "Paris",
  country: "France",
  phone: "+33 1 87 65 24 39",
  phoneRaw: "+33187652439",
  rating: 4.8,
  reviewCount: 25,
  category: "Nettoyage Résidentiel",
  shortAbout:
    "Petite entreprise de nettoyage spécialisée dans les prestations résidentielles à Paris. Nous assurons le ménage régulier à domicile, le nettoyage en profondeur et l'entretien soigné des appartements.",
  services: [
    {
      id: "nettoyage-regulier",
      title: "Nettoyage régulier à domicile",
      shortDesc:
        "L'entretien périodique de votre logement pour maintenir un cadre de vie propre, sain et agréable tout au long de la semaine.",
      fullDesc:
        "Le service de nettoyage régulier à domicile est pensé pour vous soulager durablement des tâches ménagères récurrentes. Nous définissons ensemble le rythme de passage qui convient le mieux à votre quotidien et vos habitudes de vie, afin d'assurer un intérieur soigné en permanence.",
      focusPoints: [
        "Aspiration et lavage méticuleux des sols",
        "Dépoussiérage des meubles et surfaces accessibles",
        "Nettoyage et désinfection des sanitaires et de la salle de bains",
        "Entretien des plans de travail et de la cuisine",
        "Rangement harmonieux et aération des pièces"
      ],
      idealFor: "Particuliers et familles souhaitant un confort constant sans la contrainte du ménage quotidien.",
      iconName: "CalendarClock"
    },
    {
      id: "nettoyage-profondeur",
      title: "Nettoyage en profondeur",
      shortDesc:
        "Une intervention minutieuse et intégrale pour remettre à neuf chaque recoin de votre domicile dans les moindres détails.",
      fullDesc:
        "Le nettoyage en profondeur intervient pour un rafraîchissement complet de votre intérieur. Chaque surface, recoin et zone habituellement délaissée lors d'un entretien courant bénéficie d'une attention rigoureuse pour retrouver une propreté éclatante.",
      focusPoints: [
        "Nettoyage ciblé des recoins difficiles d'accès et plinthes",
        "Dégraissage approfondi des surfaces de cuisson et crédences",
        "Détartrage minutieux de la robinetterie et des parois de douche",
        "Nettoyage soigné de l'extérieur des appareils ménagers et placards",
        "Traitement intensif des sols et désinfection approfondie"
      ],
      idealFor: "Idéal lors d'un changement de saison, après des travaux légers ou pour un renouveau complet de votre domicile.",
      iconName: "Sparkles"
    },
    {
      id: "nettoyage-appartements",
      title: "Nettoyage d’appartements",
      shortDesc:
        "Une prise en charge sur mesure adaptée aux spécificités et agencements des logements et appartements parisiens.",
      fullDesc:
        "Spécialement adapté aux appartements de la capitale, ce service prend en compte les particularités architecturales locales : parquets anciens, surfaces optimisées, pièces d'eau compactes ou volumes sous combles. Nous adaptons nos gestes à chaque configuration pour préserver vos espaces.",
      focusPoints: [
        "Soin adapté aux parquets, tomettes ou carrelages",
        "Optimisation de l'espace et respect des finitions délicates",
        "Nettoyage complet des pièces de vie, chambres et pièces d'eau",
        "Dépoussiérage des corniches, miroirs et menuiseries intérieures",
        "Entretien attentif des petits comme des grands espaces"
      ],
      idealFor: "Résidents, propriétaires et locataires d'appartements à Paris souhaitant un service soigné et attentif.",
      iconName: "Home"
    }
  ],
  processSteps: [
    {
      step: 1,
      title: "Présentez votre besoin",
      description:
        "Contactez-nous par téléphone ou via notre formulaire pour exposer la nature de votre logement et vos attentes."
    },
    {
      step: 2,
      title: "Définissez le service adapté",
      description:
        "Nous précisons ensemble la prestation correspondante : ménage régulier, nettoyage en profondeur ou entretien d'appartement."
    },
    {
      step: 3,
      title: "Organisez l’intervention",
      description:
        "Nous convenons du jour et des modalités de passage à votre adresse parisienne en toute simplicité."
    },
    {
      step: 4,
      title: "Profitez d’un intérieur propre et agréable",
      description:
        "Retrouvez votre chez-vous impeccable, frais et ordonné pour savourer votre temps libre en toute sérénité."
    }
  ],
  commitments: [
    {
      title: "Spécialisation résidentielle",
      description: "Notre activité est entièrement dédiée au confort et à la propreté des foyers parisiens."
    },
    {
      title: "Proximité locale à Paris",
      description: "Implantés au 36 Rue de Belleville dans le 20e arrondissement, nous intervenons au cœur des quartiers parisiens."
    },
    {
      title: "Services ciblés et transparents",
      description: "Trois prestations claires : entretien régulier, nettoyage en profondeur et soin des appartements."
    },
    {
      title: "Confiance & soin du domicile",
      description: "Une attention constante portée au respect de votre intérieur, de vos meubles et de votre intimité."
    }
  ]
};
