
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { ClassroomType } from "@/types/classroom";
import { ManageClassroomModal } from "./ManageClassroomModal";
import { Badge } from "@/components/ui/badge";

interface ClassViewHeaderProps {
  classroom: ClassroomType | undefined;
  isLoading: boolean;
}

export const ClassViewHeader = ({ classroom, isLoading }: ClassViewHeaderProps) => {
  const [manageModalOpen, setManageModalOpen] = useState(false);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
          <p className="text-gray-600">Please wait</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{classroom?.title || "Classroom"}</h1>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-gray-600">
            {classroom?.subject} • {classroom?.room && `Room ${classroom.room}`}
          </p>
          <Badge variant="outline" className="text-xs">
            ID: {classroom?.id}
          </Badge>
        </div>
      </div>
      <div className="flex gap-3">
        <Button 
          className="flex items-center gap-2"
          onClick={() => setManageModalOpen(true)}
        >
          <Settings size={20} />
          Manage Classroom
        </Button>
      </div>
      
      {classroom && (
        <ManageClassroomModal
          open={manageModalOpen}
          onOpenChange={setManageModalOpen}
          classroomId={classroom.id}
        />
      )}
    </div>
  );
};
