
// import { useState } from "react";
// import { 
//   ArrowLeft, 
//   FileText, 
//   User, 
//   Calendar, 
//   Clock 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from "@/components/ui/table";

// interface Assignment {
//   id: string;
//   title: string;
//   dueDate: string;
//   status: string;
//   submissions: number;
//   description: string;
//   maxPoints: number;
// }

// interface Student {
//   id: string;
//   name: string;
//   email: string;
//   submissionStatus: "Submitted" | "Late" | "Not Submitted";
//   submissionDate?: string;
//   aiGrade?: number;
//   finalGrade?: number;
// }

// interface AssignmentDashboardProps {
//   assignment: Assignment;
//   onBack: () => void;
// }

// export const AssignmentDashboard = ({ assignment, onBack }: AssignmentDashboardProps) => {
//   // Mock student data - in a real app, this would come from an API
//   const [students, setStudents] = useState<Student[]>([
//     {
//       id: "1",
//       name: "Emma Johnson",
//       email: "emma.j@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-22 14:30",
//       aiGrade: 85,
//       finalGrade: 88
//     },
//     {
//       id: "2",
//       name: "Michael Smith",
//       email: "michael.s@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-23 09:15",
//       aiGrade: 92,
//       finalGrade: 90
//     },
//     {
//       id: "3",
//       name: "Sophia Garcia",
//       email: "sophia.g@example.com",
//       submissionStatus: "Late",
//       submissionDate: "2024-03-26 22:45",
//       aiGrade: 78
//     },
//     {
//       id: "4",
//       name: "William Brown",
//       email: "william.b@example.com",
//       submissionStatus: "Not Submitted"
//     },
//     {
//       id: "5",
//       name: "Olivia Davis",
//       email: "olivia.d@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-22 16:20",
//       aiGrade: 88
//     }
//   ]);

//   const updateFinalGrade = (studentId: string, grade: number) => {
//     setStudents(students.map(student => 
//       student.id === studentId 
//         ? { ...student, finalGrade: grade } 
//         : student
//     ));
//   };

//   const applyAIGrades = () => {
//     setStudents(students.map(student => 
//       student.aiGrade && !student.finalGrade
//         ? { ...student, finalGrade: student.aiGrade }
//         : student
//     ));
//   };

//   const submissionStats = {
//     total: students.length,
//     submitted: students.filter(s => s.submissionStatus === "Submitted").length,
//     late: students.filter(s => s.submissionStatus === "Late").length,
//     notSubmitted: students.filter(s => s.submissionStatus === "Not Submitted").length,
//     graded: students.filter(s => s.finalGrade !== undefined).length
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="sm" onClick={onBack}>
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Assignments
//           </Button>
//           <h2 className="text-2xl font-semibold">{assignment.title}</h2>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500">
//             Due: {assignment.dueDate}
//           </span>
//           <Button variant="outline" size="sm">
//             Edit Assignment
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Total Students</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.total}</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Submitted</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.submitted + submissionStats.late}</p>
//             <p className="text-xs text-gray-500">{submissionStats.late} late</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Not Submitted</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.notSubmitted}</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Graded</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.graded}</p>
//             <p className="text-xs text-gray-500">of {submissionStats.submitted + submissionStats.late} submissions</p>
//           </CardContent>
//         </Card>
//       </div>

