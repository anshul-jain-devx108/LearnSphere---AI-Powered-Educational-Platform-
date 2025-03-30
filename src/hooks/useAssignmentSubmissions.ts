
import { useQuery } from "@tanstack/react-query";
import assignmentDashboardService from "@/services/assignmentDashboardService";

/**
 * Hook for working with assignment submissions
 * @param classroomId - The ID of the classroom
 * @param assignmentId - The ID of the assignment
 */
export const useAssignmentSubmissions = (classroomId: string, assignmentId: string) => {
  const {
    data: submissions = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['submissions', classroomId, assignmentId],
    queryFn: () => assignmentDashboardService.getSubmissions(classroomId, assignmentId),
    enabled: !!classroomId && !!assignmentId,
  });

  const submittedCount = submissions.filter(s => s.status === 'Submitted').length;
  const lateCount = submissions.filter(s => s.status === 'Late').length;
  const notSubmittedCount = submissions.filter(s => s.status === 'Not Submitted').length;
  const gradedCount = submissions.filter(s => s.finalGrade !== undefined).length;

  return {
    submissions,
    submittedCount,
    lateCount,
    notSubmittedCount,
    gradedCount,
    totalCount: submissions.length,
    isLoading,
    error,
    refetch
  };
};
