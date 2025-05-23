
import { ClassroomType } from "@/types/classroom";

// API base URL for classrooms
const API_URL = "https://class-service-1039810289993.europe-west1.run.app/api/classrooms";
// Auth token endpoint
const AUTH_TOKEN_URL = "https://securesign-1039810289993.europe-west1.run.app/auth/token";

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
    const response = await fetch(AUTH_TOKEN_URL, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to get auth token: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
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

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await handleResponse(response);
      return data.classrooms || [];
    } catch (error) {
      console.error("Error fetching classrooms:", error);
      return [];
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
          Authorization: `Bearer ${token}`,
        },
      });

      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching classroom ${id}:`, error);
      throw error;
    }
  },

  // Create a new classroom
  createClassroom: async (
    classroom: Omit<ClassroomType, "id" | "owner_email">
  ): Promise<ClassroomType> => {
    try {
      console.log("Creating classroom via API", classroom);
      const token = await getAuthToken();

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
  updateClassroom: async (
    id: string,
    classroom: Partial<ClassroomType>
  ): Promise<ClassroomType> => {
    try {
      console.log(`Updating classroom ${id} via API`, classroom);
      const token = await getAuthToken();

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to delete classroom: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Error deleting classroom ${id}:`, error);
      throw error;
    }
  },
};

