export const phasesData = [
  {
    codePhase: "PH001",
    libellePhase: "Analyse des besoins",
    descriptionPhase: "Étude des besoins et rédaction du cahier des charges.",
    codeLivrable: "LIV001",
    libelleLivrable: "Document des besoins",
    cheminDossier: "/documents/analyse/besoins.pdf",
    descriptionLivrable: "Document décrivant les besoins du client.",
  },
  {
    codePhase: "PH002",
    libellePhase: "Conception",
    descriptionPhase:
      "Conception de l'architecture et des spécifications techniques.",
    codeLivrable: "LIV002",
    libelleLivrable: "Plan de conception",
    cheminDossier: "/documents/conception/plan_conception.pdf",
    descriptionLivrable: "Document détaillant l'architecture du projet.",
  },
  {
    codePhase: "PH003",
    libellePhase: "Développement Backend",
    descriptionPhase: "Mise en œuvre des fonctionnalités côté serveur.",
    codeLivrable: "LIV003",
    libelleLivrable: "Code source Backend",
    cheminDossier: "/documents/dev/backend.zip",
    descriptionLivrable: "Archive contenant le code source du backend.",
  },
  {
    codePhase: "PH004",
    libellePhase: "Développement Frontend",
    descriptionPhase: "Mise en œuvre des interfaces utilisateur.",
    codeLivrable: "LIV004",
    libelleLivrable: "Code source Frontend",
    cheminDossier: "/documents/dev/frontend.zip",
    descriptionLivrable: "Archive contenant le code source du frontend.",
  },
  {
    codePhase: "PH005",
    libellePhase: "Tests Unitaires",
    descriptionPhase: "Validation des modules via tests unitaires.",
    codeLivrable: "LIV005",
    libelleLivrable: "Rapport de tests unitaires",
    cheminDossier: "/documents/tests/unitaires.pdf",
    descriptionLivrable:
      "Rapport détaillant les résultats des tests unitaires.",
  },
  {
    codePhase: "PH006",
    libellePhase: "Intégration",
    descriptionPhase: "Assemblage des modules développés.",
    codeLivrable: "LIV006",
    libelleLivrable: "Rapport d'intégration",
    cheminDossier: "/documents/tests/integration.pdf",
    descriptionLivrable: "Rapport sur les tests d'intégration.",
  },
  {
    codePhase: "PH007",
    libellePhase: "Tests Fonctionnels",
    descriptionPhase: "Validation des fonctionnalités métier.",
    codeLivrable: "LIV007",
    libelleLivrable: "Rapport de tests fonctionnels",
    cheminDossier: "/documents/tests/fonctionnels.pdf",
    descriptionLivrable: "Rapport des tests fonctionnels réalisés.",
  },
  {
    codePhase: "PH008",
    libellePhase: "Déploiement Pré-Production",
    descriptionPhase:
      "Déploiement dans un environnement proche de la production.",
    codeLivrable: "LIV008",
    libelleLivrable: "Documentation de déploiement",
    cheminDossier: "/documents/deploiement/preprod.pdf",
    descriptionLivrable: "Guide pour le déploiement en pré-production.",
  },
  {
    codePhase: "PH009",
    libellePhase: "Formation",
    descriptionPhase: "Formation des utilisateurs finaux.",
    codeLivrable: "LIV009",
    libelleLivrable: "Manuel utilisateur",
    cheminDossier: "/documents/formation/manuel_utilisateur.pdf",
    descriptionLivrable: "Manuel détaillé pour les utilisateurs finaux.",
  },
  {
    codePhase: "PH010",
    libellePhase: "Maintenance Initiale",
    descriptionPhase: "Maintenance corrective et évolutive post-livraison.",
    codeLivrable: "LIV010",
    libelleLivrable: "Rapport de maintenance",
    cheminDossier: "/documents/maintenance/rapport.pdf",
    descriptionLivrable: "Rapport des interventions de maintenance initiale.",
  },
  // Ajoutez les 11 phases supplémentaires ici...
];

