import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootState } from './store/store';
import { LandingPage } from './pages/LandingPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProfilePage } from './pages/ProfilePage';
import { PackageDetailsPage } from './pages/PackageDetailsPage';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { DocsPage } from './pages/DocsPage';
import AboutUs from './pages/AboutUs';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/package/:id" element={<PackageDetailsPage />} />
          <Route path="/docs" element={<DocsPage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}