"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Calendar,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b385?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      location: 'Downtown',
      service: 'Bathroom Renovation',
      review: "AquaFix Pro transformed our outdated bathroom into a modern masterpiece. Mike and his team were professional, clean, and completed the job ahead of schedule. The quality of work exceeded our expectations!",
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 month ago',
      location: 'Westside',
      service: 'Emergency Water Heater',
      review: "Had a water heater emergency on a Sunday night. AquaFix Pro responded within an hour and had us back up and running by morning. Fair pricing and excellent service. Highly recommend!",
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '3 weeks ago',
      location: 'Suburban Heights',
      service: 'Kitchen Sink Installation',
      review: "Professional installation of our new kitchen sink and garbage disposal. Sarah was knowledgeable, efficient, and left the workspace spotless. The new system works perfectly!",
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      name: 'Michael Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 week ago',
      location: 'East End',
      service: 'Leak Detection',
      review: "They found a hidden leak that other plumbers missed. Used advanced equipment and provided a detailed explanation of the problem and solution. Saved us from potential water damage!",
      helpful: 9,
      verified: true
    },
    {
      id: 5,
      name: 'Amy Wilson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 months ago',
      location: 'North Valley',
      service: 'Drain Cleaning',
      review: "Thorough drain cleaning service with video inspection. The technician explained everything clearly and provided maintenance tips. Great value for money and professional service.",
      helpful: 6,
      verified: true
    },
    {
      id: 6,
      name: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '3 months ago',
      location: 'South District',
      service: 'Pipe Replacement',
      review: "Complete pipe replacement in our older home. The team was respectful of our property, cleaned up thoroughly, and the new pipes work perfectly. Quality workmanship at a fair price.",
      helpful: 11,
      verified: true
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '500+', label: 'Happy Customers', icon: ThumbsUp },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Response Time', icon: Calendar }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentReview + i) % reviews.length;
      result.push({ ...reviews[index], position: i });
    }
    return result;
  };

  return (
    <section id="reviews" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our plumbing services.
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

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevReview}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextReview}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <Card 
                key={`${review.id}-${review.position}`}
                className={`transition-all duration-500 hover:shadow-lg ${
                  index === 1 ? 'lg:scale-105 lg:shadow-xl' : ''
                }`}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="text-primary/20 mb-4">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    {review.verified && (
                      <Badge className="ml-2 bg-green-100 text-green-700 border-green-200 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-primary font-medium mb-2">{review.service}</div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{review.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{review.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{review.helpful} found this helpful</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Platform Links */}
        <div className="mt-16 text-center">
          <div className="text-sm text-muted-foreground mb-4">
            Read more reviews on:
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              Google Reviews
              <ExternalLink className="w-3 h-3" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Yelp
              <ExternalLink className="w-3 h-3" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Better Business Bureau
              <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Leave Review CTA */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Had a Great Experience?</h3>
            <p className="text-primary-foreground/90 mb-6">
              We'd love to hear about your experience! Your feedback helps us improve and helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open('https://google.com/reviews', '_blank')}
              >
                <Star className="w-4 h-4 mr-2" />
                Leave a Google Review
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white hover:bg-gray-100 text-primary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Share Your Experience
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReviewsSection;