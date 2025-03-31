
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { FileText, Sparkles, Plus, Eye } from "lucide-react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { AIAssignmentGenerator } from "./AIAssignmentGenerator";
// import { AssignmentDashboard } from "./AssignmentDashboard";

// const mockAssignments = [
//   {
//     id: "1",
//     title: "Midterm Project",
//     dueDate: "2024-03-25",
//     status: "Active",
//     submissions: 15,
//     description: "Final project for the first half of the semester.",
//     maxPoints: 100,
//   },
//   {
//     id: "2",
//     title: "Weekly Quiz",
//     dueDate: "2024-03-22",
//     status: "Draft",
//     submissions: 0,
//     description: "Quiz covering material from week 8.",
//     maxPoints: 50,
//   },
// ];

// export const AssignmentsTab = () => {
//   const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
//   const [selectedAssignment, setSelectedAssignment] = useState<typeof mockAssignments[0] | null>(null);

//   return (
//     <div className="space-y-6">
//       {selectedAssignment ? (
//         <AssignmentDashboard 
//           assignment={selectedAssignment} 
//           onBack={() => setSelectedAssignment(null)} 
//         />
//       ) : (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//             <Dialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button className="flex items-center gap-2">
//                   <Sparkles size={20} />
//                   Create Assignment with AI
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-3xl">
//                 <AIAssignmentGenerator onClose={() => setIsAIDialogOpen(false)} />
//               </DialogContent>
//             </Dialog>
            
//             <Button variant="outline">
//               <Plus size={20} className="mr-1" />
//               Create Manual
//             </Button>
//           </div>
//           <div className="divide-y divide-gray-200">
//             {mockAssignments.map((assignment) => (
//               <div key={assignment.id} className="p-4 hover:bg-gray-50">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-medium">{assignment.title}</h3>
//                     <p className="text-sm text-gray-500">
//                       Due: {assignment.dueDate}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <span className="text-sm text-gray-500">
//                       {assignment.submissions} submissions
//                     </span>
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       onClick={() => setSelectedAssignment(assignment)}
//                     >
//                       <Eye className="mr-2 h-4 w-4" />
//                       View Dashboard
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { FileText, Sparkles, Eye, Pencil } from "lucide-react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { AIAssignmentGenerator } from "./AIAssignmentGenerator";
// import { AssignmentDashboard } from "./AssignmentDashboard";

// const mockAssignments = [
//   {
//     id: "1",
//     title: "Midterm Project",
//     dueDate: "2024-03-25",
//     status: "Active",
//     submissions: 15,
//     description: "Final project for the first half of the semester.",
//     maxPoints: 100,
//     subject: "Computer Science",
//     gradeLevel: "high",
//     difficultyLevel: "medium",
//     detailedLevel: "comprehensive",
//     standardGrading: "rubric",
//     deadline: new Date("2024-03-25"),
//     content: "# Midterm Project\n\n## Overview\nThis is a medium difficulty Computer Science assignment for grade high school.\n**Deadline**: 3/25/2024 by 11:59 PM\n\n## Learning Objectives\n- Understand key concepts in Computer Science\n- Apply critical thinking to solve problems\n- Demonstrate comprehension through written responses\n\n## Instructions\n1. Read all questions carefully before beginning\n2. Show all work for maximum credit\n\n## Questions\n1. Explain the main concepts of [key topic in Computer Science]\n2. Compare and contrast [concept A] and [concept B]\n3. Solve the following problem: [problem description]\n4. Analyze the following scenario: [scenario description]\n5. Create a diagram illustrating [process/concept]\n\n## Grading Criteria (rubric)\n- Understanding of concepts: 40%\n- Application of knowledge: 30%\n- Clarity of explanations: 20%\n- Presentation: 10%\n\nThis assignment will be graded according to the rubric standard."
//   },
//   {
//     id: "2",
//     title: "Weekly Quiz",
//     dueDate: "2024-03-22",
//     status: "Draft",
//     submissions: 0,
//     description: "Quiz covering material from week 8.",
//     maxPoints: 50,
//     subject: "Computer Science",
//     gradeLevel: "high",
//     difficultyLevel: "easy",
//     detailedLevel: "basic",
//     standardGrading: "points",
//     deadline: new Date("2024-03-22"),
//     content: "# Weekly Quiz\n\n## Overview\nThis is an easy difficulty Computer Science assignment for grade high school.\n**Deadline**: 3/22/2024 by 11:59 PM\n\n## Learning Objectives\n- Understand key concepts in Computer Science\n- Apply critical thinking to solve problems\n- Demonstrate comprehension through written responses\n\n## Instructions\n1. Read all questions carefully before beginning\n2. Show all work for maximum credit\n\n## Questions\n1. Explain the main concepts of [key topic in Computer Science]\n2. Compare and contrast [concept A] and [concept B]\n3. Solve the following problem: [problem description]\n4. Analyze the following scenario: [scenario description]\n5. Create a diagram illustrating [process/concept]\n\n## Grading Criteria (points)\n- Understanding of concepts: 40%\n- Application of knowledge: 30%\n- Clarity of explanations: 20%\n- Presentation: 10%\n\nThis assignment will be graded according to the points-based standard."
//   },
// ];

