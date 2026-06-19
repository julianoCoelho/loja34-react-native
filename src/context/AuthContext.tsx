import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//  Tipos de dados 
interface UserData {
  username: string;
  token: string;
}

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  loading: boolean; 
  login: (userData: UserData) => Promise<void>;
  logout: () => Promise<void>;
}

// Contexto central
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true); 

  const isAuthenticated = !!user;

  // Busca o usuário ao iniciar o aplicativo
  useEffect(() => {
    async function carregarDadosSalvos() {
      try {
        const savedUser = await AsyncStorage.getItem('@Loja34:user_data');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Erro ao ler dados do AsyncStorage:", error);
      } finally {
        setLoading(false); 
      }
    }
    carregarDadosSalvos();
  }, []);

  // Função para salvar os dados do usuario no Storafe, após efetuar o login 
  const login = async (userData: UserData) => {
    try {
      setUser(userData);
      await AsyncStorage.setItem('@Loja34:user_data', JSON.stringify(userData));
    } catch (error) {
      console.error("Erro ao salvar dados de login:", error);
    }
  };

  // Função para limpar os dados a efetuar o logout, removendo Usuario do Storage
  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('@Loja34:user_data');
    } catch (error) {
      console.error("Erro ao remover dados de login:", error);
    }
  };

  return (
    // No react estavamnos utilizando de outra forma, ajustado para o react-native
    <AuthContext value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext>
  );
}

// Hook para usar o contexto nas telas 
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
