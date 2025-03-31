
// // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import assignmentService from "@/services/assignmentService";
// // import { Assignment, AssignmentFormValues } from "@/types/assignment";
// // import { useToast } from "@/components/ui/use-toast";

// // /**
// //  * Hook for working with a specific assignment
// //  * @param classroomId - The ID of the classroom
// //  * @param assignmentId - The ID of the assignment
// //  */
// // export const useAssignment = (classroomId: string, assignmentId?: string) => {
// //   const queryClient = useQueryClient();
// //   const { toast } = useToast();

// //   // Get a single assignment
// //   const {
// //     data: assignment,
// //     isLoading,
// //     error,
// //     refetch
// //   } = useQuery({
// //     queryKey: ['assignment', classroomId, assignmentId],
// //     queryFn: () => assignmentId ? assignmentService.getAssignment(classroomId, assignmentId) : null,
// //     enabled: !!assignmentId && !!classroomId,
// //   });

// //   // Get submissions for an assignment
// //   const {
// //     data: submissions = [],
// //     isLoading: isLoadingSubmissions,
// //     refetch: refetchSubmissions
// //   } = useQuery({
// //     queryKey: ['assignment-submissions', classroomId, assignmentId],
// //     queryFn: () => assignmentId ? assignmentService.getSubmissions(classroomId, assignmentId) : [],
// //     enabled: !!assignmentId && !!classroomId,
// //   });

// //   // Create a new assignment
// //   const createMutation = useMutation({
// //     mutationFn: (data: AssignmentFormValues & { content: string }) => 
// //       assignmentService.createAssignment(classroomId, data),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
// //       toast({
// //         title: "Assignment created",
// //         description: "The assignment has been successfully created",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error creating assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Update an existing assignment
// //   const updateMutation = useMutation({
// //     mutationFn: (data: Partial<Assignment>) => 
// //       assignmentId ? assignmentService.updateAssignment(classroomId, assignmentId, data) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment', classroomId, assignmentId] });
// //       toast({
// //         title: "Assignment updated",
// //         description: "The assignment has been successfully updated",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error updating assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Delete an assignment
// //   const deleteMutation = useMutation({
// //     mutationFn: () => 
// //       assignmentId ? assignmentService.deleteAssignment(classroomId, assignmentId) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
// //       toast({
// //         title: "Assignment deleted",
// //         description: "The assignment has been successfully deleted",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error deleting assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Grade a submission with AI
// //   const gradeWithAIMutation = useMutation({
// //     mutationFn: (submissionId: string) => 
// //       assignmentId ? assignmentService.gradeWithAI(classroomId, assignmentId, submissionId) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
// //       toast({
// //         title: "Submission graded",
// //         description: "The submission has been graded by AI",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error grading submission",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Update final grade for a submission
// //   const updateGradeMutation = useMutation({
// //     mutationFn: ({ submissionId, finalGrade }: { submissionId: string, finalGrade: number }) => 
// //       assignmentId ? assignmentService.updateFinalGrade(classroomId, assignmentId, submissionId, finalGrade) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
// //       toast({
// //         title: "Grade updated",
// //         description: "The final grade has been updated",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error updating grade",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Generate assignment with AI
// //   const generateAssignmentMutation = useMutation({
// //     // mutationFn: (promptData: AssignmentFormValues) => 
// //     //   assignmentService.generateAssignmentWithAI(classroomId, promptData),
// //     // onSuccess: (data) => {
// //     //   toast({
// //     //     title: "Assignment generated",
// //     //     description: "The assignment has been generated with AI",
// //     //   });
// //     //   return data;
// //     // },
// //     // onError: (error: Error) => {
// //     //   toast({
// //     //     title: "Error generating assignment",
// //     //     description: error.message,
// //     //     variant: "destructive",
// //     //   });
// //     //   return { content: "" };
// //     // }

// //      mutationFn: (data: AssignmentFormValues & { content: string }) => 
// //       assignmentService.createAssignment(classroomId, data),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
// //       toast({
// //         title: "Assignment created",
// //         description: "The assignment has been successfully created",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error creating assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   return {
// //     assignment,
// //     isLoading,
// //     error,
// //     refetch,
// //     submissions,
// //     isLoadingSubmissions,
// //     refetchSubmissions,
// //     createAssignment: createMutation.mutate,
// //     isCreating: createMutation.isPending,
// //     updateAssignment: updateMutation.mutate,
// //     isUpdating: updateMutation.isPending,
// //     deleteAssignment: deleteMutation.mutate,
// //     isDeleting: deleteMutation.isPending,
// //     gradeWithAI: gradeWithAIMutation.mutate,
// //     isGrading: gradeWithAIMutation.isPending,
// //     updateGrade: updateGradeMutation.mutate,
// //     isUpdatingGrade: updateGradeMutation.isPending,
// //     generateAssignment: generateAssignmentMutation.mutate,
// //     isGenerating: generateAssignmentMutation.isPending,
// //   };
// // };


// // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import { 
// //   getAssignment, 
// //   getSubmissions,
// //   createAssignment,
// //   updateAssignment,
// //   deleteAssignment,
// //   gradeWithAI,
// //   updateFinalGrade
// // } from "@/services/assignmentService";
// // import { Assignment, AssignmentFormValues } from "@/types/assignment";
// // import { useToast } from "@/components/ui/use-toast";

// // /**
// //  * Hook for working with a specific assignment
// //  * @param classroomId - The ID of the classroom
// //  * @param assignmentId - The ID of the assignment
// //  */
// // export const useAssignment = (classroomId: string, assignmentId?: string) => {
// //   const queryClient = useQueryClient();
// //   const { toast } = useToast();

// //   // Get a single assignment
// //   const {
// //     data: assignment,
// //     isLoading,
// //     error,
// //     refetch
// //   } = useQuery({
// //     queryKey: ['assignment', classroomId, assignmentId],
// //     queryFn: () => assignmentId ? getAssignment(classroomId, assignmentId) : null,
// //     enabled: !!assignmentId && !!classroomId,
// //   });

// //   // Get submissions for an assignment
// //   const {
// //     data: submissions = [],
// //     isLoading: isLoadingSubmissions,
// //     refetch: refetchSubmissions
// //   } = useQuery({
// //     queryKey: ['assignment-submissions', classroomId, assignmentId],
// //     queryFn: () => assignmentId ? getSubmissions(classroomId, assignmentId) : [],
// //     enabled: !!assignmentId && !!classroomId,
// //   });

// //   // Create a new assignment
// //   const createMutation = useMutation({
// //     mutationFn: (data: AssignmentFormValues & { content: string }) => 
// //       createAssignment(classroomId, data),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
// //       toast({
// //         title: "Assignment created",
// //         description: "The assignment has been successfully created",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error creating assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Update an existing assignment
// //   const updateMutation = useMutation({
// //     mutationFn: (data: Partial<Assignment>) => 
// //       assignmentId ? updateAssignment(classroomId, assignmentId, data) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment', classroomId, assignmentId] });
// //       toast({
// //         title: "Assignment updated",
// //         description: "The assignment has been successfully updated",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error updating assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Delete an assignment
// //   const deleteMutation = useMutation({
// //     mutationFn: () => 
// //       assignmentId ? deleteAssignment(classroomId, assignmentId) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
// //       toast({
// //         title: "Assignment deleted",
// //         description: "The assignment has been successfully deleted",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error deleting assignment",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Grade a submission with AI
// //   const gradeWithAIMutation = useMutation({
// //     mutationFn: (submissionId: string) => 
// //       assignmentId ? gradeWithAI(classroomId, assignmentId, submissionId) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
// //       toast({
// //         title: "Submission graded",
// //         description: "The submission has been graded by AI",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error grading submission",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   // Update final grade for a submission
// //   const updateGradeMutation = useMutation({
// //     mutationFn: ({ submissionId, finalGrade }: { submissionId: string, finalGrade: number }) => 
// //       assignmentId ? updateFinalGrade(classroomId, assignmentId, submissionId, finalGrade) : Promise.reject("No assignment ID"),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
// //       toast({
// //         title: "Grade updated",
// //         description: "The final grade has been updated",
// //       });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Error updating grade",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     }
// //   });

// //   return {
// //     assignment,
// //     isLoading,
// //     error,
// //     refetch,
// //     submissions,
// //     isLoadingSubmissions,
// //     refetchSubmissions,
// //     createAssignment: createMutation.mutate,
// //     isCreating: createMutation.isPending,
// //     updateAssignment: updateMutation.mutate,
// //     isUpdating: updateMutation.isPending,
// //     deleteAssignment: deleteMutation.mutate,
// //     isDeleting: deleteMutation.isPending,
// //     gradeWithAI: gradeWithAIMutation.mutate,
// //     isGrading: gradeWithAIMutation.isPending,
// //     updateGrade: updateGradeMutation.mutate,
// //     isUpdatingGrade: updateGradeMutation.isPending,
// //   };
// // };

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
//       toast({
//         title: "Assignment created",
//         description: "The assignment has been successfully created",
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         title: "Error creating assignment",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   });

