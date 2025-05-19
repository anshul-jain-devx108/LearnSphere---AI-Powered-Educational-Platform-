// import { Task } from "@/types/task";

// // API base URL for the tasks
// const API_URL = "https://task-service-403893624463.us-central1.run.app";
// // Auth token endpoint
// const AUTH_TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";

// // Helper function to handle fetch responses
// const handleResponse = async (response: Response) => {
//   if (!response.ok) {
//     const errorData = await response.json().catch(() => ({}));
//     throw new Error(
//       errorData.message || `API error: ${response.status} ${response.statusText}`
//     );
//   }
//   return response.json();
// };

// // Helper function to get the authentication token
// const getAuthToken = async (): Promise<string> => {
//   try {
//     const response = await fetch(AUTH_TOKEN_URL);
//     if (!response.ok) {
//       throw new Error(`Failed to get auth token: ${response.status} ${response.statusText}`);
//     }
//     const data = await response.json();
//     return data.token; // Adjust according to the actual response structure
//   } catch (error) {
//     console.error("Error fetching auth token:", error);
//     throw error;
//   }
// };

// // Convert relative dates like "today", "tomorrow", etc. to API-friendly format
// const formatDateForAPI = (dateString: string): string => {
//   const today = new Date();
  
//   if (dateString.toLowerCase() === "today") {
//     const date = new Date();
//     return date.toISOString();
//   }
  
//   if (dateString.toLowerCase() === "tomorrow") {
//     const tomorrow = new Date();
//     tomorrow.setDate(today.getDate() + 1);
//     return tomorrow.toISOString();
//   }
  
//   // Handle "in X days" format
//   const inDaysMatch = dateString.trim().toLowerCase().match(/^in\s+(\d+)\s+days?$/);
//   if (inDaysMatch && inDaysMatch[1]) {
//     const days = parseInt(inDaysMatch[1], 10);
//     if (!isNaN(days)) {
//       const futureDate = new Date();
//       futureDate.setDate(today.getDate() + days);
//       return futureDate.toISOString();
//     }
//   }
  
//   // Try to parse as date if it's a date string
//   const dateObj = new Date(dateString);
//   if (!isNaN(dateObj.getTime())) {
//     return dateObj.toISOString();
//   }
  
//   // If it's not recognized, use current date/time
//   return new Date().toISOString();
// };

// // Convert API date to user-friendly format
// const formatDateFromAPI = (dateString: string): string => {
//   const date = new Date(dateString);
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
  
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);
  
//   const dateOnly = new Date(date);
//   dateOnly.setHours(0, 0, 0, 0);
  
//   if (dateOnly.getTime() === today.getTime()) {
//     return "Today";
//   } else if (dateOnly.getTime() === tomorrow.getTime()) {
//     return "Tomorrow";
//   } else {
//     const diffTime = Math.abs(dateOnly.getTime() - today.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     if (diffDays <= 7) {
//       return `In ${diffDays} days`;
//     } else {
//       return new Intl.DateTimeFormat('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       }).format(date);
//     }
//   }
// };

// // Task service for handling API calls
// export const taskService = {
//   // Get all tasks
//   getTasks: async (): Promise<Task[]> => {
//     try {
//       console.log("Fetching tasks from API");
//       const token = await getAuthToken();
      
//       const response = await fetch(`${API_URL}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//       });
      
//       const data = await handleResponse(response);
      
//       // Map API response to our Task interface
//       return data.map((task: any) => ({
//         id: task.id || task._id,
//         title: task.title,
//         dueDate: formatDateFromAPI(task.dueDate),
//         priority: task.priority || "Medium", // Default if not provided by API
//         completed: task.completed || false,
//       }));
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
      
