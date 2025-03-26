
import { useState, useEffect } from "react";
import { profileService, ProfileType } from "@/services/profileService";

export function useProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const data = await profileService.getProfile();
      setProfile(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An unknown error occurred"));
      console.error("Error in useProfile hook:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData: Partial<ProfileType>) => {
    setIsLoading(true);
    try {
      const updatedProfile = await profileService.updateProfile(profileData);
      if (updatedProfile) {
        setProfile(updatedProfile);
      }
      return updatedProfile;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An unknown error occurred"));
      console.error("Error updating profile:", err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    isLoading,
    error,
    fetchProfile,
    updateProfile
  };
}
