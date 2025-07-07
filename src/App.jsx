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

function App() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading ? (
        <LoadingScreen onFinish={() => setShowLoading(false)} />
      ) : (
        <div className="flex flex-col justify-center items-center font-sans bg-[#EFEAE3]">
          <Navbar />
          <HeroSection />
          <VideoSection />
          <SliderSection />
          <AboutCompany />
          <FeaturesList />
          <CompanyInfo />
          <CardsSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
