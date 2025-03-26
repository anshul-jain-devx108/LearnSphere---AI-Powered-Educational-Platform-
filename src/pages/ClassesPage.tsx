
import { MainLayout } from "@/components/layout/MainLayout";
import { ClassCard } from "@/components/dashboard/ClassCard";
import { Link } from "react-router-dom";
import { useClassrooms } from "@/hooks/useClassrooms";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateClassroomModal } from "@/components/dashboard/CreateClassroomModal";
import { Skeleton } from "@/components/ui/skeleton";

const ClassesPage = () => {
  const { classrooms, isLoading } = useClassrooms();
  const [createModalOpen, setCreateModalOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Your Classes</h1>
          <Button 
            className="flex items-center gap-2"
            onClick={() => setCreateModalOpen(true)}
          >
            <Plus size={20} />
            New Class
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-6 border rounded-xl space-y-4">
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))}
          </div>
        ) : classrooms.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No classes yet</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first class</p>
            <Button 
              onClick={() => setCreateModalOpen(true)}
              className="flex items-center gap-2 mx-auto"
            >
              <Plus size={20} />
              Create Your First Class
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classrooms.map((classItem, index) => (
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
        )}
      </div>
      
      <CreateClassroomModal 
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
      />
    </MainLayout>
  );
};

export default ClassesPage;
