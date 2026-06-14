import React, { useState } from 'react';

function Login({ navigateTo }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      alert('Logged in successfully!');
    }, 1500);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Welcome Back</h2>
        <p>Enter your details to access your account.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifier">Email or Phone Number</label>
          <input
            type="text"
            id="identifier"
            className="form-input"
            placeholder="e.g. hello@example.com"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex-between">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button 
            type="button" 
            className="auth-link"
            onClick={() => navigateTo('forgot-password')}
          >
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="auth-links">
        Don't have an account?{' '}
        <button className="auth-link" onClick={() => navigateTo('signup')}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
