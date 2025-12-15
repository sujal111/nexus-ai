'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send this data to your API
      console.log('Form submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">Thank you for contacting us!</h3>
        <p className="mt-2 text-sm text-gray-600">
          We've received your message and will get back to you as soon as possible.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Full name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Phone (optional)
        </label>
        <div className="mt-2">
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="How can we help you?"
            defaultValue={''}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex h-6 items-center">
          <input
            id="agree"
            type="checkbox"
            {...register('agree', {
              required: 'You must agree to be contacted',
            })}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3">
          <label htmlFor="agree" className="text-sm leading-6 text-gray-600">
            I agree to be contacted by Approval AI via call, email, and text. To opt-out, you can reply 'stop' at any time or
            click the unsubscribe link in the emails. Message and data rates may apply. Please read our{' '}
            <a href="/privacy" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </a>{' '}
            for more details.
          </label>
          {errors.agree && (
            <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