//       <Tabs defaultValue="students">
//         <TabsList>
//           <TabsTrigger value="students">Student Submissions</TabsTrigger>
//           <TabsTrigger value="overview">Assignment Overview</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="students">
//           <Card>
//             <CardHeader className="pb-0">
//               <div className="flex justify-between items-center">
//                 <CardTitle>Student Submissions</CardTitle>
//                 {students.some(s => s.aiGrade && !s.finalGrade) && (
//                   <Button onClick={applyAIGrades}>
//                     Apply All AI Grades
//                   </Button>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Student</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Submission Date</TableHead>
//                     <TableHead>AI Grade</TableHead>
//                     <TableHead>Final Grade</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {students.map((student) => (
//                     <TableRow key={student.id}>
//                       <TableCell>
//                         <div>
//                           <p className="font-medium">{student.name}</p>
//                           <p className="text-sm text-gray-500">{student.email}</p>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           student.submissionStatus === "Submitted" 
//                             ? "bg-green-100 text-green-800" 
//                             : student.submissionStatus === "Late" 
//                               ? "bg-yellow-100 text-yellow-800" 
//                               : "bg-red-100 text-red-800"
//                         }`}>
//                           {student.submissionStatus}
//                         </span>
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionDate || "-"}
//                       </TableCell>
//                       <TableCell>
//                         {student.aiGrade !== undefined 
//                           ? `${student.aiGrade} / ${assignment.maxPoints}` 
//                           : "-"}
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionStatus !== "Not Submitted" ? (
//                           student.finalGrade !== undefined ? (
//                             `${student.finalGrade} / ${assignment.maxPoints}`
//                           ) : (
//                             <input 
//                               type="number" 
//                               min="0" 
//                               max={assignment.maxPoints}
//                               className="w-16 p-1 border rounded" 
//                               placeholder="Grade"
//                               onChange={(e) => {
//                                 const value = parseInt(e.target.value);
//                                 if (!isNaN(value)) {
//                                   updateFinalGrade(student.id, value);
//                                 }
//                               }}
//                             />
//                           )
//                         ) : (
//                           "-"
//                         )}
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionStatus !== "Not Submitted" && (
//                           <div className="flex gap-2">
//                             <Button variant="outline" size="sm">View</Button>
//                             {student.aiGrade === undefined && (
//                               <Button variant="outline" size="sm">Grade with AI</Button>
//                             )}
//                           </div>
//                         )}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="overview">
//           <Card>
//             <CardHeader>
//               <CardTitle>Assignment Details</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="font-medium">Description</h3>
//                 <p className="text-gray-700">{assignment.description}</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-medium">Due Date</h3>
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Calendar className="h-4 w-4" />
//                     {assignment.dueDate}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="font-medium">Maximum Points</h3>
//                   <p className="text-gray-700">{assignment.maxPoints}</p>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium">Grade Distribution</h3>
//                 <div className="h-16 bg-gray-100 rounded-md mt-2 flex items-end">
//                   {/* This would be a real chart in a production app */}
//                   <div className="h-8 w-1/5 bg-green-500 rounded-bl-md"></div>
//                   <div className="h-12 w-2/5 bg-green-600"></div>
//                   <div className="h-10 w-1/5 bg-green-700"></div>
//                   <div className="h-6 w-1/5 bg-green-800 rounded-br-md"></div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>0-25%</span>
//                   <span>26-50%</span>
//                   <span>51-75%</span>
//                   <span>76-100%</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// import { useState } from "react";
// import { 
//   ArrowLeft, 
//   FileText, 
//   User, 
//   Calendar, 
//   Clock 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from "@/components/ui/table";

// interface Assignment {
//   id: string;
//   title: string;
//   dueDate: string;
//   status: string;
//   submissions: number;
//   description: string;
//   maxPoints: number;
// }

// interface Student {
//   id: string;
//   name: string;
//   email: string;
//   submissionStatus: "Submitted" | "Late" | "Not Submitted";
//   submissionDate?: string;
//   aiGrade?: number;
//   finalGrade?: number;
// }

// interface AssignmentDashboardProps {
//   assignment: Assignment;
//   onBack: () => void;
//   onEdit: () => void;
// }

// export const AssignmentDashboard = ({ assignment, onBack, onEdit }: AssignmentDashboardProps) => {
//   const [students, setStudents] = useState<Student[]>([
//     {
//       id: "1",
//       name: "Emma Johnson",
//       email: "emma.j@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-22 14:30",
//       aiGrade: 85,
//       finalGrade: 88
//     },
//     {
//       id: "2",
//       name: "Michael Smith",
//       email: "michael.s@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-23 09:15",
//       aiGrade: 92,
//       finalGrade: 90
//     },
//     {
//       id: "3",
//       name: "Sophia Garcia",
//       email: "sophia.g@example.com",
//       submissionStatus: "Late",
//       submissionDate: "2024-03-26 22:45",
//       aiGrade: 78
//     },
//     {
//       id: "4",
//       name: "William Brown",
//       email: "william.b@example.com",
//       submissionStatus: "Not Submitted"
//     },
//     {
//       id: "5",
//       name: "Olivia Davis",
//       email: "olivia.d@example.com",
//       submissionStatus: "Submitted",
//       submissionDate: "2024-03-22 16:20",
//       aiGrade: 88
//     }
//   ]);

//   const updateFinalGrade = (studentId: string, grade: number) => {
//     setStudents(students.map(student => 
//       student.id === studentId 
//         ? { ...student, finalGrade: grade } 
//         : student
//     ));
//   };

//   const applyAIGrades = () => {
//     setStudents(students.map(student => 
//       student.aiGrade && !student.finalGrade
//         ? { ...student, finalGrade: student.aiGrade }
//         : student
//     ));
//   };

//   const submissionStats = {
//     total: students.length,
//     submitted: students.filter(s => s.submissionStatus === "Submitted").length,
//     late: students.filter(s => s.submissionStatus === "Late").length,
//     notSubmitted: students.filter(s => s.submissionStatus === "Not Submitted").length,
//     graded: students.filter(s => s.finalGrade !== undefined).length
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="sm" onClick={onBack}>
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Assignments
//           </Button>
//           <h2 className="text-2xl font-semibold">{assignment.title}</h2>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500">
//             Due: {assignment.dueDate}
//           </span>
//           <Button variant="outline" size="sm" onClick={onEdit}>
//             Edit Assignment
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Total Students</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.total}</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Submitted</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.submitted + submissionStats.late}</p>
//             <p className="text-xs text-gray-500">{submissionStats.late} late</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Not Submitted</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.notSubmitted}</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-gray-500">Graded</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{submissionStats.graded}</p>
//             <p className="text-xs text-gray-500">of {submissionStats.submitted + submissionStats.late} submissions</p>
//           </CardContent>
//         </Card>
//       </div>

