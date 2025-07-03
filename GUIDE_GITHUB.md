
# 🚀 Guide Complet GitHub - La Clé du Prêt

Ce guide vous accompagne étape par étape pour créer votre repository GitHub et déployer votre site web "La Clé du Prêt".

## 📋 Prérequis

- ✅ **Compte GitHub** : Nom d'utilisateur `coachlacledupret`
- ✅ **Repository Git local** : Déjà initialisé et prêt
- ✅ **Première commit** : Effectué avec succès
- ✅ **Fichiers optimisés** : README.md, .gitignore, LICENSE configurés

## 🌟 Étape 1 : Créer le Repository sur GitHub

### 1.1 Connexion à GitHub
1. Allez sur [github.com](https://github.com)
2. Connectez-vous avec votre compte `coachlacledupret`

### 1.2 Créer un nouveau repository
1. Cliquez sur le bouton **"+"** en haut à droite
2. Sélectionnez **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `lacledupret-website`
   - **Description** : `Site web professionnel pour La Clé du Prêt - Coach en financement immobilier`
   - **Visibilité** : 
     - ✅ **Public** (recommandé pour vitrine professionnelle)
     - ⚪ Private (si vous préférez le garder privé)
   - **⚠️ IMPORTANT** : 
     - ❌ **NE PAS** cocher "Add a README file"
     - ❌ **NE PAS** cocher "Add .gitignore"
     - ❌ **NE PAS** cocher "Choose a license"
     - (Ces fichiers existent déjà dans votre projet local)

4. Cliquez sur **"Create repository"**

### 1.3 Récupérer l'URL du repository
Après création, GitHub vous montrera l'URL de votre repository :
```
https://github.com/coachlacledupret/lacledupret-website.git
```

## 🔗 Étape 2 : Connecter le Repository Local à GitHub

### 2.1 Ouvrir le terminal
Ouvrez votre terminal et naviguez vers le dossier du projet :

```bash
cd /home/ubuntu/lacledupret-website
```

### 2.2 Ajouter l'origin GitHub
```bash
git remote add origin https://github.com/coachlacledupret/lacledupret-website.git
```

### 2.3 Vérifier la connexion
```bash
git remote -v
```
Vous devriez voir :
```
origin  https://github.com/coachlacledupret/lacledupret-website.git (fetch)
origin  https://github.com/coachlacledupret/lacledupret-website.git (push)
```

### 2.4 Pousser le code vers GitHub
```bash
git push -u origin main
```

**Note** : GitHub vous demandera de vous authentifier :
- **Nom d'utilisateur** : `coachlacledupret`
- **Mot de passe** : Utilisez un **Personal Access Token** (voir section suivante)

## 🔐 Étape 3 : Configuration de l'Authentification GitHub

### 3.1 Créer un Personal Access Token (PAT)

1. **Aller dans les paramètres GitHub** :
   - Cliquez sur votre avatar (en haut à droite)
   - Sélectionnez **"Settings"**

2. **Accéder aux tokens** :
   - Dans le menu de gauche, cliquez sur **"Developer settings"** (tout en bas)
   - Cliquez sur **"Personal access tokens"**
   - Sélectionnez **"Tokens (classic)"**

3. **Générer un nouveau token** :
   - Cliquez sur **"Generate new token"** > **"Generate new token (classic)"**
   - **Note** : `La Clé du Prêt - Repository Access`
   - **Expiration** : `90 days` (ou selon votre préférence)
   - **Scopes à sélectionner** :
     - ✅ `repo` (accès complet aux repositories)
     - ✅ `workflow` (pour GitHub Actions)

4. **Copier le token** :
   - Cliquez sur **"Generate token"**
   - ⚠️ **IMPORTANT** : Copiez immédiatement le token et sauvegardez-le en sécurité
   - Une fois la page fermée, vous ne pourrez plus le voir

### 3.2 Utiliser le Token pour l'authentification

Quand Git vous demande vos identifiants :
- **Username** : `coachlacledupret`
- **Password** : Collez votre **Personal Access Token** (pas votre mot de passe GitHub)

## 📤 Étape 4 : Pousser le Code Complet

### 4.1 Script automatique
Utilisez le script préparé pour vous :

```bash
cd /home/ubuntu/lacledupret-website
bash scripts/github-setup.sh
```

### 4.2 Commandes manuelles
Si vous préférez faire manuellement :

```bash
# 1. Vérifier le statut
git status

# 2. Ajouter l'origin (si pas déjà fait)
git remote add origin https://github.com/coachlacledupret/lacledupret-website.git

# 3. Pousser vers GitHub
git push -u origin main

# 4. Vérifier que tout est en ligne
git log --oneline
```

## ✅ Étape 5 : Vérification

### 5.1 Vérifier sur GitHub
1. Retournez sur [github.com/coachlacledupret/lacledupret-website](https://github.com/coachlacledupret/lacledupret-website)
2. Vous devriez voir :
   - ✅ Tous vos fichiers et dossiers
   - ✅ Le README.md affiché avec les badges
   - ✅ 122 fichiers commités
   - ✅ Le commit initial visible

### 5.2 Vérifier les éléments clés
- **README.md** : Affiché avec les badges et description complète
- **LICENSE** : Fichier MIT présent
- **Structure du projet** : Tous les dossiers app/, scripts/, etc.
- **Fichiers cachés** : .gitignore, .env.example

## 🚀 Étape 6 : Déploiement Vercel via GitHub

### 6.1 Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign up"** ou **"Login"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### 6.2 Importer le repository
1. Sur le dashboard Vercel, cliquez **"New Project"**
2. Dans la liste, trouvez **`lacledupret-website`**
3. Cliquez sur **"Import"**

### 6.3 Configuration du projet
1. **Framework Preset** : Next.js (détecté automatiquement)
2. **Root Directory** : `app/` ⚠️ **IMPORTANT**
3. **Build Command** : `npm run build` (par défaut)
4. **Output Directory** : `.next` (par défaut)
5. **Install Command** : `npm install` (par défaut)

### 6.4 Variables d'environnement
Ajoutez les variables suivantes dans Vercel :

```bash
DATABASE_URL="postgresql://username:password@hostname:port/database"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="coach.lacledupret@gmail.com"
SMTP_PASS="votre-mot-de-passe-application-gmail"
NEXT_PUBLIC_BASE_URL="https://votre-domain.vercel.app"
```

**Pour obtenir ces valeurs** :
- **DATABASE_URL** : Suivez le `GUIDE_DEPLOIEMENT_VERCEL.md`
- **SMTP_PASS** : Suivez le `CONFIGURATION_EMAIL.md`

### 6.5 Déployer
1. Cliquez sur **"Deploy"**
2. Attendez la fin du build (2-3 minutes)
3. Votre site sera accessible sur : `https://lacledupret-website.vercel.app`

## 🔄 Workflow de Développement

### Faire des modifications
```bash
# 1. Modifier les fichiers
# 2. Ajouter les changements
git add .

# 3. Commit avec message descriptif
git commit -m "✨ Ajout de nouvelle fonctionnalité"

# 4. Pousser vers GitHub
git push origin main
```

### Déploiement automatique
- ✅ Chaque push vers `main` déclenche un redéploiement automatique sur Vercel
- ✅ Vercel build et déploie automatiquement
- ✅ Votre site est mis à jour en quelques minutes

## 🆘 Résolution de Problèmes

### Problème : "Authentication failed"
**Solution** :
- Vérifiez que vous utilisez votre **Personal Access Token** comme mot de passe
- Pas votre mot de passe GitHub habituel

### Problème : "Remote origin already exists"
**Solution** :
```bash
git remote remove origin
git remote add origin https://github.com/coachlacledupret/lacledupret-website.git
```

### Problème : "Permission denied"
**Solution** :
- Vérifiez que le token a les permissions `repo`
- Générez un nouveau token si nécessaire

### Problème : "Build failed" sur Vercel
**Solution** :
- Vérifiez que le **Root Directory** est bien `app/`
- Vérifiez que toutes les variables d'environnement sont configurées

## 📞 Support

Si vous rencontrez des difficultés :

1. **Documentation** : Consultez les guides dans le projet
2. **GitHub Help** : [docs.github.com](https://docs.github.com)
3. **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
4. **Contact** : coach.lacledupret@gmail.com

## 🎉 Félicitations !

Une fois toutes ces étapes terminées, vous aurez :

- ✅ **Repository GitHub** : Code source versionné et sauvegardé
- ✅ **Site en ligne** : Accessible publiquement via Vercel
- ✅ **Déploiement automatique** : Chaque modification = mise à jour automatique
- ✅ **Backup complet** : Votre travail est sécurisé sur GitHub
- ✅ **Portfolio professionnel** : Votre site vitrine est opérationnel

---

### 🌐 Liens Utiles

- **Repository GitHub** : `https://github.com/coachlacledupret/lacledupret-website`
- **Site en ligne** : `https://lacledupret-website.vercel.app`
- **Dashboard Vercel** : `https://vercel.com/dashboard`
- **Documentation complète** : Voir `GUIDE_DEPLOIEMENT_VERCEL.md`

---

> **💡 Conseil Pro** : Ajoutez le repository en favoris sur GitHub et bookmarkez votre dashboard Vercel pour un accès rapide !
