// import { createContext, useContext, useEffect, useState } from "react";

// // Define types for the user state
// interface User {
//   email: string;
//   name: string;
//   photoURL?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   authToken: string | null;
//   login: (userData: User, token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [authToken, setAuthToken] = useState<string | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("authToken");
//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setAuthToken(storedToken);
//     }
//   }, []);

//   const login = (userData: User, token: string) => {
//     setUser(userData);
//     setAuthToken(token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("authToken", token);
//   };

//   const logout = () => {
//     setUser(null);
//     setAuthToken(null);
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//   };

//   return (
//     <AuthContext.Provider value={{ user, authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { checkAuthStatus, AuthStatus, logout as authLogout } from '@/services/authService';
// import { useToast } from '@/hooks/use-toast';
// import { useNavigate, useLocation } from 'react-router-dom';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: AuthStatus['user'] | null;
//   loading: boolean;
//   checkAuth: () => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   isAuthenticated: false,
//   user: null,
//   loading: true,
//   checkAuth: async () => {},
//   logout: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // Initialize with localStorage values to avoid initial loading flicker
//   const [authState, setAuthState] = useState<{
//     isAuthenticated: boolean;
//     user: AuthStatus['user'] | null;
//     loading: boolean;
//   }>({
//     isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
//     user: JSON.parse(localStorage.getItem('user') || 'null'),
//     loading: true,
//   });
  
//   const { toast } = useToast();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check for success parameter in URL (after OAuth redirect)
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const successParam = urlParams.get('success');
    
//     if (successParam === 'true') {
//       // Remove query parameter without reloading
//       window.history.replaceState({}, document.title, window.location.pathname);
      
//       // Check auth status to get user details
//       checkAuth();
      
//       // Show welcome toast
//       toast({
//         title: "Login Successful",
//         description: "Welcome to LearnSphere!",
//       });
      
//       // Navigate to dashboard if not already there
//       if (!window.location.pathname.includes('/dashboard')) {
//         navigate('/dashboard', { replace: true });
//       }
//     }
//   }, [location.search]);

//   const checkAuth = async () => {
//     try {
//       // Don't mark as loading if we already have localStorage data
//       if (!authState.isAuthenticated) {
//         setAuthState(prev => ({ ...prev, loading: true }));
//       }
      
//       const authStatus = await checkAuthStatus();
      
//       setAuthState({
//         isAuthenticated: authStatus.isAuthenticated,
//         user: authStatus.user || null,
//         loading: false,
//       });
      
//       // If authenticated and on login page, redirect to dashboard
//       if (authStatus.isAuthenticated && location.pathname.includes('/auth/')) {
//         navigate('/dashboard', { replace: true });
        
//         // Show welcome toast if we have user data
//         if (authStatus.user?.name) {
//           toast({
//             title: "Welcome Back!",
//             description: `You're now signed in, ${authStatus.user.name}.`,
//           });
//         }
//       }
//     } catch (error) {
//       console.error('Error in checkAuth:', error);
      
//       // Fall back to localStorage values if available
//       const localIsAuth = localStorage.getItem('isAuthenticated') === 'true';
//       const localUser = JSON.parse(localStorage.getItem('user') || 'null');
      
//       setAuthState({
//         isAuthenticated: localIsAuth,
//         user: localUser,
//         loading: false,
//       });
//     }
//   };

//   const logout = () => {
//     authLogout();
    
//     // Update local state immediately for better UX
//     setAuthState({
//       isAuthenticated: false,
//       user: null,
//       loading: false,
//     });
//   };

//   useEffect(() => {
//     // Initial auth check
//     checkAuth();
    
//     // Periodic auth check - less frequent to avoid excessive API calls
//     const intervalId = setInterval(() => {
//       checkAuth();
//     }, 10 * 60 * 1000); // Check every 10 minutes
    
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated: authState.isAuthenticated,
//         user: authState.user,
//         loading: authState.loading,
//         checkAuth,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkAuthStatus, AuthStatus, logout as authLogout } from '@/services/authService';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthStatus['user'] | null;
  loading: boolean;
  checkAuth: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  checkAuth: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with localStorage values to avoid initial loading flicker
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    user: AuthStatus['user'] | null;
    loading: boolean;
  }>({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    loading: true,
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Check for success parameter in URL (after OAuth redirect)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');
    
    if (successParam === 'true') {
      // Remove query parameter without reloading
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      
      // Check auth status to get user details
      checkAuth();
      
      // Show welcome toast
      toast({
        title: "Login Successful",
        description: "Welcome to LearnSphere!",
      });
      
      // Navigate to dashboard if not already there
      if (!window.location.pathname.includes('/dashboard')) {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [location.search]);

  // Check if there's a stored auth session on initial load
  useEffect(() => {
    const checkInitialAuth = async () => {
      // Only do the API call if we don't have cached data
      if (!authState.isAuthenticated || !authState.user) {
        await checkAuth();
      } else {
        // If we have cached data, still check auth in the background
        // but don't show loading state
        checkAuth(false);
      }
    };
    
    checkInitialAuth();
    
    // Set up automatic session refresh
    const intervalId = setInterval(() => {
      checkAuth(false);
    }, 30 * 60 * 1000); // Check every 30 minutes
    
    return () => clearInterval(intervalId);
  }, []);

  const checkAuth = async (showLoading = true) => {
    try {
      // Don't mark as loading if we already have localStorage data
      // or if showLoading is false
      if (showLoading && !authState.isAuthenticated) {
        setAuthState(prev => ({ ...prev, loading: true }));
      }
      
      const authStatus = await checkAuthStatus();
      
      // Only update state if authentication status changed
      if (authStatus.isAuthenticated !== authState.isAuthenticated || 
          JSON.stringify(authStatus.user) !== JSON.stringify(authState.user)) {
        
        setAuthState({
          isAuthenticated: authStatus.isAuthenticated,
          user: authStatus.user || null,
          loading: false,
        });
        
        // If authenticated and on login page, redirect to dashboard
        if (authStatus.isAuthenticated && location.pathname.includes('/auth/')) {
          navigate('/dashboard', { replace: true });
          
          // Show welcome toast if we have user data
          if (authStatus.user?.name) {
            toast({
              title: "Welcome Back!",
              description: `You're now signed in, ${authStatus.user.name}.`,
            });
          }
        }
      } else if (showLoading) {
        // If nothing changed but we were showing loading, update that
        setAuthState(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      console.error('Error in checkAuth:', error);
      
      // Fall back to localStorage values if available
      const localIsAuth = localStorage.getItem('isAuthenticated') === 'true';
      const localUser = JSON.parse(localStorage.getItem('user') || 'null');
      
      if (localIsAuth && localUser) {
        setAuthState({
          isAuthenticated: localIsAuth,
          user: localUser,
          loading: false,
        });
        
        // If authenticated and on login page, redirect to dashboard
        if (localIsAuth && location.pathname.includes('/auth/')) {
          navigate('/dashboard', { replace: true });
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false,
        });
      }
    }
  };

  const logout = () => {
    authLogout();
    
    // Update local state immediately for better UX
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        loading: authState.loading,
        checkAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
