import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const EyeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M3 3l18 18" strokeLinecap="round" />
    <path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.5 6.6C4 8.3 2 12 2 12s3.6 7 10 7c1.4 0 2.6-.3 3.7-.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" strokeLinecap="round" />
  </svg>
);

const inputClass =
  'w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === 'Sign Up') {
        const res = await axios.post(backendUrl +
          '/api/user/register',
          { name, email, password }
        )

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token)
        } else {
          toast.error(res.data.message)
        }

      } else {
        const res = await axios.post(backendUrl +
          '/api/user/login',
          { email, password }
        )

        if (res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token', res.data.token)
        } else {
          toast.error(res.data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])


  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6 py-16 font-sans">
      <div className="relative w-full max-w-md">
        {/* offset accent frame — echoes the hero image treatment */}
        <div className="hidden sm:block absolute inset-0 translate-x-3 translate-y-3 border border-accent" />

        <div className="relative bg-surface border border-border shadow-card px-7 py-10 sm:px-10 sm:py-12">
          <p className="font-mono text-[11px] tracking-mega uppercase text-accent mb-3">
            {currentState === 'Login' ? 'Welcome back' : 'Join us'}
          </p>
          <h1 className="font-display text-3xl text-foreground mb-1">{currentState}</h1>
          <p className="text-sm text-muted mb-8">
            {currentState === 'Login'
              ? 'Sign in to track orders and check out faster.'
              : 'Create an account to save your details for next time.'}
          </p>

          <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
            {currentState !== 'Login' && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className={inputClass}
                  placeholder="Your full name"
                  required
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  className={`${inputClass} pr-11`}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between text-[13px] -mt-1">
              <p className="cursor-pointer text-muted hover:text-accent transition-colors">
                Forgot your password?
              </p>
              {currentState === 'Login' ? (
                <p
                  onClick={() => setCurrentState('Sign Up')}
                  className="cursor-pointer text-accent hover:text-accent-hover transition-colors"
                >
                  Create account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState('Login')}
                  className="cursor-pointer text-accent hover:text-accent-hover transition-colors"
                >
                  Login here
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground text-[13px] tracking-[0.12em] uppercase font-medium px-8 py-3.5 mt-2 hover:bg-primary-hover transition-colors duration-200"
            >
              {currentState === 'Login' ? 'Sign in' : 'Sign up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login