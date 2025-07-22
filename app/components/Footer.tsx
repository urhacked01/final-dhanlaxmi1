'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const locations = [
  {
    name: 'Dhanlaxmi Automobiles',
    address: 'X, 80 - More Chowk Rd, Bajaj Nagar, MIDC, Waluj, Chhatrapati Sambhaji Nagar, Maharashtra 431136',
    phone: '+91 8888876603',
    instagram: 'https://www.instagram.com/dhanlaxmiautomobiles/?hl=en',
  },
  {
    name: 'Dhanlaxmi Motors',
    address: 'Plot No. 3, Beside Ira By Orchid Hotel, Opp to Master Cook Hotel, Near Jabinda Ground, Beed By Pass Road, Aurangabad - 431005',
    phone: '+91 8888876601',
    instagram: 'https://www.instagram.com/dhanlaxmi_hero/?hl=en',
  },
  {
    name: 'Dhanlaxmi PREMIA',
    address: 'Shop No 1/4, Skill Hub Complex, Jalna Road, Kranti Chowk, Aurangabad - 431001',
    phone: '+91 93716 19191',
    instagram: 'https://www.instagram.com/dhanlaxmi_premia/',
  },
  {
    name: 'Dhanlaxmi Petroleum',
    address: 'Jai Bhavani Chowk, X385/A, Bajaj Nagar, MIDC, Waluj, Chhatrapati Sambhaji Nagar, Maharashtra 431136',
    phone: '+91 8888876616',
    instagram: 'https://www.instagram.com/dhanlaxmi_petroleum/',
  },
];

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Bikes', href: '/bikes' },
    { name: 'Showrooms', href: '/showrooms' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
  ],
  bikes: [
    { name: 'Hero Bikes', href: '/bikes?brand=hero' },
    { name: 'Harley Davidson', href: '/bikes?brand=harley' },
    { name: 'New Arrivals', href: '/bikes?new=true' },
    { name: 'Popular Models', href: '/bikes?popular=true' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <span className="text-3xl font-bold text-white">Dhanlaxmi Motor</span>
            </div>
            <p className="text-base text-gray-300">Your trusted dealer for Hero and Harley Davidson motorcycles with multiple premium showroom locations.</p>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/dhanlaxmiautomobiles/?hl=en"
                className="text-gray-300 hover:text-white flex items-center gap-2"
              >
                <Instagram className="h-6 w-6" />
                <span>Official Instagram</span>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map(item => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Bikes</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.bikes.map(item => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">Our Locations</h3>
              <ul role="list" className="mt-4 space-y-6">
                {locations.map(location => (
                  <li key={location.name} className="text-gray-300">
                    <p className="font-medium text-white">{location.name}</p>
                    <p className="mt-1 flex items-start">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-gray-400 mr-2" />
                      <span>{location.address}</span>
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="flex items-center">
                        <Phone className="h-5 w-5 flex-shrink-0 text-gray-400 mr-2" />
                        <span>{location.phone}</span>
                      </p>
                      <a
                        href={location.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white flex items-center gap-1"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="text-sm">Instagram</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Dhanlaxmi Motor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