//       <Tabs defaultValue="students">
//         <TabsList>
//           <TabsTrigger value="students">Student Submissions</TabsTrigger>
//           <TabsTrigger value="overview">Assignment Overview</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="students">
//           <Card>
//             <CardHeader className="pb-0">
//               <div className="flex justify-between items-center">
//                 <CardTitle>Student Submissions</CardTitle>
//                 {students.some(s => s.aiGrade && !s.finalGrade) && (
//                   <Button onClick={applyAIGrades}>
//                     Apply All AI Grades
//                   </Button>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Student</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Submission Date</TableHead>
//                     <TableHead>AI Grade</TableHead>
//                     <TableHead>Final Grade</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {students.map((student) => (
//                     <TableRow key={student.id}>
//                       <TableCell>
//                         <div>
//                           <p className="font-medium">{student.name}</p>
//                           <p className="text-sm text-gray-500">{student.email}</p>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           student.submissionStatus === "Submitted" 
//                             ? "bg-green-100 text-green-800" 
//                             : student.submissionStatus === "Late" 
//                               ? "bg-yellow-100 text-yellow-800" 
//                               : "bg-red-100 text-red-800"
//                         }`}>
//                           {student.submissionStatus}
//                         </span>
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionDate || "-"}
//                       </TableCell>
//                       <TableCell>
//                         {student.aiGrade !== undefined 
//                           ? `${student.aiGrade} / ${assignment.maxPoints}` 
//                           : "-"}
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionStatus !== "Not Submitted" ? (
//                           student.finalGrade !== undefined ? (
//                             `${student.finalGrade} / ${assignment.maxPoints}`
//                           ) : (
//                             <input 
//                               type="number" 
//                               min="0" 
//                               max={assignment.maxPoints}
//                               className="w-16 p-1 border rounded" 
//                               placeholder="Grade"
//                               onChange={(e) => {
//                                 const value = parseInt(e.target.value);
//                                 if (!isNaN(value)) {
//                                   updateFinalGrade(student.id, value);
//                                 }
//                               }}
//                             />
//                           )
//                         ) : (
//                           "-"
//                         )}
//                       </TableCell>
//                       <TableCell>
//                         {student.submissionStatus !== "Not Submitted" && (
//                           <div className="flex gap-2">
//                             <Button variant="outline" size="sm">View</Button>
//                             {student.aiGrade === undefined && (
//                               <Button variant="outline" size="sm">Grade with AI</Button>
//                             )}
//                           </div>
//                         )}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="overview">
//           <Card>
//             <CardHeader>
//               <CardTitle>Assignment Details</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="font-medium">Description</h3>
//                 <p className="text-gray-700">{assignment.description}</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-medium">Due Date</h3>
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Calendar className="h-4 w-4" />
//                     {assignment.dueDate}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="font-medium">Maximum Points</h3>
//                   <p className="text-gray-700">{assignment.maxPoints}</p>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium">Grade Distribution</h3>
//                 <div className="h-16 bg-gray-100 rounded-md mt-2 flex items-end">
//                   {/* This would be a real chart in a production app */}
//                   <div className="h-8 w-1/5 bg-green-500 rounded-bl-md"></div>
//                   <div className="h-12 w-2/5 bg-green-600"></div>
//                   <div className="h-10 w-1/5 bg-green-700"></div>
//                   <div className="h-6 w-1/5 bg-green-800 rounded-br-md"></div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>0-25%</span>
//                   <span>26-50%</span>
//                   <span>51-75%</span>
//                   <span>76-100%</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };



import { useState } from "react";
import { 
  ArrowLeft, 
  FileText, 
  User, 
  Calendar, 
  Clock,
  BarChart,
  PieChart,
  LineChart,
  Users,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from "recharts";

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: string;
  submissions: number;
  description: string;
  maxPoints: number;
  subject: string;
  gradeLevel: string;
  difficultyLevel: string;
  detailedLevel: string;
  standardGrading: string;
  deadline: Date;
  content?: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  submissionStatus: "Submitted" | "Late" | "Not Submitted";
  submissionDate?: string;
  aiGrade?: number;
  finalGrade?: number;
}

interface AssignmentDashboardProps {
  assignment: Assignment;
  onBack: () => void;
  onEdit: () => void;
}

export const AssignmentDashboard = ({ assignment, onBack, onEdit }: AssignmentDashboardProps) => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Emma Johnson",
      email: "emma.j@example.com",
      submissionStatus: "Submitted",
      submissionDate: "2024-03-22 14:30",
      aiGrade: 85,
      finalGrade: 88
    },
    {
      id: "2",
      name: "Michael Smith",
      email: "michael.s@example.com",
      submissionStatus: "Submitted",
      submissionDate: "2024-03-23 09:15",
      aiGrade: 92,
      finalGrade: 90
    },
    {
      id: "3",
      name: "Sophia Garcia",
      email: "sophia.g@example.com",
      submissionStatus: "Late",
      submissionDate: "2024-03-26 22:45",
      aiGrade: 78
    },
    {
      id: "4",
      name: "William Brown",
      email: "william.b@example.com",
      submissionStatus: "Not Submitted"
    },
    {
      id: "5",
      name: "Olivia Davis",
      email: "olivia.d@example.com",
      submissionStatus: "Submitted",
      submissionDate: "2024-03-22 16:20",
      aiGrade: 88
    }
  ]);

  const updateFinalGrade = (studentId: string, grade: number) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, finalGrade: grade } 
        : student
    ));
  };

  const applyAIGrades = () => {
    setStudents(students.map(student => 
      student.aiGrade && !student.finalGrade
        ? { ...student, finalGrade: student.aiGrade }
        : student
    ));
  };

  const submissionStats = {
    total: students.length,
    submitted: students.filter(s => s.submissionStatus === "Submitted").length,
    late: students.filter(s => s.submissionStatus === "Late").length,
    notSubmitted: students.filter(s => s.submissionStatus === "Not Submitted").length,
    graded: students.filter(s => s.finalGrade !== undefined).length
  };

  // Analytics data
  const gradeDistributionData = [
    { range: "90-100", count: students.filter(s => s.finalGrade && s.finalGrade >= 90).length, fill: "#4CAF50" },
    { range: "80-89", count: students.filter(s => s.finalGrade && s.finalGrade >= 80 && s.finalGrade < 90).length, fill: "#8BC34A" },
    { range: "70-79", count: students.filter(s => s.finalGrade && s.finalGrade >= 70 && s.finalGrade < 80).length, fill: "#FFEB3B" },
    { range: "60-69", count: students.filter(s => s.finalGrade && s.finalGrade >= 60 && s.finalGrade < 70).length, fill: "#FFC107" },
    { range: "Below 60", count: students.filter(s => s.finalGrade && s.finalGrade < 60).length, fill: "#FF5722" }
  ];

  const submissionTimingData = [
    { name: "Early (>3 days)", value: 2 },
    { name: "On time (1-3 days)", value: 1 },
    { name: "Last minute (<1 day)", value: 1 },
    { name: "Late", value: 1 },
    { name: "Not submitted", value: 1 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  const completionRateData = [
    { name: "Complete", value: submissionStats.submitted + submissionStats.late },
    { name: "Incomplete", value: submissionStats.notSubmitted }
  ];

  const performanceTrendData = [
    { name: "Assignment 1", avgScore: 75 },
    { name: "Assignment 2", avgScore: 78 },
    { name: "Assignment 3", avgScore: 72 },
    { name: "Assignment 4", avgScore: 80 },
    { name: "Current", avgScore: 85 }
  ];

  const timeTakenData = [
    { name: "<15 min", students: 1 },
    { name: "15-30 min", students: 2 },
    { name: "30-45 min", students: 1 },
    { name: ">45 min", students: 1 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assignments
          </Button>
          <h2 className="text-2xl font-semibold">{assignment.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Due: {assignment.dueDate}
          </span>
          <Button variant="outline" size="sm" onClick={onEdit}>
            Edit Assignment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{submissionStats.total}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{submissionStats.submitted + submissionStats.late}</p>
            <p className="text-xs text-gray-500">{submissionStats.late} late</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Not Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{submissionStats.notSubmitted}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Graded</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{submissionStats.graded}</p>
            <p className="text-xs text-gray-500">of {submissionStats.submitted + submissionStats.late} submissions</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Student Submissions</TabsTrigger>
          <TabsTrigger value="overview">Assignment Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="students">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Student Submissions</CardTitle>
                {students.some(s => s.aiGrade && !s.finalGrade) && (
                  <Button onClick={applyAIGrades}>
                    Apply All AI Grades
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>AI Grade</TableHead>
                    <TableHead>Final Grade</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          student.submissionStatus === "Submitted" 
                            ? "bg-green-100 text-green-800" 
                            : student.submissionStatus === "Late" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                        }`}>
                          {student.submissionStatus}
                        </span>
                      </TableCell>
                      <TableCell>
                        {student.submissionDate || "-"}
                      </TableCell>
                      <TableCell>
                        {student.aiGrade !== undefined 
                          ? `${student.aiGrade} / ${assignment.maxPoints}` 
                          : "-"}
                      </TableCell>
                      <TableCell>
                        {student.submissionStatus !== "Not Submitted" ? (
                          student.finalGrade !== undefined ? (
                            `${student.finalGrade} / ${assignment.maxPoints}`
                          ) : (
                            <input 
                              type="number" 
                              min="0" 
                              max={assignment.maxPoints}
                              className="w-16 p-1 border rounded" 
                              placeholder="Grade"
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value)) {
                                  updateFinalGrade(student.id, value);
                                }
                              }}
                            />
                          )
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>
                        {student.submissionStatus !== "Not Submitted" && (
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View</Button>
                            {student.aiGrade === undefined && (
                              <Button variant="outline" size="sm">Grade with AI</Button>
                            )}
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Description</h3>
                <p className="text-gray-700">{assignment.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Due Date</h3>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="h-4 w-4" />
                    {assignment.dueDate}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium">Maximum Points</h3>
                  <p className="text-gray-700">{assignment.maxPoints}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium">Grade Distribution</h3>
                <div className="h-16 bg-gray-100 rounded-md mt-2 flex items-end">
                  {/* This would be a real chart in a production app */}
                  <div className="h-8 w-1/5 bg-green-500 rounded-bl-md"></div>
                  <div className="h-12 w-2/5 bg-green-600"></div>
                  <div className="h-10 w-1/5 bg-green-700"></div>
                  <div className="h-6 w-1/5 bg-green-800 rounded-br-md"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0-25%</span>
                  <span>26-50%</span>
                  <span>51-75%</span>
                  <span>76-100%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  Grade Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={gradeDistributionData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Number of Students">
                        {gradeDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Analysis: Most students scored in the 80-89 range, indicating a good understanding of the material with room for improvement.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5" />
                  Submission Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={submissionTimingData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {submissionTimingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Analysis: Most students submitted early, which correlates with higher grades. Consider sending reminders to encourage early submissions.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Completion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={completionRateData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        <Cell fill="#4CAF50" />
                        <Cell fill="#F44336" />
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Analysis: {Math.round(((submissionStats.submitted + submissionStats.late) / submissionStats.total) * 100)}% completion rate is {((submissionStats.submitted + submissionStats.late) / submissionStats.total) > 0.8 ? "above average" : "below average"} compared to previous assignments.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-5 w-5" />
                  Performance Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart
                      data={performanceTrendData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="avgScore" stroke="#8884d8" name="Average Score" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Analysis: There's a positive trend in performance over the past assignments, suggesting that students are improving their understanding of the material.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Timer className="mr-2 h-5 w-5" />
                  Time Spent on Assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={timeTakenData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="students" name="Number of Students" fill="#82ca9d" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Analysis: Most students spent 15-30 minutes on this assignment. Those who spent more time typically achieved better results.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Insights and Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">1</div>
                    <div>
                      <p className="font-medium">Assignment difficulty was appropriate</p>
                      <p className="text-sm text-gray-500">Based on grade distribution and completion times, the difficulty level seems well-calibrated for this class.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">2</div>
                    <div>
                      <p className="font-medium">Students need more support with concept X</p>
                      <p className="text-sm text-gray-500">Questions related to this concept had lower average scores, suggesting a need for additional instruction.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">3</div>
                    <div>
                      <p className="font-medium">Consider extension activities</p>
                      <p className="text-sm text-gray-500">Several high-performing students completed the assignment quickly, suggesting they could benefit from more challenging work.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">4</div>
                    <div>
                      <p className="font-medium">Follow up with non-submitting students</p>
                      <p className="text-sm text-gray-500">The non-submission rate of {Math.round((submissionStats.notSubmitted / submissionStats.total) * 100)}% suggests the need for targeted intervention with these students.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

