import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  HelpCircle,
  Clock,
  DollarSign,
  Shield,
  Phone,
  Wrench,
  Home,
  AlertTriangle,
  CheckCircle,
  MapPin
} from 'lucide-react';

const FAQSection = () => {
  const faqCategories = [
    {
      category: 'General Services',
      icon: Wrench,
      faqs: [
        {
          question: 'What plumbing services do you offer?',
          answer: 'We provide comprehensive plumbing services including emergency repairs, leak detection, pipe installation and replacement, water heater service, drain cleaning, bathroom and kitchen remodeling, fixture installation, and preventive maintenance. We serve both residential and commercial customers.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed, bonded, and insured. Our master plumber license number is MP-12345, and we carry comprehensive liability insurance to protect both our customers and our team. All our technicians are certified professionals.'
        },
        {
          question: 'Do you provide written estimates?',
          answer: 'Absolutely! We provide detailed written estimates for all work before starting any project. For major installations or renovations, we offer free in-home consultations. Our estimates include labor, materials, and any applicable warranties.'
        }
      ]
    },
    {
      category: 'Emergency Services',
      icon: AlertTriangle,
      faqs: [
        {
          question: 'Do you really offer 24/7 emergency service?',
          answer: 'Yes, we provide genuine 24/7 emergency plumbing service, 365 days a year. Our emergency technicians are on call for urgent issues like burst pipes, major leaks, sewage backups, and water heater failures. We typically respond within 1 hour for emergencies.'
        },
        {
          question: 'What constitutes a plumbing emergency?',
          answer: 'Plumbing emergencies include: burst pipes, major water leaks, sewage backups, no hot water in winter, overflowing toilets that won\'t stop, gas line leaks, and situations that could cause property damage or health hazards if not addressed immediately.'
        },
        {
          question: 'How quickly can you respond to emergencies?',
          answer: 'We strive to respond to emergency calls within 60 minutes. Our dispatch system prioritizes calls based on severity, and we maintain strategically located service vehicles throughout our service area to ensure rapid response times.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      icon: DollarSign,
      faqs: [
        {
          question: 'How much do your services cost?',
          answer: 'Our service call fee starts at $99 for basic diagnostics and minor repairs. We offer transparent, upfront pricing with no hidden fees. Emergency service calls are $150-200. We provide detailed written estimates for all work and offer various payment options including financing.'
        },
        {
          question: 'Do you charge extra for evenings, weekends, or holidays?',
          answer: 'Regular business hours (Mon-Fri 8AM-6PM, Sat 9AM-4PM) have standard rates. Emergency service calls outside these hours include additional fees to cover after-hours response. We\'ll always inform you of any additional charges before beginning work.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, checks, all major credit cards (Visa, MasterCard, American Express, Discover), and offer financing options for larger projects. Payment is due upon completion of work unless prior arrangements have been made.'
        },
        {
          question: 'Do you offer senior citizen or military discounts?',
          answer: 'Yes! We offer a 10% discount for seniors (65+) and active/retired military personnel. Please mention this when scheduling your service and have valid ID available. This discount applies to labor only and cannot be combined with other offers.'
        }
      ]
    },
    {
      category: 'Service Areas & Scheduling',
      icon: MapPin,
      faqs: [
        {
          question: 'What areas do you serve?',
          answer: 'We serve the greater metropolitan area including downtown, suburbs, and surrounding communities within a 30-mile radius. Our service area includes all major neighborhoods and we\'re familiar with local building codes and permit requirements.'
        },
        {
          question: 'How far in advance do I need to schedule service?',
          answer: 'For non-emergency services, we can usually schedule within 24-48 hours. Same-day service is often available for urgent (but non-emergency) repairs. For larger projects like bathroom remodels, we recommend scheduling 1-2 weeks in advance.'
        },
        {
          question: 'Do you work on weekends?',
          answer: 'Yes, we offer limited weekend service on Saturdays from 9AM-4PM for scheduled appointments. Emergency service is available 24/7 including weekends and holidays. Sunday service is available for emergencies only.'
        }
      ]
    },
    {
      category: 'Warranties & Guarantees',
      icon: Shield,
      faqs: [
        {
          question: 'What warranty do you provide on your work?',
          answer: 'We stand behind our work with comprehensive warranties: 30 days on basic repairs, 90 days on standard service, and up to 1 year on major installations. Parts warranties vary by manufacturer but we honor all manufacturer warranties and assist with warranty claims.'
        },
        {
          question: 'What if I\'m not satisfied with the work?',
          answer: 'Customer satisfaction is our top priority. If you\'re not completely satisfied with our work, please contact us within 48 hours and we\'ll return to make it right at no additional charge. We\'re committed to earning your trust and delivering quality results.'
        },
        {
          question: 'Do you guarantee your emergency response time?',
          answer: 'While we strive for 60-minute emergency response, factors like severe weather, traffic, or high call volume may affect response times. We\'ll always provide an estimated arrival time when you call and keep you updated if there are any delays.'
        }
      ]
    }
  ];

  const quickLinks = [
    { icon: Phone, title: 'Emergency Line', subtitle: '(555) 123-4567', action: 'Call Now' },
    { icon: Clock, title: 'Schedule Service', subtitle: 'Book Online', action: 'Schedule' },
    { icon: DollarSign, title: 'Get Estimate', subtitle: 'Free Quotes', action: 'Get Quote' },
    { icon: Home, title: 'Service Areas', subtitle: 'Coverage Map', action: 'View Map' }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our plumbing services, pricing, and policies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full inline-flex mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                  <link.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{link.subtitle}</p>
                <Button size="sm" variant="outline" className="text-xs">
                  {link.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <category.icon className="w-5 h-5" />
                  </div>
                  {category.category}
                  <Badge variant="secondary" className="ml-auto">
                    {category.faqs.length} Questions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-b last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 [&[data-state=open]]:bg-accent/70">
                        <div className="flex items-start gap-3 text-left">
                          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="bg-primary-foreground/10 text-primary-foreground p-3 rounded-full inline-flex mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is here to help. 
              Give us a call or send us a message and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open('tel:+15551234567')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white hover:bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Search Tip */}
        <div className="mt-8 text-center text-sm text-muted-foreground bg-muted/30 rounded-lg p-4">
          <p>
            💡 <strong>Pro Tip:</strong> Use Ctrl+F (or Cmd+F on Mac) to quickly search for specific terms on this page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;