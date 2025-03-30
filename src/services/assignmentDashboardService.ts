
import { AssignmentSubmission } from "@/types/assignment";

// PLACEHOLDER: Replace with your actual API base URL
const API_BASE_URL = "https://api.learnsphere.example/v1";

/**
 * Service for handling assignment submissions and dashboard operations
 */
export const assignmentDashboardService = {
  /**
   * Get assignment submissions for a specific assignment
   * @param classroomId - The ID of the classroom
   * @param assignmentId - The ID of the assignment
   */
  getSubmissions: async (classroomId: string, assignmentId: string): Promise<AssignmentSubmission[]> => {
    try {
      // PLACEHOLDER: Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}/submissions`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch submissions: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching submissions for assignment ${assignmentId}:`, error);
      
      // Return mock data for now - remove this when connecting to real API
      return mockSubmissions;
    }
  },

  /**
   * Grade a submission with AI
   * @param classroomId - The ID of the classroom
   * @param assignmentId - The ID of the assignment
   * @param submissionId - The ID of the submission to grade
   */
  gradeWithAI: async (classroomId: string, assignmentId: string, submissionId: string): Promise<{ aiGrade: number }> => {
    try {
      // PLACEHOLDER: Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}/grade-ai`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error(`Failed to grade submission with AI: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error grading submission ${submissionId} with AI:`, error);
      
      // Mock response for testing
      return { aiGrade: Math.floor(Math.random() * 31) + 70 }; // Random grade between 70-100
    }
  },

  /**
   * Update final grade for a submission
   * @param classroomId - The ID of the classroom
   * @param assignmentId - The ID of the assignment
   * @param submissionId - The ID of the submission
   * @param finalGrade - The final grade
   */
  updateFinalGrade: async (classroomId: string, assignmentId: string, submissionId: string, finalGrade: number): Promise<{ success: boolean }> => {
    try {
      // PLACEHOLDER: Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}/grade`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ finalGrade }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update final grade: ${response.status}`);
      }
      
      return { success: true };
    } catch (error) {
      console.error(`Error updating final grade for submission ${submissionId}:`, error);
      
      // Mock response for testing
      return { success: true };
    }
  },
};

// Mock data for development and testing
const mockSubmissions: AssignmentSubmission[] = [
  {
    id: "1",
    assignmentId: "1",
    studentId: "s1",
    studentName: "Emma Johnson",
    submissionDate: "2024-03-22 14:30",
    status: "Submitted",
    content: "Student's assignment content here...",
    aiGrade: 85,
    finalGrade: 88
  },
  {
    id: "2",
    assignmentId: "1",
    studentId: "s2",
    studentName: "Michael Smith",
    submissionDate: "2024-03-23 09:15",
    status: "Submitted",
    content: "Student's assignment content here...",
    aiGrade: 92,
    finalGrade: 90
  },
  {
    id: "3",
    assignmentId: "1",
    studentId: "s3",
    studentName: "Sophia Garcia",
    submissionDate: "2024-03-26 22:45",
    status: "Late",
    content: "Student's assignment content here...",
    aiGrade: 78
  },
];

export default assignmentDashboardService;
