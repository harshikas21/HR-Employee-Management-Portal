
import React, { useState } from 'react';
import { Employee } from '../types';
import { IconTrash, IconClipboard, IconClipboardCheck } from './Icons';

interface EmployeeListItemProps {
  employee: Employee;
  onDeleteEmployee: (employeeId: string) => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({ employee, onDeleteEmployee }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(employee.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition-shadow hover:shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{employee.name}</h3>
          <p className="text-sm text-blue-600 font-medium">{employee.role}</p>
          <p className="text-sm text-slate-500 mt-1">{employee.email}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
          <button
            onClick={() => onDeleteEmployee(employee.id)}
            className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
          >
            <IconTrash className="h-4 w-4 mr-2" />
            Delete
          </button>
        </div>
      </div>
      <div className="mt-4 border-t border-slate-200 pt-3">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-xs font-medium text-slate-500">Generated Password</span>
                <p className="font-mono text-sm bg-slate-200 rounded px-2 py-1 inline-block mt-1">{employee.password}</p>
            </div>
          <button
            onClick={handleCopyPassword}
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              copied
                ? 'bg-green-100 text-green-700'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {copied ? <IconClipboardCheck className="h-4 w-4 mr-2" /> : <IconClipboard className="h-4 w-4 mr-2" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListItem;
