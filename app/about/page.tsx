import Image from 'next/image';
import { Award, Users, ThumbsUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Dhanlaxmi Hero</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Your trusted dealer for Hero and Harley Davidson motorcycles with three premium showroom locations. Learn about our journey, our values, and what makes us different.
          </p>
        </div>

        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-[var(--primary)] font-semibold tracking-wide uppercase">Our Story</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A Legacy of Excellence</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Since 1995, we&apos;ve been committed to providing the best two-wheeler experience in the region.</p>
            </div>
            <div className="mt-16">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/rVKRTtM.png?updatedAt=1745651378171"
                  alt="Dhanlaxmi Motor Main Showroom"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">To provide premium motorcycles with exceptional service, creating memorable experiences for every customer.</p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Top-quality Hero and Harley Davidson bikes</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Expert guidance for the perfect ride</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Exceptional after-sales service</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Community of motorcycle enthusiasts</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">To be the most trusted motorcycle dealership, known for integrity, expertise, and customer satisfaction.</p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Expanding to new communities</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Raising service standards</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Adopting latest technologies</li>
              <li className="flex items-start"><CheckCircle className="text-[var(--primary)] mr-3" /> Promoting safe riding</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Dhanlaxmi Motor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white text-center p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Authorized Dealer</h3>
              <p className="text-sm text-gray-600">Authorized Hero & Harley Davidson dealership with warranty and support.</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Passionate and knowledgeable professionals at your service.</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Customer Satisfaction</h3>
              <p className="text-sm text-gray-600">Thousands of satisfied customers trust Dhanlaxmi Motor.</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Best Dealer Award',
                desc: 'Awarded by Hero MotoCorp for 5 consecutive years (2018–2022)',
              },
              {
                title: 'Customer Service Excellence',
                desc: 'Recognized by the Motorcycle Dealers Association',
              },
              {
                title: 'Top Sales Performance',
                desc: 'Ranked #1 in regional sales for Harley Davidson (2021–2023)',
              },
              {
                title: '25 Years of Excellence',
                desc: 'Celebrating 25+ years of trusted service',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-base">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}