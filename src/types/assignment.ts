
// export interface Assignment {
//   id: string;
//   title: string;
//   description: string;
//   subject: string;
//   gradeLevel: string;
//   difficultyLevel: string;
//   detailedLevel: string;
//   standardGrading: string;
//   dueDate: string;
//   deadline?: Date;
//   maxPoints: number;
//   status: string;
//   submissions: number;
//   content?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface AssignmentFormValues {
//   title: string;
//   subject: string;
//   gradeLevel: string;
//   difficultyLevel: string;
//   detailedLevel: string;
//   standardGrading: string;
//   deadline?: Date;
//   maxPoints: number;
//   additionalInstructions?: string;
// }

// export interface AssignmentSubmission {
//   id: string;
//   assignmentId: string;
//   studentId: string;
//   studentName: string;
//   submissionDate: string;
//   status: "Submitted" | "Late" | "Not Submitted";
//   content: string;
//   aiGrade?: number;
//   finalGrade?: number;
// }



// export interface Assignment {
//   id: string;
//   title: string;
//   description: string;
//   subject: string;
//   gradeLevel: string;
//   difficultyLevel: string;
//   detailedLevel: string;
//   standardGrading: string;
//   dueDate: string;
//   deadline?: Date | string; // Can be either Date object or ISO string
//   maxPoints: number;
//   status: string;
//   submissions: AssignmentSubmission[] | number;
//   content?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   // Add fields that match backend expectations
//   totalMarksWeightage?: number;
//   evaluationCriteria?: string;
//   numberOfTasks?: number;
//   language?: string;
// }

// export interface AssignmentFormValues {
//   title: string;
//   subject: string;
//   gradeLevel: string;
//   difficultyLevel: string;
//   detailedLevel: string;
//   standardGrading: string;
//   deadline?: Date;
//   maxPoints: number;
//   additionalInstructions?: string;
//   // Fields that map to backend expectations
//   totalMarksWeightage?: number; // Maps to maxPoints
//   evaluationCriteria?: string;  // Maps to standardGrading
//   numberOfTasks?: number;
//   language?: string;
// }

// export interface AssignmentSubmission {
//   id: string;
//   assignmentId: string;
//   studentId: string;
//   studentName: string;
//   submissionDate: string;
//   status: "Submitted" | "Late" | "Not Submitted";
//   content: string;
//   aiGrade?: number;
//   finalGrade?: number;
// }


export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  difficultyLevel: string;
  detailedLevel: string;
  standardGrading: string;
  dueDate: string;
  deadline?: Date | string; // Can be either Date object or ISO string
  maxPoints: number;
  status: string;
  submissions: AssignmentSubmission[] | number;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  classroomId?: string;
  // Add fields that match backend expectations
  totalMarksWeightage?: number;
  evaluationCriteria?: string;
  numberOfTasks?: number;
  language?: string;
  additionalInstructions?: string;
}

export interface AssignmentFormValues {
  title: string;
  subject: string;
  gradeLevel: string;
  difficultyLevel: string;
  detailedLevel: string;
  standardGrading: string;
  deadline?: Date;
  maxPoints: number;
  additionalInstructions?: string;
  content?: string;
  // Fields that map to backend expectations
  totalMarksWeightage?: number; // Maps to maxPoints
  evaluationCriteria?: string;  // Maps to standardGrading
  numberOfTasks?: number;
  language?: string;
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  submissionDate: string;
  status: "Submitted" | "Late" | "Not Submitted";
  content: string;
  aiGrade?: number;
  finalGrade?: number;
}
