import React from 'react';
import { Toaster } from './src/app/components/ui/sonner';
import { ThemeProvider } from './src/app/components/ThemeProvider';
import Navigation from './src/app/components/Navigation';
import HeroSection from './src/app/components/HeroSection';
import ServicesSection from './src/app/components/ServicesSection';
import AboutSection from './src/app/components/AboutSection';
import BookingSection from './src/app/components/BookingSection';
import PricingSection from './src/app/components/PricingSection';
import PortfolioSection from './src/app/components/PortfolioSection';
import ReviewsSection from './src/app/components/ReviewsSection';
import FAQSection from './src/app/components/FAQSection';
import ContactSection from './src/app/components/ContactSection';
import Footer from './src/app/components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <BookingSection />
          <PricingSection />
          <PortfolioSection />
          <ReviewsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          richColors
          closeButton
        />
      </div>
    </ThemeProvider>
  );
}