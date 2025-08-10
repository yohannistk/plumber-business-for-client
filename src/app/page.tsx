"use client";

import React from 'react';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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