// export const AssignmentsTab = () => {
//   const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
//   const [selectedAssignment, setSelectedAssignment] = useState<typeof mockAssignments[0] | null>(null);
//   const [assignmentToEdit, setAssignmentToEdit] = useState<typeof mockAssignments[0] | null>(null);

//   const handleEditAssignment = (assignment: typeof mockAssignments[0]) => {
//     setAssignmentToEdit(assignment);
//     setIsAIDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setIsAIDialogOpen(false);
//     setAssignmentToEdit(null);
//   };

//   return (
//     <div className="space-y-6">
//       {selectedAssignment ? (
//         <AssignmentDashboard 
//           assignment={selectedAssignment} 
//           onBack={() => setSelectedAssignment(null)} 
//           onEdit={() => handleEditAssignment(selectedAssignment)}
//         />
//       ) : (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//             <Dialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button className="flex items-center gap-2" onClick={() => setAssignmentToEdit(null)}>
//                   <Sparkles size={20} />
//                   Create Assignment with AI
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-3xl">
//                 <AIAssignmentGenerator 
//                   onClose={handleCloseDialog} 
//                   existingAssignment={assignmentToEdit}
//                 />
//               </DialogContent>
//             </Dialog>
//           </div>
//           <div className="divide-y divide-gray-200">
//             {mockAssignments.map((assignment) => (
//               <div key={assignment.id} className="p-4 hover:bg-gray-50">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-medium">{assignment.title}</h3>
//                     <p className="text-sm text-gray-500">
//                       Due: {assignment.dueDate}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-gray-500 mr-2">
//                       {assignment.submissions} submissions
//                     </span>
//                     <Button 
//                       variant="ghost" 
//                       size="sm"
//                       onClick={() => handleEditAssignment(assignment)}
//                       className="text-gray-500"
//                     >
//                       <Pencil className="h-4 w-4" />
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       onClick={() => setSelectedAssignment(assignment)}
//                     >
//                       <Eye className="mr-2 h-4 w-4" />
//                       View Dashboard
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Sparkles, Eye, Loader } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AIAssignmentGenerator } from "./AIAssignmentGenerator";
import { AssignmentDashboard } from "./AssignmentDashboard";
import { useParams } from "react-router-dom";
import { useAssignments } from "@/hooks/useAssignments";

export const AssignmentsTab = () => {
  const { id: classroomId } = useParams<{ id: string }>();
  const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any | null>(null);
  
  const { 
    assignments, 
    isLoading, 
    error,
    refetch 
  } = useAssignments(classroomId || "");

  const handleCloseDialog = () => {
    setIsAIDialogOpen(false);
    // Refetch assignments after dialog close
    refetch();
  };

  // Dummy onEdit handler to satisfy the type requirement
  const handleEdit = () => {
    // This is just a placeholder to satisfy the type requirement
    // In the current implementation, editing is not needed since the API handles everything
    console.log("Edit functionality is not implemented");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading assignments...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
        <p>Error loading assignments. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {selectedAssignment ? (
        <AssignmentDashboard 
          assignment={selectedAssignment} 
          onBack={() => setSelectedAssignment(null)} 
          onEdit={handleEdit}
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
                <AIAssignmentGenerator 
                  onClose={handleCloseDialog} 
                  classroomId={classroomId || ""}
                />
              </DialogContent>
            </Dialog>
          </div>
          
          {assignments.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <h3 className="font-medium text-gray-700">No assignments yet</h3>
              <p className="mt-1 mb-4">Create your first assignment to get started.</p>
              <Button 
                onClick={() => setIsAIDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <Sparkles size={16} />
                Create Assignment
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">
                        Due: {new Date(assignment.dueDate || assignment.deadline).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 mr-2">
                        {Array.isArray(assignment.submissions) ? assignment.submissions.length : 0} submissions
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
          )}
        </div>
      )}
    </div>
  );
};
