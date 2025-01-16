import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { RootState } from './store/store';
import { LandingPage } from './pages/LandingPage';
import MarketplacePage from './pages/MarketplacePage';
import Layout from './components/Layout';
import FirstMarketPlace from './pages/FirstMarketPlace';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import { ThemeDemo } from './pages/ThemeDemo';
// import { MarketplacePage } from './pages/MarketplacePage';
// import { ProfilePage } from './pages/ProfilePage';
// import { PackageDetailsPage } from './pages/PackageDetailsPage';
// import { AuthModal } from './components/AuthModal';

export default function App() {
  // const theme = useSelector((state: RootState) => state.theme);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  useEffect(() => {
    // Apply theme class on mount and theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/firstclick" element={<FirstMarketPlace/>}/>
        {/* <Route element={<Layout children={undefined} />}> */}
          {/* <Route path="/marketplace" element={<MarketplacePage />} /> */}
        {/* </Route> */}
        <Route
          path='/marketplace'
          element={
            <Layout>
              <MarketplacePage/>
            </Layout>
          }/>
          <Route
          path='/login'
          element={
              <LoginPage/>
          }/>
          <Route
          path='/signup'
          element={
              <SignupPage/>
          }/>
          <Route
          path='/profile'
          element={
            <Layout>
              <ProfilePage/>
            </Layout>
          }/>
          <Route
          path='/theme'
          element={
            <ThemeDemo/>
          }/>
        {/* <Route path="/profile" element={<ProfilePage />} />
        <Route path="/package/:id" element={<PackageDetailsPage />} /> */}
      </Routes>
       
      {/* <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} /> */}
    </BrowserRouter>
  );
}