export const facturations = [
  {
    codeProjet: "PR001",
    LibelleProjet: "Développement d'un ERP",
    libellePhase: "Analyse des besoins",
    description: "Étude initiale des besoins du client.",
    dateDebut: "10-01-2024",
    dateFin: "24-01-2024", // Différence de 14 jours
    equipe: ["Alice", "Bob"],
    montant: 5000,
    etatRealisation: "Terminée",
    etatFacturation: "Facturée",
    etatPaiement: "Payée",
  },
  {
    codeProjet: "PR002",
    LibelleProjet: "Refonte du site e-commerce",
    libellePhase: "Conception",
    description: "Création des spécifications techniques.",
    dateDebut: "15-01-2024",
    dateFin: "12-02-2024", // Différence de 28 jours
    equipe: ["Clara", "David"],
    montant: 8000,
    etatRealisation: "Terminée",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR003",
    LibelleProjet: "Mise en place d'un CRM",
    libellePhase: "Développement Backend",
    description: "Implémentation des API principales.",
    dateDebut: "01-02-2024",
    dateFin: "29-02-2024", // Différence de 28 jours
    equipe: ["Eve", "Frank"],
    montant: 12000,
    etatRealisation: "Terminée",
    etatFacturation: "Facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR004",
    LibelleProjet: "Élaboration d'un portail client",
    libellePhase: "Développement Frontend",
    description: "Création des interfaces utilisateur.",
    dateDebut: "16-02-2024",
    dateFin: "29-03-2024", // Différence de 42 jours
    equipe: ["George", "Hannah"],
    montant: 15000,
    etatRealisation: "En cours",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR005",
    LibelleProjet: "Amélioration de la cybersécurité",
    libellePhase: "Tests Unitaires",
    description: "Validation des modules individuels.",
    dateDebut: "02-03-2024",
    dateFin: "16-03-2024", // Différence de 14 jours
    equipe: ["Ivan", "Judy"],
    montant: 7000,
    etatRealisation: "Non terminée",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR006",
    LibelleProjet: "Développement d'un chatbot IA",
    libellePhase: "Intégration",
    description: "Assemblage des différents modules.",
    dateDebut: "11-03-2024",
    dateFin: "08-04-2024", // Différence de 28 jours
    equipe: ["Kevin", "Laura"],
    montant: 10000,
    etatRealisation: "Terminée",
    etatFacturation: "Facturée",
    etatPaiement: "Payée",
  },
  {
    codeProjet: "PR007",
    LibelleProjet: "Digitalisation des processus RH",
    libellePhase: "Déploiement Pré-Production",
    description: "Mise en place dans l'environnement préprod.",
    dateDebut: "21-03-2024",
    dateFin: "18-04-2024", // Différence de 28 jours
    equipe: ["Mike", "Nina"],
    montant: 13000,
    etatRealisation: "En cours",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR008",
    libellePhase: "Formation",
    description: "Sessions de formation pour les utilisateurs.",
    dateDebut: "01-04-2024",
    dateFin: "15-04-2024", // Différence de 14 jours
    equipe: ["Oscar", "Paula"],
    montant: 6000,
    etatRealisation: "Non terminée",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR009",
    libellePhase: "Tests Fonctionnels",
    description: "Vérification des fonctionnalités clés.",
    dateDebut: "06-04-2024",
    dateFin: "04-05-2024", // Différence de 28 jours
    equipe: ["Quinn", "Rachel"],
    montant: 9000,
    etatRealisation: "Terminée",
    etatFacturation: "Facturée",
    etatPaiement: "Non payé",
  },
  {
    codeProjet: "PR010",
    libellePhase: "Développement Mobile",
    description: "Création des applications mobiles associées.",
    dateDebut: "16-04-2024",
    dateFin: "30-05-2024", // Différence de 42 jours
    equipe: ["Steve", "Tina"],
    montant: 20000,
    etatRealisation: "En cours",
    etatFacturation: "Non facturée",
    etatPaiement: "Non payé",
  },
  // Ajoutez les 5 facturations supplémentaires...
];

