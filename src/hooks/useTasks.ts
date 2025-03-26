
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskService } from "@/services/taskService";
import { Task } from "@/types/task";
import { useToast } from "@/components/ui/use-toast";

export function useTasks() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Query for fetching tasks
  const { data: tasks = [], isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: taskService.getTasks,
  });

  // Mutation for creating a task
  const createTaskMutation = useMutation({
    mutationFn: taskService.createTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task created",
        description: "Your task has been created and synced with Google Calendar.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create task. Please try again.",
        variant: "destructive",
      });
      console.error("Create task error:", error);
    },
  });

  // Mutation for updating a task
  const updateTaskMutation = useMutation({
    mutationFn: ({ id, task }: { id: string; task: Partial<Task> }) => 
      taskService.updateTask(id, task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task updated",
        description: "Your task has been updated and synced with Google Calendar.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update task. Please try again.",
        variant: "destructive",
      });
      console.error("Update task error:", error);
    },
  });

  // Mutation for toggling task completion
  const toggleCompletionMutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) => 
      taskService.toggleTaskCompletion(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task status updated",
        description: "Task status has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update task status. Please try again.",
        variant: "destructive",
      });
      console.error("Toggle task completion error:", error);
    },
  });

  // Mutation for deleting a task
  const deleteTaskMutation = useMutation({
    mutationFn: taskService.deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task deleted",
        description: "Your task has been deleted and removed from Google Calendar.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete task. Please try again.",
        variant: "destructive",
      });
      console.error("Delete task error:", error);
    },
  });

  return {
    tasks,
    isLoading,
    error,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    toggleTaskCompletion: toggleCompletionMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
    isCreating: createTaskMutation.isPending,
    isUpdating: updateTaskMutation.isPending,
    isDeleting: deleteTaskMutation.isPending,
  };
}
