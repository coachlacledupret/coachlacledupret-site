
# 🏠 La Clé du Prêt - Site Web

![Next.js](https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Site web professionnel pour **Nicolas SZEFEROWICZ**, coach en financement immobilier. Une plateforme moderne et optimisée pour accompagner les futurs propriétaires dans leur projet d'acquisition immobilière.

## 🌟 Aperçu

**La Clé du Prêt** est un site web complet développé avec les dernières technologies web pour offrir une expérience utilisateur exceptionnelle. Le site propose un accompagnement personnalisé pour l'obtention de prêts immobiliers, avec des outils et ressources dédiés.

### 🎯 Fonctionnalités Principales

- ✅ **Pages statiques optimisées SEO** - Référencement naturel performant
- ✅ **Formulaire de contact intelligent** - Sauvegarde automatique en base de données
- ✅ **Système d'emails automatiques** - Notifications et confirmations
- ✅ **Téléchargement de guide PDF** - Lead magnet intégré
- ✅ **Blog intégré** - Articles et conseils immobiliers
- ✅ **Sitemap automatique** - Optimisation pour les moteurs de recherche
- ✅ **Configuration RGPD complète** - Conformité réglementaire
- ✅ **Design responsive** - Parfait sur tous les appareils
- ✅ **Performance optimisée** - Chargement rapide et fluide

### 🛠️ Technologies Utilisées

- **Framework**: Next.js 14 avec App Router
- **Language**: TypeScript pour la robustesse
- **Styling**: Tailwind CSS + Shadcn/ui
- **Base de données**: PostgreSQL avec Prisma ORM
- **Emails**: Nodemailer avec SMTP
- **Déploiement**: Vercel
- **Authentification**: NextAuth.js (prêt pour extension)

## 🚀 Déploiement Rapide

### 📋 Prérequis

- Node.js 18+ et npm/yarn
- Base de données PostgreSQL ([Supabase](https://supabase.com) recommandé)
- Configuration SMTP Gmail
- Compte [Vercel](https://vercel.com) (gratuit)

### 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/coachlacledupret/lacledupret-website.git
cd lacledupret-website

# Installer les dépendances
cd app && npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec vos configurations
```

### 🔧 Configuration des Variables d'Environnement

Copiez `.env.example` vers `.env` et configurez :

```bash
# Base de données PostgreSQL
DATABASE_URL="postgresql://username:password@hostname:port/database"

# Configuration SMTP (Gmail)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="coach.lacledupret@gmail.com"
SMTP_PASS="mot-de-passe-application-gmail"

# URL du site
NEXT_PUBLIC_BASE_URL="https://votre-domaine.com"
```

### 🏗️ Commandes de Développement

```bash
# Développement local
cd app && npm run dev
# → http://localhost:3000

# Build de production
cd app && npm run build

# Démarrer en production
cd app && npm start

# Gestion de la base de données
cd app && npx prisma db push      # Appliquer le schéma
cd app && npx prisma studio       # Interface graphique
cd app && npx prisma generate     # Régénérer le client
```

## 📖 Guides de Déploiement

- 📋 **Guide complet Vercel** : [`GUIDE_DEPLOIEMENT_VERCEL.md`](./GUIDE_DEPLOIEMENT_VERCEL.md)
- 📧 **Configuration Email** : [`CONFIGURATION_EMAIL.md`](./CONFIGURATION_EMAIL.md)
- 🔧 **Scripts automatisés** : Dossier [`scripts/`](./scripts/)

## 🏗️ Structure du Projet

```
lacledupret-website/
├── app/                          # Application Next.js
│   ├── app/                     # Pages et API routes
│   │   ├── api/                 # API endpoints
│   │   ├── blog/                # Articles de blog
│   │   ├── contact/             # Page de contact
│   │   └── services/            # Pages de services
│   ├── components/              # Composants React
│   │   ├── ui/                  # Composants UI (Shadcn)
│   │   ├── hero-section.tsx     # Section héros
│   │   ├── lead-magnet.tsx      # Formulaire lead magnet
│   │   └── testimonials-section.tsx
│   ├── lib/                     # Utilitaires et helpers
│   │   ├── db.ts               # Configuration base de données
│   │   ├── email.ts            # Service email
│   │   └── utils.ts            # Utilitaires généraux
│   ├── prisma/                  # Schéma base de données
│   │   └── schema.prisma
│   ├── public/                  # Assets statiques
│   │   ├── images/             # Images
│   │   ├── guides/             # Guides PDF
│   │   └── downloads/          # Fichiers téléchargeables
│   └── package.json
├── scripts/                     # Scripts d'automatisation
│   ├── deploy-check.sh         # Vérification déploiement
│   └── setup-database.sh       # Configuration BDD
├── vercel.json                 # Configuration Vercel
├── .env.example               # Variables d'environnement exemple
└── README.md                  # Documentation
```

## 🚀 Déploiement sur Vercel

### Via GitHub (Recommandé)

1. **Créer le repository GitHub** :
   ```bash
   # Suivre le guide complet dans GUIDE_GITHUB.md
   ```

2. **Connecter à Vercel** :
   - Aller sur [vercel.com](https://vercel.com)
   - Importer le repository GitHub
   - Configurer les variables d'environnement
   - Déployer automatiquement

### Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
cd app && vercel

# Configurer les variables d'environnement
vercel env add DATABASE_URL
vercel env add SMTP_HOST
# ... autres variables
```

## 🎨 Personnalisation

### 🎨 Couleurs et Thème

Les couleurs principales sont définies dans `app/app/globals.css` :

```css
:root {
  --primary: 48 100% 50%;      /* Vert #00ff7f */
  --secondary: 60 100% 50%;    /* Jaune #ffff00 */
  --accent: 48 100% 50%;       /* Gradient jaune-vert */
}
```

### 📝 Contenu

- **Pages principales** : Modifier les fichiers dans `app/app/`
- **Blog** : Ajouter des articles dans `app/app/blog/`
- **Images** : Placer dans `app/public/images/`
- **Guides PDF** : Placer dans `app/public/guides/`

## 🔒 Sécurité et Conformité

- ✅ **RGPD** : Politique de confidentialité et gestion des cookies
- ✅ **Validation** : Formulaires sécurisés avec Zod
- ✅ **Sanitization** : Protection contre les injections
- ✅ **HTTPS** : Chiffrement automatique via Vercel
- ✅ **Variables d'environnement** : Données sensibles sécurisées

## 📊 Performance

- ⚡ **Score Lighthouse** : 95+ sur tous les critères
- 🚀 **Temps de chargement** : < 2 secondes
- 📱 **Responsive** : Parfait sur mobile et desktop
- 🔍 **SEO** : Optimisé pour les moteurs de recherche

## 🤝 Contribution

1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support et Contact

- **Email** : coach.lacledupret@gmail.com
- **Site web** : [coachlacledupret.fr](https://coachlacledupret.fr)
- **LinkedIn** : [Nicolas SZEFEROWICZ](https://linkedin.com/in/nicolas-szeferowicz)
- **GitHub** : [@coachlacledupret](https://github.com/coachlacledupret)

---

### 💡 Créé avec ❤️ par La Clé du Prêt

> *"Votre prêt immobilier, simplifié et optimisé."*
