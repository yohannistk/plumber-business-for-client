import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Award,
  Users,
  Clock,
  Shield,
  Wrench,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '1500+', label: 'Happy Customers' },
    { icon: Wrench, number: '500+', label: 'Jobs This Year' },
    { icon: Clock, number: '24/7', label: 'Emergency Service' },
    { icon: Award, number: '15+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Mike Johnson',
      role: 'Master Plumber & Owner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      certifications: ['Licensed Master Plumber', 'EPA Certified', 'OSHA Trained'],
      experience: '15+ Years Experience'
    },
    {
      name: 'Sarah Davis',
      role: 'Senior Plumber',
      image: 'https://images.unsplash.com/photo-1594824388838-40b0bb8d5dbd?w=300&h=300&fit=crop&crop=face',
      certifications: ['Licensed Plumber', 'Water Quality Specialist', 'Green Plumbing Certified'],
      experience: '8+ Years Experience'
    },
    {
      name: 'David Rodriguez',
      role: 'Emergency Response Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      certifications: ['Licensed Plumber', 'Emergency Response Certified', 'Leak Detection Specialist'],
      experience: '10+ Years Experience'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency plumbing services available around the clock, 365 days a year.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties and guarantees.'
    },
    {
      icon: Star,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond for every customer.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About AquaFix Pro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted local plumbing experts with over 15 years of experience serving the community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card hover:bg-accent transition-colors duration-200">
              <CardContent className="p-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-full inline-flex mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Our Story
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Building Trust Through Quality Service
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2008 by master plumber Mike Johnson, AquaFix Pro has grown from a one-man operation 
                to the most trusted plumbing service in the area. We've built our reputation on honest pricing, 
                quality workmanship, and exceptional customer service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Our Mission</h4>
              <p className="text-muted-foreground">
                To provide reliable, professional plumbing services that exceed our customers' expectations 
                while maintaining the highest standards of craftsmanship and integrity.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">BBB A+ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Locally Owned</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=400&fit=crop"
              alt="Plumbing professionals at work"
              className="rounded-xl shadow-2xl w-full"
              width={500}
              height={400}
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Serving</div>
              <div className="text-sm opacity-90">The Community</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Meet Our Expert Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our licensed and certified plumbers bring years of experience and expertise to every job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                      width={96}
                      height={96}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2">
                        <Award className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose AquaFix Pro?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card hover:bg-accent transition-colors duration-200 group">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-full inline-flex mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;