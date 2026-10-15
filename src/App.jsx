import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import SliderSection from './components/SliderSection';
import AboutCompany from './components/AboutCompany';
import FeaturesList from './components/FeaturesList';
import CompanyInfo from './components/CompanyInfo';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SmoothScrollLayout from './components/SmoothScrollLayout';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading ? (
        <LoadingScreen onFinish={() => setShowLoading(false)} />
      ) : (
        <SmoothScrollLayout>
          <div className="w-full min-h-screen font-sans bg-[#EFEAE3]">
            <header>
              <Navbar />
            </header>

            <main className="flex flex-col">
              <HeroSection />
              <VideoSection />
              <SliderSection />
              <AboutCompany />
              <FeaturesList />
              <CompanyInfo />
              <CardsSection />
            </main>

            <Footer />
          </div>
        </SmoothScrollLayout>
      )}
    </>
  );
}

export default App;
