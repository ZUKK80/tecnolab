import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

interface StoredUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recoveryCode, setRecoveryCode] = useState<string | null>(null);
  const [recoveryEmail, setRecoveryEmail] = useState<string | null>(null);

  // Helper functions for localStorage
  const getUsers = (): StoredUser[] => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const users = getUsers();
      const existingUser = users.find(u => u.email === email);

      if (existingUser) {
        setError('El email ya está registrado');
        setIsLoading(false);
        return false;
      }

      const newUser: StoredUser = {
        id: Date.now().toString(),
        email,
        password,
        name,
      };

      users.push(newUser);
      saveUsers(users);

      const userData: User = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        password: newUser.password,
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    } catch (err) {
      setError('Error al registrar usuario');
      setIsLoading(false);
      return false;
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const users = getUsers();
      const foundUser = users.find(u => u.email === email && u.password === password);

      if (!foundUser) {
        setError('Email o contraseña incorrectos');
        setIsLoading(false);
        return false;
      }

      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        password: foundUser.password,
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    } catch (err) {
      setError('Error al iniciar sesión');
      setIsLoading(false);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const sendRecoveryCode = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const users = getUsers();
      const foundUser = users.find(u => u.email === email);

      if (!foundUser) {
        setError('No existe una cuenta con ese email');
        setIsLoading(false);
        return false;
      }

      // Generar código de 6 dígitos
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setRecoveryCode(code);
      setRecoveryEmail(email);

      // Simular envío de email (en producción esto iría a un backend)
      console.log(`Código de recuperación para ${email}: ${code}`);

      setIsLoading(false);
      return true;
    } catch (err) {
      setError('Error al enviar código de recuperación');
      setIsLoading(false);
      return false;
    }
  };

  const verifyRecoveryCode = async (code: string) => {
    setIsLoading(true);
    setError(null);

    if (code === recoveryCode) {
      setIsLoading(false);
      return true;
    } else {
      setError('Código incorrecto');
      setIsLoading(false);
      return false;
    }
  };

  const resetPassword = async (newPassword: string) => {
    setIsLoading(true);
    setError(null);

    try {
      if (!recoveryEmail) {
        setError('Error: Email de recuperación no encontrado');
        setIsLoading(false);
        return false;
      }

      const users = getUsers();
      const userIndex = users.findIndex(u => u.email === recoveryEmail);

      if (userIndex === -1) {
        setError('Usuario no encontrado');
        setIsLoading(false);
        return false;
      }

      users[userIndex].password = newPassword;
      saveUsers(users);

      // Actualizar usuario actual si está logueado
      if (user && user.email === recoveryEmail) {
        setUser({ ...user, password: newPassword });
        localStorage.setItem('user', JSON.stringify({ ...user, password: newPassword }));
      }

      setRecoveryCode(null);
      setRecoveryEmail(null);
      setIsLoading(false);
      return true;
    } catch (err) {
      setError('Error al cambiar contraseña');
      setIsLoading(false);
      return false;
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  return {
    user,
    isLoading,
    error,
    signUp,
    signIn,
    signOut,
    sendRecoveryCode,
    verifyRecoveryCode,
    resetPassword,
  };
}
