import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Tropical Resort"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-pink-900/30"></div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-white/90 mb-4 fade-in">About A1 Holiday</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-tight fade-in drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}}>
                Welcome to A1 Holiday Company
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto mb-10 leading-relaxed slide-up drop-shadow-lg" style={{fontWeight: 300}}>
                A spectacular gateway to unforgettable vacations. Get ready to experience premium holiday packages, luxurious 5-star accommodations, and exclusive time-sharing memberships.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <p className="text-sm uppercase tracking-wider text-teal-600 mb-4">Our Promise</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                  A1, a magical gateway to unforgettable holidays
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{fontWeight: 300}}>
                  We specialize in creating extraordinary holiday experiences for our valued customers. With expertise in the travel industry, we offer premium holiday packages, luxurious 5-star accommodations, and exclusive time-sharing memberships.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" style={{fontWeight: 300}}>
                  Whether you&apos;re planning a romantic getaway, family vacation, or an adventure of a lifetime, A1 Holiday Company is your trusted partner in making memories that last forever.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 slide-in-right">
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop"
                      alt="Luxury Beach Resort"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
                      alt="Premium Hotel Suite"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="lg:flex lg:items-start lg:gap-16">
              <div className="lg:w-5/12 mb-12 lg:mb-0 slide-in-left">
                <p className="text-sm uppercase tracking-wider text-teal-600 mb-4">Our Services</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                  Experience premium holiday packages
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{fontWeight: 300}}>
                  From luxurious 5-star hotels to complete travel packages, we offer comprehensive solutions for unforgettable vacations and exclusive time-sharing memberships.
                </p>
                <Link
                  href="/packages"
                  className="inline-block bg-teal-700 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-teal-800 transition-colors"
                >
                  Explore All Packages
                </Link>
              </div>
              
              <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 slide-in-right">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
                      alt="5-Star Hotels"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">5-Star Hotels</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Luxury accommodations with premium amenities
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop"
                      alt="Flight Packages"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">Flight Packages</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Complete travel packages tailored to you
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
                      alt="Round Trips"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">Round Trips</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      All-inclusive packages, no hidden costs
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop"
                      alt="TimeShare"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">TimeShare</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lifetime membership benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-teal-600 mb-4">Discover More</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                Featured Holiday Packages
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{fontWeight: 300}}>
                Explore our curated selection of premium packages and exclusive offers designed to make your vacation extraordinary.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Package Card 1 */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
                    alt="Luxury Resort Package"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded text-xs font-medium">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Multiple Locations
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    Luxury Resort Package
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Experience world-class luxury at premium 5-star resorts with all-inclusive amenities.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Hotels</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Premium</span>
                  </div>
                </div>
              </div>
              
              {/* Package Card 2 */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
                    alt="Flight + Hotel Combo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-medium">
                    Limited Offer
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    International
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    Flight + Hotel Combo
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Complete travel solution with round-trip flights and luxury accommodations included.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Flights</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Hotels</span>
                  </div>
                </div>
              </div>
              
              {/* Package Card 3 */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
                    alt="Complete Round Trip"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded text-xs font-medium">
                    Best Value
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Family Package
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    Complete Round Trip
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    All-inclusive family vacation with flights, hotels, meals, and guided tours included.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">All-Inclusive</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Family</span>
                  </div>
                </div>
              </div>
              
              {/* Package Card 4 */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
                    alt="TimeShare Membership"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded text-xs font-medium">
                    Exclusive
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Membership
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    TimeShare Membership
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Lifetime membership with annual vacation credits and exclusive benefits year after year.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lifetime</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">VIP</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/packages"
                className="inline-block border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-md text-base font-medium hover:bg-teal-700 hover:text-white transition-colors"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl slide-in-left">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop"
                  alt="Plan your trip to paradise"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="slide-in-right">
                <p className="text-sm uppercase tracking-wider text-teal-600 mb-4">Start Your Journey</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                  Plan your trip to paradise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{fontWeight: 300}}>
                  Contact us today to explore our exclusive packages and time-sharing memberships. Let us help you create unforgettable memories that will last a lifetime.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-teal-700 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-teal-800 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
