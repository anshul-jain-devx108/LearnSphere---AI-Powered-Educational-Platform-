
export interface ClassroomType {
  id: string;
  title: string;
  subject: string;
  room?: string;
  description?: string;
  owner_email: string;
  pendingGrading?: number; // For UI display
}
