
// // Chat service to integrate with the external chat API
// import { getAccessToken } from './authService';

// const API_BASE_URL = 'https://chatbot-service-403893624463.us-central1.run.app';

// export interface ChatMessage {
//   sender: 'user' | 'assistant';
//   message: string;
//   timestamp: string;
// }

// export interface ChatResponse {
//   chatId: string;
//   response: {
//     raw: string;
//     html: string;
//   };
// }

// /**
//  * Send a message to the chat API
//  */
// export const sendChatMessage = async (
//   message: string, 
//   classId: string,
//   chatId?: string
// ): Promise<ChatResponse> => {
//   try {
//     // Get the authentication token
//     const token = await getAccessToken();
    
//     const response = await fetch(`${API_BASE_URL}/send`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add authorization header if token is available
//         ...(token && { 'Authorization': `Bearer ${token}` })
//       },
//       body: JSON.stringify({
//         chatId,
//         classId,
//         message
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to send message');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error sending chat message:', error);
    
//     // Fall back to mock response during development
//     return mockSendChatMessage(message, classId, chatId);
//   }
// };

// /**
//  * Get chat history from the API
//  */
// export const getChatHistory = async (
//   chatId: string, 
//   classId: string, 
//   limit = 10
// ): Promise<ChatMessage[]> => {
//   try {
//     // Get the authentication token
//     const token = await getAccessToken();
    
//     const response = await fetch(
//       `${API_BASE_URL}/history?chatId=${chatId}&classId=${classId}&limit=${limit}`, 
//       {
//         method: 'GET',
//         headers: {
//           // Add authorization header if token is available
//           ...(token && { 'Authorization': `Bearer ${token}` })
//         }
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to fetch chat history');
//     }

//     const data = await response.json();
//     return data.messages || [];
//   } catch (error) {
//     console.error('Error fetching chat history:', error);
    
//     // Fall back to mock data during development
//     return mockChatHistory;
//   }
// };

// /**
//  * Mock data for development when API is not available
//  */
// const mockSendChatMessage = (
//   message: string, 
//   classId: string,
//   chatId?: string
// ): ChatResponse => {
//   return {
//     chatId: chatId || `dev-chat-${Date.now()}`,
//     response: {
//       raw: `This is a development mock response to: "${message}" for class ${classId}`,
//       html: `<p>This is a development mock response to: "${message}" for class ${classId}</p>`
//     }
//   };
// };

// const mockChatHistory: ChatMessage[] = [
//   {
//     sender: 'assistant',
//     message: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?',
//     timestamp: new Date().toISOString()
//   }
// ];

// export const setupChatStream = (
//   chatId: string,
//   classId: string,
//   onMessage: (message: string) => void,
//   onError: (error: Event) => void
// ): () => void => {
//   try {
//     // Get the authentication token - using a self-executing async function
//     (async () => {
//       const token = await getAccessToken();
//       let url = `${API_BASE_URL}/stream?chatId=${chatId}&classId=${classId}`;
      
//       // Add token as query parameter if available (more reliable for SSE than headers)
//       if (token) {
//         url += `&token=${encodeURIComponent(token)}`;
//       }
      
//       const eventSource = new EventSource(url);
      
//       eventSource.onmessage = (event) => {
//         const data = JSON.parse(event.data);
//         if (data && data.message) {
//           onMessage(data.message);
//         }
//       };
      
//       eventSource.onerror = onError;
      
//       // Return cleanup function
//       window.addEventListener('beforeunload', () => {
//         eventSource.close();
//       });
//     })();
    
//     // Return dummy cleanup function
//     return () => {};
//   } catch (error) {
//     console.error('Error setting up SSE stream:', error);
//     // Return dummy cleanup function if setup fails
//     return () => {};
//   }
// };

// Chat service to integrate with the external chat API
import { getAccessToken } from './authService';

const API_BASE_URL = 'https://chatbot-service-403893624463.us-central1.run.app';

