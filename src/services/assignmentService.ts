
import assignmentGenerationService, { assignmentGenerationService as generationService } from "./assignmentGenerationService";
import assignmentDashboardService, { assignmentDashboardService as dashboardService } from "./assignmentDashboardService";

// Re-export both services for backwards compatibility
export const assignmentService = {
  // Assignment generation and management
  getAssignments: generationService.getAssignments,
  getAssignment: generationService.getAssignment,
  createAssignment: generationService.createAssignment,
  updateAssignment: generationService.updateAssignment,
  deleteAssignment: generationService.deleteAssignment,
  generateAssignmentWithAI: generationService.generateAssignmentWithAI,
  
  // Dashboard and submissions
  getSubmissions: dashboardService.getSubmissions,
  gradeWithAI: dashboardService.gradeWithAI,
  updateFinalGrade: dashboardService.updateFinalGrade,
};

export default assignmentService;
