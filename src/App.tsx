
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ThemeProvider } from "next-themes";
// import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
// import Landing from "./pages/Landing";
// import Index from "./pages/Index";
// import Calendar from "./pages/Calendar";
// import Notifications from "./pages/Notifications";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import ClassView from "./pages/ClassView";
// import ClassesPage from "./pages/ClassesPage";
// import { AuthProvider } from "@/context/AuthContext"; // Import AuthProvider

// const queryClient = new QueryClient();

// const App = () => (
//   <AuthProvider> {/* Wrap your app */}

//   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<Landing />} />
//             <Route path="/auth/login" element={<Login />} />
//             <Route path="/auth/register" element={<Register />} />
//             <Route path="/auth/forgot-password" element={<ForgotPassword />} />

//             {/* Previously protected routes, now accessible */}
//             <Route path="/dashboard" element={<Index />} />
//             <Route path="/calendar" element={<Calendar />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/classes" element={<ClassesPage />} />
//             <Route path="/class/:id" element={<ClassView />} />

//             {/* Redirect /index to /dashboard */}
//             <Route path="/index" element={<Navigate to="/dashboard" replace />} />

//             {/* 404 route */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </ThemeProvider>


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Calendar from "./pages/Calendar";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ClassView from "./pages/ClassView";
import ClassesPage from "./pages/ClassesPage";
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />

              {/* Protected routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/calendar" element={
                <ProtectedRoute>
                  <Calendar />
                </ProtectedRoute>
              } />
              <Route path="/notifications" element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />


               <Route path="/classes" element={
                <ProtectedRoute>
                  < ClassesPage />
                </ProtectedRoute>
              } />
              <Route path="/class/:id" element={
                <ProtectedRoute>
                  <ClassView />
                </ProtectedRoute>
              } />

              {/* Redirect /index to /dashboard */}
              <Route path="/index" element={<Navigate to="/dashboard" replace />} />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
//   </AuthProvider> 
// );

// export default App;

// import { createContext, useContext, useEffect, useState } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { ThemeProvider } from "next-themes";
// import Cookies from "js-cookie";

// // Pages
// import Landing from "./pages/Landing";
// import Index from "./pages/Index";
// import Calendar from "./pages/Calendar";
// import Notifications from "./pages/Notifications";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import ClassView from "./pages/ClassView";
// import ClassesPage from "./pages/ClassesPage";

// // AuthContext (Inline)
// const AuthContext = createContext({
//   user: null,
//   setUser: (_user: any) => {},
//   loading: true,
// });

// const useAuth = () => useContext(AuthContext);

// // ProtectedRoute wrapper
// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { user, loading } = useAuth();
//   if (loading) return <div>Loading...</div>;
//   if (!user) return <Navigate to="/auth/login" replace />;
//   return children;
// };

// // Inline AuthProvider using cookies
// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = Cookies.get("authToken");
//     const userId = Cookies.get("userId");

//     if (token && userId) {
//       setUser({ token, userId });
//     }

//     setLoading(false);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const queryClient = new QueryClient();

// // Redirect Landing if already logged in
// const LandingRedirect = () => {
//   const { user, loading } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && user) {
//       navigate("/dashboard");
//     }
//   }, [user, loading]);

//   if (loading) return <div>Loading...</div>;
//   return <Landing />;
// };

// const App = () => (
//   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <AuthProvider>
//           <TooltipProvider>
//             <Toaster />
//             <Sonner />
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/" element={<LandingRedirect />} />
//               <Route path="/auth/login" element={<Login />} />
//               <Route path="/auth/register" element={<Register />} />
//               <Route path="/auth/forgot-password" element={<ForgotPassword />} />

//               {/* Protected Routes */}
//               <Route path="/dashboard" element={<ProtectedRoute><Index /></ProtectedRoute>} />
//               <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
//               <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
//               <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//               <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
//               <Route path="/classes" element={<ProtectedRoute><ClassesPage /></ProtectedRoute>} />
//               <Route path="/class/:id" element={<ProtectedRoute><ClassView /></ProtectedRoute>} />

//               {/* Redirects */}
//               <Route path="/index" element={<Navigate to="/dashboard" replace />} />

//               {/* Not Found */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </TooltipProvider>
//         </AuthProvider>
//       </BrowserRouter>
//     </QueryClientProvider>
//   </ThemeProvider>
// );

// export default App;
