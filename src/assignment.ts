
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
  deadline?: Date;
  maxPoints: number;
  status: string;
  submissions: number;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
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
