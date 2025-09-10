
import React, { useState } from 'react';
import { IconLogo, IconLock } from './Icons';

interface LoginPageProps {
  onLogin: (email: string, pass: string) => boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('hr@company.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const success = onLogin(email, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex flex-col items-center justify-center">
            <IconLogo className="h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-3xl font-bold text-slate-900">HR Portal Login</h1>
            <p className="mt-2 text-slate-600">Access the company's employee dashboard.</p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            {error && <p className="text-sm text-red-600">{error}</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 items-center"
              >
                <IconLock className="h-5 w-5 mr-2" />
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 border-t pt-4 text-center text-sm text-slate-500">
            <p>For demo purposes, use:</p>
            <p>Email: <span className="font-semibold">hr@company.com</span></p>
            <p>Password: <span className="font-semibold">password</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
