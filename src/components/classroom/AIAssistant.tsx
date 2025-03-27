
// import { useState, useRef, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Brain, 
//   Send
// } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { 
//   sendChatMessage, 
//   getChatHistory, 
//   setupChatStream, 
//   type ChatMessage 
// } from "@/services/chatService";
// import { useParams } from "react-router-dom";

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// export const AIAssistant = () => {
//   const { id: classId } = useParams<{ id: string }>();
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'assistant', content: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?' }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatId, setChatId] = useState<string | undefined>(undefined);
//   const [streamActive, setStreamActive] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLTextAreaElement>(null);
//   const { toast } = useToast();

//   // Fetch chat history on initial load
//   useEffect(() => {
//     if (chatId && classId) {
//       const fetchChatHistory = async () => {
//         try {
//           const history = await getChatHistory(chatId, classId);
          
//           // Convert API message format to component message format
//           const formattedMessages = history.map(msg => ({
//             role: msg.sender === 'user' ? 'user' : 'assistant' as 'user' | 'assistant',
//             content: msg.message
//           }));
          
//           if (formattedMessages.length > 0) {
//             setMessages(formattedMessages);
//           }
//         } catch (error) {
//           console.error('Failed to fetch chat history:', error);
//         }
//       };
      
//       fetchChatHistory();
//     }
//   }, [chatId, classId]);

//   // Setup streaming
//   useEffect(() => {
//     if (chatId && classId && !streamActive) {
//       // Set up streaming for real-time responses
//       const cleanupStream = setupChatStream(
//         chatId,
//         classId,
//         (message) => {
//           // Add streaming message to chat
//           setMessages(prev => {
//             // Check if the last message is from the assistant
//             const lastMessage = prev[prev.length - 1];
//             if (lastMessage && lastMessage.role === 'assistant') {
//               // Update the last message
//               const updatedMessages = [...prev];
//               updatedMessages[updatedMessages.length - 1] = {
//                 ...lastMessage,
//                 content: message
//               };
//               return updatedMessages;
//             } else {
//               // Add a new message
//               return [...prev, { role: 'assistant', content: message }];
//             }
//           });
//         },
//         (error) => {
//           console.error('Stream error:', error);
//           setStreamActive(false);
//         }
//       );
      
//       setStreamActive(true);
      
//       return () => {
//         cleanupStream();
//         setStreamActive(false);
//       };
//     }
//   }, [chatId, classId, streamActive]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || !classId) return;
    
//     const newMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, newMessage]);
//     setInput('');
//     setIsLoading(true);
    
//     try {
//       // Send message to API
//       const response = await sendChatMessage(input, classId, chatId);
      
//       // Update chatId if this is a new conversation
//       if (!chatId) {
//         setChatId(response.chatId);
//       }
      
//       // If not using streaming, add AI response to messages
//       if (!streamActive) {
//         const aiResponse: Message = { 
//           role: 'assistant', 
//           content: response.response.raw 
//         };
        
