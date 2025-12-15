'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Why was Approval AI founded?',
    answer: 'Approval AI was founded to simplify the mortgage process and provide borrowers with direct access to true market rates, eliminating unnecessary intermediaries and hidden fees.'
  },
  {
    question: 'What states does Approval AI operate in?',
    answer: 'We are currently licensed to operate in all 50 states. Our platform is available to borrowers across the United States, with specific loan products varying by state regulations.'
  },
  {
    question: 'What types of lenders does Approval AI support?',
    answer: 'We work with a wide network of lenders including major banks, credit unions, and non-bank lenders to provide you with a comprehensive range of mortgage options.'
  },
  {
    question: 'What if I already have an offer from another lender?',
    answer: 'No problem! We encourage you to compare our offers with what you\'ve received elsewhere. Our platform makes it easy to see if you can get a better deal.'
  },
  {
    question: 'How does Approval AI make money?',
    answer: 'We charge lenders a small fee when we connect them with qualified borrowers. This means our service is completely free for you to use, with no hidden fees or markups on your loan.'
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Absolutely. We use bank-level encryption and never sell your data. Your information is only shared with lenders you choose to connect with.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12" id={`faq-${index}`} hidden={openIndex !== index}>
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
