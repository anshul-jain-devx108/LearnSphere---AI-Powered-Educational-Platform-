
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Sparkles, Plus, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AIAssignmentGenerator } from "./AIAssignmentGenerator";
import { AssignmentDashboard } from "./AssignmentDashboard";

const mockAssignments = [
  {
    id: "1",
    title: "Midterm Project",
    dueDate: "2024-03-25",
    status: "Active",
    submissions: 15,
    description: "Final project for the first half of the semester.",
    maxPoints: 100,
  },
  {
    id: "2",
    title: "Weekly Quiz",
    dueDate: "2024-03-22",
    status: "Draft",
    submissions: 0,
    description: "Quiz covering material from week 8.",
    maxPoints: 50,
  },
];

export const AssignmentsTab = () => {
  const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<typeof mockAssignments[0] | null>(null);

  return (
    <div className="space-y-6">
      {selectedAssignment ? (
        <AssignmentDashboard 
          assignment={selectedAssignment} 
          onBack={() => setSelectedAssignment(null)} 
        />
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <Dialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Sparkles size={20} />
                  Create Assignment with AI
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <AIAssignmentGenerator onClose={() => setIsAIDialogOpen(false)} />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline">
              <Plus size={20} className="mr-1" />
              Create Manual
            </Button>
          </div>
          <div className="divide-y divide-gray-200">
            {mockAssignments.map((assignment) => (
              <div key={assignment.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">
                      Due: {assignment.dueDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {assignment.submissions} submissions
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedAssignment(assignment)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Dashboard
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