export const organismes = [
  {
    CodeOrganisme: "ORG001",
    NomOrganisme: "Agence Urbaine de Casablanca",
    AdresseOrganisme: "Rue Allal El Fassi, Casablanca",
    TelephoneOrganisme: "0522-345678",
    NomContact: "Ahmed Ben Ali",
    EmailContact: "contact@aucasablanca.ma",
    AdresseWeb: "https://aucasablanca.ma",
  },
  {
    CodeOrganisme: "ORG002",
    NomOrganisme: "Ministère de l'Économie",
    AdresseOrganisme: "Quartier Administratif, Rabat",
    TelephoneOrganisme: "0537-567890",
    NomContact: "Fatima Zahra Idrissi",
    EmailContact: "info@economie.ma",
    AdresseWeb: "https://www.finances.gov.ma",
  },
  {
    CodeOrganisme: "ORG003",
    NomOrganisme:
      "ANRT (Agence Nationale de Réglementation des Télécommunications)",
    AdresseOrganisme: "Technopark, Rabat",
    TelephoneOrganisme: "0537-789012",
    NomContact: "Mohamed El Khatib",
    EmailContact: "support@anrt.ma",
    AdresseWeb: "https://www.anrt.ma",
  },
  {
    CodeOrganisme: "ORG004",
    NomOrganisme: "Office National de l'Électricité",
    AdresseOrganisme: "Boulevard Abdelmoumen, Casablanca",
    TelephoneOrganisme: "0522-123456",
    NomContact: "Khadija El Amrani",
    EmailContact: "info@onee.ma",
    AdresseWeb: "https://www.one.ma",
  },
  {
    CodeOrganisme: "ORG005",
    NomOrganisme: "Université Hassan II",
    AdresseOrganisme: "Route d'El Jadida, Casablanca",
    TelephoneOrganisme: "0522-654321",
    NomContact: "Driss Lahlou",
    EmailContact: "contact@uh2c.ma",
    AdresseWeb: "https://www.uh2c.ac.ma",
  },
  {
    CodeOrganisme: "ORG006",
    NomOrganisme: "BMCE Bank",
    AdresseOrganisme: "Avenue Mohammed V, Rabat",
    TelephoneOrganisme: "0537-987654",
    NomContact: "Leila Bouchaib",
    EmailContact: "relation.client@bmcebank.ma",
    AdresseWeb: "https://www.bmcebank.ma",
  },
  {
    CodeOrganisme: "ORG007",
    NomOrganisme: "Maroc Telecom",
    AdresseOrganisme: "Avenue Annakhil, Rabat",
    TelephoneOrganisme: "0537-345678",
    NomContact: "Youssef Chraibi",
    EmailContact: "client@iam.ma",
    AdresseWeb: "https://www.iam.ma",
  },
  {
    CodeOrganisme: "ORG008",
    NomOrganisme: "CGEM (Confédération Générale des Entreprises du Maroc)",
    AdresseOrganisme: "Boulevard Zerktouni, Casablanca",
    TelephoneOrganisme: "0522-567890",
    NomContact: "Amal El Mekki",
    EmailContact: "info@cgem.ma",
    AdresseWeb: "https://www.cgem.ma",
  },
  {
    CodeOrganisme: "ORG009",
    NomOrganisme: "OCP Group",
    AdresseOrganisme: "Complexe Industriel, Khouribga",
    TelephoneOrganisme: "0528-234567",
    NomContact: "Hicham Tahiri",
    EmailContact: "contact@ocpgroup.ma",
    AdresseWeb: "https://www.ocpgroup.ma",
  },
  {
    CodeOrganisme: "ORG010",
    NomOrganisme: "PortNet",
    AdresseOrganisme: "Zone Portuaire, Casablanca",
    TelephoneOrganisme: "0522-456789",
    NomContact: "Najwa Saidi",
    EmailContact: "support@portnet.ma",
    AdresseWeb: "https://www.portnet.ma",
  },
  {
    CodeOrganisme: "ORG011",
    NomOrganisme: "Ministère de l'Intérieur",
    AdresseOrganisme: "Rue Ghandi, Rabat",
    TelephoneOrganisme: "0537-345678",
    NomContact: "Omar Bouzoubaâ",
    EmailContact: "info@interieur.gov.ma",
    AdresseWeb: "https://www.interieur.gov.ma",
  },
  {
    CodeOrganisme: "ORG012",
    NomOrganisme: "Hôpital Cheikh Khalifa",
    AdresseOrganisme: "Boulevard Oued El Makhazine, Casablanca",
    TelephoneOrganisme: "0522-567890",
    NomContact: "Samira El Ghazi",
    EmailContact: "contact@hck.ma",
    AdresseWeb: "https://www.hck.ma",
  },
  {
    CodeOrganisme: "ORG013",
    NomOrganisme: "Autoroute du Maroc",
    AdresseOrganisme: "Route de Tamesna, Rabat",
    TelephoneOrganisme: "0537-890123",
    NomContact: "Rachid Mounir",
    EmailContact: "support@autoroute.ma",
    AdresseWeb: "https://www.adm.co.ma",
  },
  {
    CodeOrganisme: "ORG014",
    NomOrganisme: "Royal Air Maroc",
    AdresseOrganisme: "Aéroport Mohammed V, Casablanca",
    TelephoneOrganisme: "0522-345678",
    NomContact: "Nawal Hachimi",
    EmailContact: "client@royalairmaroc.com",
    AdresseWeb: "https://www.royalairmaroc.com",
  },
  {
    CodeOrganisme: "ORG015",
    NomOrganisme: "ONCF (Office National des Chemins de Fer)",
    AdresseOrganisme: "Gare Rabat Agdal, Rabat",
    TelephoneOrganisme: "0537-234567",
    NomContact: "Mustapha El Idrissi",
    EmailContact: "support@oncf.ma",
    AdresseWeb: "https://www.oncf.ma",
  },
];

