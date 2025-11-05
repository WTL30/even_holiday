'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  contact: string;
  city: string;
  timeshare: string;
  purpose: 'rent' | 'sell' | 'both';
  message?: string;
};

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Your inquiry has been submitted successfully! We will contact you soon.'
        });
        reset();
      } else {
        throw new Error(result.message || 'Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to submit inquiry. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-light text-gray-900 mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
        Timeshare Inquiry Form
      </h2>
      
      {submitStatus && (
        <div className={`p-4 mb-6 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
          {submitStatus.success && (
            <p className="mt-2 text-sm">Check your email for a confirmation (or check the console for the test email preview).</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number *
            </label>
            <input
              id="contact"
              type="tel"
              {...register('contact', {
                required: 'Contact number is required',
                pattern: {
                  value: /^[0-9\-+()\s]+$/,
                  message: 'Please enter a valid phone number',
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.contact ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 (123) 456-7890"
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Which city are you from? *
            </label>
            <input
              id="city"
              type="text"
              {...register('city', { required: 'City is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your city"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="timeshare" className="block text-sm font-medium text-gray-700 mb-1">
            Which timeshare are you interested in? *
          </label>
          <input
            id="timeshare"
            type="text"
            {...register('timeshare', { required: 'Please enter the timeshare name' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
              errors.timeshare ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Beach Resort, Mountain Lodge, etc."
          />
          {errors.timeshare && (
            <p className="mt-1 text-sm text-red-600">{errors.timeshare.message}</p>
          )}
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">
            I want to: *
          </span>
          <div className="space-y-2">
            {[
              { id: 'rent', label: 'Rent a timeshare' },
              { id: 'sell', label: 'Sell my timeshare' },
              { id: 'both', label: 'Both rent and sell' },
            ].map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.id}
                  type="radio"
                  value={option.id}
                  {...register('purpose', { required: 'Please select an option' })}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                />
                <label htmlFor={option.id} className="ml-2 block text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
            {errors.purpose && (
              <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Any additional details or questions you have..."
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          * Required fields. We respect your privacy and will not share your information with third parties.
        </p>
      </form>
    </div>
  );
}