//   // Update an existing assignment
//   const updateMutation = useMutation({
//     mutationFn: (data: Partial<Assignment>) => 
//       assignmentId ? updateAssignment(classroomId, assignmentId, data) : Promise.reject("No assignment ID"),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['assignment', classroomId, assignmentId] });
//       toast({
//         title: "Assignment updated",
//         description: "The assignment has been successfully updated",
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         title: "Error updating assignment",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   });

//   // Delete an assignment
//   const deleteMutation = useMutation({
//     mutationFn: () => 
//       assignmentId ? deleteAssignment(classroomId, assignmentId) : Promise.reject("No assignment ID"),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
//       toast({
//         title: "Assignment deleted",
//         description: "The assignment has been successfully deleted",
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         title: "Error deleting assignment",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   });

//   // Update final grade for a submission
//   const updateGradeMutation = useMutation({
//     mutationFn: ({ submissionId, finalGrade }: { submissionId: string, finalGrade: number }) => 
//       assignmentId ? updateFinalGrade(classroomId, assignmentId, submissionId, finalGrade) : Promise.reject("No assignment ID"),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
//       toast({
//         title: "Grade updated",
//         description: "The final grade has been updated",
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         title: "Error updating grade",
//         description: error.message,
//         variant: "destructive",
//       });
//     }
//   });

//   return {
//     assignment,
//     isLoading,
//     error,
//     refetch,
//     submissions,
//     isLoadingSubmissions,
//     refetchSubmissions,
//     createAssignment: createMutation.mutate,
//     isCreating: createMutation.isPending,
//     updateAssignment: updateMutation.mutate,
//     isUpdating: updateMutation.isPending,
//     deleteAssignment: deleteMutation.mutate,
//     isDeleting: deleteMutation.isPending,
//     updateGrade: updateGradeMutation.mutate,
//     isUpdatingGrade: updateGradeMutation.isPending,
//   };
// };


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getAssignment, 
  getSubmissions,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  updateFinalGrade
} from "@/services/assignmentService";
import { Assignment, AssignmentFormValues } from "@/types/assignment";
import { useToast } from "@/components/ui/use-toast";

/**
 * Hook for working with a specific assignment
 * @param classroomId - The ID of the classroom
 * @param assignmentId - The ID of the assignment
 */
export const useAssignment = (classroomId: string, assignmentId?: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Get a single assignment
  const {
    data: assignment,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['assignment', classroomId, assignmentId],
    queryFn: () => assignmentId ? getAssignment(classroomId, assignmentId) : null,
    enabled: !!assignmentId && !!classroomId,
  });

  // Get submissions for an assignment
  const {
    data: submissions = [],
    isLoading: isLoadingSubmissions,
    refetch: refetchSubmissions
  } = useQuery({
    queryKey: ['assignment-submissions', classroomId, assignmentId],
    queryFn: () => assignmentId ? getSubmissions(classroomId, assignmentId) : [],
    enabled: !!assignmentId && !!classroomId,
  });

  // Create a new assignment
  const createMutation = useMutation({
    mutationFn: (data: AssignmentFormValues & { content: string }) => 
      createAssignment(classroomId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
      toast({
        title: "Assignment created",
        description: "The assignment has been successfully created",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error creating assignment",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Update an existing assignment
  const updateMutation = useMutation({
    mutationFn: (data: Partial<Assignment>) => 
      assignmentId ? updateAssignment(classroomId, assignmentId, data) : Promise.reject("No assignment ID"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignment', classroomId, assignmentId] });
      toast({
        title: "Assignment updated",
        description: "The assignment has been successfully updated",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating assignment",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Delete an assignment
  const deleteMutation = useMutation({
    mutationFn: () => 
      assignmentId ? deleteAssignment(classroomId, assignmentId) : Promise.reject("No assignment ID"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments', classroomId] });
      toast({
        title: "Assignment deleted",
        description: "The assignment has been successfully deleted",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error deleting assignment",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Update final grade for a submission
  const updateGradeMutation = useMutation({
    mutationFn: ({ submissionId, finalGrade }: { submissionId: string, finalGrade: number }) => 
      assignmentId ? updateFinalGrade(classroomId, assignmentId, submissionId, finalGrade) : Promise.reject("No assignment ID"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignment-submissions', classroomId, assignmentId] });
      toast({
        title: "Grade updated",
        description: "The final grade has been updated",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating grade",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  return {
    assignment,
    isLoading,
    error,
    refetch,
    submissions,
    isLoadingSubmissions,
    refetchSubmissions,
    createAssignment: createMutation.mutate,
    isCreating: createMutation.isPending,
    updateAssignment: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deleteAssignment: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
    updateGrade: updateGradeMutation.mutate,
    isUpdatingGrade: updateGradeMutation.isPending,
  };
};
