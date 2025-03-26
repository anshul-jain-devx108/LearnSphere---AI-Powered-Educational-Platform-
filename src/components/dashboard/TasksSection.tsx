import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ListTodo, 
  CheckCircle, 
  Edit, 
  X,
  Plus,
  Loader2,
  Trash2
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePickerWithText } from "@/components/ui/date-picker-with-text";
import { format } from "date-fns";
import { Task } from "@/types/task";
import { useTasks } from "@/hooks/useTasks";
import { Skeleton } from "@/components/ui/skeleton";

export const TasksSection = () => {
  // Use the custom hook for tasks management
  const { 
    tasks, 
    isLoading, 
    error, 
    createTask, 
    updateTask, 
    toggleTaskCompletion,
    deleteTask,
    isCreating,
    isUpdating,
    isDeleting
  } = useTasks();
  
  // State for showing all tasks or just a few
  const [showAllTasks, setShowAllTasks] = useState(false);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState<Omit<Task, "id" | "completed">>({
    title: "",
    dueDate: "",
    priority: "Medium",
  });
  const [editDueDate, setEditDueDate] = useState<Date | undefined>(undefined);
  const [newDueDate, setNewDueDate] = useState<Date | undefined>(undefined);

  // Function to handle task completion or deletion
  const handleComplete = (taskId: string, completed: boolean) => {
    if (completed) {
      // If task is already completed, delete it
      deleteTask(taskId);
    } else {
      // Otherwise mark it as completed
      toggleTaskCompletion({ id: taskId, completed: !completed });
    }
  };

  // Function to handle task deletion
  const handleDelete = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleEdit = (task: Task) => {
    // Convert relative date strings to Date objects if possible
    let dateObj: Date | undefined = undefined;
    if (task.dueDate.toLowerCase() === "today") {
      dateObj = new Date();
    } else if (task.dueDate.toLowerCase() === "tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateObj = tomorrow;
    } else if (task.dueDate.toLowerCase().startsWith("in ")) {
      const match = task.dueDate.match(/in (\d+) days?/i);
      if (match && match[1]) {
        const days = parseInt(match[1], 10);
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days);
        dateObj = futureDate;
      }
    }
    
    setCurrentTask(task);
    setEditDueDate(dateObj);
    setIsDialogOpen(true);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTask) return;

    // Convert date object to string format if available
    let dueDateString = currentTask.dueDate;
    if (editDueDate) {
      dueDateString = format(editDueDate, "PPP");
    }

    const updatedTask: Partial<Task> = {
      ...currentTask,
      dueDate: dueDateString,
    };
    
    updateTask({ id: currentTask.id, task: updatedTask });
    setIsDialogOpen(false);
    setEditDueDate(undefined);
  };

  const handleCreateTask = () => {
    setNewTask({
      title: "",
      dueDate: "",
      priority: "Medium",
    });
    setNewDueDate(undefined);
    setIsCreateDialogOpen(true);
  };

  const handleSubmitCreate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert date object to string format if available
    let dueDateString = newTask.dueDate;
    if (newDueDate) {
      dueDateString = format(newDueDate, "PPP");
    }
    
    const taskToAdd = {
      ...newTask,
      dueDate: dueDateString,
    };
    
    createTask(taskToAdd);
    setIsCreateDialogOpen(false);
    setNewDueDate(undefined);
  };

  // Filter tasks into pending and completed
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Limit tasks displayed if not showing all
  const displayedPendingTasks = showAllTasks ? pendingTasks : pendingTasks.slice(0, 3);

  return (
    <>
      <Card className="p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ListTodo className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold dark:text-white">Pending Tasks</h2>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleCreateTask} size="sm" className="gap-1" disabled={isCreating}>
              {isCreating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus size={16} />}
              Create Task
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowAllTasks(!showAllTasks)}>
              {showAllTasks ? "Show Less" : "View All"}
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500 dark:text-red-400">
            Error loading tasks. Please try again.
          </div>
        ) : (
          <div className="space-y-4">
            {displayedPendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleComplete(task.id, task.completed)}
                    className="h-7 w-7 rounded-full"
                    disabled={isUpdating || isDeleting}
                  >
                    {isUpdating || isDeleting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    <span className="sr-only">Complete task</span>
                  </Button>
                  <div>
                    <h3 className="font-medium dark:text-white">{task.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Due: {task.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${task.priority === 'High' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200' : 
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200'}`}>
                    {task.priority}
                  </span>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleEdit(task)}
                      className="h-7 w-7"
                    >
                      <Edit className="h-4 w-4 text-gray-500" />
                      <span className="sr-only">Edit task</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDelete(task.id)}
                      className="h-7 w-7"
                      disabled={isDeleting}
                    >
                      <Trash2 className="h-4 w-4 text-gray-500" />
                      <span className="sr-only">Delete task</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {pendingTasks.length === 0 && !isLoading && (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No pending tasks
              </div>
            )}
            
            {!showAllTasks && pendingTasks.length > 3 && (
              <div className="text-center mt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowAllTasks(true)}
                  className="text-primary"
                >
                  Show {pendingTasks.length - 3} more tasks
                </Button>
              </div>
            )}
          </div>
        )}
        
        {completedTasks.length > 0 && (
          <div className="mt-6">
            <h3 className="text-md font-medium mb-3 dark:text-white">Completed Tasks</h3>
            <div className="space-y-2">
              {completedTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50/50 dark:bg-gray-900/50">
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDelete(task.id)}
                      className="h-7 w-7 rounded-full opacity-50"
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Trash2 className="h-5 w-5 text-red-400" />
                      )}
                      <span className="sr-only">Delete task</span>
                    </Button>
                    <div>
                      <h3 className="font-medium text-gray-500 dark:text-gray-400 line-through">{task.title}</h3>
                      <p className="text-sm text-gray-400 dark:text-gray-500">Completed</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Edit Task Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Make changes to your task below.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitEdit}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  value={currentTask?.title || ""}
                  onChange={(e) => setCurrentTask(curr => curr ? {...curr, title: e.target.value} : null)}
                  placeholder="Enter task title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <DatePickerWithText
                  date={editDueDate}
                  setDate={setEditDueDate}
                  placeholderText="Today, Tomorrow, In 3 days, or select date"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Priority</Label>
                <RadioGroup 
                  value={currentTask?.priority || "Medium"}
                  onValueChange={(value: "High" | "Medium" | "Low") => 
                    setCurrentTask(curr => curr ? {...curr, priority: value} : null)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="High" id="high" />
                    <Label htmlFor="high" className="text-red-600">High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Medium" id="medium" />
                    <Label htmlFor="medium" className="text-yellow-600">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Low" id="low" />
                    <Label htmlFor="low" className="text-green-600">Low</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <DialogFooter className="mt-4">
              <Button type="submit" disabled={isUpdating}>
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Create Task Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>Add a new task to your list.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitCreate}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="new-title">Task Title</Label>
                <Input
                  id="new-title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="Enter task title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-dueDate">Due Date</Label>
                <DatePickerWithText
                  date={newDueDate}
                  setDate={setNewDueDate}
                  placeholderText="Today, Tomorrow, In 3 days, or select date"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Priority</Label>
                <RadioGroup 
                  value={newTask.priority}
                  onValueChange={(value: "High" | "Medium" | "Low") => 
                    setNewTask({...newTask, priority: value})
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="High" id="new-high" />
                    <Label htmlFor="new-high" className="text-red-600">High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Medium" id="new-medium" />
                    <Label htmlFor="new-medium" className="text-yellow-600">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Low" id="new-low" />
                    <Label htmlFor="new-low" className="text-green-600">Low</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <DialogFooter className="mt-4">
              <Button type="submit" disabled={isCreating}>
                {isCreating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Task"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
