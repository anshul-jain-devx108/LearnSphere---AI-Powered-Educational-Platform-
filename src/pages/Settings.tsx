
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Bell, Lock, Eye, Globe, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("english");
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Notifications Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell size={24} className="text-primary" />
              <h2 className="text-xl font-semibold dark:text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Email Notifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive email updates about your classes
                  </p>
                </div>
                <Switch 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Push Notifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive notifications in your browser
                  </p>
                </div>
                <Switch 
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette size={24} className="text-primary" />
              <h2 className="text-xl font-semibold dark:text-white">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Switch between light and dark themes
                  </p>
                </div>
                {mounted && (
                  <Switch 
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p className="text-sm text-gray-600">
                    Choose your preferred language
                  </p>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Lock size={24} className="text-primary" />
              <h2 className="text-xl font-semibold dark:text-white">Security</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full justify-start">
                  Two-Factor Authentication
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
