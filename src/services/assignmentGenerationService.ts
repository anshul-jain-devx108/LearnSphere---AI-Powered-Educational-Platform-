
// import { Assignment, AssignmentFormValues } from "@/types/assignment";

// // PLACEHOLDER: Replace with your actual API base URL
// const API_BASE_URL = "https://api.learnsphere.example/v1";

// /**
//  * Service for handling assignment creation and AI generation operations
//  */
// export const assignmentGenerationService = {
//   /**
//    * Get all assignments for a classroom
//    * @param classroomId - The ID of the classroom
//    */
//   getAssignments: async (classroomId: string): Promise<Assignment[]> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments`);
      
//       if (!response.ok) {
//         throw new Error(`Failed to fetch assignments: ${response.status}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
      
//       // Return mock data for now - remove this when connecting to real API
//       return mockAssignments;
//     }
//   },

//   /**
//    * Get a single assignment by ID
//    * @param classroomId - The ID of the classroom
//    * @param assignmentId - The ID of the assignment
//    */
//   getAssignment: async (classroomId: string, assignmentId: string): Promise<Assignment> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`);
      
//       if (!response.ok) {
//         throw new Error(`Failed to fetch assignment: ${response.status}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error(`Error fetching assignment ${assignmentId}:`, error);
      
//       // Return mock data for now - remove this when connecting to real API
//       return mockAssignments.find(a => a.id === assignmentId) || mockAssignments[0];
//     }
//   },

//   /**
//    * Create a new assignment
//    * @param classroomId - The ID of the classroom
//    * @param assignmentData - The assignment data to create
//    */
//   createAssignment: async (classroomId: string, assignmentData: AssignmentFormValues & { content: string }): Promise<Assignment> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(assignmentData),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Failed to create assignment: ${response.status}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Error creating assignment:", error);
      
//       // Mock response for testing - adding the missing description property
//       return {
//         ...assignmentData,
//         id: `mock-${Date.now()}`,
//         description: assignmentData.additionalInstructions || "No description provided",
//         status: "Active",
//         submissions: 0,
//         dueDate: assignmentData.deadline ? assignmentData.deadline.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       };
//     }
//   },

//   /**
//    * Update an existing assignment
//    * @param classroomId - The ID of the classroom
//    * @param assignmentId - The ID of the assignment to update
//    * @param assignmentData - The updated assignment data
//    */
//   updateAssignment: async (classroomId: string, assignmentId: string, assignmentData: Partial<Assignment>): Promise<Assignment> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(assignmentData),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Failed to update assignment: ${response.status}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error(`Error updating assignment ${assignmentId}:`, error);
      
//       // Mock response for testing
//       return {
//         ...(mockAssignments.find(a => a.id === assignmentId) || mockAssignments[0]),
//         ...assignmentData,
//         updatedAt: new Date().toISOString(),
//       };
//     }
//   },

//   /**
//    * Delete an assignment
//    * @param classroomId - The ID of the classroom
//    * @param assignmentId - The ID of the assignment to delete
//    */
//   deleteAssignment: async (classroomId: string, assignmentId: string): Promise<{ success: boolean }> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`, {
//         method: 'DELETE',
//       });
      
//       if (!response.ok) {
//         throw new Error(`Failed to delete assignment: ${response.status}`);
//       }
      
//       return { success: true };
//     } catch (error) {
//       console.error(`Error deleting assignment ${assignmentId}:`, error);
      
//       // Mock response for testing
//       return { success: true };
//     }
//   },

//   /**
//    * Generate an assignment with AI
//    * @param classroomId - The ID of the classroom 
//    * @param promptData - Data to use for generating the assignment
//    */
//   generateAssignmentWithAI: async (classroomId: string, promptData: AssignmentFormValues): Promise<{ content: string }> => {
//     try {
//       // PLACEHOLDER: Replace with actual API call
//       const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/generate`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(promptData),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Failed to generate assignment with AI: ${response.status}`);
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Error generating assignment with AI:", error);
      
//       // Mock generated assignment for testing
//       const deadlineInfo = promptData.deadline 
//         ? `**Deadline**: ${promptData.deadline.toLocaleDateString()} by ${promptData.deadline.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` 
//         : '';
        
//       const gradingSection = `## Grading Criteria (${promptData.standardGrading})
// - Understanding of concepts: 40%
// - Application of knowledge: 30%
// - Clarity of explanations: 20%
// - Presentation: 10%

// This assignment will be graded according to the ${promptData.standardGrading} standard.`;

//       return {
//         content: `# ${promptData.title}
    
// ## Overview
// This is a ${promptData.difficultyLevel} difficulty ${promptData.subject} assignment for grade ${promptData.gradeLevel}.
// ${deadlineInfo}

// ## Learning Objectives
// - Understand key concepts in ${promptData.subject}
// - Apply critical thinking to solve problems
// - Demonstrate comprehension through written responses

// ## Instructions
// 1. Read all questions carefully before beginning
// 2. Show all work for maximum credit

// ## Questions
// 1. Explain the main concepts of [key topic in ${promptData.subject}]
// 2. Compare and contrast [concept A] and [concept B]
// 3. Solve the following problem: [problem description]
// 4. Analyze the following scenario: [scenario description]
// 5. Create a diagram illustrating [process/concept]

// ${promptData.additionalInstructions ? `## Additional Instructions\n${promptData.additionalInstructions}` : ''}

