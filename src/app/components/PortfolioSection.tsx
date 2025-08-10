"use client";

import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Maximize2,
  Clock,
  DollarSign
} from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Complete Bathroom Renovation',
      category: 'Bathroom Remodel',
      location: 'Downtown Residence',
      duration: '3 days',
      cost: '$3,500',
      rating: 5,
      description: 'Full bathroom plumbing renovation including new fixtures, updated piping, and modern water-efficient installations.',
      beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop'
      ],
      client: 'Sarah M.',
      testimonial: 'AquaFix Pro transformed our outdated bathroom into a modern masterpiece. The team was professional and clean.'
    },
    {
      id: 2,
      title: 'Emergency Water Heater Replacement',
      category: 'Water Heater',
      location: 'Suburban Home',
      duration: '4 hours',
      cost: '$1,200',
      rating: 5,
      description: 'Emergency replacement of failed water heater with new energy-efficient tankless system.',
      beforeImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      client: 'Mike R.',
      testimonial: 'Quick response during our emergency. New tankless system is amazing and saves space!'
    },
    {
      id: 3,
      title: 'Kitchen Sink & Plumbing Upgrade',
      category: 'Kitchen Remodel',
      location: 'Modern Kitchen',
      duration: '1 day',
      cost: '$800',
      rating: 5,
      description: 'Installation of new kitchen sink with garbage disposal and updated supply lines.',
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1556909011-f9301dcb9a6c?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909011-f9301dcb9a6c?w=800&h=600&fit=crop'
      ],
      client: 'Jennifer L.',
      testimonial: 'Beautiful installation and the new disposal works perfectly. Very satisfied with the service.'
    },
    {
      id: 4,
      title: 'Pipe Leak Repair & Prevention',
      category: 'Leak Repair',
      location: 'Office Building',
      duration: '2 days',
      cost: '$1,800',
      rating: 5,
      description: 'Major pipe leak repair with preventive measures to avoid future issues in commercial building.',
      beforeImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop'
      ],
      client: 'David Corp.',
      testimonial: 'Professional handling of our commercial leak issue. No disruption to business operations.'
    },
    {
      id: 5,
      title: 'Drain Cleaning & Maintenance',
      category: 'Drain Service',
      location: 'Family Home',
      duration: '3 hours',
      cost: '$150',
      rating: 5,
      description: 'Complete drain system cleaning with video inspection and preventive maintenance recommendations.',
      beforeImage: 'https://images.unsplash.com/photo-1558594043-b8b9d6ed1b74?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1558594043-b8b9d6ed1b74?w=500&h=300&fit=crop&brightness=1.2',
      images: [
        'https://images.unsplash.com/photo-1558594043-b8b9d6ed1b74?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558594043-b8b9d6ed1b74?w=800&h=600&fit=crop&brightness=1.2'
      ],
      client: 'Amy T.',
      testimonial: 'Thorough cleaning service and great advice on maintaining our drains. Highly recommend!'
    },
    {
      id: 6,
      title: 'Outdoor Spigot Installation',
      category: 'Installation',
      location: 'Garden Area',
      duration: '2 hours',
      cost: '$200',
      rating: 5,
      description: 'Installation of frost-free outdoor water spigot for garden irrigation with proper winterization.',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop&brightness=1.1',
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&brightness=1.1'
      ],
      client: 'Robert K.',
      testimonial: 'Perfect installation for our garden needs. Professional work and fair pricing.'
    }
  ];

  const categories = ['All', 'Bathroom Remodel', 'Water Heater', 'Kitchen Remodel', 'Leak Repair', 'Drain Service', 'Installation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the quality of our craftsmanship through real before and after photos from recent projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'bg-primary text-primary-foreground' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="relative" onClick={() => openProject(project.id)}>
                <div className="grid grid-cols-2 h-48">
                  <div className="relative overflow-hidden">
                    <Badge className="absolute top-2 left-2 z-10 bg-red-100 text-red-700 border-red-200">
                      Before
                    </Badge>
                    <ImageWithFallback
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      width={250}
                      height={192}
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <Badge className="absolute top-2 right-2 z-10 bg-green-100 text-green-700 border-green-200">
                      After
                    </Badge>
                    <ImageWithFallback
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      width={250}
                      height={192}
                    />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {currentProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {currentProject.title}
                    <Badge variant="secondary">{currentProject.category}</Badge>
                  </DialogTitle>
                  <DialogDescription>
                    {currentProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <ImageWithFallback
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-96 object-cover rounded-lg"
                      width={800}
                      height={384}
                    />
                    
                    {currentProject.images.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90"
                          onClick={prevImage}
                          disabled={currentImageIndex === 0}
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90"
                          onClick={nextImage}
                          disabled={currentImageIndex === currentProject.images.length - 1}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>

                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {currentProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <Badge className="absolute top-2 left-2 bg-black/70 text-white">
                      {currentImageIndex === 0 ? 'Before' : 'After'}
                    </Badge>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">{currentProject.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{currentProject.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold">{currentProject.cost}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(currentProject.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            ({currentProject.rating}/5)
                          </span>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Customer Review</h4>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "{currentProject.testimonial}"
                        </p>
                        <div className="text-sm font-medium text-primary">
                          - {currentProject.client}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="bg-primary text-primary-foreground p-8">
            <CardContent className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
              <p className="text-primary-foreground/90">
                Let us transform your plumbing with the same quality and care shown in these projects.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  const element = document.querySelector('#booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Free Estimate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;