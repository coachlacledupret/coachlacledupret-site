
# 🚀 Guide de Déploiement Vercel - La Clé du Prêt

Ce guide vous accompagne étape par étape pour déployer votre site NextJS sur Vercel.

## 📋 Prérequis

- [x] Compte GitHub/GitLab créé
- [x] Compte Vercel créé (vercel.com)
- [x] Code source prêt à déployer
- [x] Base de données PostgreSQL (recommandé : Supabase ou Neon)
- [x] Configuration SMTP pour les emails

## 🎯 Variables d'Environnement Requises

Avant de déployer, préparez ces informations :

### 1. Base de Données PostgreSQL
```bash
DATABASE_URL="postgresql://username:password@hostname:port/database?schema=public"
```

**Recommandations de providers :**
- **Supabase** (gratuit) : supabase.com
- **Neon** (gratuit) : neon.tech  
- **Railway** : railway.app

### 2. Configuration Email (Gmail recommandé)
```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="votre-email@gmail.com"
SMTP_PASS="mot-de-passe-application-gmail"
```

**Pour Gmail :**
1. Activez l'authentification à 2 facteurs
2. Générez un "Mot de passe d'application" dans les paramètres Google
3. Utilisez ce mot de passe (pas votre mot de passe habituel)

### 3. URL du Site
```bash
NEXT_PUBLIC_BASE_URL="https://votre-site.vercel.app"
```

## 🔧 Étape 1 : Préparer le Repository Git

### Option A : GitHub (Recommandé)

1. **Créer un nouveau repository sur GitHub**
   ```bash
   # Depuis votre dossier de projet
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/lacledupret-website.git
   git push -u origin main
   ```

2. **Ou cloner ce projet si disponible**
   ```bash
   git clone https://github.com/votre-username/lacledupret-website.git
   ```

### Option B : GitLab
Suivez le même processus sur GitLab.

## 🚀 Étape 2 : Déploiement sur Vercel

### 2.1 Connexion à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub/GitLab
3. Cliquez sur **"New Project"**

### 2.2 Import du Projet

1. **Sélectionnez votre repository** `lacledupret-website`
2. **Configuration du framework :**
   - Framework : **Next.js** (détection automatique)
   - Root Directory : **Laisser vide** (racine du repo)
   - Build Command : `cd app && npm run build`
   - Output Directory : `app/.next`
   - Install Command : `cd app && npm install`

### 2.3 Configuration des Variables d'Environnement

Dans l'interface Vercel, section **"Environment Variables"** :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `DATABASE_URL` | `postgresql://...` | URL de votre base PostgreSQL |
| `SMTP_HOST` | `smtp.gmail.com` | Serveur SMTP |
| `SMTP_PORT` | `587` | Port SMTP |
| `SMTP_USER` | `votre-email@gmail.com` | Email d'envoi |
| `SMTP_PASS` | `mot-de-passe-app` | Mot de passe d'application Gmail |
| `NEXT_PUBLIC_BASE_URL` | `https://votre-site.vercel.app` | URL de votre site |

⚠️ **Important :** Ajoutez ces variables AVANT de cliquer sur "Deploy"

### 2.4 Déploiement

1. Cliquez sur **"Deploy"**
2. Attendez la fin du build (2-5 minutes)
3. Votre site sera accessible sur `https://votre-projet.vercel.app`

## 🗄️ Étape 3 : Configuration Base de Données

### 3.1 Avec Supabase (Recommandé - Gratuit)

