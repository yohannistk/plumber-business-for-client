"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useTheme } from './ThemeProvider';
import { Menu, Moon, Sun, Phone, Wrench } from 'lucide-react';
import {buisnessDetails} from "./data/businessData"
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center animate-pulse-glow">
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
          <Phone className="w-4 h-4" />
          <span className="text-sm">24/7 Emergency Plumbing Service - Call Now: {buisnessDetails.buisnessPrimaryPhone} </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">{buisnessDetails.buisnessName}</h1>
                <p className="text-xs text-muted-foreground">Licensed & Insured</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-muted-foreground" />
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="bg-primary"
                />
                <Moon className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* CTA Button */}
              <Button 
                className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('#booking')}
              >
                Book Service
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="sm">
                    <Menu className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ))}
                    <Button 
                      className="mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => scrollToSection('#booking')}
                    >
                      Book Service
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;