import React, { useState } from 'react';

function ForgotPassword({ navigateTo }) {
  const [identifier, setIdentifier] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock recovery delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Reset Password</h2>
        <p>Enter your email or phone number and we'll send you instructions to reset your password.</p>
      </div>

      {!isSubmitted ? (
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

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ color: 'var(--success)', fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
          <h3 style={{ marginBottom: '1rem' }}>Check your inbox</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            We've sent password reset instructions to {identifier}
          </p>
        </div>
      )}

      <div className="auth-links">
        Remember your password?{' '}
        <button className="auth-link" onClick={() => navigateTo('login')}>
          Back to login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
