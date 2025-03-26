
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { EditProfileModal } from "@/components/profile/EditProfileModal";
import { ProfileType } from "@/services/profileService";

const Profile = () => {
  const { profile, isLoading, error, updateProfile } = useProfile();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto flex items-center justify-center py-12">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-lg">Loading profile...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-8">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-2">Error Loading Profile</h2>
            <p className="text-gray-600 mb-4">
              We encountered an error while trying to load your profile data.
            </p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </Card>
        </div>
      </MainLayout>
    );
  }

  // Fallback data in case profile is null
  const displayProfile: ProfileType = profile || {
    name: "Teacher",
    email: "teacher@example.com",
    role: "Teacher",
    avatar: "/placeholder.svg",
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={displayProfile.avatar} alt={displayProfile.name} />
                  <AvatarFallback>{getInitials(displayProfile.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{displayProfile.name}</h1>
                  <p className="text-gray-600">{displayProfile.role}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setEditModalOpen(true)}
                    >
                      Edit Profile
                    </Button>
                    <Button size="sm">View Public Profile</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail size={20} />
                  <span>{displayProfile.email}</span>
                </div>
                {displayProfile.phone && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone size={20} />
                    <span>{displayProfile.phone}</span>
                  </div>
                )}
                {displayProfile.location && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={20} />
                    <span>{displayProfile.location}</span>
                  </div>
                )}
                {displayProfile.department && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <GraduationCap size={20} />
                    <span>{displayProfile.department}</span>
                  </div>
                )}
                {displayProfile.joinDate && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={20} />
                    <span>Joined {displayProfile.joinDate}</span>
                  </div>
                )}
              </div>

              <div>
                {displayProfile.subjects && displayProfile.subjects.length > 0 && (
                  <>
                    <h2 className="text-lg font-semibold mb-4">Subjects</h2>
                    <div className="flex flex-wrap gap-2">
                      {displayProfile.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {displayProfile.education && displayProfile.education.length > 0 && (
                  <>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Education</h2>
                    <ul className="space-y-2">
                      {displayProfile.education.map((edu, index) => (
                        <li key={index} className="text-gray-600">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        profile={profile}
        onSave={updateProfile}
      />
    </MainLayout>
  );
};

export default Profile;
