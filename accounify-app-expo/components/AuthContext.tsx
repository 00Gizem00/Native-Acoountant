import React, { createContext, useContext, useReducer } from 'react';

// Kullanıcı bilgileri tipini tanımlayalım
interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

type AuthAction =
  | { type: 'LOGIN'; user: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_ROLE'; role: 'admin' | 'user' };

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

// Reducer fonksiyonu
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.user, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    case 'SET_ROLE':
      return { ...state, user: { ...state.user!, role: action.role } };
    default:
      return state;
  }
};

// Context
const AuthContext = createContext<any>(null);

// AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
