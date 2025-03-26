
export interface Task {
  id: string;
  title: string;
  dueDate: string;
  dueDateObj?: Date;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}
