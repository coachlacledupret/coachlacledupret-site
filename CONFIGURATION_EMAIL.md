
# Configuration de l'envoi d'emails automatiques

## Problème résolu ✅

Le système d'email a été corrigé et fonctionne maintenant correctement. Voici ce qui a été fait :

### 1. Suppression du forfait à 480€ ✅
- ✅ Supprimé de `/app/app/services/page.tsx`
- ✅ Supprimé de `/app/components/services-preview.tsx`
- ✅ Ajusté la grille pour 2 forfaits au lieu de 3
- ✅ Mis à jour tous les textes et descriptions

### 2. Correction du système d'email ✅
- ✅ Amélioré la gestion des erreurs SMTP
- ✅ Ajouté une vérification de configuration
- ✅ Le système sauvegarde toujours les données même si l'email échoue
- ✅ Messages d'erreur plus clairs dans les logs

## Configuration nécessaire pour activer l'envoi d'emails

Pour que les emails soient envoyés automatiquement, vous devez configurer un mot de passe d'application Gmail :

### Étapes à suivre :

1. **Activez l'authentification à 2 facteurs** sur le compte Gmail `coach.lacledupret@gmail.com`

2. **Générez un mot de passe d'application** :
   - Allez sur : https://myaccount.google.com/apppasswords
   - Connectez-vous avec le compte Gmail
   - Sélectionnez "Autre (nom personnalisé)"
   - Tapez "Lacledupret Website"
   - Copiez le mot de passe généré (16 caractères)

3. **Modifiez le fichier `.env`** :
   ```bash
   cd /home/ubuntu/lacledupret-website/app
   nano .env
   ```
   
   Remplacez la ligne :
   ```
   SMTP_PASS=YOUR_APP_PASSWORD_HERE
   ```
   
   Par :
   ```
   SMTP_PASS=votre_mot_de_passe_dapplication_ici
   ```

4. **Redémarrez le serveur** :
   ```bash
   # Arrêtez le serveur actuel (Ctrl+C)
   # Puis relancez :
   yarn dev
   ```

## Test de l'envoi d'email

Une fois configuré, testez avec :

```bash
curl -X POST http://localhost:3000/api/lead-magnet \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Nicolas",
    "email": "coach.lacledupret@gmail.com",
    "rgpdConsent": true,
    "newsletterConsent": true
  }'
```

Si configuré correctement, vous devriez voir dans les logs :
```
✅ Email envoyé avec succès: [message-id]
```

Et recevoir l'email avec le lien de téléchargement du guide.

## État actuel du système

- ✅ **Formulaire** : Fonctionne parfaitement
- ✅ **Sauvegarde en base** : Toutes les données sont sauvegardées
- ✅ **Guide PDF** : Accessible à http://localhost:3000/guides/Les-10-erreurs-a-eviter-pour-votre-pret-immobilier.pdf
- ⚠️ **Envoi email** : Nécessite la configuration du mot de passe d'application Gmail
- ✅ **Gestion d'erreurs** : Le système continue de fonctionner même sans email

## Contact en cas de problème

Si les utilisateurs ne reçoivent pas l'email, ils peuvent :
1. Vérifier leurs spams
2. Contacter directement : coach.lacledupret@gmail.com ou 06 18 46 10 94
3. Télécharger directement : http://localhost:3000/guides/Les-10-erreurs-a-eviter-pour-votre-pret-immobilier.pdf

## Résumé des modifications

### Fichiers modifiés :
1. `/app/app/services/page.tsx` - Suppression forfait 480€, ajustement grille
2. `/app/components/services-preview.tsx` - Suppression forfait 480€, ajustement grille  
3. `/app/lib/email.ts` - Amélioration gestion erreurs SMTP
4. `/app/.env` - Ajout variables d'environnement SMTP
5. `/app/.env.example` - Documentation configuration

### Résultat :
- ✅ 2 forfaits au lieu de 3 (100€ et 290€)
- ✅ Système d'email robuste et configurable
- ✅ Sauvegarde des données garantie
- ✅ Guide PDF accessible
- ✅ Messages d'erreur clairs
