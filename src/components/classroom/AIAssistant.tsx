
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m your AI teaching assistant. How can I help you with your classroom activities today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    const newMessage: Message = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = { 
        role: 'assistant', 
        content: 'I understand your request. Here\'s my assistance based on your query. Is there anything specific you\'d like me to elaborate on?' 
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Chat cleared. How can I help you today?' }]);
    
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
          {isLoading && (
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
            />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
