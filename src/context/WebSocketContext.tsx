import React, {createContext, useContext, ReactNode} from 'react';

// Définir les types des fonctions de WebSocket
interface WebSocketContextType {
  initializeWebSocket: () => void;
  closeWebSocket: () => void;
}

// Initialiser le contexte avec un type par défaut
const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined,
);

// Custom hook pour utiliser le contexte WebSocket
export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

// Définir les propriétés pour le WebSocketProvider
interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const initializeWebSocket = () => {
    // Initialisation de la connexion WebSocket
    console.log('WebSocket initialized');
  };

  const closeWebSocket = () => {
    // Fermeture de la connexion WebSocket
    console.log('WebSocket closed');
  };

  // Passer les fonctions ou valeurs nécessaires via le contexte
  const contextValue: WebSocketContextType = {
    initializeWebSocket,
    closeWebSocket,
  };

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
};
