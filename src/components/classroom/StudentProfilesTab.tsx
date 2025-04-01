
// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { CheckCircle2, Target, UserCircle } from "lucide-react";

// const mockStudents = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     email: "alex@example.com",
//     attendance: 92,
//     overallGrade: "A-",
//     strengths: ["Critical Thinking", "Written Expression"],
//     areasForImprovement: ["Group Participation"],
//     recentProgress: "+15%",
//     behavioralNotes: "Shows great initiative in class discussions",
//     learningStyle: "Visual",
//     accommodations: "None required",
//     parentMeetings: 2,
//     assignments: [
//       { name: "Midterm Essay", grade: 88, feedback: "Excellent analysis" },
//       { name: "Group Project", grade: 85, feedback: "Good teamwork" }
//     ],
//     analytics: {
//       participationTrend: "Increasing",
//       completionRate: 95,
//       averageScore: 87,
//       improvementAreas: ["Public Speaking", "Team Leadership"]
//     }
//   },
// ];

// const studentAnalytics = [
//   {
//     title: "Academic Performance",
//     metrics: [
//       { label: "Overall Grade", value: "87%", trend: "up" },
//       { label: "Assignment Completion", value: "95%", trend: "stable" },
//       { label: "Class Participation", value: "82%", trend: "up" }
//     ]
//   },
//   {
//     title: "Learning Progress",
//     metrics: [
//       { label: "Concepts Mastered", value: "15/20", trend: "up" },
//       { label: "Skills Developed", value: "8/10", trend: "up" },
//       { label: "Project Quality", value: "90%", trend: "stable" }
//     ]
//   }
// ];

// export const StudentProfilesTab = () => {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="space-y-4">
//         <Card className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold">Students</h3>
//             <Input 
//               placeholder="Search students..." 
//               className="max-w-[200px]"
//             />
//           </div>
//           <div className="space-y-2">
//             {mockStudents.map((student) => (
//               <div
//                 key={student.id}
//                 className="p-2 hover:bg-gray-50 rounded cursor-pointer"
//                 onClick={() => setSelectedStudent(student)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-medium">{student.name}</p>
//                     <p className="text-sm text-gray-500">{student.email}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium">{student.overallGrade}</p>
//                     <p className="text-sm text-green-500">{student.recentProgress}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>

//       <div className="md:col-span-2 space-y-4">
//         {selectedStudent ? (
//           <>
//             <Card className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
//                   <p className="text-gray-600">{selectedStudent.email}</p>
//                 </div>
//                 <Button>Generate Report</Button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-semibold mb-2">Strengths</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.strengths.map((strength, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                         <span>{strength}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Areas for Improvement</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.areasForImprovement.map((area, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <Target className="h-4 w-4 text-orange-500" />
//                         <span>{area}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {studentAnalytics.map((section, index) => (
//                 <Card key={index} className="p-4">
//                   <h3 className="font-semibold mb-4">{section.title}</h3>
//                   <div className="space-y-4">
//                     {section.metrics.map((metric, idx) => (
//                       <div key={idx}>
//                         <div className="flex justify-between text-sm mb-1">
//                           <span>{metric.label}</span>
//                           <span className="font-medium">{metric.value}</span>
//                         </div>
//                         <Progress value={parseInt(metric.value)} className="h-2" />
//                       </div>
//                     ))}
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </>
//         ) : (
//           <Card className="p-6 text-center">
//             <UserCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium">Select a Student</h3>
//             <p className="text-gray-500">Choose a student to view their detailed profile</p>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };



// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { 
//   CheckCircle2, 
//   Target, 
//   UserCircle, 
//   FileText, 
//   Share2,
//   BookOpen,
//   TrendingUp,
//   Users,
//   Calendar,
//   Award,
//   AlertTriangle,
//   Download,
//   Mail
// } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent
// } from "@/components/ui/chart";
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar
// } from "recharts";
// import { useAssignments } from "@/hooks/useAssignments";
// import { useAssignmentSubmissions } from "@/hooks/useAssignmentSubmissions";
// import { useParams } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// // Enhanced student data model
// const mockStudents = [
//   {
//     id: "1",
//     name: "Alex Johnson",
//     email: "alex@example.com",
//     attendance: 92,
//     overallGrade: "A-",
//     gpa: 3.7,
//     strengths: ["Critical Thinking", "Written Expression", "Research Skills"],
//     areasForImprovement: ["Group Participation", "Time Management"],
//     recentProgress: "+15%",
//     behavioralNotes: "Shows great initiative in class discussions. Tends to work better independently than in groups.",
//     learningStyle: "Visual",
//     accommodations: "None required",
//     parentMeetings: 2,
//     lastParentContact: "2024-03-15",
//     assignments: [
//       { id: "a1", name: "Midterm Essay", grade: 88, feedback: "Excellent analysis but could improve structure" },
//       { id: "a2", name: "Group Project", grade: 85, feedback: "Good contribution, needs more team coordination" },
//       { id: "a3", name: "Research Paper", grade: 92, feedback: "Outstanding research skills and insights" },
//       { id: "a4", name: "Weekly Quiz", grade: 78, feedback: "Review chapters 5-7 for better comprehension" }
//     ],
//     attendance_record: [
//       { date: "2024-03-01", status: "Present" },
//       { date: "2024-03-05", status: "Present" },
//       { date: "2024-03-08", status: "Late" },
//       { date: "2024-03-12", status: "Present" },
//       { date: "2024-03-15", status: "Absent" },
//       { date: "2024-03-19", status: "Present" },
//       { date: "2024-03-22", status: "Present" }
//     ],
//     skills: [
//       { name: "Problem Solving", value: 85 },
//       { name: "Communication", value: 70 },
//       { name: "Teamwork", value: 65 },
//       { name: "Technical Skills", value: 90 },
//       { name: "Critical Thinking", value: 85 },
//       { name: "Creativity", value: 75 }
//     ],
//     gradeProgression: [
//       { month: "Sep", grade: 75 },
//       { month: "Oct", grade: 78 },
//       { month: "Nov", grade: 82 },
//       { month: "Dec", grade: 80 },
//       { month: "Jan", grade: 84 },
//       { month: "Feb", grade: 87 },
//       { month: "Mar", grade: 90 }
//     ],
//     subjectPerformance: [
//       { subject: "Math", score: 82 },
//       { subject: "Science", score: 90 },
//       { subject: "English", score: 85 },
//       { subject: "History", score: 78 },
//       { subject: "Art", score: 88 }
//     ],
//     behavioralInsights: [
//       "Highly engaged in discussions",
//       "Prefers individual assignments over group work",
//       "Shows strong leadership in class debates",
//       "Occasionally struggles with deadlines",
//       "Excels at creative problem-solving tasks"
//     ],
//     recommendations: [
//       "Encourage group work with defined roles",
//       "Provide more challenging research tasks",
//       "Set intermediate deadlines for larger projects",
//       "Connect with study partner for time management strategies"
//     ],
//     supportNeeds: "Occasional check-ins about time management"
//   },
//   {
//     id: "2",
//     name: "Maya Rodriguez",
//     email: "maya.r@example.com",
//     attendance: 96,
//     overallGrade: "B+",
//     gpa: 3.3,
//     strengths: ["Teamwork", "Presentation Skills", "Creative Projects"],
//     areasForImprovement: ["Written Analysis", "Test Performance"],
//     recentProgress: "+8%",
//     behavioralNotes: "Excellent team player. Supports peers and contributes positively to class atmosphere.",
//     learningStyle: "Kinesthetic",
//     accommodations: "Extended time on tests",
//     parentMeetings: 1,
//     lastParentContact: "2024-02-20",
//     assignments: [
//       { id: "a1", name: "Midterm Essay", grade: 76, feedback: "Work on structure and analysis depth" },
//       { id: "a2", name: "Group Project", grade: 92, feedback: "Excellent leadership and coordination" },
//       { id: "a3", name: "Research Paper", grade: 78, feedback: "Good ideas but needs more critical analysis" },
//       { id: "a4", name: "Weekly Quiz", grade: 82, feedback: "Consistent improvement shown" }
//     ],
//     attendance_record: [
//       { date: "2024-03-01", status: "Present" },
//       { date: "2024-03-05", status: "Present" },
//       { date: "2024-03-08", status: "Present" },
//       { date: "2024-03-12", status: "Present" },
//       { date: "2024-03-15", status: "Present" },
//       { date: "2024-03-19", status: "Late" },
//       { date: "2024-03-22", status: "Present" }
//     ],
//     skills: [
//       { name: "Problem Solving", value: 72 },
//       { name: "Communication", value: 90 },
//       { name: "Teamwork", value: 94 },
//       { name: "Technical Skills", value: 75 },
//       { name: "Critical Thinking", value: 70 },
//       { name: "Creativity", value: 88 }
//     ],
//     gradeProgression: [
//       { month: "Sep", grade: 75 },
//       { month: "Oct", grade: 73 },
//       { month: "Nov", grade: 75 },
//       { month: "Dec", grade: 78 },
//       { month: "Jan", grade: 80 },
//       { month: "Feb", grade: 82 },
//       { month: "Mar", grade: 85 }
//     ],
//     subjectPerformance: [
//       { subject: "Math", score: 75 },
//       { subject: "Science", score: 78 },
//       { subject: "English", score: 80 },
//       { subject: "History", score: 83 },
//       { subject: "Art", score: 92 }
//     ],
//     behavioralInsights: [
//       "Natural leader in group settings",
//       "Helps struggling classmates frequently",
//       "Participates actively in class discussions",
//       "Performs better on projects than exams",
//       "Responds well to verbal feedback"
//     ],
//     recommendations: [
//       "Provide writing structure templates for essays",
//       "Assign peer tutoring opportunities",
//       "Implement test-taking strategies practice",
//       "Consider alternative assessment methods"
//     ],
//     supportNeeds: "Test anxiety support, writing skill development"
//   }
// ];