export const livrables = [
  {
    CodeLivrable: "LIV101",
    LibelleLivrable: "Cahier des charges",
    CheminDossier: "/documents/projet/PR001/Cahier_des_charges.pdf",
    Description:
      "Document détaillant les exigences fonctionnelles et techniques.",
  },
  {
    CodeLivrable: "LIV102",
    LibelleLivrable: "Spécifications techniques",
    CheminDossier: "/documents/projet/PR002/Spec_techniques.pdf",
    Description: "Description technique des solutions proposées.",
  },
  {
    CodeLivrable: "LIV103",
    LibelleLivrable: "Plan de projet",
    CheminDossier: "/documents/projet/PR003/Plan_projet.xlsx",
    Description: "Planification et jalons du projet.",
  },
  {
    CodeLivrable: "LIV104",
    LibelleLivrable: "Maquettes UI",
    CheminDossier: "/documents/projet/PR004/Maquettes_UI.fig",
    Description: "Concepts d'interface utilisateur.",
  },
  {
    CodeLivrable: "LIV105",
    LibelleLivrable: "Rapport de tests unitaires",
    CheminDossier: "/documents/projet/PR005/Rapport_tests_unitaires.docx",
    Description: "Validation des modules individuels.",
  },
  {
    CodeLivrable: "LIV106",
    LibelleLivrable: "Code source backend",
    CheminDossier: "/documents/projet/PR006/Code_Backend.zip",
    Description: "Ensemble des fichiers et API du backend.",
  },
  {
    CodeLivrable: "LIV107",
    LibelleLivrable: "Code source frontend",
    CheminDossier: "/documents/projet/PR007/Code_Frontend.zip",
    Description: "Ensemble des fichiers du frontend.",
  },
  {
    CodeLivrable: "LIV108",
    LibelleLivrable: "Documentation API",
    CheminDossier: "/documents/projet/PR008/Doc_API.pdf",
    Description: "Instructions pour l'utilisation des API du projet.",
  },
  {
    CodeLivrable: "LIV109",
    LibelleLivrable: "Rapport d'intégration",
    CheminDossier: "/documents/projet/PR009/Rapport_integration.docx",
    Description: "Résultat des tests d'intégration.",
  },
  {
    CodeLivrable: "LIV110",
    LibelleLivrable: "Guide utilisateur",
    CheminDossier: "/documents/projet/PR010/Guide_utilisateur.pdf",
    Description: "Manuel d'utilisation pour les utilisateurs finaux.",
  },
  {
    CodeLivrable: "LIV111",
    LibelleLivrable: "Rapport final",
    CheminDossier: "/documents/projet/PR011/Rapport_final.docx",
    Description: "Résumé de l'exécution et résultats finaux.",
  },
  {
    CodeLivrable: "LIV112",
    LibelleLivrable: "Analyse de rentabilité",
    CheminDossier: "/documents/projet/PR012/Analyse_rentabilite.xlsx",
    Description: "Évaluation économique et financière du projet.",
  },
  {
    CodeLivrable: "LIV113",
    LibelleLivrable: "Documentation technique",
    CheminDossier: "/documents/projet/PR013/Documentation_technique.pdf",
    Description: "Spécifications et guides pour les développeurs.",
  },
  {
    CodeLivrable: "LIV114",
    LibelleLivrable: "Rapport d'audit",
    CheminDossier: "/documents/projet/PR014/Rapport_audit.docx",
    Description: "Analyse des risques et conformité.",
  },
  {
    CodeLivrable: "LIV115",
    LibelleLivrable: "Plan de déploiement",
    CheminDossier: "/documents/projet/PR015/Plan_deploiement.pdf",
    Description: "Stratégie et étapes pour la mise en production.",
  },
];

