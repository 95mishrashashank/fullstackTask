'use client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

export default function Login() {
  const handleLogin = (provider: 'google' | 'facebook') => {
    window.location.href = `http://localhost:3000/auth/${provider}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 mb-4">Login with your social account</p>

        <button
          className="flex items-center justify-center w-full bg-gray-100 text-gray-800 border border-gray-300 rounded-lg py-3 mb-4 transition-transform transform hover:scale-105 hover:bg-gray-200"
          onClick={() => handleLogin('google')}
        >
          <FcGoogle  />
          <span className="text-sm font-semibold">
            Login with Google
          </span>
        </button>

        <button
          className="flex items-center justify-center w-full bg-blue-600 text-white border border-gray-300 rounded-lg py-3 transition-transform transform hover:scale-105 hover:bg-blue-700"
          onClick={() => handleLogin('facebook')}
        >
          <FaFacebookF/>
          <span className="text-sm font-semibold">
            Login with Facebook
          </span>
        </button>

        <div className="mt-6 text-gray-500 text-sm">
          <p>By logging in, you agree to our <a href="#" className="text-blue-500 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 font-semibold hover:underline">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
}
