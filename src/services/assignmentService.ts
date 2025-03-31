
// import assignmentGenerationService, { assignmentGenerationService as generationService } from "./assignmentGenerationService";
// import assignmentDashboardService, { assignmentDashboardService as dashboardService } from "./assignmentDashboardService";

// // Re-export both services for backwards compatibility
// export const assignmentService = {
//   // Assignment generation and management
//   getAssignments: generationService.getAssignments,
//   getAssignment: generationService.getAssignment,
//   createAssignment: generationService.createAssignment,
//   updateAssignment: generationService.updateAssignment,
//   deleteAssignment: generationService.deleteAssignment,
//   generateAssignmentWithAI: generationService.generateAssignmentWithAI,
  
//   // Dashboard and submissions
//   getSubmissions: dashboardService.getSubmissions,
//   gradeWithAI: dashboardService.gradeWithAI,
//   updateFinalGrade: dashboardService.updateFinalGrade,
// };

// export default assignmentService;


// import { Assignment, AssignmentFormValues, AssignmentSubmission } from "@/types/assignment";

// // API endpoints
// const API_BASE_URL = "http://localhost:5000/api";
// const AUTH_TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";

// /**
//  * Helper function to fetch the authentication token
//  */
// async function getAuthToken(): Promise<string | null> {
//   try {
//     const response = await fetch(AUTH_TOKEN_URL, {
//       method: "GET",
//       credentials: "include", // Ensure cookies/session tokens are sent
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to get authentication token: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Token received:", data.access_token || data.token); // Debugging log

//     return data.access_token || data.token || null;
//   } catch (error) {
//     console.error("Error fetching token:", error);
//     return null;
//   }
// }

// /**
//  * Get all assignments for a classroom
//  */
// export const getAssignments = async (classroomId: string): Promise<Assignment[]> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/classroom/${classroomId}`, {
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch assignments: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching assignments:", error);
//     return [];
//   }
// };

// /**
//  * Get a single assignment by ID
//  */
// export const getAssignment = async (classroomId: string, assignmentId: string): Promise<Assignment> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch assignment: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`Error fetching assignment ${assignmentId}:`, error);
//     throw error;
//   }
// };

// /**
//  * Create a new assignment
//  */
// export const createAssignment = async (classroomId: string, assignmentData: AssignmentFormValues & { content: string }): Promise<Assignment> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const payload = {
//       ...assignmentData,
//       classroomId
//     };

//     const response = await fetch(`${API_BASE_URL}/assignments`, {
//       method: 'POST',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to create assignment: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error creating assignment:", error);
//     throw error;
//   }
// };

// /**
//  * Update an existing assignment
//  */
// export const updateAssignment = async (classroomId: string, assignmentId: string, assignmentData: Partial<Assignment>): Promise<Assignment> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
//       method: 'PUT',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(assignmentData),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to update assignment: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`Error updating assignment ${assignmentId}:`, error);
//     throw error;
//   }
// };

// /**
//  * Delete an assignment
//  */
// export const deleteAssignment = async (classroomId: string, assignmentId: string): Promise<{ success: boolean }> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
//       method: 'DELETE',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to delete assignment: ${response.status}`);
//     }

//     return { success: true };
//   } catch (error) {
//     console.error(`Error deleting assignment ${assignmentId}:`, error);
//     return { success: false };
//   }
// };

// /**
//  * Get submissions for an assignment
//  */
// export const getSubmissions = async (classroomId: string, assignmentId: string): Promise<AssignmentSubmission[]> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}/submissions`, {
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch submissions: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`Error fetching submissions for assignment ${assignmentId}:`, error);
//     return [];
//   }
// };

// /**
//  * Update the final grade for a submission
//  */
// export const updateFinalGrade = async (
//   classroomId: string, 
//   assignmentId: string, 
//   submissionId: string, 
//   finalGrade: number
// ): Promise<any> => {
//   try {
//     const token = await getAuthToken();
//     if (!token) throw new Error("No authentication token available");

//     const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}/submissions/${submissionId}`, {
//       method: 'PATCH',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ finalGrade }),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to update final grade: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`Error updating final grade for submission ${submissionId}:`, error);
//     throw error;
//   }
// };


import { Assignment, AssignmentFormValues, AssignmentSubmission } from "@/types/assignment";

// API endpoints
const API_BASE_URL = "http://localhost:5000/api";
const AUTH_TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";

/**
 * Helper function to fetch the authentication token
 */
async function getAuthToken(): Promise<string | null> {
  try {
    const response = await fetch(AUTH_TOKEN_URL, {
      method: "GET",
      credentials: "include", // Ensure cookies/session tokens are sent
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to get authentication token: ${response.status}`);
    }

    const data = await response.json();
    console.log("Token received:", data.access_token || data.token); // Debugging log

    return data.access_token || data.token || null;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
}

/**
 * Get all assignments for a classroom
 */
export const getAssignments = async (classroomId: string): Promise<Assignment[]> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    console.log(`Fetching assignments for classroom: ${classroomId}`);
    const response = await fetch(`${API_BASE_URL}/assignments/classroom/${classroomId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch assignments: ${response.status}`);
    }

    const data = await response.json();
    console.log("Assignments fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    return [];
  }
};

/**
 * Get a single assignment by ID
 */
export const getAssignment = async (classroomId: string, assignmentId: string): Promise<Assignment> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch assignment: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching assignment ${assignmentId}:`, error);
    throw error;
  }
};

/**
 * Create a new assignment
 */
export const createAssignment = async (classroomId: string, assignmentData: AssignmentFormValues & { content: string }): Promise<Assignment> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const payload = {
      ...assignmentData,
      classroomId,
      dueDate: assignmentData.deadline ? assignmentData.deadline.toISOString() : undefined
    };

    console.log("Creating assignment with payload:", payload);
    const response = await fetch(`${API_BASE_URL}/assignments`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to create assignment: ${response.status}`);
    }

    const data = await response.json();
    console.log("Assignment created:", data);
    return data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

/**
 * Update an existing assignment
 */
export const updateAssignment = async (classroomId: string, assignmentId: string, assignmentData: Partial<Assignment>): Promise<Assignment> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update assignment: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating assignment ${assignmentId}:`, error);
    throw error;
  }
};

/**
 * Delete an assignment
 */
export const deleteAssignment = async (classroomId: string, assignmentId: string): Promise<{ success: boolean }> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete assignment: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error(`Error deleting assignment ${assignmentId}:`, error);
    return { success: false };
  }
};

/**
 * Get submissions for an assignment
 */
export const getSubmissions = async (classroomId: string, assignmentId: string): Promise<AssignmentSubmission[]> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}/submissions`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch submissions: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching submissions for assignment ${assignmentId}:`, error);
    return [];
  }
};

/**
 * Update the final grade for a submission
 */
export const updateFinalGrade = async (
  classroomId: string, 
  assignmentId: string, 
  submissionId: string, 
  finalGrade: number
): Promise<any> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error("No authentication token available");

    const response = await fetch(`${API_BASE_URL}/assignments/${assignmentId}/submissions/${submissionId}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ finalGrade }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update final grade: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating final grade for submission ${submissionId}:`, error);
    throw error;
  }
};
