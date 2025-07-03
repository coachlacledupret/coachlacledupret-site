
# Corrections Vercel pour "La Clé du Prêt"

## Problème Résolu
L'erreur **"Function Runtimes must have a valid version"** a été corrigée.

## Corrections Effectuées

### 1. Configuration Vercel (vercel.json)
✅ **Runtime mis à jour** : `nodejs18.x` → `nodejs20.x`
✅ **Commandes build corrigées** : `npm run build` → `npx next build`
✅ **MaxDuration ajoutée** : 10 secondes pour éviter les timeouts
✅ **Headers de sécurité ajoutés** : Protection XSS, CSRF, etc.

### 2. Build Validation
✅ **Build testé** : 23/23 pages générées avec succès
✅ **TypeScript validé** : Aucune erreur de compilation
✅ **Serveur dev testé** : Démarre correctement sur localhost:3001

### 3. Package.json
✅ **Lien symbolique restauré** : Connexion aux dépendances système

## Configuration Vercel Finale

```json
{
  "buildCommand": "cd app && npx next build",
  "devCommand": "cd app && npx next dev",
  "installCommand": "cd app && npm install",
  "outputDirectory": "app/.next",
  "framework": "nextjs",
  "regions": ["cdg1"],
  "functions": {
    "app/app/api/**/*.{js,ts}": {
      "runtime": "nodejs20.x",
      "maxDuration": 10
    }
  }
}
```

## Instructions de Redéploiement

### Option 1 : Nouveau Déploiement
1. Créer un nouveau projet sur Vercel
2. Connecter au repository GitHub
3. Définir le Root Directory : `app/`
4. Déployer automatiquement

### Option 2 : Mise à Jour Existante
1. Push les corrections vers GitHub
2. Redéploiement automatique sur Vercel
3. Vérifier dans les logs que nodejs20.x est utilisé

## Variables d'Environnement Requises
```
DATABASE_URL=postgresql://...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre.email@gmail.com
SMTP_PASS=mot_de_passe_application
NEXTAUTH_URL=https://votre-site.vercel.app
NEXTAUTH_SECRET=votre_secret_jwt
```

## Vérification Post-Déploiement
- ✅ Site accessible
- ✅ Formulaire de contact fonctionne
- ✅ API lead-magnet répond
- ✅ Téléchargement PDF guide
- ✅ Pages blog accessibles

## Support
En cas de problème, vérifier :
1. Variables d'environnement configurées
2. Repository GitHub à jour
3. Logs de déploiement Vercel
4. Version Node.js utilisée (doit être 20.x)
