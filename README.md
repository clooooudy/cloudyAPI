# Cloudy API

API Backend pour le bot de modération Discord.

## 🚀 Installation

```bash
npm install
```

## 🔧 Configuration

Copier `.env.example` vers `.env` et configurer les variables.

## 📦 Initialisation de la base de données

```bash
npm run seed
```

## ▶️ Démarrage

```bash
# Production
npm start

# Développement
npm run dev
```

## 📝 Variables d'environnement

- `MONGODB_URI` : Connection string MongoDB
- `PORT` : Port de l'API (défaut: 3000)
- `JWT_SECRET` : Secret pour les tokens JWT
- `DISCORD_CLIENT_ID` : ID de l'application Discord
- `DISCORD_CLIENT_SECRET` : Secret de l'application Discord
- `CORS_ORIGIN` : URL du panel frontend
- `BOT_API_KEY` : Clé API pour le bot
- `MASTER_DISCORD_ID` : ID Discord du super-admin

## 🔗 Routes disponibles

- `POST /auth/login` : Connexion OAuth Discord
- `GET /guilds` : Liste des serveurs
- `GET /guilds/:id` : Détails d'un serveur
- `POST /guilds/:id/sanctions` : Créer une sanction
- Et plus...

## 📄 License

MIT