//       // Fallback to mock data in case API is not ready
//       console.log("⚠️ Using fallback mock data as API request failed");
//       return [
//         {
//           id: "task-1",
//           title: "Grade Mathematics Quiz",
//           dueDate: "Today",
//           priority: "High",
//           completed: false,
//         },
//         {
//           id: "task-2",
//           title: "Review History Essays",
//           dueDate: "Tomorrow",
//           priority: "Medium",
//           completed: false,
//         },
//         {
//           id: "task-3",
//           title: "Update Lesson Plan",
//           dueDate: "In 2 days",
//           priority: "Low",
//           completed: false,
//         },
//       ];
//     }
//   },

//   // Get a single task by ID
//   getTask: async (id: string): Promise<Task> => {
//     try {
//       console.log(`Fetching task ${id} from API`);
//       const token = await getAuthToken();
      
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//       });
      
//       const task = await handleResponse(response);
      
//       return {
//         id: task.id || task._id,
//         title: task.title,
//         dueDate: formatDateFromAPI(task.dueDate),
//         priority: task.priority || "Medium",
//         completed: task.completed || false,
//       };
//     } catch (error) {
//       console.error(`Error fetching task ${id}:`, error);
      
//       // Fallback mock data
//       return {
//         id,
//         title: "Sample Task",
//         dueDate: "Today",
//         priority: "Medium",
//         completed: false,
//       };
//     }
//   },

//   // Create a new task
//   createTask: async (task: Omit<Task, "id" | "completed">): Promise<Task> => {
//     try {
//       console.log("Creating task via API", task);
//       const token = await getAuthToken();
      
//       // Format the date for API
//       const formattedTask = {
//         title: task.title,
//         dueDate: formatDateForAPI(task.dueDate),
//         priority: task.priority
//       };
      
//       const response = await fetch(`${API_URL}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(formattedTask),
//       });
      
//       const createdTask = await handleResponse(response);
      
//       return {
//         id: createdTask.id || createdTask._id,
//         title: createdTask.title,
//         dueDate: formatDateFromAPI(createdTask.dueDate),
//         priority: createdTask.priority || task.priority,
//         completed: createdTask.completed || false,
//       };
//     } catch (error) {
//       console.error("Error creating task:", error);
      
//       // Mock response for fallback
//       return {
//         ...task,
//         id: `task-${Date.now()}`,
//         completed: false,
//       };
//     }
//   },

//   // Update a task
//   updateTask: async (id: string, task: Partial<Task>): Promise<Task> => {
//     try {
//       console.log(`Updating task ${id} via API`, task);
//       const token = await getAuthToken();
      
//       // Format the task for API
//       const formattedTask: any = {};
//       if (task.title) formattedTask.title = task.title;
//       if (task.dueDate) formattedTask.dueDate = formatDateForAPI(task.dueDate);
//       if (task.priority) formattedTask.priority = task.priority;
//       if (task.completed !== undefined) formattedTask.completed = task.completed;
      
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(formattedTask),
//       });
      
//       const updatedTask = await handleResponse(response);
      
//       return {
//         id: updatedTask.id || updatedTask._id,
//         title: updatedTask.title,
//         dueDate: formatDateFromAPI(updatedTask.dueDate),
//         priority: updatedTask.priority || "Medium",
//         completed: updatedTask.completed || false,
//       };
//     } catch (error) {
//       console.error(`Error updating task ${id}:`, error);
      
//       // Mock response for fallback
//       return {
//         id,
//         title: task.title || "Updated Task",
//         dueDate: task.dueDate || "Today",
//         priority: task.priority || "Medium",
//         completed: task.completed !== undefined ? task.completed : false,
//       };
//     }
//   },

//   // Delete a task
//   deleteTask: async (id: string): Promise<void> => {
//     try {
//       console.log(`Deleting task ${id} via API`);
//       const token = await getAuthToken();
      
//       const response = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error(`Failed to delete task: ${response.status} ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error(`Error deleting task ${id}:`, error);
//       // Since this is a void function, we don't need to return anything for the fallback
//     }
//   },

//   // Toggle task completion status
//   toggleTaskCompletion: async (id: string, completed: boolean): Promise<Task> => {
//     console.log(`Toggling task ${id} completion to ${completed} via API`);
//     return taskService.updateTask(id, { completed });
//   },
  
