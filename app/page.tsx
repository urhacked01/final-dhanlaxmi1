'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, MapPin, Calendar, Bike, ShieldCheck } from 'lucide-react';

// Sample featured bikes
const FEATURED_BIKES = [
  {
    id: 'mavrick-440-basic',
    name: 'Hero Mavrick 440',
    price: 239000,
    image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/premia/acja/acja/bike-image/gallery-01.png',
    description: 'Most powerful Hero bike with 27 bhp power and premium features.',
    category: 'hero',
    specs: {
      engine: '440 cc',
      mileage: '35 kmpl',
      power: '27 bhp',
      weight: '190 kg',
    },
  },
  {
    id: 'vida-v2-pro',
    name: 'Vida V2 Pro',
    price: 145000,
    subsidyPrice: 140000,
    image: 'https://www.vidaworld.com/content/dam/vida2-0/product-detail-page/desktop/vida-2-0/v2-pro/pro-image-2.png',
    description: 'Premium electric scooter with advanced features and extended range.',
    category: 'vida',
    specs: {
      battery: '4.94 kWh',
      range: '120 km',
      power: '6.5 kW',
      weight: '125 kg',
    },
  },
];

// Sample testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    comment:
      'Excellent service! I bought my Hero Splendor from Dhanlaxmi Motor and had a great experience. The staff was very helpful.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Pune',
    rating: 5,
    comment:
      "I've been dreaming of owning a Harley Davidson for years, and Dhanlaxmi Motor made it possible. Their financing options are flexible and the staff is knowledgeable.",
  },
];

const BIKE_IMAGES = [
  {
    image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/homepage/banners/mavrick-feb-bike-web.png',
    alt: 'Hero Mavrick 440',
  },
  {
    image: 'https://www.vidaworld.com/content/dam/vida2-0/product-detail-page/desktop/vida-2-0/v2-pro/pro-image-4.png',
    alt: 'Vida V2 Pro',
  },
  {
    image: 'https://www.heromotocorp.com/en-in/blogs/a-list-of-the-top-features-and-specs-of-the-powerful-karizma-xmr/_jcr_content/root/container/container_1664460438/bootstraplayout_copy_1387943370/container-item0/image.coreimg.png/1730628853863/1-sep-sub.png',
    alt: 'Hero Karizma XMR',
  },
  {
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-h-d-x-440/story/x440-mid-thd-2.jpg?impolicy=myresize&rw=2560',
    alt: 'Harley Davidson X440',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'hero' | 'harley'>('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoized image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % BIKE_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'hero':
        return 'bg-blue-100 text-blue-800';
      case 'harley':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'hero':
        return 'Hero';
      case 'harley':
        return 'Harley-Davidson';
      default:
        return 'Vida';
    }
  };

  // Memoized featured bike cards
  const FeaturedBikeCard = useCallback(({ bike }: { bike: typeof FEATURED_BIKES[0] }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={bike.image ?? ''}
          alt={bike.name ?? 'Bike Image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-sm ${getCategoryStyles(bike.category ?? '')}`}>
            {getCategoryName(bike.category ?? '')}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{bike.name ?? 'Unknown Bike'}</h3>
        <p className="text-gray-600 mb-4">{bike.description ?? 'No description available.'}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">₹{typeof window === "undefined" ? bike.price : bike.price?.toLocaleString("en-IN") ?? 'N/A'}</span>
            {bike.subsidyPrice && (
              <div className="text-sm text-green-600">
                After subsidy: ₹{typeof window === "undefined" ? bike.subsidyPrice : bike.subsidyPrice.toLocaleString("en-IN")}
              </div>
            )}
          </div>
          <Link href={`/bikes/${bike.id ?? ''}`} className="btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  ), []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                  Your Premium Bike Dealer in Aurangabad
                </h1>
                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                  Explore our premium collection of Hero, Harley-Davidson, and Vida electric bikes. Find your perfect ride today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <Link href="/bikes" className="btn-primary w-full sm:w-auto text-center">
                    Explore Bikes
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-96 bg-gray-800 rounded-lg overflow-hidden">
                {/* eslint-disable security/detect-object-injection */}
                <Image
                  src={BIKE_IMAGES[currentImageIndex]?.image ?? ''}
                  alt={BIKE_IMAGES[currentImageIndex]?.alt ?? 'Default Alt Text'}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* eslint-enable security/detect-object-injection */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Featured Bikes</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Explore our premium collection of Hero, Harley-Davidson, and Vida electric bikes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {FEATURED_BIKES.map(bike => (
              <FeaturedBikeCard key={bike.id} bike={bike} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/bikes" className="btn-primary inline-flex items-center">
              View All Bikes
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              Discover why Dhanlaxmi Motor is the best choice for your bike needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Bike className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Bikes</h3>
              <p className="text-gray-600">
                We offer a wide range of premium bikes from Hero, Harley-Davidson, and Vida.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Our team of experts is here to help you find the perfect bike.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Locations</h3>
              <p className="text-gray-600">
                Visit our showroom in Aurangabad or any of our other locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Testimonials</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              What our customers say about us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
