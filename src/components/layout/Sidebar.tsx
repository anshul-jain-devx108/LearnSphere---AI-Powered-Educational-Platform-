import { Home, BookOpen, Settings, Menu, GraduationCap, Bell, User, LogOut, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: GraduationCap, label: "Classes", href: "/classes" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    // Add logout logic here when OAuth is implemented
    window.location.href = '/';
  };

  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LearnSphere
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 p-2 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary dark:bg-primary/20" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  )}
                >
                  <item.icon size={20} className={isActive ? "text-primary" : "text-gray-500 dark:text-gray-400"} />
                  {!isCollapsed && (
                    <span>{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
        {mounted && (
          <div className={cn(
            "flex items-center px-2",
            isCollapsed ? "justify-center" : "justify-between"
          )}>
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                {theme === 'dark' ? <Moon size={20} className="text-gray-500 dark:text-gray-400" /> : <Sun size={20} className="text-gray-500" />}
                <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
              </div>
            )}
            <Switch 
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              className={cn(isCollapsed && "h-5 w-9")}
            />
          </div>
        )}
        <button
          onClick={handleLogout}
          className={cn(
            "flex items-center p-2 w-full hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300",
            isCollapsed ? "justify-center" : "space-x-2"
          )}
        >
          <LogOut size={20} className="text-gray-500 dark:text-gray-400" />
          {!isCollapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};
