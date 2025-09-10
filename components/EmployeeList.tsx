
import React from 'react';
import { Employee } from '../types';
import EmployeeListItem from './EmployeeListItem';
import { IconUsers } from './Icons';

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (employeeId: string) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDeleteEmployee }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
       <div className="flex items-center mb-4">
        <IconUsers className="h-6 w-6 text-blue-600"/>
        <h2 className="ml-3 text-xl font-bold text-slate-900">Current Employees ({employees.length})</h2>
      </div>
      <div className="space-y-4">
        {employees.length > 0 ? (
          employees.map(employee => (
            <EmployeeListItem 
              key={employee.id} 
              employee={employee} 
              onDeleteEmployee={onDeleteEmployee} 
            />
          ))
        ) : (
          <div className="text-center text-slate-500 py-10 border-2 border-dashed rounded-lg">
            <p className="font-medium">No employees found.</p>
            <p className="text-sm">Use the form to add your first employee.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