export interface ChatMessage {
  sender: 'user' | 'assistant';
  message: string;
  timestamp: string;
}

export interface ChatResponse {
  chatId: string;
  response: {
    raw: string;
    html: string;
  };
}

/**
 * Send a message to the chat API
 */
export const sendChatMessage = async (
  message: string, 
  classId: string,
  chatId?: string
): Promise<ChatResponse> => {
  try {
    // Get the authentication token
    const token = await getAccessToken();
    
    const response = await fetch(`${API_BASE_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if token is available
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify({
        chatId,
        classId,
        message
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending chat message:', error);
    
    // Fall back to mock response during development
    return mockSendChatMessage(message, classId, chatId);
  }
};

/**
 * Get chat history from the API
 */
export const getChatHistory = async (
  chatId: string, 
  classId: string, 
  limit = 10
): Promise<ChatMessage[]> => {
  try {
    // Get the authentication token
    const token = await getAccessToken();
    
    const response = await fetch(
      `${API_BASE_URL}/history?chatId=${chatId}&classId=${classId}&limit=${limit}`, 
      {
        method: 'GET',
        headers: {
          // Add authorization header if token is available
          ...(token && { 'Authorization': `Bearer ${token}` })
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch chat history');
    }

    const data = await response.json();
    return data.messages || [];
  } catch (error) {
    console.error('Error fetching chat history:', error);
    
    // Fall back to mock data during development
    return mockChatHistory;
  }
};

/**
 * Mock data for development when API is not available
 */
const mockSendChatMessage = (
  message: string, 
  classId: string,
  chatId?: string
): ChatResponse => {
  return {
    chatId: chatId || `dev-chat-${Date.now()}`,
    response: {
      raw: `This is a development mock response to: "${message}" for class ${classId}`,
      html: `<p>This is a development mock response to: "${message}" for class ${classId}</p>`
    }
  };
};

const mockChatHistory: ChatMessage[] = [
  {
    sender: 'assistant',
    message: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?',
    timestamp: new Date().toISOString()
  }
];

export const setupChatStream = (
  chatId: string,
  classId: string,
  onMessage: (message: string) => void,
  onError: (error: Event) => void
): () => void => {
  let eventSource: EventSource | null = null;
  
  try {
    // Get the authentication token - using a self-executing async function
    (async () => {
      const token = await getAccessToken();
      
      // If we couldn't get a token, don't try to set up the stream
      if (!token) {
        console.warn('Could not establish stream - no auth token available');
        onError(new Event('auth-failed'));
        return;
      }
      
      let url = `${API_BASE_URL}/stream?chatId=${chatId}&classId=${classId}`;
      
      // Add token as query parameter if available (more reliable for SSE than headers)
      url += `&token=${encodeURIComponent(token)}`;
      
      console.log('Setting up SSE stream...');
      eventSource = new EventSource(url);
      
      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data && data.message) {
            onMessage(data.message);
          }
        } catch (error) {
          console.error('Error parsing SSE message:', error);
        }
      };
      
      eventSource.onerror = (error) => {
        console.error('SSE stream error:', error);
        // Only propagate error if the stream is still active
        if (eventSource && eventSource.readyState !== EventSource.CLOSED) {
          onError(error);
          
          // Auto-close the stream on error to prevent browsers from auto-reconnecting indefinitely
          if (eventSource) {
            eventSource.close();
            eventSource = null;
          }
        }
      };
      
      // Return cleanup function
      window.addEventListener('beforeunload', () => {
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }
      });
    })();
    
    // Return cleanup function
    return () => {
      if (eventSource) {
        console.log('Cleaning up SSE stream...');
        eventSource.close();
        eventSource = null;
      }
    };
  } catch (error) {
    console.error('Error setting up SSE stream:', error);
    // Return dummy cleanup function if setup fails
    return () => {};
  }
};
