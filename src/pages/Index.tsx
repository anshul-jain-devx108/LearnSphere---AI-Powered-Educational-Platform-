
import { MainLayout } from "@/components/layout/MainLayout";
import { ClassCard } from "@/components/dashboard/ClassCard";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { TasksSection } from "@/components/dashboard/TasksSection";
import { MeetingsSection } from "@/components/dashboard/MeetingsSection";
import { CreateClassroomModal } from "@/components/dashboard/CreateClassroomModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useClassrooms } from "@/hooks/useClassrooms";
import { Skeleton } from "@/components/ui/skeleton";

const upcomingMeetings = [
  {
    title: "Parent-Teacher Conference",
    date: "Today, 2:00 PM",
    attendees: "Mr. & Mrs. Johnson",
  },
  {
    title: "Department Meeting",
    date: "Tomorrow, 10:00 AM",
    attendees: "Science Department",
  },
];

const Index = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const { classrooms, isLoading } = useClassrooms();

  // Map subject names to background colors
  const getBackgroundColor = (subject: string): string => {
    const subjectMap: Record<string, string> = {
      mathematics: "bg-secondary",
      science: "bg-accent",
      english: "bg-indigo-500",
      history: "bg-accent", 
      computer_science: "bg-primary"
    };
    
    return subjectMap[subject.toLowerCase()] || "bg-primary";
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <WelcomeSection onCreateClass={() => setCreateModalOpen(true)} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TasksSection />
          <MeetingsSection meetings={upcomingMeetings} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Classes</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="p-6 border rounded-xl space-y-4">
                  <Skeleton className="h-7 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              ))}
            </div>
          ) : classrooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classrooms.slice(0, 3).map((classItem) => (
                <Link to={`/class/${classItem.id}`} key={classItem.id}>
                  <ClassCard
                    title={classItem.title}
                    subject={classItem.subject}
                    teacherName={classItem.owner_email}
                    backgroundColor={getBackgroundColor(classItem.subject)}
                    pendingGrading={Math.floor(Math.random() * 15)} // Mockup data for pending grading
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border border-dashed rounded-lg">
              <p className="text-gray-600 mb-4">No classes yet. Create your first class to get started.</p>
              <Button onClick={() => setCreateModalOpen(true)}>Create Class</Button>
            </div>
          )}
        </div>

        <CreateClassroomModal 
          open={createModalOpen} 
          onOpenChange={setCreateModalOpen} 
        />
      </div>
    </MainLayout>
  );
};

export default Index;
