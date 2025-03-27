
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Login attempt", { email, password, rememberMe });
//   };

//   const handleGoogleLogin = () => {
//     // You will replace this URL with your actual OAuth endpoint
//     window.location.href = 'http://localhost:5000/auth/google';
//     // This will redirect to Google's OAuth consent screen
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-primary" />
//           </div>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Welcome to LearnSphere
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to continue to your dashboard
//           </p>
//         </div>

//         <Button
//           type="button"
//           variant="outline"
//           className="w-full flex items-center justify-center gap-2 py-6 text-base"
//           onClick={handleGoogleLogin}
//         >
//           <svg className="h-6 w-6" viewBox="0 0 24 24">
//             <path
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               fill="#4285F4"
//             />
//             <path
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               fill="#34A853"
//             />
//             <path
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               fill="#FBBC05"
//             />
//             <path
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               fill="#EA4335"
//             />
//           </svg>
//           Sign in with Google
//         </Button>

//         <div className="text-center">
//           <span className="text-sm text-gray-600">
//             Don't have an account? You'll be able to choose your role after signing in with Google.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Check if there's an OAuth callback with a token in the URL
//     const params = new URLSearchParams(window.location.search);
//     const email = params.get("email"); // Assuming backend redirects with `?email=...`
//     if (email) {
//       localStorage.setItem("userEmail", email);
//       fetchAuthToken(email);
//     } else {
//       // If no email from OAuth, check stored email
//       const storedEmail = localStorage.getItem("userEmail");
//       if (storedEmail) fetchAuthToken(storedEmail);
//     }
//   }, []);

//   const handleGoogleLogin = () => {
//     setLoading(true);
//     window.location.href = "http://localhost:5000/auth/google"; // Redirect to OAuth
//   };

//   const fetchAuthToken = async (email: string) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/auth/token?user_id=${email}`
//       );
//       const token = response.data?.token;

//       if (token) {
//         localStorage.setItem("authToken", token);
//         navigate("/dashboard");
//       } else {
//         console.error("No token received");
//       }
//     } catch (error) {
//       console.error("Error fetching token:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-primary" />
//           </div>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Welcome to LearnSphere
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to continue to your dashboard
//           </p>
//         </div>

//         <Button
//           type="button"
//           variant="outline"
//           className="w-full flex items-center justify-center gap-2 py-6 text-base"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//         >
//           {loading ? "Redirecting..." : "Sign in with Google"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/context/AuthContext";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const email = params.get("email");

//     if (email) {
//       localStorage.setItem("userEmail", email);
//       fetchAuthToken(email);
//     } else {
//       const storedEmail = localStorage.getItem("userEmail");
//       if (storedEmail) fetchAuthToken(storedEmail);
//     }
//   }, []);

//   const handleGoogleLogin = () => {
//     setLoading(true);
//     window.location.href = "http://localhost:5000/auth/google";
//   };

//   const fetchAuthToken = async (email: string) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/auth/token?user_id=${email}`,
//         { withCredentials: true }
//       );

//       const { token, user } = response.data;
//       if (token && user) {
//         login(user, token);
//         navigate("/dashboard");
//       } else {
//         console.error("No token received");
//       }
//     } catch (error) {
//       console.error("Error fetching token:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-primary" />
//           </div>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Welcome to LearnSphere
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to continue to your dashboard
//           </p>
//         </div>

//         <Button
//           type="button"
//           variant="outline"
//           className="w-full flex items-center justify-center gap-2 py-6 text-base"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//         >
//           {loading ? "Redirecting..." : "Sign in with Google"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/context/AuthContext";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // ✅ Check if user is already authenticated
//     const checkAuthStatus = async () => {
//       try {
//         const response = await axios.get("https://my-sign-403893624463.us-central1.run.app/auth/check", {
//           withCredentials: true,
//         });

//         if (response.data.authenticated) {
//           navigate("/dashboard");
//         }
//       } catch (error) {
//         console.error("Authentication check failed:", error);
//       }
//     };

//     checkAuthStatus();
//   }, [navigate]);

//   const handleGoogleLogin = () => {
//     setLoading(true);
//     window.location.href = "https://my-sign-403893624463.us-central1.run.app/auth/google";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-primary" />
//           </div>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Welcome to LearnSphere
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to continue to your dashboard
//           </p>
//         </div>

//         <Button
//           type="button"
//           variant="outline"
//           className="w-full flex items-center justify-center gap-2 py-6 text-base"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//         >
//           {loading ? "Redirecting..." : "Sign in with Google"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { Button } from '@/components/ui/button';
// import { BookOpen, Loader2 } from 'lucide-react';
// import { loginWithGoogle } from '@/services/authService';
// import { useAuth } from '@/context/AuthContext';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {
//   const { isAuthenticated, loading } = useAuth();
//   const navigate = useNavigate();
//   const [isLoggingIn, setIsLoggingIn] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated && !loading) {
//       navigate('/dashboard', { replace: true });
//     }
//   }, [isAuthenticated, loading, navigate]);

//   const handleGoogleLogin = () => {
//     setIsLoggingIn(true);
//     try {
//       loginWithGoogle();
//     } catch (error) {
//       console.error('Failed to initiate Google login:', error);
//       setIsLoggingIn(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
//         <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
//         <p className="text-gray-500 dark:text-gray-400">Checking authentication status...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-primary" />
//           </div>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Welcome to LearnSphere</h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to continue to your dashboard</p>
//         </div>

//         <Button
//           type="button"
//           variant="outline"
//           className="w-full flex items-center justify-center gap-2 py-6 text-base"
//           onClick={handleGoogleLogin}
//           disabled={isLoggingIn}
//         >
//           {isLoggingIn ? (
//             <Loader2 className="h-5 w-5 animate-spin mr-2" />
//           ) : (
//             <svg className="h-6 w-6" viewBox="0 0 24 24">
//               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
//               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//             </svg>
//           )}
//           {isLoggingIn ? 'Signing in...' : 'Sign in with Google'}
//         </Button>

//         <div className="text-center">
//           <span className="text-sm text-gray-600 dark:text-gray-400">
//             Don't have an account? You'll be able to choose your role after signing in with Google.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { Button } from '@/components/ui/button';
import { BookOpen, Loader2 } from 'lucide-react';
import { loginWithGoogle } from '@/services/authService';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [redirectAttempted, setRedirectAttempted] = useState(false);

  // Handle redirect for already authenticated users
  useEffect(() => {
    if (isAuthenticated && !loading && !redirectAttempted) {
      setRedirectAttempted(true);
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, loading, navigate, redirectAttempted]);

  const handleGoogleLogin = () => {
    setIsLoggingIn(true);
    try {
      // Add a short timeout before redirecting to prevent multiple clicks
      setTimeout(() => {
        loginWithGoogle();
      }, 100);
    } catch (error) {
      console.error('Failed to initiate Google login:', error);
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-gray-500 dark:text-gray-400">Checking authentication status...</p>
      </div>
    );
  }

  // If already authenticated, show a loading state while redirecting
  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-gray-500 dark:text-gray-400">Already logged in. Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Welcome to LearnSphere</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to continue to your dashboard</p>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center gap-2 py-6 text-base"
          onClick={handleGoogleLogin}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? (
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )}
          {isLoggingIn ? 'Signing in...' : 'Sign in with Google'}
        </Button>

        <div className="text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account? You'll be able to choose your role after signing in with Google.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
