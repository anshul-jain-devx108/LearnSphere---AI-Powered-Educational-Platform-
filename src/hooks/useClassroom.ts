
import { useQuery } from "@tanstack/react-query";
import { classroomService } from "@/services/classroomService";

export function useClassroom(classroomId: string) {
  const { 
    data: classroom, 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ["classroom", classroomId],
    queryFn: () => classroomService.getClassroomById(classroomId),
    enabled: !!classroomId
  });

  const {
    data: students = [],
    isLoading: isLoadingStudents,
    error: studentsError,
    refetch: refetchStudents
  } = useQuery({
    queryKey: ["classroom-students", classroomId],
    queryFn: () => classroomService.getClassroomStudents(classroomId),
    enabled: !!classroomId
  });

  const {
    data: teachers = [],
    isLoading: isLoadingTeachers,
    error: teachersError,
    refetch: refetchTeachers
  } = useQuery({
    queryKey: ["classroom-teachers", classroomId],
    queryFn: () => classroomService.getClassroomTeachers(classroomId),
    enabled: !!classroomId
  });

  return {
    classroom,
    isLoading,
    error,
    refetch,
    students,
    isLoadingStudents,
    studentsError,
    refetchStudents,
    teachers,
    isLoadingTeachers,
    teachersError,
    refetchTeachers
  };
}
