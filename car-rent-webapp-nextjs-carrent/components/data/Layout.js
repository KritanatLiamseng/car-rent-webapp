import React, { useState, useEffect } from 'react';
import SplashScreen from '@/pages/SplashScreen';
import Login from '@/pages/Login/Login';

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500); // 3000ms (3 seconds)
  }, []);

  return (
    <div className="layout">
      {showSplash ? <SplashScreen /> : <Login />}
    </div>
  );
};

export default Layout;