// export const StudentProfilesTab = () => {
//   const { id: classroomId } = useParams<{ id: string }>();
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [reportPeriod, setReportPeriod] = useState("semester");
//   const [reportType, setReportType] = useState("comprehensive");
//   const { toast } = useToast();
  
//   // Filter students based on search query
//   const filteredStudents = mockStudents.filter(student => 
//     student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     student.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );
  
//   // Use real assignment data when available
//   const { assignments = [] } = useAssignments(classroomId || "");

//   const handleGenerateReport = () => {
//     toast({
//       title: "Report Generated",
//       description: `${selectedStudent.name}'s ${reportType} report for the ${reportPeriod} has been generated.`,
//       duration: 3000,
//     });
//   };

//   const handleShareReport = () => {
//     toast({
//       title: "Report Shared",
//       description: `A shareable link for ${selectedStudent.name}'s report has been copied to clipboard.`,
//       duration: 3000,
//     });
//   };

//   const handleSendToParents = () => {
//     toast({
//       title: "Report Sent",
//       description: `${selectedStudent.name}'s report has been emailed to parents/guardians.`,
//       duration: 3000,
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//       {/* Student List Panel - 1/4 width */}
//       <div className="space-y-4">
//         <Card className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold">Students</h3>
//             <Input 
//               placeholder="Search students..." 
//               className="max-w-[200px]"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
          
//           {/* Quick filters */}
//           <div className="flex gap-2 mb-4 flex-wrap">
//             <Button variant="outline" size="sm">All</Button>
//             <Button variant="outline" size="sm" className="bg-green-50">High Achievers</Button>
//             <Button variant="outline" size="sm" className="bg-yellow-50">Needs Support</Button>
//             <Button variant="outline" size="sm" className="bg-red-50">Attendance Issues</Button>
//           </div>
          
//           <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
//             {filteredStudents.map((student) => (
//               <div
//                 key={student.id}
//                 className={`p-3 hover:bg-gray-50 rounded cursor-pointer border ${selectedStudent?.id === student.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
//                 onClick={() => setSelectedStudent(student)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-medium">{student.name}</p>
//                     <p className="text-sm text-gray-500">{student.email}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium">{student.overallGrade}</p>
//                     <p className={`text-sm ${student.recentProgress.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
//                       {student.recentProgress}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Quick indicators */}
//                 <div className="flex mt-2 gap-1">
//                   {student.attendance < 85 && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                       Attendance
//                     </span>
//                   )}
//                   {student.gpa > 3.5 && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Top Performer
//                     </span>
//                   )}
//                   {student.supportNeeds && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                       Support
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>

//       {/* Student Details Panel - 3/4 width */}
//       <div className="md:col-span-3 space-y-4">
//         {selectedStudent ? (
//           <>
//             {/* Student Profile Header Card */}
//             <Card className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
//                   <p className="text-gray-600">{selectedStudent.email}</p>
//                   <div className="flex items-center gap-4 mt-2">
//                     <div className="flex items-center gap-1">
//                       <BookOpen className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">GPA: {selectedStudent.gpa}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">Attendance: {selectedStudent.attendance}%</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Award className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">Grade: {selectedStudent.overallGrade}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Report generation controls */}
//                 <div className="flex flex-col gap-3">
//                   <div className="flex gap-2">
//                     <Select value={reportPeriod} onValueChange={setReportPeriod}>
//                       <SelectTrigger className="w-[150px]">
//                         <SelectValue placeholder="Report Period" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="semester">Semester</SelectItem>
//                         <SelectItem value="quarter">Quarter</SelectItem>
//                         <SelectItem value="month">Month</SelectItem>
//                         <SelectItem value="custom">Custom Range</SelectItem>
//                       </SelectContent>
//                     </Select>
                    