export const projets = [
  {
    CodeProjet: "PR001",
    LibelleProjet: "Développement d'un ERP",
    MontantProjet: 120000,
    DateDebut: "10-01-2024",
    DateFin: "30-06-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR002",
    LibelleProjet: "Refonte du site e-commerce",
    MontantProjet: 90000,
    DateDebut: "01-02-2024",
    DateFin: "15-04-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR003",
    LibelleProjet: "Mise en place d'un CRM",
    MontantProjet: 150000,
    DateDebut: "01-03-2024",
    DateFin: "30-08-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR004",
    LibelleProjet: "Élaboration d'un portail client",
    MontantProjet: 95000,
    DateDebut: "18-01-2024",
    DateFin: "30-05-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR005",
    LibelleProjet: "Amélioration de la cybersécurité",
    MontantProjet: 85000,
    DateDebut: "10-02-2024",
    DateFin: "30-06-2024",
    Kolera: false,
  },
  {
    CodeProjet: "PR006",
    LibelleProjet: "Développement d'un chatbot IA",
    MontantProjet: 110000,
    DateDebut: "01-03-2024",
    DateFin: "01-07-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR007",
    LibelleProjet: "Digitalisation des processus RH",
    MontantProjet: 70000,
    DateDebut: "10-03-2024",
    DateFin: "15-07-2024",
    Kolera: false,
  },
  {
    CodeProjet: "PR008",
    LibelleProjet: "Automatisation de la production",
    MontantProjet: 200000,
    DateDebut: "05-01-2024",
    DateFin: "30-09-2024",
    Kolera: false,
  },
  {
    CodeProjet: "PR009",
    LibelleProjet: "Migration vers le cloud",
    MontantProjet: 100000,
    DateDebut: "15-03-2024",
    DateFin: "01-07-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR010",
    LibelleProjet: "Mise en conformité RGPD",
    MontantProjet: 45000,
    DateDebut: "25-02-2024",
    DateFin: "30-05-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR011",
    LibelleProjet: "Optimisation logistique",
    MontantProjet: 125000,
    DateDebut: "12-01-2024",
    DateFin: "30-08-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR012",
    LibelleProjet: "Déploiement d'un système de BI",
    MontantProjet: 140000,
    DateDebut: "20-03-2024",
    DateFin: "01-09-2024",
    Kolera: false,
  },
  {
    CodeProjet: "PR013",
    LibelleProjet: "Développement d'une application mobile",
    MontantProjet: 80000,
    DateDebut: "20-01-2024",
    DateFin: "30-05-2024",
    Kolera: false,
  },
  {
    CodeProjet: "PR014",
    LibelleProjet: "Création d'une plateforme d'apprentissage",
    MontantProjet: 60000,
    DateDebut: "20-02-2024",
    DateFin: "30-06-2024",
    Kolera: true,
  },
  {
    CodeProjet: "PR015",
    LibelleProjet: "Système de gestion documentaire",
    MontantProjet: 50000,
    DateDebut: "15-02-2024",
    DateFin: "15-05-2024",
    Kolera: true,
  },
];

