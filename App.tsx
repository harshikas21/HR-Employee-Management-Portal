
import React, { useState, useCallback } from 'react';
import { Employee } from './types';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Pre-populate with some dummy data for demonstration
  const [employees, setEmployees] = useState<Employee[]>([
    { id: '1', name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Software Engineer', password: 'password123' },
    { id: '2', name: 'Bob Williams', email: 'bob.w@example.com', role: 'Project Manager', password: 'securepassword' },
    { id: '3', name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'UI/UX Designer', password: 'designrules' },
  ]);

  const handleLogin = useCallback((email: string, pass: string): boolean => {
    // In a real app, this would be an API call.
    // For this demo, we use hardcoded credentials.
    if (email === 'hr@company.com' && pass === 'password') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleAddEmployee = useCallback((employee: Omit<Employee, 'id' | 'password'>) => {
    const newEmployee: Employee = {
      ...employee,
      id: crypto.randomUUID(),
      password: Math.random().toString(36).slice(-8), // Auto-generate a simple password
    };
    setEmployees(prev => [newEmployee, ...prev]);
  }, []);

  const handleDeleteEmployee = useCallback((employeeId: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {isLoggedIn ? (
        <DashboardPage 
          employees={employees}
          onAddEmployee={handleAddEmployee}
          onDeleteEmployee={handleDeleteEmployee}
          onLogout={handleLogout} 
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
