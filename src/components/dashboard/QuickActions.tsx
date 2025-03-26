
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Link to={action.link} key={index}>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-800">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium dark:text-white">{action.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
