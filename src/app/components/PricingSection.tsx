import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import {
  Check,
  Star,
  Clock,
  Phone,
  Wrench,
  Droplets,
  Thermometer,
  Home,
  Zap,
  Settings
} from 'lucide-react';

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Basic Service',
      description: 'Perfect for simple repairs and maintenance',
      price: '$99',
      period: 'Service Call',
      popular: false,
      features: [
        'Professional diagnosis',
        'Written estimate',
        'Basic repair work',
        '30-day warranty',
        'Licensed technician',
        'No hidden fees'
      ],
      services: [
        'Faucet repairs',
        'Toilet adjustments',
        'Minor drain clearing',
        'Leak inspection'
      ]
    },
    {
      name: 'Standard Service',
      description: 'Most popular choice for comprehensive repairs',
      price: '$149',
      period: 'Service Call',
      popular: true,
      features: [
        'Everything in Basic',
        'Advanced diagnostics',
        'Parts included (up to $50)',
        '90-day warranty',
        'Same-day service',
        'Follow-up call'
      ],
      services: [
        'Water heater service',
        'Pipe repairs',
        'Fixture installation',
        'Drain cleaning'
      ]
    },
    {
      name: 'Premium Service',
      description: 'Complete solution for major repairs and installations',
      price: '$199',
      period: 'Service Call',
      popular: false,
      features: [
        'Everything in Standard',
        'Video pipe inspection',
        'Parts included (up to $100)',
        '1-year warranty',
        'Priority scheduling',
        'Free annual check-up'
      ],
      services: [
        'Complete installations',
        'Major repairs',
        'System upgrades',
        'Preventive maintenance'
      ]
    }
  ];

  const commonServices = [
    {
      icon: Zap,
      service: 'Emergency Service Call',
      price: '$150-200',
      description: '24/7 emergency response'
    },
    {
      icon: Droplets,
      service: 'Leak Detection',
      price: '$120-180',
      description: 'Electronic leak detection'
    },
    {
      icon: Wrench,
      service: 'Faucet Installation',
      price: '$80-150',
      description: 'Standard to luxury fixtures'
    },
    {
      icon: Thermometer,
      service: 'Water Heater Repair',
      price: '$180-300',
      description: 'All brands and types'
    },
    {
      icon: Settings,
      service: 'Drain Cleaning',
      price: '$99-199',
      description: 'Hydro jetting available'
    },
    {
      icon: Home,
      service: 'Toilet Installation',
      price: '$200-350',
      description: 'Including wax ring and bolts'
    }
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. Our upfront pricing ensures you know exactly what you'll pay.
          </p>
        </div>

        {/* Service Call Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative ${
              tier.popular 
                ? 'border-primary shadow-lg scale-105 bg-primary/5' 
                : 'hover:shadow-lg transition-shadow duration-300'
            }`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-sm">{tier.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Common Services:</h4>
                  <ul className="space-y-1">
                    {tier.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'variant-outline'
                  }`}
                  onClick={scrollToBooking}
                >
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Individual Service Pricing */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Individual Service Pricing
            </h3>
            <p className="text-muted-foreground">
              Pricing for specific services. All prices include labor and basic materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonServices.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 truncate">
                        {item.service}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <div className="font-bold text-primary">{item.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call for Custom Quote */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              For major installations, bathroom remodels, or commercial projects, 
              we provide detailed written estimates at no charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={scrollToBooking}
              >
                <Clock className="w-4 h-4 mr-2" />
                Schedule Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('tel:+15551234567')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call for Quote
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-6">
          <p>
            * Prices shown are starting rates and may vary based on job complexity, parts required, and time of service. 
            Emergency service (after hours, weekends, holidays) includes additional fees. 
            All work includes our satisfaction guarantee and appropriate warranty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;