export const utilisateurs = [
  {
    MatriculeUtilisateur: "UT001",
    NomUtilisateur: "El Idrissi",
    PrenomUtilisateur: "Ahmed",
    TelUtilisateur: "0612345678",
    EmailUtilisateur: "ahmed.elidrissi@example.com",
    RoleUtilisateur: "Chef de projet",
  },
  {
    MatriculeUtilisateur: "UT002",
    NomUtilisateur: "Bouchaib",
    PrenomUtilisateur: "Fatima",
    TelUtilisateur: "0623456789",
    EmailUtilisateur: "fatima.bouchaib@example.com",
    RoleUtilisateur: "Directeur",
  },
  {
    MatriculeUtilisateur: "UT003",
    NomUtilisateur: "Mekki",
    PrenomUtilisateur: "Rachid",
    TelUtilisateur: "0634567890",
    EmailUtilisateur: "rachid.mekki@example.com",
    RoleUtilisateur: "Designer UI/UX",
  },
  {
    MatriculeUtilisateur: "UT004",
    NomUtilisateur: "Saidi",
    PrenomUtilisateur: "Yasmine",
    TelUtilisateur: "0645678901",
    EmailUtilisateur: "yasmine.saidi@example.com",
    RoleUtilisateur: "Sécretaire",
  },
  {
    MatriculeUtilisateur: "UT005",
    NomUtilisateur: "Tahiri",
    PrenomUtilisateur: "Khalid",
    TelUtilisateur: "0656789012",
    EmailUtilisateur: "khalid.tahiri@example.com",
    RoleUtilisateur: "Comptable",
  },
  {
    MatriculeUtilisateur: "UT006",
    NomUtilisateur: "Lahlou",
    PrenomUtilisateur: "Soumaya",
    TelUtilisateur: "0667890123",
    EmailUtilisateur: "soumaya.lahlou@example.com",
    RoleUtilisateur: "Consultante",
  },
  {
    MatriculeUtilisateur: "UT007",
    NomUtilisateur: "Alaoui",
    PrenomUtilisateur: "Hicham",
    TelUtilisateur: "0678901234",
    EmailUtilisateur: "hicham.alaoui@example.com",
    RoleUtilisateur: "Architecte logiciel",
  },
  {
    MatriculeUtilisateur: "UT008",
    NomUtilisateur: "Chraibi",
    PrenomUtilisateur: "Meryem",
    TelUtilisateur: "0689012345",
    EmailUtilisateur: "meryem.chraibi@example.com",
    RoleUtilisateur: "Designer UI/UX",
  },
  {
    MatriculeUtilisateur: "UT009",
    NomUtilisateur: "El Amrani",
    PrenomUtilisateur: "Rida",
    TelUtilisateur: "0690123456",
    EmailUtilisateur: "rida.elamrani@example.com",
    RoleUtilisateur: "Responsable DevOps",
  },
  {
    MatriculeUtilisateur: "UT010",
    NomUtilisateur: "Zahraoui",
    PrenomUtilisateur: "Leila",
    TelUtilisateur: "0601234567",
    EmailUtilisateur: "leila.zahraoui@example.com",
    RoleUtilisateur: "Chef de produit",
  },
  {
    MatriculeUtilisateur: "UT011",
    NomUtilisateur: "Fassi",
    PrenomUtilisateur: "Nabil",
    TelUtilisateur: "0613456789",
    EmailUtilisateur: "nabil.fassi@example.com",
    RoleUtilisateur: "Scrum Master",
  },
  {
    MatriculeUtilisateur: "UT012",
    NomUtilisateur: "Jouti",
    PrenomUtilisateur: "Malika",
    TelUtilisateur: "0624567890",
    EmailUtilisateur: "malika.jouti@example.com",
    RoleUtilisateur: "Développeuse mobile",
  },
  {
    MatriculeUtilisateur: "UT013",
    NomUtilisateur: "Rami",
    PrenomUtilisateur: "Younes",
    TelUtilisateur: "0635678901",
    EmailUtilisateur: "younes.rami@example.com",
    RoleUtilisateur: "Ingénieur QA",
  },
  {
    MatriculeUtilisateur: "UT014",
    NomUtilisateur: "Tazi",
    PrenomUtilisateur: "Sara",
    TelUtilisateur: "0646789012",
    EmailUtilisateur: "sara.tazi@example.com",
    RoleUtilisateur: "Analyste de données",
  },
  {
    MatriculeUtilisateur: "UT015",
    NomUtilisateur: "Kettani",
    PrenomUtilisateur: "Omar",
    TelUtilisateur: "0657890123",
    EmailUtilisateur: "omar.kettani@example.com",
    RoleUtilisateur: "Chef d'équipe",
  },
];