//   // Sync task with Google Calendar - implementation for the button in TasksSection
//   syncWithGoogleCalendar: async (taskId: string): Promise<void> => {
//     try {
//       console.log(`Syncing task ${taskId} with Google Calendar via API`);
//       // The API already syncs with Google Calendar on create/update
//       // This method is for the explicit sync button in the UI
      
//       const token = await getAuthToken();
//       const task = await taskService.getTask(taskId);
      
//       // Re-save the task to trigger a sync
//       await taskService.updateTask(taskId, {
//         title: task.title,
//         dueDate: task.dueDate,
//         priority: task.priority
//       });
      
//       console.log(`Task ${taskId} successfully synced with Google Calendar`);
//     } catch (error) {
//       console.error(`Error syncing task ${taskId} with Google Calendar:`, error);
//       throw error;
//     }
//   }




import { Task } from "@/types/task";

// API base URL for the tasks
const API_URL = "https://task-service-403893624463.us-central1.run.app/tasks";
// Auth token endpoint
const AUTH_TOKEN_URL = "https://securesign-1039810289993.europe-west1.run.app/auth/token";

// Helper function to handle fetch responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `API error: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

// Helper function to get the authentication token
async function getAuthToken(): Promise<string | null> {
  try {
    const response = await fetch(AUTH_TOKEN_URL, {
      method: "GET",
      credentials: "include",  // 🔹 Ensure cookies/session tokens are sent
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

// Convert relative dates like "today", "tomorrow", etc. to API-friendly format
const formatDateForAPI = (dateString: string): string => {
  const today = new Date();
  
  if (dateString.toLowerCase() === "today") {
    const date = new Date();
    return date.toISOString();
  }
  
  if (dateString.toLowerCase() === "tomorrow") {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString();
  }
  
  // Handle "in X days" format
  const inDaysMatch = dateString.trim().toLowerCase().match(/^in\s+(\d+)\s+days?$/);
  if (inDaysMatch && inDaysMatch[1]) {
    const days = parseInt(inDaysMatch[1], 10);
    if (!isNaN(days)) {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + days);
      return futureDate.toISOString();
    }
  }
  
  // Try to parse as date if it's a date string
  const dateObj = new Date(dateString);
  if (!isNaN(dateObj.getTime())) {
    return dateObj.toISOString();
  }
  
  // If it's not recognized, use current date/time
  return new Date().toISOString();
};

// Convert API date to user-friendly format
const formatDateFromAPI = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const dateOnly = new Date(date);
  dateOnly.setHours(0, 0, 0, 0);
  
  if (dateOnly.getTime() === today.getTime()) {
    return "Today";
  } else if (dateOnly.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  } else {
    const diffTime = Math.abs(dateOnly.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 7) {
      return `In ${diffDays} days`;
    } else {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(date);
    }
  }
};

// Task service for handling API calls
export const taskService = {
  // Get all tasks
  getTasks: async (): Promise<Task[]> => {
    try {
      console.log("Fetching tasks from API");
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      const data = await handleResponse(response);
      
      // Map API response to our Task interface
      return data.map((task: any) => ({
        id: task.id || task._id,
        title: task.title,
        dueDate: formatDateFromAPI(task.dueDate),
        priority: task.priority || "Medium", // Default if not provided by API
        completed: task.completed || false,
      }));
    } catch (error) {
      console.error("Error fetching tasks:", error);
      
      // Fallback to mock data in case API is not ready
      console.log("⚠️ Using fallback mock data as API request failed");
      return [
        {
          id: "task-1",
          title: "Grade Mathematics Quiz",
          dueDate: "Today",
          priority: "High",
          completed: false,
        },
        {
          id: "task-2",
          title: "Review History Essays",
          dueDate: "Tomorrow",
          priority: "Medium",
          completed: false,
        },
        {
          id: "task-3",
          title: "Update Lesson Plan",
          dueDate: "In 2 days",
          priority: "Low",
          completed: false,
        },
      ];
    }
  },

  // Get a single task by ID
  getTask: async (id: string): Promise<Task> => {
    try {
      console.log(`Fetching task ${id} from API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      const task = await handleResponse(response);
      
      return {
        id: task.id || task._id,
        title: task.title,
        dueDate: formatDateFromAPI(task.dueDate),
        priority: task.priority || "Medium",
        completed: task.completed || false,
      };
    } catch (error) {
      console.error(`Error fetching task ${id}:`, error);
      
      // Fallback mock data
      return {
        id,
        title: "Sample Task",
        dueDate: "Today",
        priority: "Medium",
        completed: false,
      };
    }
  },

  // Create a new task
  createTask: async (task: Omit<Task, "id" | "completed">): Promise<Task> => {
    try {
      console.log("Creating task via API", task);
      const token = await getAuthToken();
      
      // Format the date for API
      const formattedTask = {
        title: task.title,
        dueDate: formatDateForAPI(task.dueDate),
        priority: task.priority
      };
      
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formattedTask),
      });
      
      const createdTask = await handleResponse(response);
      
      return {
        id: createdTask.id || createdTask._id,
        title: createdTask.title,
        dueDate: formatDateFromAPI(createdTask.dueDate),
        priority: createdTask.priority || task.priority,
        completed: createdTask.completed || false,
      };
    } catch (error) {
      console.error("Error creating task:", error);
      
      // Mock response for fallback
      return {
        ...task,
        id: `task-${Date.now()}`,
        completed: false,
      };
    }
  },

  // Update a task
  updateTask: async (id: string, task: Partial<Task>): Promise<Task> => {
    try {
      console.log(`Updating task ${id} via API`, task);
      const token = await getAuthToken();
      
      // Format the task for API
      const formattedTask: any = {};
      if (task.title) formattedTask.title = task.title;
      if (task.dueDate) formattedTask.dueDate = formatDateForAPI(task.dueDate);
      if (task.priority) formattedTask.priority = task.priority;
      if (task.completed !== undefined) formattedTask.completed = task.completed;
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formattedTask),
      });
      
      const updatedTask = await handleResponse(response);
      
      return {
        id: updatedTask.id || updatedTask._id,
        title: updatedTask.title,
        dueDate: formatDateFromAPI(updatedTask.dueDate),
        priority: updatedTask.priority || "Medium",
        completed: updatedTask.completed || false,
      };
    } catch (error) {
      console.error(`Error updating task ${id}:`, error);
      
      // Mock response for fallback
      return {
        id,
        title: task.title || "Updated Task",
        dueDate: task.dueDate || "Today",
        priority: task.priority || "Medium",
        completed: task.completed !== undefined ? task.completed : false,
      };
    }
  },

  // Delete a task
  deleteTask: async (id: string): Promise<void> => {
    try {
      console.log(`Deleting task ${id} via API`);
      const token = await getAuthToken();
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete task: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error deleting task ${id}:`, error);
      // Since this is a void function, we don't need to return anything for the fallback
    }
  },

  // Toggle task completion status
  toggleTaskCompletion: async (id: string, completed: boolean): Promise<Task> => {
    console.log(`Toggling task ${id} completion to ${completed} via API`);
    return taskService.updateTask(id, { completed });
  },
  
  // Sync task with Google Calendar - implementation for the button in TasksSection
  syncWithGoogleCalendar: async (taskId: string): Promise<void> => {
    try {
      console.log(`Syncing task ${taskId} with Google Calendar via API`);
      // The API already syncs with Google Calendar on create/update
      // This method is for the explicit sync button in the UI
      
      const token = await getAuthToken();
      const task = await taskService.getTask(taskId);
      
      // Re-save the task to trigger a sync
      await taskService.updateTask(taskId, {
        title: task.title,
        dueDate: task.dueDate,
        priority: task.priority
      });
      
      console.log(`Task ${taskId} successfully synced with Google Calendar`);
    } catch (error) {
      console.error(`Error syncing task ${taskId} with Google Calendar:`, error);
      throw error;
    }
  }
};