//                     <Select value={reportType} onValueChange={setReportType}>
//                       <SelectTrigger className="w-[150px]">
//                         <SelectValue placeholder="Report Type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="comprehensive">Comprehensive</SelectItem>
//                         <SelectItem value="academic">Academic Only</SelectItem>
//                         <SelectItem value="behavioral">Behavioral Only</SelectItem>
//                         <SelectItem value="summary">Executive Summary</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <Button onClick={handleGenerateReport} className="gap-1">
//                       <FileText className="h-4 w-4" />
//                       Generate Report
//                     </Button>
//                     <Button variant="outline" onClick={handleShareReport} className="gap-1">
//                       <Share2 className="h-4 w-4" />
//                       Share
//                     </Button>
//                     <Button variant="outline" onClick={handleSendToParents} className="gap-1">
//                       <Mail className="h-4 w-4" />
//                       Send to Parents
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Strengths and Areas for Improvement */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="font-semibold mb-2">Strengths</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.strengths.map((strength, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                         <span>{strength}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Areas for Improvement</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.areasForImprovement.map((area, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <Target className="h-4 w-4 text-orange-500" />
//                         <span>{area}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Student Details Tabs */}
//             <Tabs defaultValue="performance">
//               <TabsList className="mb-4">
//                 <TabsTrigger value="performance">Academic Performance</TabsTrigger>
//                 <TabsTrigger value="behavior">Behavioral Insights</TabsTrigger>
//                 <TabsTrigger value="attendance">Attendance</TabsTrigger>
//                 <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
//               </TabsList>
              
//               {/* Academic Performance Tab */}
//               <TabsContent value="performance" className="space-y-6">
//                 {/* Grade Progression Chart */}
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4 flex items-center">
//                       <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
//                       Grade Progression
//                     </h3>
//                     <div className="h-72">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart
//                           data={selectedStudent.gradeProgression}
//                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                         >
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="month" />
//                           <YAxis domain={[0, 100]} />
//                           <Tooltip />
//                           <Legend />
//                           <Line 
//                             type="monotone" 
//                             dataKey="grade" 
//                             stroke="#3b82f6" 
//                             activeDot={{ r: 8 }} 
//                             name="Grade" 
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-4">
//                       {selectedStudent.name} has shown {selectedStudent.gradeProgression[6].grade > selectedStudent.gradeProgression[0].grade ? 'consistent improvement' : 'some fluctuation'} in academic performance over the past months.
//                       {selectedStudent.gradeProgression[6].grade - selectedStudent.gradeProgression[0].grade > 10 && 
//                         ' The significant upward trend indicates effective learning and adaptation to the curriculum.'}
//                     </p>
//                   </div>
//                 </Card>

//                 {/* Subject Performance */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Card>
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={selectedStudent.subjectPerformance}
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="subject" />
//                             <YAxis domain={[0, 100]} />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="score" fill="#8884d8" name="Score" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-sm text-gray-500">
//                           Strongest subject: {selectedStudent.subjectPerformance.reduce((a, b) => a.score > b.score ? a : b).subject}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Area needing attention: {selectedStudent.subjectPerformance.reduce((a, b) => a.score < b.score ? a : b).subject}
//                         </p>
//                       </div>
//                     </div>
//                   </Card>

//                   {/* Skills Assessment */}
//                   <Card>
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold mb-4">Skills Assessment</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <RadarChart 
//                             cx="50%" 
//                             cy="50%" 
//                             outerRadius="80%" 
//                             data={selectedStudent.skills}
//                           >
//                             <PolarGrid />
//                             <PolarAngleAxis dataKey="name" />
//                             <PolarRadiusAxis domain={[0, 100]} />
//                             <Radar
//                               name="Skills"
//                               dataKey="value"
//                               stroke="#8884d8"
//                               fill="#8884d8"
//                               fillOpacity={0.6}
//                             />
//                             <Tooltip />
//                           </RadarChart>
//                         </ResponsiveContainer>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-sm text-gray-500">
//                           {selectedStudent.name} demonstrates exceptional strength in 
//                           {' '}{selectedStudent.skills.reduce((a, b) => a.value > b.value ? a : b).name}, 
//                           while {selectedStudent.skills.reduce((a, b) => a.value < b.value ? a : b).name} could use further development.
//                         </p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>

//                 {/* Recent Assignments */}
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Recent Assignments</h3>
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Assignment
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Grade
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Feedback
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {selectedStudent.assignments.map((assignment) => (
//                             <tr key={assignment.id}>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-sm font-medium text-gray-900">{assignment.name}</div>
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className={`text-sm font-medium ${
//                                   assignment.grade >= 90 ? 'text-green-600' : 
//                                   assignment.grade >= 80 ? 'text-blue-600' :
//                                   assignment.grade >= 70 ? 'text-yellow-600' : 'text-red-600'
//                                 }`}>
//                                   {assignment.grade}/100
//                                 </div>
//                               </td>
//                               <td className="px-6 py-4">
//                                 <div className="text-sm text-gray-500">{assignment.feedback}</div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               {/* Behavioral Insights Tab */}
//               <TabsContent value="behavior" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Behavioral Observations</h3>
//                     <div className="space-y-4">
//                       {selectedStudent.behavioralInsights.map((insight, index) => (
//                         <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
//                           <div className="mt-1 text-blue-500">
//                             <Users className="h-5 w-5" />
//                           </div>
//                           <div>
//                             <p className="text-gray-800">{insight}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-6">
//                       <h4 className="font-medium mb-2">Teacher Notes</h4>
//                       <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
//                         <p className="text-gray-700">{selectedStudent.behavioralNotes}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
                
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Learning Profile</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <h4 className="font-medium mb-3">Learning Style</h4>
//                         <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
//                           <p className="text-blue-800 font-medium">{selectedStudent.learningStyle}</p>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {selectedStudent.learningStyle === 'Visual' ? 
//                               'Learns best through visual aids, diagrams, and written materials.' :
//                               selectedStudent.learningStyle === 'Auditory' ?
//                               'Learns best through listening, discussions, and verbal instructions.' :
//                               'Learns best through hands-on activities, movement, and practical applications.'}
//                           </p>
//                         </div>
                        
//                         <h4 className="font-medium mb-3 mt-4">Accommodations</h4>
//                         <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
//                           <p className="text-purple-800">{selectedStudent.accommodations}</p>
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h4 className="font-medium mb-3">Parent Communication</h4>
//                         <div className="space-y-3">
//                           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
//                             <span className="text-gray-700">Parent Meetings</span>
//                             <span className="font-medium">{selectedStudent.parentMeetings} this semester</span>
//                           </div>
//                           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
//                             <span className="text-gray-700">Last Contact</span>
//                             <span className="font-medium">{selectedStudent.lastParentContact}</span>
//                           </div>
//                         </div>
                        
//                         <Button variant="outline" className="mt-4 w-full">
//                           <Mail className="h-4 w-4 mr-2" />
//                           Contact Parents
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               {/* Attendance Tab */}
//               <TabsContent value="attendance" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4 flex items-center">
//                       <Calendar className="h-5 w-5 mr-2 text-blue-500" />
//                       Attendance Overview
//                     </h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                       <div className="p-4 bg-green-50 rounded-md border border-green-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Present</h4>
//                         <p className="text-2xl font-bold text-green-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Present').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Present').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
                      
//                       <div className="p-4 bg-yellow-50 rounded-md border border-yellow-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Late</h4>
//                         <p className="text-2xl font-bold text-yellow-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Late').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Late').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
                      
//                       <div className="p-4 bg-red-50 rounded-md border border-red-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Absent</h4>
//                         <p className="text-2xl font-bold text-red-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Absent').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Absent').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
//                     </div>
                    
//                     <h4 className="font-medium mb-3">Attendance Record</h4>
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Date
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Status
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {selectedStudent.attendance_record.map((record, index) => (
//                             <tr key={index}>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-sm font-medium text-gray-900">{record.date}</div>
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                                   record.status === 'Present' ? 'bg-green-100 text-green-800' : 
//                                   record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 
//                                   'bg-red-100 text-red-800'
//                                 }`}>
//                                   {record.status}
//                                 </span>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
                    
//                     {/* Attendance Analysis */}
//                     {selectedStudent.attendance < 90 && (
//                       <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
//                         <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                         <div>
//                           <h4 className="font-medium text-red-800">Attendance Alert</h4>
//                           <p className="text-sm text-gray-700 mt-1">
//                             {selectedStudent.name}'s attendance rate ({selectedStudent.attendance}%) is below the 90% threshold. Consider scheduling a parent conference to address this issue.
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               {/* Recommendations Tab */}
//               <TabsContent value="recommendations" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Personalized Recommendations</h3>
//                     <div className="space-y-4">
//                       {selectedStudent.recommendations.map((recommendation, index) => (
//                         <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-md border border-blue-100">
//                           <div className="mt-1 text-blue-500 flex-shrink-0">
//                             <CheckCircle2 className="h-5 w-5" />
//                           </div>
//                           <div>
//                             <p className="text-gray-800 font-medium">{recommendation}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Support Needs */}
//                     {selectedStudent.supportNeeds && (
//                       <div className="mt-6">
//                         <h4 className="font-medium mb-3">Support Needs</h4>
//                         <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
//                           <div className="flex gap-2">
//                             <AlertTriangle className="h-5 w-5 text-purple-500 flex-shrink-0" />
//                             <p className="text-gray-700">{selectedStudent.supportNeeds}</p>
//                           </div>
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Actions */}
//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <Button className="w-full">
//                         <FileText className="h-4 w-4 mr-2" />
//                         Create Intervention Plan
//                       </Button>
//                       <Button variant="outline" className="w-full">
//                         <Users className="h-4 w-4 mr-2" />
//                         Schedule Student Conference
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
                
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Resources & Referrals</h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
//                         <h4 className="font-medium mb-2">Academic Resources</h4>
//                         <ul className="space-y-2 text-sm">
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Study Skills Workshop</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>After-School Tutoring Program</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Online Learning Modules</span>
//                           </li>
//                         </ul>
//                       </div>
                      
//                       <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
//                         <h4 className="font-medium mb-2">Support Services</h4>
//                         <ul className="space-y-2 text-sm">
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>School Counselor Referral</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Peer Mentoring Program</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Parent-Teacher Conference</span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
//             </Tabs>
            
//             {/* Action Buttons */}
//             <div className="flex justify-end gap-3">
//               <Button variant="outline" className="gap-1">
//                 <Download className="h-4 w-4" />
//                 Download Report
//               </Button>
//               <Button variant="outline" className="gap-1">
//                 <Share2 className="h-4 w-4" />
//                 Share with Administration
//               </Button>
//               <Button variant="outline" className="gap-1">
//                 <Mail className="h-4 w-4" />
//                 Email to Parents
//               </Button>
//             </div>
//           </>
//         ) : (
//           <Card className="p-6 text-center">
//             <UserCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium">Select a Student</h3>
//             <p className="text-gray-500">Choose a student to view their detailed profile and generate reports</p>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { 
//   CheckCircle2, 
//   Target, 
//   UserCircle, 
//   FileText, 
//   BookOpen,
//   TrendingUp,
//   Users,
//   Calendar,
//   Award,
//   AlertTriangle,
//   Download,
//   Mail,
//   MessageCircle,
//   GraduationCap
// } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent
// } from "@/components/ui/chart";
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar
// } from "recharts";
// import { useAssignments } from "@/hooks/useAssignments";
// import { useAssignmentSubmissions } from "@/hooks/useAssignmentSubmissions";
// import { useParams } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const mockStudents = [
//   {
//     id: "1",
//     name: "Alex Johnson",
//     email: "alex@example.com",
//     attendance: 92,
//     overallGrade: "A-",
//     gpa: 3.7,
//     strengths: ["Critical Thinking", "Written Expression", "Research Skills"],
//     areasForImprovement: ["Group Participation", "Time Management"],
//     recentProgress: "+15%",
//     behavioralNotes: "Shows great initiative in class discussions. Tends to work better independently than in groups.",
//     learningStyle: "Visual",
//     accommodations: "None required",
//     parentMeetings: 2,
//     lastParentContact: "2024-03-15",
//     assignments: [
//       { id: "a1", name: "Midterm Essay", grade: 88, feedback: "Excellent analysis but could improve structure" },
//       { id: "a2", name: "Group Project", grade: 85, feedback: "Good contribution, needs more team coordination" },
//       { id: "a3", name: "Research Paper", grade: 92, feedback: "Outstanding research skills and insights" },
//       { id: "a4", name: "Weekly Quiz", grade: 78, feedback: "Review chapters 5-7 for better comprehension" }
//     ],
//     attendance_record: [
//       { date: "2024-03-01", status: "Present" },
//       { date: "2024-03-05", status: "Present" },
//       { date: "2024-03-08", status: "Late" },
//       { date: "2024-03-12", status: "Present" },
//       { date: "2024-03-15", status: "Absent" },
//       { date: "2024-03-19", status: "Present" },
//       { date: "2024-03-22", status: "Present" }
//     ],
//     skills: [
//       { name: "Problem Solving", value: 85 },
//       { name: "Communication", value: 70 },
//       { name: "Teamwork", value: 65 },
//       { name: "Technical Skills", value: 90 },
//       { name: "Critical Thinking", value: 85 },
//       { name: "Creativity", value: 75 }
//     ],
//     gradeProgression: [
//       { month: "Sep", grade: 75 },
//       { month: "Oct", grade: 78 },
//       { month: "Nov", grade: 82 },
//       { month: "Dec", grade: 80 },
//       { month: "Jan", grade: 84 },
//       { month: "Feb", grade: 87 },
//       { month: "Mar", grade: 90 }
//     ],
//     subjectPerformance: [
//       { subject: "Math", score: 82 },
//       { subject: "Science", score: 90 },
//       { subject: "English", score: 85 },
//       { subject: "History", score: 78 },
//       { subject: "Art", score: 88 }
//     ],
//     behavioralInsights: [
//       "Highly engaged in discussions",
//       "Prefers individual assignments over group work",
//       "Shows strong leadership in class debates",
//       "Occasionally struggles with deadlines",
//       "Excels at creative problem-solving tasks"
//     ],
//     recommendations: [
//       "Encourage group work with defined roles",
//       "Provide more challenging research tasks",
//       "Set intermediate deadlines for larger projects",
//       "Connect with study partner for time management strategies"
//     ],
//     supportNeeds: "Occasional check-ins about time management",
//     conciseRecommendation: "Strong academic performer who would benefit from structured group work opportunities and deadline management strategies. Consider advanced research projects to challenge and engage."
//   },
//   {
//     id: "2",
//     name: "Maya Rodriguez",
//     email: "maya.r@example.com",
//     attendance: 96,
//     overallGrade: "B+",
//     gpa: 3.3,
//     strengths: ["Teamwork", "Presentation Skills", "Creative Projects"],
//     areasForImprovement: ["Written Analysis", "Test Performance"],
//     recentProgress: "+8%",
//     behavioralNotes: "Excellent team player. Supports peers and contributes positively to class atmosphere.",
//     learningStyle: "Kinesthetic",
//     accommodations: "Extended time on tests",
//     parentMeetings: 1,
//     lastParentContact: "2024-02-20",
//     assignments: [
//       { id: "a1", name: "Midterm Essay", grade: 76, feedback: "Work on structure and analysis depth" },
//       { id: "a2", name: "Group Project", grade: 92, feedback: "Excellent leadership and coordination" },
//       { id: "a3", name: "Research Paper", grade: 78, feedback: "Good ideas but needs more critical analysis" },
//       { id: "a4", name: "Weekly Quiz", grade: 82, feedback: "Consistent improvement shown" }
//     ],
//     attendance_record: [
//       { date: "2024-03-01", status: "Present" },
//       { date: "2024-03-05", status: "Present" },
//       { date: "2024-03-08", status: "Present" },
//       { date: "2024-03-12", status: "Present" },
//       { date: "2024-03-15", status: "Present" },
//       { date: "2024-03-19", status: "Late" },
//       { date: "2024-03-22", status: "Present" }
//     ],
//     skills: [
//       { name: "Problem Solving", value: 72 },
//       { name: "Communication", value: 90 },
//       { name: "Teamwork", value: 94 },
//       { name: "Technical Skills", value: 75 },
//       { name: "Critical Thinking", value: 70 },
//       { name: "Creativity", value: 88 }
//     ],
//     gradeProgression: [
//       { month: "Sep", grade: 75 },
//       { month: "Oct", grade: 73 },
//       { month: "Nov", grade: 75 },
//       { month: "Dec", grade: 78 },
//       { month: "Jan", grade: 80 },
//       { month: "Feb", grade: 82 },
//       { month: "Mar", grade: 85 }
//     ],
//     subjectPerformance: [
//       { subject: "Math", score: 75 },
//       { subject: "Science", score: 78 },
//       { subject: "English", score: 80 },
//       { subject: "History", score: 83 },
//       { subject: "Art", score: 92 }
//     ],
//     behavioralInsights: [
//       "Natural leader in group settings",
//       "Helps struggling classmates frequently",
//       "Participates actively in class discussions",
//       "Performs better on projects than exams",
//       "Responds well to verbal feedback"
//     ],
//     recommendations: [
//       "Provide writing structure templates for essays",
//       "Assign peer tutoring opportunities",
//       "Implement test-taking strategies practice",
//       "Consider alternative assessment methods"
//     ],
//     supportNeeds: "Test anxiety support, writing skill development",
//     conciseRecommendation: "Excellent collaborative learner who excels in group settings. Focus on developing written analysis skills and test-taking strategies. An ideal candidate for peer leadership roles."
//   }
// ];

// export const StudentProfilesTab = () => {
//   const { id: classroomId } = useParams<{ id: string }>();
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [reportType, setReportType] = useState("academic");
//   const { toast } = useToast();
  
//   const filteredStudents = mockStudents.filter(student => 
//     student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     student.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );
  
//   const { assignments = [] } = useAssignments(classroomId || "");

//   const handleGenerateReport = () => {
//     toast({
//       title: "Report Generated",
//       description: `${selectedStudent.name}'s ${reportType} report has been generated.`,
//       duration: 3000,
//     });
//   };

//   const handleSendToParents = () => {
//     toast({
//       title: "Report Sent",
//       description: `${selectedStudent.name}'s report has been emailed to parents/guardians.`,
//       duration: 3000,
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//       <div className="space-y-4">
//         <Card className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold">Students</h3>
//             <Input 
//               placeholder="Search students..." 
//               className="max-w-[200px]"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
          
//           <div className="flex gap-2 mb-4 flex-wrap">
//             <Button variant="outline" size="sm">All</Button>
//             <Button variant="outline" size="sm" className="bg-green-50">High Achievers</Button>
//             <Button variant="outline" size="sm" className="bg-yellow-50">Needs Support</Button>
//             <Button variant="outline" size="sm" className="bg-red-50">Attendance Issues</Button>
//           </div>
          
//           <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
//             {filteredStudents.map((student) => (
//               <div
//                 key={student.id}
//                 className={`p-3 hover:bg-gray-50 rounded cursor-pointer border ${selectedStudent?.id === student.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
//                 onClick={() => setSelectedStudent(student)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-medium">{student.name}</p>
//                     <p className="text-sm text-gray-500">{student.email}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium">{student.overallGrade}</p>
//                     <p className={`text-sm ${student.recentProgress.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
//                       {student.recentProgress}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex mt-2 gap-1">
//                   {student.attendance < 85 && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                       Attendance
//                     </span>
//                   )}
//                   {student.gpa > 3.5 && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Top Performer
//                     </span>
//                   )}
//                   {student.supportNeeds && (
//                     <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                       Support
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>

//       <div className="md:col-span-3 space-y-4">
//         {selectedStudent ? (
//           <>
//             <Card className="p-6">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
//                   <p className="text-gray-600">{selectedStudent.email}</p>
//                   <div className="flex items-center gap-4 mt-2">
//                     <div className="flex items-center gap-1">
//                       <BookOpen className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">GPA: {selectedStudent.gpa}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">Attendance: {selectedStudent.attendance}%</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Award className="h-4 w-4 text-blue-500" />
//                       <span className="text-sm">Grade: {selectedStudent.overallGrade}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-col gap-3">
//                   <div className="flex gap-2">
//                     <Select value={reportType} onValueChange={setReportType}>
//                       <SelectTrigger className="w-[150px]">
//                         <SelectValue placeholder="Report Type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="academic">Academic</SelectItem>
//                         <SelectItem value="summary">Executive Summary</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <Button onClick={handleGenerateReport} className="gap-1">
//                       <FileText className="h-4 w-4" />
//                       Generate Report
//                     </Button>
//                     <Button variant="outline" onClick={handleSendToParents} className="gap-1">
//                       <Mail className="h-4 w-4" />
//                       Send to Parents
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               <Card className="p-4 bg-blue-50 border border-blue-200 mb-6">
//                 <div className="flex items-start gap-3">
//                   <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="font-medium text-blue-800 mb-1">Concise Recommendation</h3>
//                     <p className="text-gray-700">{selectedStudent.conciseRecommendation}</p>
//                   </div>
//                 </div>
//               </Card>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="font-semibold mb-2">Strengths</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.strengths.map((strength, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                         <span>{strength}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Areas for Improvement</h3>
//                   <div className="space-y-1">
//                     {selectedStudent.areasForImprovement.map((area, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <Target className="h-4 w-4 text-orange-500" />
//                         <span>{area}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             <Tabs defaultValue="performance">
//               <TabsList className="mb-4">
//                 <TabsTrigger value="performance">Academic Performance</TabsTrigger>
//                 <TabsTrigger value="behavior">Behavioral Insights</TabsTrigger>
//                 <TabsTrigger value="attendance">Attendance</TabsTrigger>
//                 <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="performance" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4 flex items-center">
//                       <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
//                       Grade Progression
//                     </h3>
//                     <div className="h-72">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart
//                           data={selectedStudent.gradeProgression}
//                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                         >
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="month" />
//                           <YAxis domain={[0, 100]} />
//                           <Tooltip />
//                           <Legend />
//                           <Line 
//                             type="monotone" 
//                             dataKey="grade" 
//                             stroke="#3b82f6" 
//                             activeDot={{ r: 8 }} 
//                             name="Grade" 
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-4">
//                       {selectedStudent.name} has shown {selectedStudent.gradeProgression[6].grade > selectedStudent.gradeProgression[0].grade ? 'consistent improvement' : 'some fluctuation'} in academic performance over the past months.
//                       {selectedStudent.gradeProgression[6].grade - selectedStudent.gradeProgression[0].grade > 10 && 
//                         ' The significant upward trend indicates effective learning and adaptation to the curriculum.'}
//                     </p>
//                   </div>
//                 </Card>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Card>
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart
//                             data={selectedStudent.subjectPerformance}
//                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                           >
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="subject" />
//                             <YAxis domain={[0, 100]} />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="score" fill="#8884d8" name="Score" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-sm text-gray-500">
//                           Strongest subject: {selectedStudent.subjectPerformance.reduce((a, b) => a.score > b.score ? a : b).subject}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Area needing attention: {selectedStudent.subjectPerformance.reduce((a, b) => a.score < b.score ? a : b).subject}
//                         </p>
//                       </div>
//                     </div>
//                   </Card>

//                   <Card>
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold mb-4">Skills Assessment</h3>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <RadarChart 
//                             cx="50%" 
//                             cy="50%" 
//                             outerRadius="80%" 
//                             data={selectedStudent.skills}
//                           >
//                             <PolarGrid />
//                             <PolarAngleAxis dataKey="name" />
//                             <PolarRadiusAxis domain={[0, 100]} />
//                             <Radar
//                               name="Skills"
//                               dataKey="value"
//                               stroke="#8884d8"
//                               fill="#8884d8"
//                               fillOpacity={0.6}
//                             />
//                             <Tooltip />
//                           </RadarChart>
//                         </ResponsiveContainer>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-sm text-gray-500">
//                           {selectedStudent.name} demonstrates exceptional strength in 
//                           {' '}{selectedStudent.skills.reduce((a, b) => a.value > b.value ? a : b).name}, 
//                           while {selectedStudent.skills.reduce((a, b) => a.value < b.value ? a : b).name} could use further development.
//                         </p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>

//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Recent Assignments</h3>
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Assignment
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Grade
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Feedback
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {selectedStudent.assignments.map((assignment) => (
//                             <tr key={assignment.id}>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-sm font-medium text-gray-900">{assignment.name}</div>
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className={`text-sm font-medium ${
//                                   assignment.grade >= 90 ? 'text-green-600' : 
//                                   assignment.grade >= 80 ? 'text-blue-600' :
//                                   assignment.grade >= 70 ? 'text-yellow-600' : 'text-red-600'
//                                 }`}>
//                                   {assignment.grade}/100
//                                 </div>
//                               </td>
//                               <td className="px-6 py-4">
//                                 <div className="text-sm text-gray-500">{assignment.feedback}</div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="behavior" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Behavioral Observations</h3>
//                     <div className="space-y-4">
//                       {selectedStudent.behavioralInsights.map((insight, index) => (
//                         <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
//                           <div className="mt-1 text-blue-500">
//                             <Users className="h-5 w-5" />
//                           </div>
//                           <div>
//                             <p className="text-gray-800">{insight}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-6">
//                       <h4 className="font-medium mb-2">Teacher Notes</h4>
//                       <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
//                         <p className="text-gray-700">{selectedStudent.behavioralNotes}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
                
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Learning Profile</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <h4 className="font-medium mb-3">Learning Style</h4>
//                         <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
//                           <p className="text-blue-800 font-medium">{selectedStudent.learningStyle}</p>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {selectedStudent.learningStyle === 'Visual' ? 
//                               'Learns best through visual aids, diagrams, and written materials.' :
//                               selectedStudent.learningStyle === 'Auditory' ?
//                               'Learns best through listening, discussions, and verbal instructions.' :
//                               'Learns best through hands-on activities, movement, and practical applications.'}
//                           </p>
//                         </div>
                        
//                         <h4 className="font-medium mb-3 mt-4">Accommodations</h4>
//                         <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
//                           <p className="text-purple-800">{selectedStudent.accommodations}</p>
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h4 className="font-medium mb-3">Parent Communication</h4>
//                         <div className="space-y-3">
//                           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
//                             <span className="text-gray-700">Parent Meetings</span>
//                             <span className="font-medium">{selectedStudent.parentMeetings} this semester</span>
//                           </div>
//                           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
//                             <span className="text-gray-700">Last Contact</span>
//                             <span className="font-medium">{selectedStudent.lastParentContact}</span>
//                           </div>
//                         </div>
                        
//                         <Button variant="outline" className="mt-4 w-full">
//                           <Mail className="h-4 w-4 mr-2" />
//                           Contact Parents
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="attendance" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4 flex items-center">
//                       <Calendar className="h-5 w-5 mr-2 text-blue-500" />
//                       Attendance Overview
//                     </h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                       <div className="p-4 bg-green-50 rounded-md border border-green-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Present</h4>
//                         <p className="text-2xl font-bold text-green-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Present').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Present').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
                      
//                       <div className="p-4 bg-yellow-50 rounded-md border border-yellow-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Late</h4>
//                         <p className="text-2xl font-bold text-yellow-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Late').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Late').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
                      
//                       <div className="p-4 bg-red-50 rounded-md border border-red-200">
//                         <h4 className="text-sm text-gray-500 mb-1">Absent</h4>
//                         <p className="text-2xl font-bold text-red-600">
//                           {selectedStudent.attendance_record.filter(r => r.status === 'Absent').length}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Absent').length / selectedStudent.attendance_record.length) * 100)}% of classes
//                         </p>
//                       </div>
//                     </div>
                    
//                     <h4 className="font-medium mb-3">Attendance Record</h4>
//                     <div className="overflow-x-auto">
//                       <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Date
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               Status
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {selectedStudent.attendance_record.map((record, index) => (
//                             <tr key={index}>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-sm font-medium text-gray-900">{record.date}</div>
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap">
//                                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                                   record.status === 'Present' ? 'bg-green-100 text-green-800' : 
//                                   record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 
//                                   'bg-red-100 text-red-800'
//                                 }`}>
//                                   {record.status}
//                                 </span>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
                    
//                     {selectedStudent.attendance < 90 && (
//                       <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
//                         <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                         <div>
//                           <h4 className="font-medium text-red-800">Attendance Alert</h4>
//                           <p className="text-sm text-gray-700 mt-1">
//                             {selectedStudent.name}'s attendance rate ({selectedStudent.attendance}%) is below the 90% threshold. Consider scheduling a parent conference to address this issue.
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="recommendations" className="space-y-6">
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Personalized Recommendations</h3>
//                     <div className="space-y-4">
//                       {selectedStudent.recommendations.map((recommendation, index) => (
//                         <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-md border border-blue-100">
//                           <div className="mt-1 text-blue-500 flex-shrink-0">
//                             <CheckCircle2 className="h-5 w-5" />
//                           </div>
//                           <div>
//                             <p className="text-gray-800 font-medium">{recommendation}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {selectedStudent.supportNeeds && (
//                       <div className="mt-6">
//                         <h4 className="font-medium mb-3">Support Needs</h4>
//                         <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
//                           <div className="flex gap-2">
//                             <AlertTriangle className="h-5 w-5 text-purple-500 flex-shrink-0" />
//                             <p className="text-gray-700">{selectedStudent.supportNeeds}</p>
//                           </div>
//                         </div>
//                       </div>
//                     )}
                    
//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <Button className="w-full">
//                         <FileText className="h-4 w-4 mr-2" />
//                         Create Intervention Plan
//                       </Button>
//                       <Button variant="outline" className="w-full">
//                         <Users className="h-4 w-4 mr-2" />
//                         Schedule Student Conference
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
                
//                 <Card>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold mb-4">Resources & Referrals</h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
//                         <h4 className="font-medium mb-2">Academic Resources</h4>
//                         <ul className="space-y-2 text-sm">
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Study Skills Workshop</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>After-School Tutoring Program</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Online Learning Modules</span>
//                           </li>
//                         </ul>
//                       </div>
                      
//                       <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
//                         <h4 className="font-medium mb-2">Support Services</h4>
//                         <ul className="space-y-2 text-sm">
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>School Counselor Referral</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Peer Mentoring Program</span>
//                           </li>
//                           <li className="flex items-center gap-2">
//                             <CheckCircle2 className="h-4 w-4 text-green-500" />
//                             <span>Parent-Teacher Conference</span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
//             </Tabs>
            
//             <div className="flex justify-end gap-3">
//               <Button variant="outline" className="gap-1">
//                 <Download className="h-4 w-4" />
//                 Download Report
//               </Button>
//               <Button variant="outline" className="gap-1">
//                 <Mail className="h-4 w-4" />
//                 Email to Parents
//               </Button>
//             </div>
//           </>
//         ) : (
//           <Card className="p-6 text-center">
//             <UserCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium">Select a Student</h3>
//             <p className="text-gray-500">Choose a student to view their detailed profile and generate reports</p>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };



import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Target, 
  UserCircle, 
  FileText, 
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
  Award,
  AlertTriangle,
  Download,
  Mail,
  MessageCircle,
  GraduationCap
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { useAssignments } from "@/hooks/useAssignments";
import { useAssignmentSubmissions } from "@/hooks/useAssignmentSubmissions";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const mockStudents = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    attendance: 92,
    overallGrade: "A-",
    gpa: 3.7,
    strengths: ["Critical Thinking", "Written Expression", "Research Skills"],
    areasForImprovement: ["Group Participation", "Time Management"],
    recentProgress: "+15%",
    behavioralNotes: "Shows great initiative in class discussions. Tends to work better independently than in groups.",
    learningStyle: "Visual",
    accommodations: "None required",
    parentMeetings: 2,
    lastParentContact: "2024-03-15",
    assignments: [
      { id: "a1", name: "Midterm Essay", grade: 88, feedback: "Excellent analysis but could improve structure" },
      { id: "a2", name: "Group Project", grade: 85, feedback: "Good contribution, needs more team coordination" },
      { id: "a3", name: "Research Paper", grade: 92, feedback: "Outstanding research skills and insights" },
      { id: "a4", name: "Weekly Quiz", grade: 78, feedback: "Review chapters 5-7 for better comprehension" }
    ],
    attendance_record: [
      { date: "2024-03-01", status: "Present" },
      { date: "2024-03-05", status: "Present" },
      { date: "2024-03-08", status: "Late" },
      { date: "2024-03-12", status: "Present" },
      { date: "2024-03-15", status: "Absent" },
      { date: "2024-03-19", status: "Present" },
      { date: "2024-03-22", status: "Present" }
    ],
    skills: [
      { name: "Problem Solving", value: 85 },
      { name: "Communication", value: 70 },
      { name: "Teamwork", value: 65 },
      { name: "Technical Skills", value: 90 },
      { name: "Critical Thinking", value: 85 },
      { name: "Creativity", value: 75 }
    ],
    gradeProgression: [
      { month: "Sep", grade: 75 },
      { month: "Oct", grade: 78 },
      { month: "Nov", grade: 82 },
      { month: "Dec", grade: 80 },
      { month: "Jan", grade: 84 },
      { month: "Feb", grade: 87 },
      { month: "Mar", grade: 90 }
    ],
    subjectPerformance: [
      { subject: "Math", score: 82 },
      { subject: "Science", score: 90 },
      { subject: "English", score: 85 },
      { subject: "History", score: 78 },
      { subject: "Art", score: 88 }
    ],
    recommendations: {
      forTeachers: [
        "Provide more challenging research assignments to engage critical thinking skills",
        "Set intermediate deadlines for larger projects to assist with time management",
        "Create structured group activities with defined roles to improve collaboration skills",
        "Offer visual learning materials to complement lessons (diagrams, charts, videos)"
      ],
      forParents: [
        "Encourage consistent study schedule at home to reinforce time management",
        "Provide opportunities for collaborative projects outside school",
        "Discuss progress in group participation and the importance of teamwork",
        "Continue supporting research interests at home through additional resources"
      ],
      forAdministrators: [
        "Consider placement in advanced courses for subjects showing exceptional aptitude",
        "Track progress in group projects across different classes to identify patterns",
        "Evaluate if current accommodations are sufficient for optimal performance",
        "Consider mentorship opportunities with older students for leadership development"
      ]
    },
    supportNeeds: "Occasional check-ins about time management",
    conciseRecommendation: "Strong academic performer who would benefit from structured group work opportunities and deadline management strategies. Consider advanced research projects to challenge and engage."
  },
  {
    id: "2",
    name: "Maya Rodriguez",
    email: "maya.r@example.com",
    attendance: 96,
    overallGrade: "B+",
    gpa: 3.3,
    strengths: ["Teamwork", "Presentation Skills", "Creative Projects"],
    areasForImprovement: ["Written Analysis", "Test Performance"],
    recentProgress: "+8%",
    behavioralNotes: "Excellent team player. Supports peers and contributes positively to class atmosphere.",
    learningStyle: "Kinesthetic",
    accommodations: "Extended time on tests",
    parentMeetings: 1,
    lastParentContact: "2024-02-20",
    assignments: [
      { id: "a1", name: "Midterm Essay", grade: 76, feedback: "Work on structure and analysis depth" },
      { id: "a2", name: "Group Project", grade: 92, feedback: "Excellent leadership and coordination" },
      { id: "a3", name: "Research Paper", grade: 78, feedback: "Good ideas but needs more critical analysis" },
      { id: "a4", name: "Weekly Quiz", grade: 82, feedback: "Consistent improvement shown" }
    ],
    attendance_record: [
      { date: "2024-03-01", status: "Present" },
      { date: "2024-03-05", status: "Present" },
      { date: "2024-03-08", status: "Present" },
      { date: "2024-03-12", status: "Present" },
      { date: "2024-03-15", status: "Present" },
      { date: "2024-03-19", status: "Late" },
      { date: "2024-03-22", status: "Present" }
    ],
    skills: [
      { name: "Problem Solving", value: 72 },
      { name: "Communication", value: 90 },
      { name: "Teamwork", value: 94 },
      { name: "Technical Skills", value: 75 },
      { name: "Critical Thinking", value: 70 },
      { name: "Creativity", value: 88 }
    ],
    gradeProgression: [
      { month: "Sep", grade: 75 },
      { month: "Oct", grade: 73 },
      { month: "Nov", grade: 75 },
      { month: "Dec", grade: 78 },
      { month: "Jan", grade: 80 },
      { month: "Feb", grade: 82 },
      { month: "Mar", grade: 85 }
    ],
    subjectPerformance: [
      { subject: "Math", score: 75 },
      { subject: "Science", score: 78 },
      { subject: "English", score: 80 },
      { subject: "History", score: 83 },
      { subject: "Art", score: 92 }
    ],
    recommendations: {
      forTeachers: [
        "Provide writing structure templates for essays and analytical assignments",
        "Utilize strengths in teamwork by assigning peer tutoring opportunities",
        "Implement test-taking strategies practice before assessments",
        "Consider alternative assessment methods that leverage presentation skills"
      ],
      forParents: [
        "Support writing skill development with regular practice at home",
        "Maintain consistent test preparation routines to build confidence",
        "Celebrate improvements in written work and test scores",
        "Encourage continued participation in collaborative activities"
      ],
      forAdministrators: [
        "Review effectiveness of extended test time accommodation",
        "Consider leadership role opportunities that leverage teamwork strengths",
        "Evaluate writing support programs that might benefit similar students",
        "Monitor progress in written assessments across different subjects"
      ]
    },
    supportNeeds: "Test anxiety support, writing skill development",
    conciseRecommendation: "Excellent collaborative learner who excels in group settings. Focus on developing written analysis skills and test-taking strategies. An ideal candidate for peer leadership roles."
  }
];

export const StudentProfilesTab = () => {
  const { id: classroomId } = useParams<{ id: string }>();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [reportType, setReportType] = useState("academic");
  const [audience, setAudience] = useState("teachers");
  const { toast } = useToast();
  
  const filteredStudents = mockStudents.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const { assignments = [] } = useAssignments(classroomId || "");

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `${selectedStudent.name}'s ${reportType} report has been generated for ${audience}.`,
      duration: 3000,
    });
  };

  const handleSendToParents = () => {
    toast({
      title: "Report Sent",
      description: `${selectedStudent.name}'s report has been emailed to parents/guardians.`,
      duration: 3000,
    });
  };

  const handleSendToAdmin = () => {
    toast({
      title: "Report Sent",
      description: `${selectedStudent.name}'s report has been shared with administrators.`,
      duration: 3000,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Students</h3>
            <Input 
              placeholder="Search students..." 
              className="max-w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 mb-4 flex-wrap">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm" className="bg-green-50">High Achievers</Button>
            <Button variant="outline" size="sm" className="bg-yellow-50">Needs Support</Button>
            <Button variant="outline" size="sm" className="bg-red-50">Attendance Issues</Button>
          </div>
          
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className={`p-3 hover:bg-gray-50 rounded cursor-pointer border ${selectedStudent?.id === student.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
                onClick={() => setSelectedStudent(student)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{student.overallGrade}</p>
                    <p className={`text-sm ${student.recentProgress.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {student.recentProgress}
                    </p>
                  </div>
                </div>
                
                <div className="flex mt-2 gap-1">
                  {student.attendance < 85 && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Attendance
                    </span>
                  )}
                  {student.gpa > 3.5 && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Top Performer
                    </span>
                  )}
                  {student.supportNeeds && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Support
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="md:col-span-3 space-y-4">
        {selectedStudent ? (
          <>
            <Card className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
                  <p className="text-gray-600">{selectedStudent.email}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">GPA: {selectedStudent.gpa}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Attendance: {selectedStudent.attendance}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Grade: {selectedStudent.overallGrade}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Report Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="summary">Executive Summary</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={audience} onValueChange={setAudience}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Target Audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teachers">For Teachers</SelectItem>
                        <SelectItem value="parents">For Parents</SelectItem>
                        <SelectItem value="administrators">For Administrators</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handleGenerateReport} className="gap-1">
                      <FileText className="h-4 w-4" />
                      Generate Report
                    </Button>
                    <Button variant="outline" onClick={handleSendToParents} className="gap-1">
                      <Mail className="h-4 w-4" />
                      Send to Parents
                    </Button>
                    <Button variant="outline" onClick={handleSendToAdmin} className="gap-1">
                      <Users className="h-4 w-4" />
                      Share with Admin
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="p-4 bg-blue-50 border border-blue-200 mb-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-800 mb-1">Concise Recommendation</h3>
                    <p className="text-gray-700">{selectedStudent.conciseRecommendation}</p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Strengths</h3>
                  <div className="space-y-1">
                    {selectedStudent.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Areas for Improvement</h3>
                  <div className="space-y-1">
                    {selectedStudent.areasForImprovement.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-500" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Tabs defaultValue="performance">
              <TabsList className="mb-4">
                <TabsTrigger value="performance">Academic Performance</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                      Grade Progression
                    </h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={selectedStudent.gradeProgression}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="grade" 
                            stroke="#3b82f6" 
                            activeDot={{ r: 8 }} 
                            name="Grade" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      {selectedStudent.name} has shown {selectedStudent.gradeProgression[6].grade > selectedStudent.gradeProgression[0].grade ? 'consistent improvement' : 'some fluctuation'} in academic performance over the past months.
                      {selectedStudent.gradeProgression[6].grade - selectedStudent.gradeProgression[0].grade > 10 && 
                        ' The significant upward trend indicates effective learning and adaptation to the curriculum.'}
                    </p>
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={selectedStudent.subjectPerformance}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="subject" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="score" fill="#8884d8" name="Score" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          Strongest subject: {selectedStudent.subjectPerformance.reduce((a, b) => a.score > b.score ? a : b).subject}
                        </p>
                        <p className="text-sm text-gray-500">
                          Area needing attention: {selectedStudent.subjectPerformance.reduce((a, b) => a.score < b.score ? a : b).subject}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Skills Assessment</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart 
                            cx="50%" 
                            cy="50%" 
                            outerRadius="80%" 
                            data={selectedStudent.skills}
                          >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis domain={[0, 100]} />
                            <Radar
                              name="Skills"
                              dataKey="value"
                              stroke="#8884d8"
                              fill="#8884d8"
                              fillOpacity={0.6}
                            />
                            <Tooltip />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          {selectedStudent.name} demonstrates exceptional strength in 
                          {' '}{selectedStudent.skills.reduce((a, b) => a.value > b.value ? a : b).name}, 
                          while {selectedStudent.skills.reduce((a, b) => a.value < b.value ? a : b).name} could use further development.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Assignments</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Assignment
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Grade
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Feedback
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedStudent.assignments.map((assignment) => (
                            <tr key={assignment.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{assignment.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-sm font-medium ${
                                  assignment.grade >= 90 ? 'text-green-600' : 
                                  assignment.grade >= 80 ? 'text-blue-600' :
                                  assignment.grade >= 70 ? 'text-yellow-600' : 'text-red-600'
                                }`}>
                                  {assignment.grade}/100
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">{assignment.feedback}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="attendance" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                      Attendance Overview
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-green-50 rounded-md border border-green-200">
                        <h4 className="text-sm text-gray-500 mb-1">Present</h4>
                        <p className="text-2xl font-bold text-green-600">
                          {selectedStudent.attendance_record.filter(r => r.status === 'Present').length}
                        </p>
                        <p className="text-sm text-gray-500">
                          {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Present').length / selectedStudent.attendance_record.length) * 100)}% of classes
                        </p>
                      </div>
                      
                      <div className="p-4 bg-yellow-50 rounded-md border border-yellow-200">
                        <h4 className="text-sm text-gray-500 mb-1">Late</h4>
                        <p className="text-2xl font-bold text-yellow-600">
                          {selectedStudent.attendance_record.filter(r => r.status === 'Late').length}
                        </p>
                        <p className="text-sm text-gray-500">
                          {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Late').length / selectedStudent.attendance_record.length) * 100)}% of classes
                        </p>
                      </div>
                      
                      <div className="p-4 bg-red-50 rounded-md border border-red-200">
                        <h4 className="text-sm text-gray-500 mb-1">Absent</h4>
                        <p className="text-2xl font-bold text-red-600">
                          {selectedStudent.attendance_record.filter(r => r.status === 'Absent').length}
                        </p>
                        <p className="text-sm text-gray-500">
                          {Math.round((selectedStudent.attendance_record.filter(r => r.status === 'Absent').length / selectedStudent.attendance_record.length) * 100)}% of classes
                        </p>
                      </div>
                    </div>
                    
                    <h4 className="font-medium mb-3">Attendance Record</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedStudent.attendance_record.map((record, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{record.date}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  record.status === 'Present' ? 'bg-green-100 text-green-800' : 
                                  record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {record.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {selectedStudent.attendance < 90 && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-red-800">Attendance Alert</h4>
                          <p className="text-sm text-gray-700 mt-1">
                            {selectedStudent.name}'s attendance rate ({selectedStudent.attendance}%) is below the 90% threshold. Consider scheduling a parent conference to address this issue.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Stakeholder Recommendations</h3>
                    
                    <Tabs defaultValue="teachers" className="mt-6">
                      <TabsList className="mb-4">
                        <TabsTrigger value="teachers">For Teachers</TabsTrigger>
                        <TabsTrigger value="parents">For Parents</TabsTrigger>
                        <TabsTrigger value="administrators">For Administrators</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="teachers">
                        <div className="space-y-4">
                          {selectedStudent.recommendations.forTeachers.map((rec, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-md border border-blue-100">
                              <div className="mt-1 text-blue-500 flex-shrink-0">
                                <CheckCircle2 className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-gray-800">{rec}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="parents">
                        <div className="space-y-4">
                          {selectedStudent.recommendations.forParents.map((rec, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-md border border-green-100">
                              <div className="mt-1 text-green-500 flex-shrink-0">
                                <CheckCircle2 className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-gray-800">{rec}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="administrators">
                        <div className="space-y-4">
                          {selectedStudent.recommendations.forAdministrators.map((rec, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-md border border-purple-100">
                              <div className="mt-1 text-purple-500 flex-shrink-0">
                                <CheckCircle2 className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-gray-800">{rec}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    {selectedStudent.supportNeeds && (
                      <div className="mt-6">
                        <h4 className="font-medium mb-3">Support Needs</h4>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                          <div className="flex gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                            <p className="text-gray-700">{selectedStudent.supportNeeds}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Create Action Plan
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Email to Parents
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Users className="h-4 w-4 mr-2" />
                        Share with Admin
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Resources & Support Options</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                        <h4 className="font-medium mb-2 text-blue-700">For Teachers</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            <span>Differentiated Instruction Tools</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            <span>Peer Mentoring Program</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            <span>Assessment Modification Guide</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                        <h4 className="font-medium mb-2 text-green-700">For Parents</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Home Learning Resources</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Parent Support Community</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Progress Monitoring Tools</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                        <h4 className="font-medium mb-2 text-purple-700">For Administrators</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-500" />
                            <span>Student Support Team Referral</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-500" />
                            <span>Resource Allocation Guide</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-500" />
                            <span>Policy Review Recommendations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end gap-3">
              <Button className="gap-1">
                <Download className="h-4 w-4" />
                Download Full Report
              </Button>
              <Button variant="outline" className="gap-1">
                <Mail className="h-4 w-4" />
                Email Report
              </Button>
            </div>
          </>
        ) : (
          <Card className="p-6 text-center">
            <UserCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium">Select a Student</h3>
            <p className="text-gray-500">Choose a student to view their detailed profile and generate reports</p>
          </Card>
        )}
      </div>
    </div>
  );
};