export const historiquePR001 = [
  {
    CodePhase: "PH001",
    LibellePhase: "Analyse des besoins",
    DescriptionPhase: "Étude et collecte des besoins auprès des utilisateurs.",
    Date_de_debut: "10-01-2024",
    Date_de_fin: "24-01-2024",
    Equipe: ["Alice", "Bob"],
    Montant: 12000, // 10% du montant total du projet
  },
  {
    CodePhase: "PH002",
    LibellePhase: "Conception technique",
    DescriptionPhase: "Élaboration des spécifications techniques détaillées.",
    Date_de_debut: "25-01-2024",
    Date_de_fin: "08-02-2024",
    Equipe: ["Clara", "David"],
    Montant: 18000, // 15% du montant total du projet
  },
  {
    CodePhase: "PH003",
    LibellePhase: "Développement Backend",
    DescriptionPhase: "Mise en place des API et du backend pour l'ERP.",
    Date_de_debut: "09-02-2024",
    Date_de_fin: "23-02-2024",
    Equipe: ["Eve", "Frank"],
    Montant: 24000, // 20% du montant total du projet
  },
  {
    CodePhase: "PH004",
    LibellePhase: "Développement Frontend",
    DescriptionPhase:
      "Création de l'interface utilisateur et intégration des écrans.",
    Date_de_debut: "24-02-2024",
    Date_de_fin: "08-03-2024",
    Equipe: ["George", "Hannah"],
    Montant: 24000, // 20% du montant total du projet
  },
  {
    CodePhase: "PH005",
    LibellePhase: "Tests unitaires et intégration",
    DescriptionPhase:
      "Tests des modules individuels et intégration dans le système global.",
    Date_de_debut: "09-03-2024",
    Date_de_fin: "23-03-2024",
    Equipe: ["Ivan", "Judy"],
    Montant: 18000, // 15% du montant total du projet
  },
  {
    CodePhase: "PH006",
    LibellePhase: "Déploiement et mise en production",
    DescriptionPhase:
      "Préparation de l'environnement de production et déploiement final.",
    Date_de_debut: "24-03-2024",
    Date_de_fin: "07-04-2024",
    Equipe: ["Kevin", "Laura"],
    Montant: 24000, // 20% du montant total du projet
  },
];

export const documents = [
  {
    code: "DOC001",
    nom: "Spécifications Fonctionnelles",
    description: "Document décrivant les fonctionnalités principales de l'ERP.",
    dossier: "Développement d'un ERP",
    actions: "Télécharger, Modifier, Supprimer",
  },
  {
    code: "DOC002",
    nom: "Architecture Technique",
    description: "Diagrammes et détails de l'architecture technique de l'ERP.",
    dossier: "Développement d'un ERP",
    actions: "Télécharger, Modifier, Supprimer",
  },
  {
    code: "DOC003",
    nom: "Manuel Utilisateur",
    description: "Guide d'utilisation pour les utilisateurs de l'ERP.",
    dossier: "Développement d'un ERP",
    actions: "Télécharger, Modifier, Supprimer",
  },
  {
    code: "DOC004",
    nom: "Plan de Tests",
    description: "Plan détaillant les scénarios de tests pour l'ERP.",
    dossier: "Développement d'un ERP",
    actions: "Télécharger, Modifier, Supprimer",
  },
];