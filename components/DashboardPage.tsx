
import React from 'react';
import { Employee } from '../types';
import AddEmployeeForm from './AddEmployeeForm';
import EmployeeList from './EmployeeList';
import { IconLogout, IconLogo } from './Icons';

interface DashboardPageProps {
  employees: Employee[];
  onAddEmployee: (employee: Omit<Employee, 'id' | 'password'>) => void;
  onDeleteEmployee: (employeeId: string) => void;
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ employees, onAddEmployee, onDeleteEmployee, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <IconLogo className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-slate-900">HR Dashboard</h1>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <IconLogout className="h-5 w-5 mr-2"/>
            Logout
          </button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <AddEmployeeForm onAddEmployee={onAddEmployee} />
            </div>
            <div className="lg:col-span-2">
              <EmployeeList employees={employees} onDeleteEmployee={onDeleteEmployee} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
