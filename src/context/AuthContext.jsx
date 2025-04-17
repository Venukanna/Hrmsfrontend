import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Default credentials (in a real app, these would come from a backend)
  const defaultCredentials = {
    admin: { username: 'admin', password: 'admin123', role: 'admin' },
    employee: { username: 'employee', password: 'employee123', role: 'employee' }
  };

  const login = (username, password) => {
    // Check against default credentials
    if (username === defaultCredentials.admin.username && password === defaultCredentials.admin.password) {
      const userData = { ...defaultCredentials.admin };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/admin/dashboard');
      return true;
    } else if (username === defaultCredentials.employee.username && password === defaultCredentials.employee.password) {
      const userData = { ...defaultCredentials.employee };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/employee/dashboard');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Check for existing session on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);