
"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import {buisnessDetails} from "./data/businessData"
import {formatPhoneNumber} from '@/lib/utils'



import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User,
  Wrench,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { format } from 'date-fns';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    description: '',
    urgency: 'normal'
  });

  const services = [
    'Emergency Repair',
    'Leak Detection',
    'Pipe Installation', 
    'Water Heater Service',
    'Drain Cleaning',
    'Bathroom Remodel',
    'Fixture Installation',
    'Inspection',
    'Other'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.urgency === 'normal' && (!selectedDate || !selectedTime)) {
      toast.error('Please select a date and time for your appointment');
      return;
    }

    toast.success('Booking request submitted! We\'ll contact you within 30 minutes to confirm.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      service: '',
      description: '',
      urgency: 'normal'
    });
    setSelectedDate(undefined);
    setSelectedTime('');
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your plumbing service online or call for immediate emergency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contact */}
          <Card className="bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800/30">
            <CardHeader className="text-center pb-4">
              <div className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 p-3 rounded-full inline-flex mx-auto mb-2">
                <AlertCircle className="w-6 h-6" />
              </div>
              <CardTitle className="text-red-700 dark:text-red-300">Emergency Service</CardTitle>
              <CardDescription className="text-red-600/80 dark:text-red-400/80">
                Need immediate help? Call now!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                {buisnessDetails.buisnessPrimaryPhone}
              </div>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open(formatPhoneNumber(buisnessDetails.buisnessPrimaryPhone))}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Line
              </Button>
              <div className="text-sm text-red-600/70 dark:text-red-400/70">
                Available 24/7 for urgent repairs
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Schedule Service
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you to confirm your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={buisnessDetails.buisnessPrimaryPhone}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="address"
                        placeholder="123 Main St, City, State"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select value={formData.service} onValueChange={(value : any) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Priority Level</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                        <SelectItem value="urgent">Urgent (Within 24 hrs)</SelectItem>
                        <SelectItem value="normal">Normal (Scheduled)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time Selection - Only for non-emergency */}
                {formData.urgency === 'normal' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      <Label>Preferred Date & Time</Label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Select Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Select Time</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="description">Problem Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your plumbing issue in detail..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Booking Request
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  We'll contact you within 30 minutes to confirm your appointment.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Service Hours */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Service Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium">Regular Service</div>
                <div className="text-muted-foreground">Mon-Fri: 8AM-6PM</div>
                <div className="text-muted-foreground">Sat: 9AM-4PM</div>
              </div>
              <div>
                <div className="font-medium">Emergency Service</div>
                <div className="text-muted-foreground">Available 24/7</div>
                <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/30 mt-1">
                  Additional fees apply
                </Badge>
              </div>
              <div>
                <div className="font-medium">Response Time</div>
                <div className="text-muted-foreground">Emergency: 1 Hour</div>
                <div className="text-muted-foreground">Regular: Same/Next Day</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;