import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

const Auth = () => {
  const [mode, setMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        {/* Left side - Image/Visual */}
        <div className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-brand-dark to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=800&fit=crop&auto=format')] bg-cover bg-center opacity-20" />
          <div className="relative flex h-full flex-col justify-center p-12 text-white">
            <div className="mb-8">
              <h2 className="text-4xl font-bold leading-tight">
                Welcome to Gabi General Hospital
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Access your patient portal to view appointments, test results, and manage your health records securely.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <FaUser className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Secure Access</p>
                  <p className="text-sm text-slate-300">Your data is encrypted and protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Access</p>
                  <p className="text-sm text-slate-300">View your records anytime, anywhere</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <FaLock className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Privacy First</p>
                  <p className="text-sm text-slate-300">HIPAA-compliant and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">
                {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {mode === 'signin'
                  ? 'Sign in to access your patient portal'
                  : 'Join Gabi General Hospital patient portal'}
              </p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl bg-slate-100 p-1.5">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  mode === 'signin'
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  mode === 'signup'
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-5">
              {mode === 'signup' && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="fullName">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="fullName"
                      type="text"
                      className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20"
                      placeholder="e.g. Mulu Gebremariam"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-12 py-3 text-sm outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {mode === 'signup' && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-12 py-3 text-sm outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              )}
              {mode === 'signin' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-dark" />
                    Remember me
                  </label>
                  <Link to="#" className="text-sm font-medium text-brand-dark hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-dark px-4 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-900 hover:shadow-lg"
              >
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
              <p className="text-center text-xs text-slate-500">
                By continuing, you agree to our{' '}
                <Link to="/policies" className="font-medium text-brand-dark hover:underline">
                  Terms & Policies
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


