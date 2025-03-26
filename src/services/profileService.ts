
// import { toast } from "@/components/ui/use-toast";

// export interface ProfileType {
//   name: string;
//   avatar?: string;
//   role?: string;
//   email: string;
//   phone?: string;
//   location?: string;
//   department?: string;
//   joinDate?: string;
//   subjects?: string[];
//   education?: string[];
// }

// const TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";
// const API_URL = "https://profile-service-403893624463.us-central1.run.app/api/profile";

// async function getToken(): Promise<string | null> {
//   try {
//     const response = await fetch(TOKEN_URL);
//     if (!response.ok) {
//       throw new Error("Failed to get authentication token");
//     }
//     const data = await response.json();
//     return data.token;
//   } catch (error) {
//     console.error("Error fetching token:", error);
//     return null;
//   }
// }

// export const profileService = {
//   async getProfile(): Promise<ProfileType | null> {
//     try {
//       const token = await getToken();
      
//       if (!token) {
//         toast({
//           title: "Authentication Error",
//           description: "Failed to authenticate. Please try again later.",
//           variant: "destructive",
//         });
//         return null;
//       }
      
//       const response = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error("Failed to fetch profile data");
//       }
      
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       toast({
//         title: "Error",
//         description: "Failed to load profile data. Please try again later.",
//         variant: "destructive",
//       });
//       return null;
//     }
//   },
  
//   async updateProfile(profileData: Partial<ProfileType>): Promise<ProfileType | null> {
//     try {
//       const token = await getToken();
      
//       if (!token) {
//         toast({
//           title: "Authentication Error",
//           description: "Failed to authenticate. Please try again later.",
//           variant: "destructive",
//         });
//         return null;
//       }
      
//       const response = await fetch(API_URL, {
//         method: "PUT",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(profileData),
//       });
      
//       if (!response.ok) {
//         throw new Error("Failed to update profile data");
//       }
      
//       const updatedProfile = await response.json();
      
//       toast({
//         title: "Success",
//         description: "Profile updated successfully.",
//       });
      
//       return updatedProfile;
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast({
//         title: "Error",
//         description: "Failed to update profile. Please try again later.",
//         variant: "destructive",
//       });
//       return null;
//     }
//   }
// };
import { toast } from "@/components/ui/use-toast";

export interface ProfileType {
  name: string;
  avatar?: string;
  role?: string;
  email: string;
  phone?: string;
  location?: string;
  department?: string;
  joinDate?: string;
  subjects?: string[];
  education?: string[];
}

const TOKEN_URL = "https://my-sign-403893624463.us-central1.run.app/auth/token";
const API_URL = "https://profile-service-403893624463.us-central1.run.app/api/user/profile";
async function getToken(): Promise<string | null> {
    try {
      const response = await fetch(TOKEN_URL, {
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
  

export const profileService = {
  async getProfile(): Promise<ProfileType | null> {
    try {
      const token = await getToken();
      
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "Failed to authenticate. Please try again later.",
          variant: "destructive",
        });
        return null;
      }
      
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }
      
      return await response.json();
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast({
        title: "Error",
        description: "Failed to load profile data. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  },
  
  async updateProfile(profileData: Partial<ProfileType>): Promise<ProfileType | null> {
    try {
      const token = await getToken();
      
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "Failed to authenticate. Please try again later.",
          variant: "destructive",
        });
        return null;
      }
      
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update profile data");
      }
      
      const updatedProfile = await response.json();
      
      toast({
        title: "Success",
        description: "Profile updated successfully.",
      });
      
      return updatedProfile;
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  }
};
