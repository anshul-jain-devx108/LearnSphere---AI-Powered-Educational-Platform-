
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { classroomService } from "@/services/classroomService";
import { ClassroomType } from "@/types/classroom";
import { useToast } from "@/components/ui/use-toast";

export function useClassrooms() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Query for fetching classrooms
  const { 
    data: classrooms = [], 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ["classrooms"],
    queryFn: classroomService.getClassrooms,
  });

  // Mutation for creating a classroom
  const createClassroomMutation = useMutation({
    mutationFn: classroomService.createClassroom,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
      toast({
        title: "Classroom created",
        description: "Your classroom has been created successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create classroom. Please try again.",
        variant: "destructive",
      });
      console.error("Create classroom error:", error);
    },
  });

  // Mutation for updating a classroom
  const updateClassroomMutation = useMutation({
    mutationFn: ({ id, classroom }: { id: string; classroom: Partial<ClassroomType> }) => 
      classroomService.updateClassroom(id, classroom),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
      toast({
        title: "Classroom updated",
        description: "Your classroom has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update classroom. Please try again.",
        variant: "destructive",
      });
      console.error("Update classroom error:", error);
    },
  });

  // Mutation for deleting a classroom
  const deleteClassroomMutation = useMutation({
    mutationFn: classroomService.deleteClassroom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
      toast({
        title: "Classroom deleted",
        description: "Your classroom has been deleted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete classroom. Please try again.",
        variant: "destructive",
      });
      console.error("Delete classroom error:", error);
    },
  });

  // Mutation for adding a student to classroom
  const addStudentMutation = useMutation({
    mutationFn: ({ classroomId, studentData }: { classroomId: string; studentData: any }) => 
      classroomService.addStudentToClassroom(classroomId, studentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classroom-students"] });
      toast({
        title: "Student added",
        description: "The student has been added to the classroom successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add student. Please try again.",
        variant: "destructive",
      });
      console.error("Add student error:", error);
    },
  });

  // Mutation for removing a student from classroom
  const removeStudentMutation = useMutation({
    mutationFn: ({ classroomId, studentId }: { classroomId: string; studentId: string }) => 
      classroomService.removeStudentFromClassroom(classroomId, studentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classroom-students"] });
      toast({
        title: "Student removed",
        description: "The student has been removed from the classroom successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to remove student. Please try again.",
        variant: "destructive",
      });
      console.error("Remove student error:", error);
    },
  });

  // Mutation for adding a teacher to classroom
  const addTeacherMutation = useMutation({
    mutationFn: ({ classroomId, teacherData }: { classroomId: string; teacherData: any }) => 
      classroomService.addTeacherToClassroom(classroomId, teacherData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classroom-teachers"] });
      toast({
        title: "Teacher added",
        description: "The teacher has been added to the classroom successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add teacher. Please try again.",
        variant: "destructive",
      });
      console.error("Add teacher error:", error);
    },
  });

  // Mutation for removing a teacher from classroom
  const removeTeacherMutation = useMutation({
    mutationFn: ({ classroomId, teacherId }: { classroomId: string; teacherId: string }) => 
      classroomService.removeTeacherFromClassroom(classroomId, teacherId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classroom-teachers"] });
      toast({
        title: "Teacher removed",
        description: "The teacher has been removed from the classroom successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to remove teacher. Please try again.",
        variant: "destructive",
      });
      console.error("Remove teacher error:", error);
    },
  });

  return {
    classrooms,
    isLoading,
    error,
    refetch,
    createClassroom: createClassroomMutation.mutate,
    updateClassroom: updateClassroomMutation.mutate,
    deleteClassroom: deleteClassroomMutation.mutate,
    addStudent: addStudentMutation.mutate,
    removeStudent: removeStudentMutation.mutate,
    addTeacher: addTeacherMutation.mutate,
    removeTeacher: removeTeacherMutation.mutate,
    isCreating: createClassroomMutation.isPending,
    isUpdating: updateClassroomMutation.isPending,
    isDeleting: deleteClassroomMutation.isPending,
    isAddingStudent: addStudentMutation.isPending,
    isRemovingStudent: removeStudentMutation.isPending,
    isAddingTeacher: addTeacherMutation.isPending,


// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { classroomService } from "@/services/classroomService";
// import { ClassroomType } from "@/types/classroom";
// import { useToast } from "@/components/ui/use-toast";
// import { useAuth } from "@/context/AuthContext";

// export function useClassrooms() {
//   const queryClient = useQueryClient();
//   const { toast } = useToast();
//   const { user } = useAuth();
//   const userId = user?.id || '';

//   // Query for fetching classrooms by user ID
//   const { 
//     data: classrooms = [], 
//     isLoading, 
//     error,
//     refetch
//   } = useQuery({
//     queryKey: ["user-classrooms", userId],
//     queryFn: () => classroomService.getClassroomsByUserId(userId),
//     enabled: !!userId
//   });

//   // Mutation for creating a classroom
//   const createClassroomMutation = useMutation({
//     mutationFn: classroomService.createClassroom,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["user-classrooms"] });
//       toast({
//         title: "Classroom created",
//         description: "Your classroom has been created successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to create classroom. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Create classroom error:", error);
//     },
//   });

//   // Mutation for updating a classroom
//   const updateClassroomMutation = useMutation({
//     mutationFn: ({ id, classroom }: { id: string; classroom: Partial<ClassroomType> }) => 
//       classroomService.updateClassroom(id, classroom),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classrooms"] });
//       toast({
//         title: "Classroom updated",
//         description: "Your classroom has been updated successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to update classroom. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Update classroom error:", error);
//     },
//   });

//   // Mutation for deleting a classroom
//   const deleteClassroomMutation = useMutation({
//     mutationFn: classroomService.deleteClassroom,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classrooms"] });
//       toast({
//         title: "Classroom deleted",
//         description: "Your classroom has been deleted successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to delete classroom. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Delete classroom error:", error);
//     },
//   });

//   // Mutation for adding a student to classroom
//   const addStudentMutation = useMutation({
//     mutationFn: ({ classroomId, studentData }: { classroomId: string; studentData: any }) => 
//       classroomService.addStudentToClassroom(classroomId, studentData),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classroom-students"] });
//       toast({
//         title: "Student added",
//         description: "The student has been added to the classroom successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to add student. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Add student error:", error);
//     },
//   });

//   // Mutation for removing a student from classroom
//   const removeStudentMutation = useMutation({
//     mutationFn: ({ classroomId, studentId }: { classroomId: string; studentId: string }) => 
//       classroomService.removeStudentFromClassroom(classroomId, studentId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classroom-students"] });
//       toast({
//         title: "Student removed",
//         description: "The student has been removed from the classroom successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to remove student. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Remove student error:", error);
//     },
//   });

//   // Mutation for adding a teacher to classroom
//   const addTeacherMutation = useMutation({
//     mutationFn: ({ classroomId, teacherData }: { classroomId: string; teacherData: any }) => 
//       classroomService.addTeacherToClassroom(classroomId, teacherData),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classroom-teachers"] });
//       toast({
//         title: "Teacher added",
//         description: "The teacher has been added to the classroom successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to add teacher. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Add teacher error:", error);
//     },
//   });

//   // Mutation for removing a teacher from classroom
//   const removeTeacherMutation = useMutation({
//     mutationFn: ({ classroomId, teacherId }: { classroomId: string; teacherId: string }) => 
//       classroomService.removeTeacherFromClassroom(classroomId, teacherId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["classroom-teachers"] });
//       toast({
//         title: "Teacher removed",
//         description: "The teacher has been removed from the classroom successfully.",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: "Failed to remove teacher. Please try again.",
//         variant: "destructive",
//       });
//       console.error("Remove teacher error:", error);
//     },
//   });

//   return {
//     classrooms,
//     isLoading,
//     error,
//     refetch,
//     createClassroom: createClassroomMutation.mutate,
//     updateClassroom: updateClassroomMutation.mutate,
//     deleteClassroom: deleteClassroomMutation.mutate,
//     addStudent: addStudentMutation.mutate,
//     removeStudent: removeStudentMutation.mutate,
//     addTeacher: addTeacherMutation.mutate,
//     removeTeacher: removeTeacherMutation.mutate,
//     isCreating: createClassroomMutation.isPending,
//     isUpdating: updateClassroomMutation.isPending,
//     isDeleting: deleteClassroomMutation.isPending,
//     isAddingStudent: addStudentMutation.isPending,
//     isRemovingStudent: removeStudentMutation.isPending,
//     isAddingTeacher: addTeacherMutation.isPending,
//     isRemovingTeacher: removeTeacherMutation.isPending,
//   };
// }
    isRemovingTeacher: removeTeacherMutation.isPending,
  };
}
