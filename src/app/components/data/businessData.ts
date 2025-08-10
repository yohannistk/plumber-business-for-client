import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Shield,
  Award,
  Star
} from 'lucide-react';



export const buisnessDetails = {
  buisnessName : 'Paradiso Mec',
  buisnessPrimaryPhone : '(206) 251-6854',
  buisnessEmail : 'support@paradiso.com',
  location : '2609 2nd Ave, Seattle, WA 98121, United States'

}

export const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      { label: 'Main Line', value: '(555) 123-4567', action: 'tel:+15551234567' },
      { label: 'Emergency', value: '(555) 123-HELP', action: 'tel:+15551234357' },
      { label: 'Text/SMS', value: '(555) 123-4567', action: 'sms:+15551234567' }
    ]
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: [
      { label: 'General Inquiries', value: 'info@aquafixpro.com', action: 'mailto:info@aquafixpro.com' },
      { label: 'Emergency Service', value: 'emergency@aquafixpro.com', action: 'mailto:emergency@aquafixpro.com' },
      { label: 'Billing Questions', value: 'billing@aquafixpro.com', action: 'mailto:billing@aquafixpro.com' }
    ]
  },
  {
    icon: MapPin,
    title: 'Service Address',
    details: [
      { label: 'Office Location', value: '123 Plumber Street' },
      { label: 'City, State', value: 'Hometown, ST 12345' },
      { label: 'Service Area', value: '30-mile radius' }
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      { label: 'Monday - Friday', value: '8:00 AM - 6:00 PM' },
      { label: 'Saturday', value: '9:00 AM - 4:00 PM' },
      { label: 'Emergency Service', value: '24/7 Available' }
    ]
  }
];

export const serviceAreas = [
  'Downtown District',
  'Westside Neighborhoods', 
  'East End Communities',
  'North Valley Areas',
  'South District',
  'Suburban Heights',
  'Industrial Zone',
  'Commercial District',
  'Residential Estates',
  'Historic District'
];

export const certifications = [
  { icon: Shield, title: 'Licensed & Bonded', desc: 'Master Plumber License MP-12345' },
  { icon: Award, title: 'EPA Certified', desc: 'Environmental Protection Certified' },
  { icon: Star, title: 'BBB A+ Rating', desc: 'Better Business Bureau Accredited' }
];