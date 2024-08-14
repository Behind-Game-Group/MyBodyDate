import useWebSocket, {ReadyState} from 'react-native-use-websocket';

// Définition du type pour l'URL du WebSocket
const socketUrl: string = 'wss://10.0.2.2:9088/websocket';

// Utilisation du hook useWebSocket
const {
  // sendMessage,
  lastMessage,
  readyState,
  getWebSocket,
} = useWebSocket(socketUrl);

// Gestion des événements WebSocket
if (readyState === ReadyState.OPEN) {
  console.log('Connexion WebSocket établie avec succès');
}

if (lastMessage !== null) {
  console.log('Message reçu du serveur :', lastMessage.data);
}

// Exportation de la connexion WebSocket (si nécessaire)
const websocketConnection = getWebSocket();
export default websocketConnection;
