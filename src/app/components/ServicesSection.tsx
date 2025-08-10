import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';
import {
  Wrench,
  Droplets,
  Thermometer,
  Zap,
  Home,
  Building,
  Hammer,
  Settings,
  ArrowRight,
  Clock,
  DollarSign,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: 'Emergency Plumbing',
      description: 'Available 24/7 for urgent plumbing emergencies including burst pipes, major leaks, and sewage backups.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=250&fit=crop',
      features: ['24/7 Availability', 'Rapid Response', '1-Hour ETA'],
      price: 'From $150',
      popular: true
    },
    {
      icon: Droplets,
      title: 'Leak Detection & Repair',
      description: 'Advanced leak detection technology to find hidden leaks and prevent water damage to your property.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
      features: ['Electronic Detection', 'No Damage Testing', 'Same Day Repair'],
      price: 'From $120'
    },
    {
      icon: Wrench,
      title: 'Pipe Installation',
      description: 'Complete pipe installation and replacement services for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=250&fit=crop',
      features: ['All Pipe Types', 'Code Compliant', '5-Year Warranty'],
      price: 'From $200'
    },
    {
      icon: Thermometer,
      title: 'Water Heater Service',
      description: 'Installation, repair, and maintenance of all water heater types including tankless systems.',
      image: 'https://images.unsplash.com/photo-1610312973684-e47446aa260b?w=400&h=250&fit=crop',
      features: ['All Brands', 'Energy Efficient', '24/7 Service'],
      price: 'From $180'
    },
    {
      icon: Home,
      title: 'Bathroom Remodeling',
      description: 'Complete bathroom plumbing renovation services from design to installation.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop',
      features: ['Custom Design', 'Premium Fixtures', 'Project Management'],
      price: 'From $2,500'
    },
    {
      icon: Settings,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and maintenance to keep your plumbing flowing smoothly.',
      image: 'https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?w=400&h=250&fit=crop',
      features: ['Video Inspection', 'Hydro Jetting', 'Root Removal'],
      price: 'From $99'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Plumbing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to complete installations, we offer comprehensive plumbing solutions for all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-full">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Same Day</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full group/btn"
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector('#booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-primary text-primary-foreground p-8">
            <CardContent className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
              <p className="text-primary-foreground/90">
                We offer customized plumbing solutions for unique requirements. Get a personalized quote today.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;