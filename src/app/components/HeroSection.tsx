import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {buisnessDetails} from "./data/businessData"



import { 
  Wrench, 
  Clock, 
  Shield, 
  Zap, 
  Droplets, 
  Thermometer, 
  Phone, 
  Star,
  CheckCircle
} from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';

const HeroSection = () => {
  const services = [
    { icon: Zap, title: 'Emergency Repairs', desc: '24/7 Service' },
    { icon: Droplets, title: 'Leak Detection', desc: 'Advanced Equipment' },
    { icon: Wrench, title: 'Pipe Installation', desc: 'Expert Installation' },
    { icon: Thermometer, title: 'Water Heater Service', desc: 'All Brands' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Licensed & Insured
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Available 24/7
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional
                <span className="text-primary block">Plumbing Services</span>
                You Can Trust
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                From emergency repairs to complete installations, we deliver fast, reliable, and affordable plumbing solutions for your home and business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-pulse-glow"
                onClick={() => scrollToSection('#booking')}
              >
                <Clock className="w-5 h-5 mr-2" />
                Book Service Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={() => window.open(formatPhoneNumber(buisnessDetails.buisnessPrimaryPhone))}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {buisnessDetails.buisnessPrimaryPhone}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Fully Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-muted-foreground">Guaranteed Work</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-muted-foreground">Same Day Service</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 animate-float">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                alt="Professional plumber at work"
                className="w-full h-auto rounded-xl shadow-2xl"
                width={600}
                height={600}
              />
              
              {/* Floating Stats Card */}
              <Card className="absolute -bottom-4 -left-4 bg-card border shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-bold">500+ Jobs</div>
                      <div className="text-sm text-muted-foreground">Completed This Year</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Review Card */}
              <Card className="absolute -top-4 -right-4 bg-card border shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold">4.9/5</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-border">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:bg-accent transition-colors duration-200 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full inline-flex mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;