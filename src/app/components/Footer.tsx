import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Shield
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Emergency Plumbing',
      'Leak Detection',
      'Water Heater Service',
      'Drain Cleaning',
      'Bathroom Remodel',
      'Pipe Installation'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Reviews',
      'Service Areas',
      'Contact'
    ],
    resources: [
      'FAQ',
      'Blog & Tips',
      'Pricing',
      'Warranty Info',
      'Maintenance Tips',
      'Emergency Guide'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">AquaFix Pro</h3>
                  <p className="text-xs text-muted-foreground">Licensed & Insured</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted local plumbing experts providing professional, reliable service since 2008.
              </p>

              <div className="flex gap-2 mb-4">
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  4.9/5 Rating
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Shield className="w-3 h-3 mr-1" />
                  Licensed
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@aquafixpro.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>123 Plumber St, City, ST</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get plumbing tips and special offers delivered to your inbox.
              </p>
              <div className="space-y-2">
                <Input placeholder="Enter your email" className="text-sm" />
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-2 mt-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="p-2"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div>© 2024 AquaFix Pro. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors">Privacy Policy</button>
                <button className="hover:text-primary transition-colors">Terms of Service</button>
                <span>License #MP-12345</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;