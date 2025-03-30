
import { useQuery } from "@tanstack/react-query";
import assignmentGenerationService from "@/services/assignmentGenerationService";

/**
 * Hook for working with all assignments in a classroom
 * @param classroomId - The ID of the classroom
 */
export const useAssignments = (classroomId: string) => {
  const {
    data: assignments = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['assignments', classroomId],
    queryFn: () => assignmentGenerationService.getAssignments(classroomId),
    enabled: !!classroomId,
  });

  const activeAssignments = assignments.filter(a => a.status === 'Active');
  const draftAssignments = assignments.filter(a => a.status === 'Draft');
  const archivedAssignments = assignments.filter(a => a.status === 'Archived');
  
  const upcomingAssignments = activeAssignments
    .filter(a => new Date(a.dueDate) > new Date())
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  
  const overdueAssignments = activeAssignments
    .filter(a => new Date(a.dueDate) < new Date())
    .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());

  return {
    assignments,
    activeAssignments,
    draftAssignments,
    archivedAssignments,
    upcomingAssignments,
    overdueAssignments,
    isLoading,
    error,
    refetch
  };
};