// ${gradingSection}
// `
//       };
//     }
//   }
// };

// // Mock data for development and testing
// // These can be removed once connected to your real API
// const mockAssignments: Assignment[] = [
//   {
//     id: "1",
//     title: "Midterm Project",
//     dueDate: "2024-03-25",
//     status: "Active",
//     submissions: 15,
//     description: "Final project for the first half of the semester.",
//     maxPoints: 100,
//     subject: "Computer Science",
//     gradeLevel: "high",
//     difficultyLevel: "medium",
//     detailedLevel: "comprehensive",
//     standardGrading: "rubric",
//     deadline: new Date("2024-03-25"),
//     content: "# Midterm Project\n\n## Overview\nThis is a medium difficulty Computer Science assignment for grade high school.\n**Deadline**: 3/25/2024 by 11:59 PM\n\n## Learning Objectives\n- Understand key concepts in Computer Science\n- Apply critical thinking to solve problems\n- Demonstrate comprehension through written responses\n\n## Instructions\n1. Read all questions carefully before beginning\n2. Show all work for maximum credit\n\n## Questions\n1. Explain the main concepts of [key topic in Computer Science]\n2. Compare and contrast [concept A] and [concept B]\n3. Solve the following problem: [problem description]\n4. Analyze the following scenario: [scenario description]\n5. Create a diagram illustrating [process/concept]\n\n## Grading Criteria (rubric)\n- Understanding of concepts: 40%\n- Application of knowledge: 30%\n- Clarity of explanations: 20%\n- Presentation: 10%\n\nThis assignment will be graded according to the rubric standard."
//   },
//   {
//     id: "2",
//     title: "Weekly Quiz",
//     dueDate: "2024-03-22",
//     status: "Draft",
//     submissions: 0,
//     description: "Quiz covering material from week 8.",
//     maxPoints: 50,
//     subject: "Computer Science",
//     gradeLevel: "high",
//     difficultyLevel: "easy",
//     detailedLevel: "basic",
//     standardGrading: "points",
//     deadline: new Date("2024-03-22"),
//     content: "# Weekly Quiz\n\n## Overview\nThis is an easy difficulty Computer Science assignment for grade high school.\n**Deadline**: 3/22/2024 by 11:59 PM\n\n## Learning Objectives\n- Understand key concepts in Computer Science\n- Apply critical thinking to solve problems\n- Demonstrate comprehension through written responses\n\n## Instructions\n1. Read all questions carefully before beginning\n2. Show all work for maximum credit\n\n## Questions\n1. Explain the main concepts of [key topic in Computer Science]\n2. Compare and contrast [concept A] and [concept B]\n3. Solve the following problem: [problem description]\n4. Analyze the following scenario: [scenario description]\n5. Create a diagram illustrating [process/concept]\n\n## Grading Criteria (points)\n- Understanding of concepts: 40%\n- Application of knowledge: 30%\n- Clarity of explanations: 20%\n- Presentation: 10%\n\nThis assignment will be graded according to the points-based standard."
//   },
// ];

// export default assignmentGenerationService;

import { Assignment, AssignmentFormValues } from "@/types/assignment";

const API_BASE_URL = "http://localhost:5000/api/";
const AUTH_TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token"; // Update with actual auth token endpoint

/**
 * Helper function to fetch the authentication token
 */
async function getAuthToken(): Promise<string | null> {
  try {
    const response = await fetch(AUTH_TOKEN_URL, {
      method: "GET",
      credentials: "include", // 🔹 Ensure cookies/session tokens are sent
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to get authentication token: ${response.status}`);
    }

    const data = await response.json();
    console.log("🔹 Token received:", data.access_token || data.token); // Debugging log

    return data.access_token || data.token || null; // 🔹 Ensure correct property
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
}

export const assignmentGenerationService = {
  async getAssignments(classroomId: string): Promise<Assignment[]> {
    try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/assignments/classroom/${classroomId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch assignments: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching assignments:", error);
      return [];
    }
  },

  async getAssignment(classroomId: string, assignmentId: string): Promise<Assignment> {
    try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`, {
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
  },

  async createAssignment(classroomId: string, assignmentData: AssignmentFormValues & { content: string }): Promise<Assignment> {
    try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/api/assignments`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create assignment: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating assignment:", error);
      throw error;
    }
  },

  async updateAssignment(classroomId: string, assignmentId: string, assignmentData: Partial<Assignment>): Promise<Assignment> {
    try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`, {
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
  },

  async deleteAssignment(classroomId: string, assignmentId: string): Promise<{ success: boolean }> {
    try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}`, {
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
  },

  async generateAssignmentWithAI(classroomId: string, promptData: AssignmentFormValues): Promise<{ content: string }> {
  //   try {
  //     const token = await getAuthToken();
  //     if (!token) throw new Error("No authentication token available");

  //     const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/generate`, {
  //       method: 'POST',
  //       headers: {
  //         "Authorization": `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(promptData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Failed to generate assignment with AI: ${response.status}`);
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     console.error("Error generating assignment with AI:", error);
  //     throw error;
  //   }
  // }

         try {
      const token = await getAuthToken();
      if (!token) throw new Error("No authentication token available");

      const response = await fetch(`${API_BASE_URL}/api/assignments`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignmentData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create assignment: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating assignment:", error);
      throw error;
    }
};

export default assignmentGenerationService;

