
// import { MainLayout } from "@/components/layout/MainLayout";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   BookOpen,
//   FileText,
//   Bot,
//   UserCircle,
// } from "lucide-react";
// import { StreamTab } from "@/components/classroom/StreamTab";
// import { AssignmentsTab } from "@/components/classroom/AssignmentsTab";
// import { StudentProfilesTab } from "@/components/classroom/StudentProfilesTab";
// import { useParams } from "react-router-dom";
// import { useClassroom } from "@/hooks/useClassroom";
// import { ClassViewHeader } from "@/components/classroom/ClassViewHeader";
// import { AIAssistant } from "@/components/classroom/AIAssistant";
// import { useIsMobile } from "@/hooks/use-mobile";

// const ClassView = () => {
//   const { id } = useParams<{ id: string }>();
//   const { classroom, isLoading } = useClassroom(id || "");
//   const isMobile = useIsMobile();

//   return (
//     <MainLayout>
//       <div className="max-w-7xl mx-auto space-y-6">
//         <ClassViewHeader classroom={classroom} isLoading={isLoading} />

//         <Tabs defaultValue="stream" className="w-full">
//           <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
//             <TabsTrigger
//               value="stream"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <BookOpen className="mr-2 h-4 w-4" />
//               {!isMobile && "Stream"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="assignments"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <FileText className="mr-2 h-4 w-4" />
//               {!isMobile && "Assignments"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="ai-assist"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <Bot className="mr-2 h-4 w-4" />
//               {!isMobile && "AI Assistant"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="student-profiles"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <UserCircle className="mr-2 h-4 w-4" />
//               {!isMobile && "Student Profiles"}
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="stream">
//             <StreamTab />
//           </TabsContent>

//           <TabsContent value="assignments">
//             <AssignmentsTab />
//           </TabsContent>

//           <TabsContent value="ai-assist" className="mt-6">
//             <AIAssistant />
//           </TabsContent>

//           <TabsContent value="student-profiles">
//             <StudentProfilesTab />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </MainLayout>
//   );
// };

// export default ClassView;



// import { MainLayout } from "@/components/layout/MainLayout";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   BookOpen,
//   FileText,
//   Bot,
//   UserCircle,
// } from "lucide-react";
// import { StreamTab } from "@/components/classroom/StreamTab";
// import { AssignmentsTab } from "@/components/classroom/AssignmentsTab";
// import { StudentProfilesTab } from "@/components/classroom/StudentProfilesTab";
// import { useParams, useSearchParams } from "react-router-dom";
// import { useClassroom } from "@/hooks/useClassroom";
// import { ClassViewHeader } from "@/components/classroom/ClassViewHeader";
// import { AIAssistant } from "@/components/classroom/AIAssistant";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { useEffect, useState } from "react";

// const ClassView = () => {
//   const { id } = useParams<{ id: string }>();
//   const { classroom, isLoading } = useClassroom(id || "");
//   const isMobile = useIsMobile();
//   const [searchParams] = useSearchParams();
//   const [activeTab, setActiveTab] = useState("stream");
  
//   // Set active tab based on URL parameter
//   useEffect(() => {
//     const tabParam = searchParams.get("tab");
//     if (tabParam && ["stream", "assignments", "ai-assist", "student-profiles"].includes(tabParam)) {
//       setActiveTab(tabParam);
//     }
//   }, [searchParams]);

//   return (
//     <MainLayout>
//       <div className="max-w-7xl mx-auto space-y-6">
//         <ClassViewHeader classroom={classroom} isLoading={isLoading} />

//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
//             <TabsTrigger
//               value="stream"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <BookOpen className="mr-2 h-4 w-4" />
//               {!isMobile && "Stream"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="assignments"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <FileText className="mr-2 h-4 w-4" />
//               {!isMobile && "Assignments"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="ai-assist"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <Bot className="mr-2 h-4 w-4" />
//               {!isMobile && "AI Assistant"}
//             </TabsTrigger>
//             <TabsTrigger
//               value="student-profiles"
//               className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
//             >
//               <UserCircle className="mr-2 h-4 w-4" />
//               {!isMobile && "Student Profiles"}
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="stream">
//             <StreamTab />
//           </TabsContent>

//           <TabsContent value="assignments">
//             <AssignmentsTab />
//           </TabsContent>

//           <TabsContent value="ai-assist" className="mt-6">
//             <AIAssistant />
//           </TabsContent>

//           <TabsContent value="student-profiles">
//             <StudentProfilesTab />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </MainLayout>
//   );
// };

// export default ClassView;


import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  FileText,
  Bot,
  UserCircle,
} from "lucide-react";
import { StreamTab } from "@/components/classroom/StreamTab";
import { AssignmentsTab } from "@/components/classroom/AssignmentsTab";
import { StudentProfilesTab } from "@/components/classroom/StudentProfilesTab";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useClassroom } from "@/hooks/useClassroom";
import { ClassViewHeader } from "@/components/classroom/ClassViewHeader";
import { AIAssistant } from "@/components/classroom/AIAssistant";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const ClassView = () => {
  const { id } = useParams<{ id: string }>();
  const { classroom, isLoading } = useClassroom(id || "");
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("stream");
  
  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["stream", "assignments", "ai-assist", "student-profiles"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <ClassViewHeader classroom={classroom} isLoading={isLoading} />

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
            <TabsTrigger
              value="stream"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              {!isMobile && "Stream"}
            </TabsTrigger>
            <TabsTrigger
              value="assignments"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
            >
              <FileText className="mr-2 h-4 w-4" />
              {!isMobile && "Assignments"}
            </TabsTrigger>
            <TabsTrigger
              value="ai-assist"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
            >
              <Bot className="mr-2 h-4 w-4" />
              {!isMobile && "AI Assistant"}
            </TabsTrigger>
            <TabsTrigger
              value="student-profiles"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-3 py-2 whitespace-nowrap"
            >
              <UserCircle className="mr-2 h-4 w-4" />
              {!isMobile && "Student Profiles"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stream">
            <StreamTab />
          </TabsContent>

          <TabsContent value="assignments">
            <AssignmentsTab />
          </TabsContent>

          <TabsContent value="ai-assist" className="mt-6">
            <AIAssistant />
          </TabsContent>

          <TabsContent value="student-profiles">
            <StudentProfilesTab />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ClassView;
