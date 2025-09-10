
import React, { useState } from 'react';
import { Employee } from '../types';
import { IconUserPlus } from './Icons';

interface AddEmployeeFormProps {
  onAddEmployee: (employee: Omit<Employee, 'id' | 'password'>) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !role) return;
    
    onAddEmployee({ name, email, role });

    setName('');
    setEmail('');
    setRole('');
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-slate-900">Add New Employee</h2>
      <p className="text-sm text-slate-500 mt-1 mb-6">Password will be auto-generated.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email-add" className="block text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            type="email"
            id="email-add"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700">
            Role / Position
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <IconUserPlus className="h-5 w-5 mr-2" />
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
