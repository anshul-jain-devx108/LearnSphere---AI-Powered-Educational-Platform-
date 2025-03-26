
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main className={`${isMobile ? 'ml-16' : 'ml-16 lg:ml-64'} p-2 sm:p-4 md:p-6 lg:p-8 transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};
