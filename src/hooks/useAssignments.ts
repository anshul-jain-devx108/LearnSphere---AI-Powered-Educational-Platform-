
// import { useQuery } from "@tanstack/react-query";
// import assignmentGenerationService from "@/services/assignmentGenerationService";

// /**
//  * Hook for working with all assignments in a classroom
//  * @param classroomId - The ID of the classroom
//  */
// export const useAssignments = (classroomId: string) => {
//   const {
//     data: assignments = [],
//     isLoading,
//     error,
//     refetch
//   } = useQuery({
//     queryKey: ['assignments', classroomId],
//     queryFn: () => assignmentGenerationService.getAssignments(classroomId),
//     enabled: !!classroomId,
//   });

//   const activeAssignments = assignments.filter(a => a.status === 'Active');
//   const draftAssignments = assignments.filter(a => a.status === 'Draft');
//   const archivedAssignments = assignments.filter(a => a.status === 'Archived');
  
//   const upcomingAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate) > new Date())
//     .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  
//   const overdueAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate) < new Date())
//     .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());

//   return {
//     assignments,
//     activeAssignments,
//     draftAssignments,
//     archivedAssignments,
//     upcomingAssignments,
//     overdueAssignments,
//     isLoading,
//     error,
//     refetch
//   };
// };


// import { useQuery } from "@tanstack/react-query";
// import { getAssignments } from "@/services/assignmentService";

// /**
//  * Hook for working with all assignments in a classroom
//  * @param classroomId - The ID of the classroom
//  */
// export const useAssignments = (classroomId: string) => {
//   const {
//     data: assignments = [],
//     isLoading,
//     error,
//     refetch
//   } = useQuery({
//     queryKey: ['assignments', classroomId],
//     queryFn: () => getAssignments(classroomId),
//     enabled: !!classroomId,
//   });

//   const activeAssignments = assignments.filter(a => a.status === 'Active');
//   const draftAssignments = assignments.filter(a => a.status === 'Draft');
//   const archivedAssignments = assignments.filter(a => a.status === 'Archived');
  
//   const upcomingAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate) > new Date())
//     .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  
//   const overdueAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate) < new Date())
//     .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());

//   return {
//     assignments,
//     activeAssignments,
//     draftAssignments,
//     archivedAssignments,
//     upcomingAssignments,
//     overdueAssignments,
//     isLoading,
//     error,
//     refetch
//   };
// };


// import { useQuery } from "@tanstack/react-query";
// import { getAssignments } from "@/services/assignmentService";

// /**
//  * Hook for working with all assignments in a classroom
//  * @param classroomId - The ID of the classroom
//  */
// export const useAssignments = (classroomId: string) => {
//   const {
//     data: assignments = [],
//     isLoading,
//     error,
//     refetch
//   } = useQuery({
//     queryKey: ['assignments', classroomId],
//     queryFn: () => getAssignments(classroomId),
//     enabled: !!classroomId,
//   });

//   const activeAssignments = assignments.filter(a => a.status === 'Active' || a.status === 'pending');
//   const draftAssignments = assignments.filter(a => a.status === 'Draft');
//   const archivedAssignments = assignments.filter(a => a.status === 'Archived');
  
//   const upcomingAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate || a.deadline) > new Date())
//     .sort((a, b) => new Date(a.dueDate || a.deadline).getTime() - new Date(b.dueDate || b.deadline).getTime());
  
//   const overdueAssignments = activeAssignments
//     .filter(a => new Date(a.dueDate || a.deadline) < new Date())
//     .sort((a, b) => new Date(b.dueDate || b.deadline).getTime() - new Date(a.dueDate || a.deadline).getTime());

//   return {
//     assignments,
//     activeAssignments,
//     draftAssignments,
//     archivedAssignments,
//     upcomingAssignments,
//     overdueAssignments,
//     isLoading,
//     error,
//     refetch
//   };
// };


import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "@/services/assignmentService";

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
    queryFn: () => getAssignments(classroomId),
    enabled: !!classroomId,
  });

  const activeAssignments = assignments.filter(a => a.status === 'Active' || a.status === 'pending');
  const draftAssignments = assignments.filter(a => a.status === 'Draft');
  const archivedAssignments = assignments.filter(a => a.status === 'Archived');
  
  const upcomingAssignments = activeAssignments
    .filter(a => {
      const deadlineDate = a.deadline instanceof Date 
        ? a.deadline 
        : (a.deadline ? new Date(a.deadline) : null);
      const dueDateObj = a.dueDate ? new Date(a.dueDate) : null;
      const dateToCheck = deadlineDate || dueDateObj;
      return dateToCheck && dateToCheck > new Date();
    })
    .sort((a, b) => {
      const aDeadline = a.deadline instanceof Date ? a.deadline : (a.deadline ? new Date(a.deadline) : new Date(a.dueDate));
      const bDeadline = b.deadline instanceof Date ? b.deadline : (b.deadline ? new Date(b.deadline) : new Date(b.dueDate));
      return aDeadline.getTime() - bDeadline.getTime();
    });
  
  const overdueAssignments = activeAssignments
    .filter(a => {
      const deadlineDate = a.deadline instanceof Date 
        ? a.deadline 
        : (a.deadline ? new Date(a.deadline) : null);
      const dueDateObj = a.dueDate ? new Date(a.dueDate) : null;
      const dateToCheck = deadlineDate || dueDateObj;
      return dateToCheck && dateToCheck < new Date();
    })
    .sort((a, b) => {
      const aDeadline = a.deadline instanceof Date ? a.deadline : (a.deadline ? new Date(a.deadline) : new Date(a.dueDate));
      const bDeadline = b.deadline instanceof Date ? b.deadline : (b.deadline ? new Date(b.deadline) : new Date(b.dueDate));
      return bDeadline.getTime() - aDeadline.getTime();
    });

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
