import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Holiday Packages - A1 Holiday Company',
  description: 'Explore our premium holiday packages including 5-star hotels, flights, cab services, and all-inclusive round trip packages.',
  keywords: 'holiday packages, 5-star hotels, flight packages, round trip packages, luxury vacation',
};

const packages = [
  {
    id: 1,
    title: '5-Star Luxury Hotel Package',
    description: 'Indulge in world-class luxury at premium 5-star hotels with exceptional amenities.',
    features: [
      'Deluxe room accommodation',
      'Complimentary breakfast',
      'Access to spa & wellness center',
      'Swimming pool & gym facilities',
      '24/7 room service',
      'Premium locations worldwide',
    ],
    iconImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Flight + Hotel Package',
    description: 'Complete travel solution with flights and accommodation bundled together.',
    features: [
      'Round-trip flight tickets',
      'Hotel accommodation',
      'Airport transfers included',
      'Flexible travel dates',
      'Travel insurance options',
      'Best price guarantee',
    ],
    iconImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: 'Complete Round Trip Package',
    description: 'All-inclusive package with flights, hotels, transfers, and local tours.',
    features: [
      'Round-trip airfare',
      '5-star hotel stay',
      'Airport & local transfers',
      'Guided city tours',
      'Meals included',
      'No hidden costs',
    ],
    iconImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Cab & Transfer Services',
    description: 'Reliable and comfortable cab services for all your travel needs.',
    features: [
      'Airport pick-up & drop',
      'Local sightseeing',
      'Professional drivers',
      'Well-maintained vehicles',
      'Flexible booking options',
      'Competitive pricing',
    ],
    iconImage: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1200&auto=format&fit=crop',
    color: 'from-orange-500 to-orange-700',
  },
];

export default function PackagesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop"
            alt="Holiday Packages"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Our Holiday Packages
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow">
              Choose from our carefully curated packages designed to give you the perfect vacation experience.
              From luxury hotels to complete round-trip solutions, we have it all.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Our Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect holiday package tailored to your needs. From luxury stays to complete travel solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-80`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                        <Image
                          src={pkg.iconImage}
                          alt={`${pkg.title} icon`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg flex-1">{pkg.title}</h2>
                    </div>
                    <p className="text-white/95 drop-shadow text-lg">{pkg.description}</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="mr-2">✨</span> Package Includes
                  </h3>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start group/item">
                        <svg
                          className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Interested in Our Packages?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow leading-relaxed">
            Get in touch with us to learn more about our packages, pricing, and special offers. 
            Our team is ready to help you plan your perfect holiday.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              Send Inquiry
            </Link>
            <Link
              href="/timeshare"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              View TimeShare
            </Link>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Why Book With Us?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Experience the difference with A1 Holiday Company. We're committed to making your vacation dreams come true.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow border border-blue-200">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=200&auto=format&fit=crop"
                  alt="Best Price"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">Competitive pricing with no hidden charges. We match or beat any genuine quote.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow border border-green-200">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=200&auto=format&fit=crop"
                  alt="24/7 Support"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock assistance for your peace of mind. We're always here when you need us.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow border border-purple-200">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop"
                  alt="Premium Quality"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Only the best hotels and services for our clients. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
