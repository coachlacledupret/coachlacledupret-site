
# 🔐 Guide d'Authentification GitHub

## 📋 Prérequis
- Avoir un compte GitHub actif
- Accès au repository `coachlacledupret-site`
- Terminal/ligne de commande disponible

## 🎯 Méthode Recommandée: Personal Access Token (PAT)

### Étape 1: Créer un Personal Access Token
1. **Connectez-vous à GitHub** : https://github.com
2. **Accédez aux paramètres** : Cliquez sur votre avatar → Settings
3. **Allez dans Developer settings** : Scroll vers le bas → Developer settings
4. **Créez un token** : Personal access tokens → Tokens (classic) → Generate new token

### Étape 2: Configuration du Token
**Permissions requises :**
- ✅ `repo` (accès complet aux repositories)
- ✅ `workflow` (si vous utilisez GitHub Actions)

**Paramètres recommandés :**
- **Note/Description** : "La Clé du Prêt - Deploy Token"
- **Expiration** : 90 jours (ou selon vos besoins)
- **Scopes** : Cochez uniquement `repo`

### Étape 3: Sauvegarder le Token
⚠️ **IMPORTANT** : Le token ne s'affiche qu'une seule fois !
- Copiez le token immédiatement
- Sauvegardez-le dans un endroit sûr (gestionnaire de mots de passe)

## 🚀 Utilisation lors du Push

### Commande Git avec authentification
```bash
# Quand Git demande les credentials :
Username: coachlacledupret
Password: [VOTRE_TOKEN_GITHUB]
```

### Script automatisé
```bash
# Exécutez le script automatisé
cd /home/ubuntu/lacledupret-website
bash scripts/github-push.sh
```

## 🔧 Méthode Alternative: SSH Key

### Étape 1: Générer une clé SSH
```bash
# Générer une nouvelle clé SSH
ssh-keygen -t ed25519 -C "coach.lacledupret@gmail.com"

# Ajouter la clé à l'agent SSH
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Étape 2: Ajouter la clé publique à GitHub
1. **Copiez la clé publique** :
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
2. **Allez sur GitHub** : Settings → SSH and GPG keys → New SSH key
3. **Ajoutez la clé** : Collez le contenu et donnez un nom

### Étape 3: Changer l'URL du remote
```bash
cd /home/ubuntu/lacledupret-website
git remote set-url origin git@github.com:coachlacledupret/coachlacledupret-site.git
```

## 🔍 Vérification de la Configuration

### Tester la connexion
```bash
# Test avec HTTPS
git ls-remote origin

# Test avec SSH
ssh -T git@github.com
```

### Vérifier les remotes
```bash
git remote -v
```

## ❌ Résolution des Problèmes Courants

### Erreur 403 (Forbidden)
- **Cause** : Token incorrect ou permissions insuffisantes
- **Solution** : Vérifiez le token et les permissions `repo`

### Erreur 404 (Not Found)
- **Cause** : URL du repository incorrecte ou pas d'accès
- **Solution** : Vérifiez l'URL et vos permissions sur le repository

### Erreur de connectivité
- **Cause** : Problème réseau ou firewall
- **Solution** : Vérifiez votre connexion internet

### Push rejeté (non-fast-forward)
- **Cause** : Repository distant contient des commits non présents localement
- **Solution** : 
  ```bash
  git pull origin main --rebase
  # ou force push si nécessaire
  git push origin main --force
  ```

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifiez ce guide étape par étape
2. Consultez la documentation GitHub : https://docs.github.com/en/authentication
3. Contactez votre développeur ou administrateur système

---
*Guide créé pour La Clé du Prêt - Coaching Immobilier*
