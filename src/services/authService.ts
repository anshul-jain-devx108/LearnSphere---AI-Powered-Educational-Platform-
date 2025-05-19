
// const API_BASE_URL = 'https://my-sign-403893624463.us-central1.run.app';

// export interface AuthStatus {
//   isAuthenticated: boolean;
//   user?: {
//     id?: string;
//     name?: string;
//     email?: string;
//     picture?: string;
//     verified_email?: boolean;
//     given_name?: string;
//     family_name?: string;
//   };
// }

// export const checkAuthStatus = async (): Promise<AuthStatus> => {
//   try {
//     console.log('Checking auth status...');
    
//     // Set a timeout for the fetch request
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
//     const response = await fetch(`${API_BASE_URL}/auth/check`, {
//       method: 'GET',
//       credentials: 'include',
//       signal: controller.signal
//     });
    
//     clearTimeout(timeoutId);

//     if (!response.ok) {
//       console.log('Auth check failed:', response.status);
//       // Check if there's local storage data we can use as fallback
//       const localUser = localStorage.getItem('user');
//       if (localUser && localStorage.getItem('isAuthenticated') === 'true') {
//         console.log('Using locally cached authentication data');
//         return { 
//           isAuthenticated: true, 
//           user: JSON.parse(localUser) 
//         };
//       }
//       return { isAuthenticated: false };
//     }

//     const data = await response.json();
//     console.log('Auth check response:', data);

//     if (data.success && data.user) {
//       // Store successful auth data in localStorage for fallback
//       localStorage.setItem('isAuthenticated', 'true');
//       localStorage.setItem('user', JSON.stringify(data.user));
      
//       return {
//         isAuthenticated: true,
//         user: data.user
//       };
//     }
    
//     return { isAuthenticated: false };
//   } catch (error) {
//     console.error('Error checking authentication status:', error);
    
//     // If the error is due to network issues, check localStorage for cached auth data
//     const localUser = localStorage.getItem('user');
//     if (localUser && localStorage.getItem('isAuthenticated') === 'true') {
//       console.log('Network error, using locally cached authentication data');
//       return { 
//         isAuthenticated: true, 
//         user: JSON.parse(localUser) 
//       };
//     }
    
//     return { isAuthenticated: false };
//   }
// };

// export const loginWithGoogle = (): void => {
//   try {
//     // Use hardcoded redirect URL for production deployment
//     const redirectUrl = `${API_BASE_URL}/auth/google?redirect=${encodeURIComponent('https://learn-sphere-ai-powered-educational-platform.vercel.app/dashboard')}`;
    
//     // For local development, you might want to use window.location.origin
//     // const redirectUrl = `${API_BASE_URL}/auth/google?redirect=${encodeURIComponent(window.location.origin + '/dashboard')}`;
    
//     console.log('Redirecting to Google auth:', redirectUrl);
//     window.location.href = redirectUrl;
//   } catch (error) {
//     console.error('Error during Google login redirect:', error);
//   }
// };

// export const logout = async (): Promise<void> => {
//   try {
//     // Set a timeout for the fetch request
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
//     await fetch(`${API_BASE_URL}/auth/logout`, {
//       method: 'GET',
//       credentials: 'include',
//       signal: controller.signal
//     }).catch(error => {
//       console.log('Logout request failed, continuing with local logout:', error);
//     });
    
//     clearTimeout(timeoutId);
    
//     // Always clear local storage regardless of API response
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('user');
//     window.location.href = '/';
//   } catch (error) {
//     console.error('Error during logout:', error);
//     // Ensure we still clear local storage even if API call fails
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('user');
//     window.location.href = '/';
//   }
// };

// export const getAccessToken = async (): Promise<string | null> => {
//   try {
//     // Set a timeout for the fetch request
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
//     const response = await fetch(`${API_BASE_URL}/auth/token`, {
//       method: 'GET',
//       credentials: 'include',
//       signal: controller.signal
//     });
    
//     clearTimeout(timeoutId);
    
//     if (!response.ok) return null;
//     const data = await response.json();
//     return data.token;
//   } catch (error) {
//     console.error('Error getting access token:', error);
//     return null;
//   }
// };



const API_BASE_URL = 'https://securesign-1039810289993.europe-west1.run.app';

export interface AuthStatus {
  isAuthenticated: boolean;
  user?: {
    id?: string;
    name?: string;
    email?: string;
    picture?: string;
    verified_email?: boolean;
    given_name?: string;
    family_name?: string;
  };
}