//         setMessages(prev => [...prev, aiResponse]);
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast({
//         title: "Error",
//         description: "Failed to get response from assistant. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const clearChat = () => {
//     setMessages([{ role: 'assistant', content: 'Chat cleared. How can I help you today?' }]);
//     setChatId(undefined); // Reset chatId to start a new conversation
    
//     toast({
//       title: "Chat cleared",
//       description: "Your conversation has been reset.",
//     });
//   };

//   return (
//     <div className="w-full">
//       <Card className="h-[600px] flex flex-col">
//         <div className="p-4 border-b flex justify-between items-center bg-primary/5">
//           <div className="flex items-center gap-2">
//             <Brain className="text-primary h-5 w-5" />
//             <h2 className="font-semibold">AI Teaching Assistant</h2>
//           </div>
//           <div className="flex gap-2">
//             <Button 
//               size="sm" 
//               variant="outline" 
//               onClick={clearChat}
//               aria-label="Clear chat history"
//             >
//               Clear Chat
//             </Button>
//           </div>
//         </div>
        
//         <div 
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//         >
//           {messages.map((message, index) => (
//             <div 
//               key={index} 
//               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`max-w-[80%] p-3 rounded-lg ${
//                   message.role === 'user' 
//                     ? 'bg-primary text-primary-foreground' 
//                     : 'bg-muted'
//                 }`}
//               >
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && !streamActive && (
//             <div className="flex justify-start">
//               <div className="max-w-[80%] p-3 rounded-lg bg-muted">
//                 <div className="flex space-x-2">
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-150"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="p-4 border-t">
//           <div className="flex gap-2">
//             <Textarea
//               ref={inputRef}
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Ask me anything about teaching, lesson planning, grading..."
//               className="min-h-[60px] flex-1"
//               aria-label="Message input"
//               disabled={!classId}
//             />
//             <Button 
//               onClick={handleSend} 
//               disabled={isLoading || !input.trim() || !classId}
//               aria-label="Send message"
//             >
//               <Send className="h-4 w-4" />
//             </Button>
//           </div>
//           {!classId && (
//             <p className="text-sm text-red-500 mt-2">
//               You need to be in a classroom to use the AI assistant.
//             </p>
//           )}


// import { useState, useRef, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Brain, 
//   Send
// } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { 
//   sendChatMessage, 
//   getChatHistory, 
//   setupChatStream, 
//   type ChatMessage 
// } from "@/services/chatService";
// import { useParams } from "react-router-dom";

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// export const AIAssistant = () => {
//   const { id: classId } = useParams<{ id: string }>();
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'assistant', content: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?' }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatId, setChatId] = useState<string | undefined>(undefined);
//   const [streamActive, setStreamActive] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLTextAreaElement>(null);
//   const { toast } = useToast();

//   // Fetch chat history on initial load
//   useEffect(() => {
//     if (chatId && classId) {
//       const fetchChatHistory = async () => {
//         try {
//           const history = await getChatHistory(chatId, classId);
          
//           // Convert API message format to component message format
//           const formattedMessages = history.map(msg => ({
//             role: msg.sender === 'user' ? 'user' : 'assistant' as 'user' | 'assistant',
//             content: msg.message
//           }));
          
//           if (formattedMessages.length > 0) {
//             setMessages(formattedMessages);
//           }
//         } catch (error) {
//           console.error('Failed to fetch chat history:', error);
//         }
//       };
      
//       fetchChatHistory();
//     }
//   }, [chatId, classId]);

//   // Setup streaming
//   useEffect(() => {
//     if (chatId && classId && !streamActive) {
//       // Set up streaming for real-time responses
//       const cleanupStream = setupChatStream(
//         chatId,
//         classId,
//         (message) => {
//           // Add streaming message to chat
//           setMessages(prev => {
//             // Check if the last message is from the assistant
//             const lastMessage = prev[prev.length - 1];
//             if (lastMessage && lastMessage.role === 'assistant') {
//               // Update the last message
//               const updatedMessages = [...prev];
//               updatedMessages[updatedMessages.length - 1] = {
//                 ...lastMessage,
//                 content: message
//               };
//               return updatedMessages;
//             } else {
//               // Add a new message
//               return [...prev, { role: 'assistant', content: message }];
//             }
//           });
//         },
//         (error) => {
//           console.error('Stream error:', error);
//           setStreamActive(false);
//         }
//       );
      
//       setStreamActive(true);
      
//       return () => {
//         cleanupStream();
//         setStreamActive(false);
//       };
//     }
//   }, [chatId, classId, streamActive]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || !classId) return;
    
//     const newMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, newMessage]);
//     setInput('');
//     setIsLoading(true);
    
//     try {
//       // Send message to API
//       const response = await sendChatMessage(input, classId, chatId);
      
//       // Update chatId if this is a new conversation
//       if (!chatId) {
//         setChatId(response.chatId);
//       }
      
//       // If not using streaming, add AI response to messages
//       if (!streamActive) {
//         const aiResponse: Message = { 
//           role: 'assistant', 
//           content: response.response.raw 
//         };
        
//         setMessages(prev => [...prev, aiResponse]);
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast({
//         title: "Error",
//         description: "Failed to get response from assistant. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const clearChat = () => {
//     setMessages([{ role: 'assistant', content: 'Chat cleared. How can I help you today?' }]);
//     setChatId(undefined); // Reset chatId to start a new conversation
    
//     toast({
//       title: "Chat cleared",
//       description: "Your conversation has been reset.",
//     });
//   };

//   return (
//     <div className="w-full">
//       <Card className="h-[600px] flex flex-col">
//         <div className="p-4 border-b flex justify-between items-center bg-primary/5">
//           <div className="flex items-center gap-2">
//             <Brain className="text-primary h-5 w-5" />
//             <h2 className="font-semibold">AI Teaching Assistant</h2>
//           </div>
//           <div className="flex gap-2">
//             <Button 
//               size="sm" 
//               variant="outline" 
//               onClick={clearChat}
//               aria-label="Clear chat history"
//             >
//               Clear Chat
//             </Button>
//           </div>
//         </div>
        
//         <div 
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//         >
//           {messages.map((message, index) => (
//             <div 
//               key={index} 
//               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`max-w-[80%] p-3 rounded-lg ${
//                   message.role === 'user' 
//                     ? 'bg-primary text-primary-foreground' 
//                     : 'bg-muted'
//                 }`}
//               >
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && !streamActive && (
//             <div className="flex justify-start">
//               <div className="max-w-[80%] p-3 rounded-lg bg-muted">
//                 <div className="flex space-x-2">
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-150"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="p-4 border-t">
//           <div className="flex gap-2">
//             <Textarea
//               ref={inputRef}
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Ask me anything about teaching, lesson planning, grading..."
//               className="min-h-[60px] flex-1"
//               aria-label="Message input"
//               disabled={!classId}
//             />
//             <Button 
//               onClick={handleSend} 
//               disabled={isLoading || !input.trim() || !classId}
//               aria-label="Send message"
//             >
//               <Send className="h-4 w-4" />
//             </Button>
//           </div>
//           {!classId && (
//             <p className="text-sm text-red-500 mt-2">
//               You need to be in a classroom to use the AI assistant.
//             </p>
//           )}
//         </div>
//       </Card>
//     </div>
//   );
// };


// import { useState, useRef, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Brain, 
//   Send
// } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { 
//   sendChatMessage, 
//   getChatHistory, 
//   setupChatStream, 
//   type ChatMessage 
// } from "@/services/chatService";
// import { useParams } from "react-router-dom";

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// export const AIAssistant = () => {
//   const { id: classId } = useParams<{ id: string }>();
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'assistant', content: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?' }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatId, setChatId] = useState<string | undefined>(undefined);
//   const [streamActive, setStreamActive] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLTextAreaElement>(null);
//   const { toast } = useToast();

//   // Fetch chat history on initial load
//   useEffect(() => {
//     if (chatId && classId) {
//       const fetchChatHistory = async () => {
//         try {
//           const history = await getChatHistory(chatId, classId);
          
//           // Convert API message format to component message format
//           const formattedMessages = history.map(msg => ({
//             role: msg.sender === 'user' ? 'user' : 'assistant' as 'user' | 'assistant',
//             content: msg.message
//           }));
          
//           if (formattedMessages.length > 0) {
//             setMessages(formattedMessages);
//           }
//         } catch (error) {
//           console.error('Failed to fetch chat history:', error);
//         }
//       };
      
//       fetchChatHistory();
//     }
//   }, [chatId, classId]);

//   // Setup streaming
//   useEffect(() => {
//     if (chatId && classId && !streamActive) {
//       // Set up streaming for real-time responses
//       const cleanupStream = setupChatStream(
//         chatId,
//         classId,
//         (message) => {
//           // Add streaming message to chat
//           setMessages(prev => {
//             // Check if the last message is from the assistant
//             const lastMessage = prev[prev.length - 1];
//             if (lastMessage && lastMessage.role === 'assistant') {
//               // Update the last message
//               const updatedMessages = [...prev];
//               updatedMessages[updatedMessages.length - 1] = {
//                 ...lastMessage,
//                 content: message
//               };
//               return updatedMessages;
//             } else {
//               // Add a new message
//               return [...prev, { role: 'assistant', content: message }];
//             }
//           });
//         },
//         (error) => {
//           console.error('Stream error:', error);
//           setStreamActive(false);
//         }
//       );
      
//       setStreamActive(true);
      
//       return () => {
//         cleanupStream();
//         setStreamActive(false);
//       };
//     }
//   }, [chatId, classId, streamActive]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || !classId) return;
    
//     const newMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, newMessage]);
//     setInput('');
//     setIsLoading(true);
    
//     try {
//       // Send message to API
//       const response = await sendChatMessage(input, classId, chatId);
      
//       // Update chatId if this is a new conversation
//       if (!chatId) {
//         setChatId(response.chatId);
//       }
      
//       // If not using streaming, add AI response to messages
//       if (!streamActive) {
//         const aiResponse: Message = { 
//           role: 'assistant', 
//           content: response.response.raw 
//         };
        
//         setMessages(prev => [...prev, aiResponse]);
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast({
//         title: "Error",
//         description: "Failed to get response from assistant. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const clearChat = () => {
//     setMessages([{ role: 'assistant', content: 'Chat cleared. How can I help you today?' }]);
//     setChatId(undefined); // Reset chatId to start a new conversation
    
//     toast({
//       title: "Chat cleared",
//       description: "Your conversation has been reset.",
//     });
//   };

//   return (
//     <div className="w-full">
//       <Card className="h-[600px] flex flex-col">
//         <div className="p-4 border-b flex justify-between items-center bg-primary/5">
//           <div className="flex items-center gap-2">
//             <Brain className="text-primary h-5 w-5" />
//             <h2 className="font-semibold">AI Teaching Assistant</h2>
//           </div>
//           <div className="flex gap-2">
//             <Button 
//               size="sm" 
//               variant="outline" 
//               onClick={clearChat}
//               aria-label="Clear chat history"
//             >
//               Clear Chat
//             </Button>
//           </div>
//         </div>
        
//         <div 
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//         >
//           {messages.map((message, index) => (
//             <div 
//               key={index} 
//               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`max-w-[80%] p-3 rounded-lg ${
//                   message.role === 'user' 
//                     ? 'bg-primary text-primary-foreground' 
//                     : 'bg-muted'
//                 }`}
//               >
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && !streamActive && (
//             <div className="flex justify-start">
//               <div className="max-w-[80%] p-3 rounded-lg bg-muted">
//                 <div className="flex space-x-2">
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-150"></div>
//                   <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="p-4 border-t">
//           <div className="flex gap-2">
//             <Textarea
//               ref={inputRef}
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Ask me anything about teaching, lesson planning, grading..."
//               className="min-h-[60px] flex-1"
//               aria-label="Message input"
//               disabled={!classId}
//             />
//             <Button 
//               onClick={handleSend} 
//               disabled={isLoading || !input.trim() || !classId}
//               aria-label="Send message"
//             >
//               <Send className="h-4 w-4" />
//             </Button>
//           </div>
//           {!classId && (
//             <p className="text-sm text-red-500 mt-2">
//               You need to be in a classroom to use the AI assistant.
//             </p>
//           )}
//         </div>
//       </Card>
//     </div>
//   );
// };


import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  sendChatMessage, 
  getChatHistory, 
  setupChatStream, 
  type ChatMessage 
} from "@/services/chatService";
import { useParams } from "react-router-dom";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIAssistant = () => {
  const { id: classId } = useParams<{ id: string }>();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState<string | undefined>(undefined);
  const [streamActive, setStreamActive] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  // Fetch chat history on initial load
  useEffect(() => {
    if (chatId && classId) {
      const fetchChatHistory = async () => {
        try {
          const history = await getChatHistory(chatId, classId);
          
          // Convert API message format to component message format
          const formattedMessages = history.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant' as 'user' | 'assistant',
            content: msg.message
          }));
          
          if (formattedMessages.length > 0) {
            setMessages(formattedMessages);
          }
        } catch (error) {
          console.error('Failed to fetch chat history:', error);
        }
      };
      
      fetchChatHistory();
    }
  }, [chatId, classId]);

  // Setup streaming
  useEffect(() => {
    if (chatId && classId && !streamActive) {
      // Set up streaming for real-time responses
      const cleanupStream = setupChatStream(
        chatId,
        classId,
        (message) => {
          // Add streaming message to chat
          setMessages(prev => {
            // Check if the last message is from the assistant
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
              // Update the last message
              const updatedMessages = [...prev];
              updatedMessages[updatedMessages.length - 1] = {
                ...lastMessage,
                content: message
              };
              return updatedMessages;
            } else {
              // Add a new message
              return [...prev, { role: 'assistant', content: message }];
            }
          });
        },
        (error) => {
          console.error('Stream error:', error);
          setStreamActive(false);
        }
      );
      
      setStreamActive(true);
      
      return () => {
        cleanupStream();
        setStreamActive(false);
      };
    }
  }, [chatId, classId, streamActive]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !classId) return;
    
    const newMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Send message to API
      const response = await sendChatMessage(input, classId, chatId);
      
      // Update chatId if this is a new conversation
      if (!chatId) {
        setChatId(response.chatId);
      }
      
      // If not using streaming, add AI response to messages
      if (!streamActive) {
        const aiResponse: Message = { 
          role: 'assistant', 
          content: response.response.raw 
        };
        
        setMessages(prev => [...prev, aiResponse]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get response from assistant. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Chat cleared. How can I help you today?' }]);
    setChatId(undefined); // Reset chatId to start a new conversation
    
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
  };

  return (
    <div className="w-full">
      <Card className="h-[600px] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-primary/5">
          <div className="flex items-center gap-2">
            <Brain className="text-primary h-5 w-5" />
            <h2 className="font-semibold">AI Teaching Assistant</h2>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={clearChat}
              aria-label="Clear chat history"
            >
              Clear Chat
            </Button>
          </div>
        </div>
        
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && !streamActive && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-150"></div>
                  <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about teaching, lesson planning, grading..."
              className="min-h-[60px] flex-1"
              aria-label="Message input"
              disabled={!classId}
            />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim() || !classId}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          {!classId && (
            <p className="text-sm text-red-500 mt-2">
              You need to be in a classroom to use the AI assistant.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};
