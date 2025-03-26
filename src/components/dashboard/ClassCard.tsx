
import { cn } from "@/lib/utils";
import { BookOpen, FileText } from "lucide-react";

interface ClassCardProps {
  title: string;
  subject: string;
  teacherName: string;
  backgroundColor?: string;
  pendingGrading?: number;
}

export const ClassCard = ({
  title,
  subject,
  teacherName,
  backgroundColor = "bg-primary",
  pendingGrading,
}: ClassCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      <div
        className={cn(
          "absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity",
          backgroundColor
        )}
      />
      <div className="relative p-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{subject}</p>
          </div>
          <BookOpen className="text-primary" size={24} />
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{teacherName}</p>
          {pendingGrading && (
            <div className="flex items-center gap-2 text-sm text-primary">
              <FileText size={16} />
              <span>{pendingGrading} pending reviews</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-6 right-6 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="text-primary hover:text-primary/80 font-medium text-sm">
            View Class →
          </button>
        </div>
      </div>
    </div>
  );
};
