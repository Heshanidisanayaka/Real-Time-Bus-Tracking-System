import React, { useState } from 'react';

function SignUp({ navigateTo }) {
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    // Mock signup delay
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully!');
      navigateTo('login');
    }, 1500);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Create Account</h2>
        <p>Join us to track your buses in real-time.</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button 
          type="button" 
          className={`btn-primary ${method !== 'email' ? 'outline' : ''}`}
          style={method !== 'email' ? { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' } : {}}
          onClick={() => setMethod('email')}
        >
          Email
        </button>
        <button 
          type="button" 
          className={`btn-primary ${method !== 'phone' ? 'outline' : ''}`}
          style={method !== 'phone' ? { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' } : {}}
          onClick={() => setMethod('phone')}
        >
          Phone
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifier">
            {method === 'email' ? 'Email Address' : 'Phone Number'}
          </label>
          <input
            type={method === 'email' ? 'email' : 'tel'}
            id="identifier"
            className="form-input"
            placeholder={method === 'email' ? "e.g. hello@example.com" : "e.g. +1 234 567 8900"}
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
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-input"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <div className="auth-links">
        Already have an account?{' '}
        <button className="auth-link" onClick={() => navigateTo('login')}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignUp;
