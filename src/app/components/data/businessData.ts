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
  buisnessName : 'Paradiso Mechanical',
  buisnessPrimaryPhone : '(206) 251-6854',
  buisnessEmail : 'support@paradiso.com',
  location : '2609 2nd Ave, Seattle, WA 98121, United States'

}

export const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      { label: 'Main Line', value: '(206) 251-6854', action: 'tel:+12062516854' },
      { label: 'Emergency', value: '(206) 251-6854', action: 'tel:+12062516854' },
      { label: 'Text/SMS', value: '(206) 251-6854', action: 'sms:++12062516854' }
    ]
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: [
      { label: 'General Inquiries', value: 'info@paradiso.com', action: 'mailto:info@paradiso.com' },
      { label: 'Emergency Service', value: 'support@paradiso.com', action: 'mailto:support@paradiso.com' },
      { label: 'Billing Questions', value: 'billing@support@paradiso.com', action: 'mailto:billing@support@paradiso.com' }
    ]
  },
  {
    icon: MapPin,
    title: 'Service Address',
    details: [
      { label: 'Office Location', value: '2609 2nd Ave, Seattle, WA 98121, United States' },
      // { label: 'City, State', value: 'Hometown, ST 12345' },
      // { label: 'Service Area', value: '30-mile radius' }
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