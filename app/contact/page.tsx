'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import DhanlaxmiAddress from '../components/DhanlaxmiAddress';
import { locations } from '../data/locations';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dhanlaxmi Motors coordinates (approximate)
const DHANLAXMI_MOTORS_COORDS = [19.8510556, 75.3295722];

const MapSection = dynamic(() => import('./MapSection').then(mod => mod.MapSection), { ssr: false });

// Sample showroom data (simplified from showrooms page)
const SHOWROOMS = [
  {
    id: 1,
    name: 'Dhanlaxmi PREMIA',
    address: 'Shop No 1/4, Skill Hub Complex, Jalna Road, Kranti Chowk, Aurangabad - 431001',
    phone: '+91 93716 19191',
    email: 'info@dhanlaxmipremia.com',
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: 2,
    name: 'Dhanlaxmi Automobiles',
    address: 'X, 80 - More Chowk Rd, Bajaj Nagar, MIDC, Waluj, Chhatrapati Sambhaji Nagar - 431136',
    phone: '+91 8888876603',
    email: 'info@dhanlaxmiautomobiles.com',
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 2:00 PM',
    },
  },
  {
    id: 3,
    name: 'Dhanlaxmi Motors',
    address: 'Plot No. 3, Beside Ira By Orchid Hotel, Opp to Master Cook Hotel, Near Jabinda Ground, Beed By Pass Road, Aurangabad - 431005',
    phone: '+91 8888876601',
    email: 'info@dhanlaxmimotors.com',
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 2:00 PM',
    },
  },
  {
    id: 4,
    name: 'Dhanlaxmi Petroleum',
    address: 'Jai Bhavani Chowk, X385/A, Bajaj Nagar, MIDC, Waluj, Chhatrapati Sambhaji Nagar - 431136',
    phone: '+91 8888876616',
    email: 'info@dhanlaxmipetroleum.com',
    hours: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7',
    },
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="py-8 sm:py-12">
      <div className="container-custom">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="input-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="input-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="input-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="input-primary"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-sm sm:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Address and Map */}
          <div className="space-y-6">
            {/* Dhanlaxmi Motors Map */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Find Us</h2>
              <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                <MapSection />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Dhanlaxmi+Motors+-+Hero+MotoCorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All Locations */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map(location => (
              <DhanlaxmiAddress key={location.id} locationId={location.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