// Create a flag to prevent multiple auth checks from running simultaneously
let isCheckingAuth = false;

export const checkAuthStatus = async (): Promise<AuthStatus> => {
  // If a check is already in progress, return a promise that resolves
  // when the current check is complete
  if (isCheckingAuth) {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (!isCheckingAuth) {
          clearInterval(checkInterval);
          
          // Return the cached auth data
          const localUser = localStorage.getItem('user');
          if (localUser && localStorage.getItem('isAuthenticated') === 'true') {
            resolve({ 
              isAuthenticated: true, 
              user: JSON.parse(localUser) 
            });
          } else {
            resolve({ isAuthenticated: false });
          }
        }
      }, 100);
    });
  }

  isCheckingAuth = true;
  
  try {
    console.log('Checking auth status...');
    
    // Set a timeout for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(`${API_BASE_URL}/auth/check`, {
      method: 'GET',
      credentials: 'include',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.log('Auth check failed:', response.status);
      // Check if there's local storage data we can use as fallback
      const localUser = localStorage.getItem('user');
      if (localUser && localStorage.getItem('isAuthenticated') === 'true') {
        console.log('Using locally cached authentication data');
        isCheckingAuth = false;
        return { 
          isAuthenticated: true, 
          user: JSON.parse(localUser) 
        };
      }
      isCheckingAuth = false;
      return { isAuthenticated: false };
    }

    const data = await response.json();
    console.log('Auth check response:', data);

    if (data.success && data.user) {
      // Store successful auth data in localStorage for fallback
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(data.user));
      
      isCheckingAuth = false;
      return {
        isAuthenticated: true,
        user: data.user
      };
    }
    
    isCheckingAuth = false;
    return { isAuthenticated: false };
  } catch (error) {
    console.error('Error checking authentication status:', error);
    
    // If the error is due to network issues, check localStorage for cached auth data
    const localUser = localStorage.getItem('user');
    if (localUser && localStorage.getItem('isAuthenticated') === 'true') {
      console.log('Network error, using locally cached authentication data');
      isCheckingAuth = false;
      return { 
        isAuthenticated: true, 
        user: JSON.parse(localUser) 
      };
    }
    
    isCheckingAuth = false;
    return { isAuthenticated: false };
  }
};

// Track if we've already triggered a Google login to prevent double redirects
let loginRedirectInProgress = false;

export const loginWithGoogle = (): void => {
  // Prevent multiple redirects
  if (loginRedirectInProgress) {
    console.log('Login redirect already in progress, preventing duplicate');
    return;
  }
  
  loginRedirectInProgress = true;
  
  try {
    // Clear any existing auth data to ensure a fresh login
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    
    // Set current location for potential fallback
    localStorage.setItem('lastLoginAttempt', Date.now().toString());
    
    // Use hardcoded redirect URL for production deployment
    const redirectUrl = `${API_BASE_URL}/auth/google?redirect=${encodeURIComponent('https://learn-sphere-ai-powered-educational-platform.vercel.app/dashboard')}`;
    
    // For local development, you might want to use window.location.origin
    // const redirectUrl = `${API_BASE_URL}/auth/google?redirect=${encodeURIComponent(window.location.origin + '/dashboard')}`;
    
    console.log('Redirecting to Google auth:', redirectUrl);
    window.location.href = redirectUrl;
    
    // Reset flag after a delay (in case redirect fails)
    setTimeout(() => {
      loginRedirectInProgress = false;
    }, 5000);
  } catch (error) {
    console.error('Error during Google login redirect:', error);
    loginRedirectInProgress = false;
  }
};

export const logout = async (): Promise<void> => {
  try {
    // Set a timeout for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'GET',
      credentials: 'include',
      signal: controller.signal
    }).catch(error => {
      console.log('Logout request failed, continuing with local logout:', error);
    });
    
    clearTimeout(timeoutId);
    
    // Always clear local storage regardless of API response
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('lastLoginAttempt');
    
    // Reset login redirect flag
    loginRedirectInProgress = false;
    
    window.location.href = '/';
  } catch (error) {
    console.error('Error during logout:', error);
    // Ensure we still clear local storage even if API call fails
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('lastLoginAttempt');
    loginRedirectInProgress = false;
    window.location.href = '/';
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    // Set a timeout for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(`${API_BASE_URL}/auth/token`, {
      method: 'GET',
      credentials: 'include',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) return null;
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};
