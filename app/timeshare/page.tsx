import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'TimeShare Membership - A1 Holiday Company',
  description: 'Join our exclusive time-sharing membership program for lifetime holiday benefits with flexible vacation options every year.',
  keywords: 'TimeShare, vacation membership, holiday membership, lifetime membership, annual vacation',
};

const benefits = [
  {
    title: 'Lifetime Membership',
    description: 'One-time investment for lifetime holiday benefits',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Annual Vacation Credits',
    description: 'Fixed vacation credits every year for your holidays',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Destinations',
    description: 'Choose from multiple domestic and international locations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '5-Star Properties',
    description: 'Access to premium 5-star hotels and resorts',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Transferable Rights',
    description: 'Transfer your vacation credits to family members',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Priority Booking',
    description: 'Get priority access during peak seasons',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const membershipPlans = [
  {
    name: 'Silver Membership',
    validity: '10 Years',
    credits: '7 Nights Annually',
    features: [
      'Access to 4-star & 5-star properties',
      'Domestic destinations',
      'Standard season booking',
      'Transferable to immediate family',
      'Annual membership card',
    ],
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Gold Membership',
    validity: '20 Years',
    credits: '10 Nights Annually',
    features: [
      'Premium 5-star properties',
      'Domestic & select international destinations',
      'Peak season booking access',
      'Transferable to extended family',
      'Complimentary upgrades',
      'Priority customer support',
    ],
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    color: 'from-yellow-400 to-yellow-600',
    popular: true,
  },
  {
    name: 'Platinum Membership',
    validity: 'Lifetime',
    credits: '14 Nights Annually',
    features: [
      'Exclusive luxury 5-star resorts',
      'Global destinations',
      'Anytime booking - no blackout dates',
      'Fully transferable',
      'VIP concierge service',
      'Suite upgrades',
      'Airport lounge access',
    ],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function TimeSharePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop"
            alt="TimeShare Membership"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              TimeShare Membership
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow">
              Invest once, vacation for a lifetime! Join our exclusive time-sharing membership 
              and enjoy premium holidays every year with unmatched flexibility and value.
            </p>
          </div>
        </div>
      </section>

      {/* What is TimeShare */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                  What is TimeShare?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  TimeShare is a smart vacation ownership model where you make a one-time investment 
                  to secure annual holiday benefits for years to come. Unlike traditional vacations where 
                  you pay every time, TimeShare gives you the freedom to enjoy luxurious holidays 
                  year after year at a fraction of the cost.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With A1 Holiday Company&apos;s time-sharing membership, you get guaranteed vacation credits 
                  annually, access to premium properties, and the flexibility to choose when and where you travel.
                </p>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop"
                  alt="Luxury Resort Living"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-purple-100"
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Membership Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Membership Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all ${
                  plan.popular ? 'ring-4 ring-yellow-400 transform md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-yellow-400 text-center py-2 font-bold text-gray-800">
                    ⭐ MOST POPULAR ⭐
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${plan.color} opacity-75`}></div>
                  <div className="absolute inset-0 p-6 text-center flex flex-col justify-center text-white">
                    <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">{plan.name}</h3>
                    <p className="text-lg opacity-95 mb-1 drop-shadow">{plan.validity}</p>
                    <p className="text-xl font-semibold drop-shadow">{plan.credits}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Choose Your Membership</h3>
                  <p className="text-gray-600">
                    Select the membership plan that best suits your vacation needs and budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Registration</h3>
                  <p className="text-gray-600">
                    Fill out the membership form and complete the one-time investment payment.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Receive Your Credits</h3>
                  <p className="text-gray-600">
                    Get your annual vacation credits and membership card to start planning.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Book & Enjoy</h3>
                  <p className="text-gray-600">
                    Use your credits to book amazing holidays at premium properties worldwide!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Vacation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Start Your Lifetime of Holidays?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow leading-relaxed">
            Join thousands of satisfied members who are already enjoying their annual vacations. 
            Contact us today to learn more about membership pricing and availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Membership Details
            </Link>
            <Link
              href="/packages"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              View Holiday Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
