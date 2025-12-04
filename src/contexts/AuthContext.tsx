import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: { email: string; password: string; firstName: string; lastName: string; }) => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Статическая аутентификация - данные тестового пользователя из .env
const STATIC_TEST_USER = {
  email: process.env.REACT_APP_TEST_USER_EMAIL || 'test@test.com',
  password: process.env.REACT_APP_TEST_USER_PASSWORD || '12345',
  firstName: process.env.REACT_APP_TEST_USER_FIRSTNAME || 'Test',
  lastName: process.env.REACT_APP_TEST_USER_LASTNAME || 'User'
};

// Ключ для localStorage
const AUTH_STORAGE_KEY = 'static_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Инициализация - проверка сохраненного пользователя
  useEffect(() => {
    const initAuth = () => {
      setLoading(true);
      
      try {
        const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (err) {
        console.error('Failed to load user from storage:', err);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Статический логин - проверка credentials
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // Проверка credentials с тестовым пользователем
      if (email === STATIC_TEST_USER.email && password === STATIC_TEST_USER.password) {
        const loggedInUser: User = {
          id: '1',
          email: STATIC_TEST_USER.email,
          firstName: STATIC_TEST_USER.firstName,
          lastName: STATIC_TEST_USER.lastName
        };
        
        setUser(loggedInUser);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(loggedInUser));
        setLoading(false);
        return true;
      } else {
        setError('Invalid email or password');
        setLoading(false);
        return false;
      }
    } catch (err) {
      setError('Login failed');
      setLoading(false);
      return false;
    }
  };

  // Статическая регистрация - только для тестового пользователя
  const register = async (userData: { email: string; password: string; firstName: string; lastName: string; }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // В статическом режиме регистрация создает любого пользователя, но курсы доступны только test@test.com
      const registeredUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName
      };
      
      setUser(registeredUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(registeredUser));
      setLoading(false);
      return true;
    } catch (err) {
      setError('Registration failed');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    logout,
    register,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};