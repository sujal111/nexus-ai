import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, ArrowPathIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, BellSlashIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SavingsCalculator from './savings-calculator';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                BACKED BY Y COMBINATOR{' '}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Mortgage You Deserve.
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We've automated the entire process to eliminate intermediaries and bring you marginless loans.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/get-started"
                className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Easy Process',
                description: 'One Form. All Lenders.',
                icon: '📝',
              },
              {
                name: 'Big Savings',
                description: 'True Market Rates',
                icon: '💰',
              },
              {
                name: 'Zero Spam',
                description: 'Peace of Mind',
                icon: '🔒',
              },
            ].map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-3xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link
              href="/find-loan"
              className="flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Find your best loan <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three simple steps. One powerful AI assistant.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'STEP 1',
                  description: 'Fill One Form',
                  details: 'Gather your information and fill just one form. Let AI handle the rest.',
                  icon: '1',
                },
                {
                  name: 'STEP 2',
                  description: 'Get True Market Rates',
                  details: 'Our platform brings you true market rates, eliminating intermediary margins.',
                  icon: '2',
                },
                {
                  name: 'STEP 3',
                  description: 'Pick The Best Deal',
                  details: 'Review personalized offers and choose the one that fits you best.',
                  icon: '3',
                },
              ].map((step) => (
                <div key={step.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                      {step.icon}
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto text-xl font-semibold">{step.description}</p>
                    <p className="mt-2">{step.details}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      {/* AI Assistant Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Personal Home Loan Assistant</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ask your assistant anything about home loans or Approval AI
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Talk to Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Calculator Section */}
      <SavingsCalculator />

      {/* Product Features */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Better Way to Get a Mortgage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're reimagining the mortgage experience from the ground up.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Direct Access To True Market Rates',
                  description: 'Our automated platform eliminates intermediaries and connects you directly to true market rates. No markups, no hidden margins—just the rates you deserve.',
                  icon: ArrowPathIcon,
                  cta: 'Check Rates',
                  ctaHref: '#rates',
                },
                {
                  name: 'One Form. All Lenders.',
                  description: 'No duplicate paperwork. No portal-hopping. Fill out just one form and use our platform to shop it around to banks, credit unions, and other lenders like it\'s Black Friday.',
                  icon: ShieldCheckIcon,
                  cta: 'Apply Now',
                  ctaHref: '/get-started',
                },
                {
                  name: 'Smart Help, Human Touch',
                  description: 'Ask your AI assistant for instant answers, 24/7. And when things get more complex, a real human expert is just a message away.',
                  icon: ChatBubbleLeftRightIcon,
                  cta: 'Play Demo',
                  ctaHref: '#demo',
                },
                {
                  name: 'Zero Spam. Promise.',
                  description: 'We hate spam too. We won\'t sell your info, and we\'ll help you avoid cold calls, spammy emails, and "just checking in" texts from lenders.',
                  icon: BellSlashIcon,
                  cta: 'Get the Best Deal',
                  ctaHref: '/get-started',
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.ctaHref} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {feature.cta} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Protect Your Data
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              It's safe, private, and under your control.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                {
                  name: 'Bank Level Encryption',
                  description: 'Same encryption as your bank (AES-256, TLS 1.2+) to keep your data secure.',
                },
                {
                  name: 'We Don\'t Sell Your Data',
                  description: 'Your data is never sold. Share your data only with lenders you choose.',
                },
                {
                  name: 'Private By Default',
                  description: 'We don\'t use your personal information to train or improve the AI assistant.',
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <CheckCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <div className="bg-gray-50 py-24 sm:py-32" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get hassle-free loans
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We'd love to hear from you.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="text-gray-700">1239 Broadway Floor 9</p>
                      <p className="text-gray-700">New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm ET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="text-gray-700">hello@approvalai.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-sm font-semibold text-gray-500">Follow us</h3>
                  <div className="mt-4 flex space-x-6">
                    {[{
                      name: 'Twitter',
                      href: 'https://twitter.com',
                      icon: (props: any) => (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      ),
                    }, {
                      name: 'LinkedIn',
                      href: 'https://linkedin.com',
                      icon: (props: any) => (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ),
                    }, {
                      name: 'Facebook',
                      href: 'https://facebook.com',
                      icon: (props: any) => (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      ),
                    }].map((item) => (
                      <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Disclaimer */}
      <div className="bg-gray-900 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs leading-5 text-gray-400">
            LEGAL DISCLAIMER: Approval AI Corporation (NMLS #2751459) is a licensed mortgage broker operating exclusively in the state of Texas. 
            Licensed by the Texas Department of Savings and Mortgage Lending. Mortgage Loan Originator: Helly Shah (NMLS #2695701). 
            Services are available only to residents of Texas. For more information about our company and loan originators, 
            please visit NMLS Consumer Access at{' '}
            <a href="https://www.nmlsconsumeraccess.org" className="text-indigo-400 hover:text-indigo-300">
              www.nmlsconsumeraccess.org
            </a>. All information provided to you by Approval AI Corporation is for informational purposes only and should not be 
            interpreted as legal, financial, or mortgage advice. You are solely responsible for reviewing, completing, and 
            submitting any application materials and ensuring the accuracy, veracity, completeness, and authenticity of any 
            such documents and information. Use of our platform is at your own risk. This disclaimer may be updated without notice.
          </p>
          <p className="mt-4 text-center text-xs font-medium text-gray-300">
            EQUAL HOUSING OPPORTUNITY
          </p>
        </div>
      </div>
    </div>
  );
}
