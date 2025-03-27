
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Brain, LucideIcon } from "lucide-react";

// interface TimeMetric {
//   title: string;
//   saved: string;
//   description: string;
//   icon: LucideIcon;
// }

// interface TimeManagementProps {
//   metrics: TimeMetric[];
// }

// export const TimeManagement = ({ metrics }: TimeManagementProps) => {
//   if (metrics.length === 0) {
//     return null;
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//       {metrics.map((item, index) => (
//         <Card key={index} className="p-6 bg-white dark:bg-gray-800">
//           <div className="flex items-center gap-4">
//             <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
//               <item.icon className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">{item.title}</h3>
//               <p className="text-2xl font-bold text-primary my-1">{item.saved}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
//             </div>
//           </div>
//         </Card>
//       ))}
      
//       <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20">
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI Assistant</h3>
//             <p className="text-gray-600 dark:text-gray-400">Get help with grading and planning</p>
//           </div>
//           <Button className="flex items-center gap-2">
//             <Brain size={20} />
//             Open Assistant
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };



import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface TimeMetric {
  title: string;
  saved: string;
  description: string;
  icon: LucideIcon;
}

interface TimeManagementProps {
  metrics: TimeMetric[];
  classroomId?: string;
}

export const TimeManagement = ({ metrics, classroomId }: TimeManagementProps) => {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {metrics.map((item, index) => (
        <Card key={index} className="p-6 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">{item.title}</h3>
              <p className="text-2xl font-bold text-primary my-1">{item.saved}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        </Card>
      ))}
      
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI Assistant</h3>
            <p className="text-gray-600 dark:text-gray-400">Get help with grading and planning</p>
          </div>
          {classroomId ? (
            <Button asChild className="flex items-center gap-2">
              <Link to={`/class/${classroomId}?tab=ai-assist`}>
                <Brain size={20} />
                Open Assistant
              </Link>
            </Button>
          ) : (
            <Button asChild className="flex items-center gap-2">
              <Link to="/classes">
                <Brain size={20} />
                Select Class
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
