
import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";

interface WelcomeSectionProps {
  onCreateClass: () => void;
}

export const WelcomeSection = ({ onCreateClass }: WelcomeSectionProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Teacher</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what needs your attention today</p>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline"
          className="flex items-center gap-2"
          onClick={onCreateClass}
        >
          <UserPlus size={20} />
          Join Class
        </Button>
        <Button 
          className="flex items-center gap-2"
          onClick={onCreateClass}
        >
          <Plus size={20} />
          New Class
        </Button>
      </div>
    </div>
  );
};
