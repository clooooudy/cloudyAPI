const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const apiServer = require('./api/index');

console.log('🚀 Démarrage de l\'API serveur...');
console.log('   - API serveur sur le port ' + (process.env.PORT || 3000));

// Gestion des erreurs non capturées
process.on('uncaughtException', (error) => {
  console.error('❌ UNCAUGHT EXCEPTION:', error);
  console.error(error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ UNHANDLED REJECTION at:', promise);
  console.error('Reason:', reason);
});
