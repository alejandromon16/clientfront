'use client'
import React from 'react';
import { useRouter } from '../../node_modules/next/navigation';

interface AuthPageProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const AuthPage: React.FC = () => {

  const router = useRouter();

  const  onSingUpClick = () => {
    router.push('/signin');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Welcome!</h2>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {}}
          >
            Login
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSingUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
