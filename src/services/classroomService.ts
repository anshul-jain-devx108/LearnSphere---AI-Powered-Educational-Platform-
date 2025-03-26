
import { ClassroomType } from "@/types/classroom";

// API base URL for classrooms
const API_URL = "https://classroomservice-403893624463.us-central1.run.app/api/classrooms";
// Auth token endpoint
const AUTH_TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";

// Helper function to handle fetch responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `API error: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

// Helper function to get the authentication token
const getAuthToken = async (): Promise<string> => {
  try {
    const response = await fetch(AUTH_TOKEN_URL);
    if (!response.ok) {
      throw new Error(`Failed to get auth token: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw error;
  }
};

// Classroom service for handling API calls
export const classroomService = {
  // Get all classrooms
  getClassrooms: async (): Promise<ClassroomType[]> => {
    try {
      console.log("Fetching classrooms from API");
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      const data = await handleResponse(response);
      
      return data.classrooms || [];
    } catch (error) {
      console.error("Error fetching classrooms:", error);
      
      // Fallback to mock data in case API is not ready
      console.log("⚠️ Using fallback mock data as API request failed");
      return [
        {
          id: "class-1",
          title: "Introduction to Computer Science",
          subject: "Computer Science",
          room: "Room 101",
          description: "Fundamentals of computer science and programming",
          owner_email: "teacher@example.com"
        },
        {
          id: "class-2",
          title: "World History",
          subject: "History",
          room: "Room 203",
          description: "A comprehensive study of world history",
          owner_email: "teacher@example.com"
        },
        {
          id: "class-3",
          title: "Advanced Mathematics",
          subject: "Mathematics",
          room: "Room 305",
          description: "Advanced topics in mathematics",
          owner_email: "teacher@example.com"
        }
      ];
    }
  },

  // Get a classroom by ID
  getClassroomById: async (id: string): Promise<ClassroomType> => {
    try {
      console.log(`Fetching classroom ${id} from API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching classroom ${id}:`, error);
      
      // Fallback mock data
      return {
        id,
        title: "Sample Classroom",
        subject: "Sample Subject",
        room: "Room 101",
        description: "This is a sample classroom",
        owner_email: "teacher@example.com"
      };
    }
  },

  // Create a new classroom
  createClassroom: async (classroom: Omit<ClassroomType, "id" | "owner_email">): Promise<ClassroomType> => {
    try {
      console.log("Creating classroom via API", classroom);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(classroom),
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error("Error creating classroom:", error);
      throw error;
    }
  },

  // Update a classroom
  updateClassroom: async (id: string, classroom: Partial<ClassroomType>): Promise<ClassroomType> => {
    try {
      console.log(`Updating classroom ${id} via API`, classroom);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(classroom),
      });
      
      const data = await handleResponse(response);
      return data.classroom;
    } catch (error) {
      console.error(`Error updating classroom ${id}:`, error);
      throw error;
    }
  },

  // Delete a classroom
  deleteClassroom: async (id: string): Promise<void> => {
    try {
      console.log(`Deleting classroom ${id} via API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete classroom: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error deleting classroom ${id}:`, error);
      throw error;
    }
  },

  // Add a student to a classroom
  addStudentToClassroom: async (classroomId: string, studentData: any): Promise<any> => {
    try {
      console.log(`Adding student to classroom ${classroomId} via API`, studentData);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(studentData),
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error adding student to classroom ${classroomId}:`, error);
      throw error;
    }
  },

  // Remove a student from a classroom
  removeStudentFromClassroom: async (classroomId: string, studentId: string): Promise<void> => {
    try {
      console.log(`Removing student ${studentId} from classroom ${classroomId} via API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/students/${studentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to remove student: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error removing student ${studentId} from classroom ${classroomId}:`, error);
      throw error;
    }
  },

  // Get students in a classroom
  getClassroomStudents: async (classroomId: string): Promise<any[]> => {
    try {
      console.log(`Fetching students for classroom ${classroomId} from API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/students`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      const data = await handleResponse(response);
      return data.students || [];
    } catch (error) {
      console.error(`Error fetching students for classroom ${classroomId}:`, error);
      
      // Fallback mock data
      return [
        {
          id: "student-1",
          name: "Alex Johnson",
          email: "alex@example.com",
          grade: "A-",
          attendance: "95%"
        },
        {
          id: "student-2",
          name: "Jamie Smith",
          email: "jamie@example.com",
          grade: "B+",
          attendance: "87%"
        },
        {
          id: "student-3",
          name: "Taylor Wilson",
          email: "taylor@example.com",
          grade: "A",
          attendance: "92%"
        }
      ];
    }
  },

  // Add a teacher to a classroom
  addTeacherToClassroom: async (classroomId: string, teacherData: any): Promise<any> => {
    try {
      console.log(`Adding teacher to classroom ${classroomId} via API`, teacherData);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/teachers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(teacherData),
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error adding teacher to classroom ${classroomId}:`, error);
      throw error;
    }
  },

  // Remove a teacher from a classroom
  removeTeacherFromClassroom: async (classroomId: string, teacherId: string): Promise<void> => {
    try {
      console.log(`Removing teacher ${teacherId} from classroom ${classroomId} via API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/teachers/${teacherId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to remove teacher: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error removing teacher ${teacherId} from classroom ${classroomId}:`, error);
      throw error;
    }
  },

  // Get teachers in a classroom
  getClassroomTeachers: async (classroomId: string): Promise<any[]> => {
    try {
      console.log(`Fetching teachers for classroom ${classroomId} from API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${classroomId}/teachers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      const data = await handleResponse(response);
      return data.teachers || [];
    } catch (error) {
      console.error(`Error fetching teachers for classroom ${classroomId}:`, error);
      
      // Fallback mock data for teachers
      return [
        {
          id: "teacher-1",
          name: "Dr. Sarah Parker",
          email: "sarah.parker@example.com",
          subject: "Mathematics",
          role: "Assistant Teacher"
        }
      ];
    }
  }
};
