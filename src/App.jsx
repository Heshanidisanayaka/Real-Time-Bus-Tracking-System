import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import LiveTracking from './components/LiveTracking';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentView, setCurrentView] = useState('login');

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  if (currentView === 'tracking') {
    return <LiveTracking navigateTo={navigateTo} />;
  }
  if (currentView === 'admin') {
    return <AdminDashboard navigateTo={navigateTo} />;
  }

  return (
    <div className="app-container">
      <div className="split-layout">
        <div className="branding-section">
          <div className="branding-content">
            <h1>Real-Time Bus Tracking</h1>
            <p>Your journey, tracked in real-time. Never miss a bus again with our state-of-the-art predictive routing.</p>
          </div>
          <div className="branding-overlay"></div>
        </div>
        
        <div className="auth-section">
          {currentView === 'login' && <Login navigateTo={navigateTo} />}
          {currentView === 'signup' && <SignUp navigateTo={navigateTo} />}
          {currentView === 'forgot-password' && <ForgotPassword navigateTo={navigateTo} />}
          {/* Add admin login button for demonstration */}
          {currentView === 'login' && (
            <button className="nav-btn" onClick={() => navigateTo('admin')}>Admin Dashboard</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