1. **Créer un projet Supabase :**
   - Allez sur [supabase.com](https://supabase.com)
   - Créez un nouveau projet
   - Notez l'URL de connexion PostgreSQL

2. **Obtenir l'URL de connexion :**
   - Allez dans **Settings > Database**
   - Copiez la **Connection String** (mode URI)
   - Format : `postgresql://postgres:[password]@[host]:[port]/postgres`

3. **Initialiser la base :**
   ```bash
   # En local, dans le dossier app/
   npx prisma db push
   ```

### 3.2 Avec Neon (Alternative gratuite)

1. Créez un compte sur [neon.tech](https://neon.tech)
2. Créez une nouvelle base de données
3. Copiez l'URL de connexion fournie

## 📧 Étape 4 : Configuration Email Gmail

### 4.1 Activer l'Authentification 2FA
1. Allez dans votre compte Google
2. Sécurité > Validation en deux étapes
3. Activez la 2FA

### 4.2 Générer un Mot de Passe d'Application
1. Comptes Google > Sécurité > Validation en deux étapes
2. Mots de passe des applications
3. Sélectionnez "Autre" et nommez "Vercel Website"
4. Copiez le mot de passe généré (16 caractères)

### 4.3 Tester la Configuration
Une fois déployé, testez le formulaire de téléchargement du guide sur votre site.

## 🌐 Étape 5 : Domaine Personnalisé (Optionnel)

### 5.1 Ajouter un Domaine

1. Dans le dashboard Vercel de votre projet
2. **Settings > Domains**
3. Ajoutez votre domaine : `coachlacledupret.fr`

### 5.2 Configuration DNS

Chez votre registraire de domaine, ajoutez ces enregistrements :

**Pour un domaine principal :**
```
Type: A
Name: @
Value: 76.76.19.61
```

**Pour www :**
```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 5.3 Mise à Jour des Variables

Une fois le domaine configuré, mettez à jour :
```bash
NEXT_PUBLIC_BASE_URL="https://coachlacledupret.fr"
```

## ✅ Étape 6 : Tests Post-Déploiement

### 6.1 Tests Essentiels

- [ ] **Page d'accueil** charge correctement
- [ ] **Formulaire de contact** fonctionne
- [ ] **Téléchargement du guide PDF** fonctionne
- [ ] **Envoi d'email** fonctionne (vérifiez vos logs Vercel)
- [ ] **Pages blog** s'affichent correctement
- [ ] **Sitemap** accessible : `votre-site.com/sitemap.xml`
- [ ] **Robots.txt** accessible : `votre-site.com/robots.txt`

### 6.2 Vérification des Logs

1. Dashboard Vercel > votre projet > **Functions**
2. Cliquez sur `/api/lead-magnet` pour voir les logs
3. Testez le formulaire et vérifiez qu'il n'y a pas d'erreurs

### 6.3 Performance et SEO

- **PageSpeed Insights** : testez les performances
- **Google Search Console** : ajoutez votre site
- **Sitemap** : soumettez `/sitemap.xml` à Google

## 🔧 Dépannage Courant

### Problème : Build Failed

**Solution :**
1. Vérifiez les logs de build dans Vercel
2. Assurez-vous que toutes les variables d'environnement sont définies
3. Vérifiez que `DATABASE_URL` est correcte

### Problème : Base de données non accessible

**Solution :**
```bash
# En local, vérifiez la connexion
cd app/
npx prisma db push
```

### Problème : Emails non envoyés

**Solution :**
1. Vérifiez que `SMTP_PASS` utilise le mot de passe d'application (pas votre mot de passe habituel)
2. Consultez les logs Vercel pour les erreurs SMTP
3. Testez avec un autre provider email si nécessaire

### Problème : Images non affichées

**Solution :**
1. Vérifiez que les images sont dans `/public/`
2. Utilisez des chemins relatifs : `/images/photo.jpg`

## 📞 Support

En cas de problème :

1. **Logs Vercel** : Consultez toujours les logs en premier
2. **Documentation Vercel** : vercel.com/docs
3. **Prisma Database** : prisma.io/docs
4. **NextJS** : nextjs.org/docs

## 🎉 Félicitations !

Votre site est maintenant déployé sur Vercel ! 

**URL de production :** `https://votre-projet.vercel.app`

N'oubliez pas de :
- Mettre à jour `NEXT_PUBLIC_BASE_URL` avec votre vraie URL
- Configurer votre domaine personnalisé
- Soumettre votre sitemap à Google Search Console
- Tester toutes les fonctionnalités en production

---

**Créé le :** $(date)  
**Projet :** La Clé du Prêt - Site Web NextJS  
**Version :** 1.0
