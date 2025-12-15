'use client';

import { useParams } from 'next/navigation';
import { CheckCircleIcon, XCircleIcon, DocumentTextIcon, UserIcon, HomeIcon, CurrencyDollarIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

// Mock data for the application details
const mockApplication = {
  id: '1',
  title: 'Mortgage Application - John D.',
  amount: 450000,
  status: 'pending',
  date: '2023-11-30',
  type: 'New Purchase',
  propertyValue: 550000,
  loanTerm: 30,
  interestRate: 4.25,
  monthlyPayment: 2213.22,
  applicant: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    income: 120000,
    creditScore: 780,
    employment: 'Senior Developer at Tech Corp',
  },
  property: {
    address: '123 Main St, San Francisco, CA 94105',
    type: 'Single Family Home',
    yearBuilt: 2015,
    size: '2,400 sq ft',
  },
  documents: [
    { name: 'Application Form', status: 'complete' },
    { name: 'Income Verification', status: 'complete' },
    { name: 'Bank Statements', status: 'complete' },
    { name: 'Property Appraisal', status: 'pending' },
  ],
  timeline: [
    { date: '2023-11-25', event: 'Application Submitted', status: 'complete' },
    { date: '2023-11-26', event: 'Document Review', status: 'complete' },
    { date: '2023-11-28', event: 'Credit Check', status: 'complete' },
    { date: '2023-11-30', event: 'Property Appraisal', status: 'in-progress' },
    { date: '2023-12-02', event: 'Final Approval', status: 'pending' },
  ],
};

export default function ApprovalDetailPage() {
  const params = useParams();
  const application = mockApplication; // In a real app, you would fetch this based on the ID

  // Calculate loan details
  const loanDetails = [
    { name: 'Loan Amount', value: `$${application.amount.toLocaleString()}`, icon: CurrencyDollarIcon },
    { name: 'Loan Term', value: `${application.loanTerm} years`, icon: CalendarIcon },
    { name: 'Interest Rate', value: `${application.interestRate}%`, icon: '📈' },
    { name: 'Monthly Payment', value: `$${application.monthlyPayment.toFixed(2)}`, icon: '💳' },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {application.title}
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <DocumentTextIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {application.type}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Applied on {new Date(application.date).toLocaleDateString()}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <HomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {application.property.address}
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ClockIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            Save for Later
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <DocumentTextIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            View Full Application
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Loan Details */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Details</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {loanDetails.map((detail) => (
                  <div key={detail.name} className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">{detail.name}</dt>
                    <dd className="mt-1 text-sm text-gray-900 flex items-center">
                      {typeof detail.icon === 'string' ? (
                        <span className="mr-2 text-lg">{detail.icon}</span>
                      ) : (
                        <detail.icon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      )}
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Applicant Information */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.applicant.name}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.applicant.email}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.applicant.phone}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Annual Income</dt>
                  <dd className="mt-1 text-sm text-gray-900">${application.applicant.income.toLocaleString()}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Credit Score</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.applicant.creditScore} (Excellent)</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Employment</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.applicant.employment}</dd>
                </div>
              </div>
            </div>
          </div>

          {/* Property Information */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Property Information</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.property.address}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Property Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.property.type}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Year Built</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.property.yearBuilt}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Size</dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.property.size}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Estimated Value</dt>
                  <dd className="mt-1 text-sm text-gray-900">${application.propertyValue.toLocaleString()}</dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Application Status</h3>
              <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                application.status === 'approved' 
                  ? 'bg-green-100 text-green-800' 
                  : application.status === 'rejected' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
              }`}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="flow-root">
                <ul className="-mb-8">
                  {application.timeline.map((event, eventIdx) => (
                    <li key={eventIdx}>
                      <div className="relative pb-8">
                        {eventIdx !== application.timeline.length - 1 ? (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span
                              className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                event.status === 'complete'
                                  ? 'bg-green-500'
                                  : event.status === 'in-progress'
                                  ? 'bg-yellow-400'
                                  : 'bg-gray-300'
                              }`}
                            >
                              {event.status === 'complete' ? (
                                <CheckCircleIcon className="h-5 w-5 text-white" aria-hidden="true" />
                              ) : event.status === 'in-progress' ? (
                                <ClockIcon className="h-5 w-5 text-white" aria-hidden="true" />
                              ) : (
                                <div className="h-2 w-2 bg-white rounded-full" />
                              )}
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-gray-500">
                                {event.event}{' '}
                              </p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                              <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Required Documents</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <ul className="space-y-3">
                {application.documents.map((doc, docIdx) => (
                  <li key={docIdx} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.status === 'complete' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doc.status === 'complete' ? 'Received' : 'Pending'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approval Actions */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Decision</h3>
            </div>
            <div className="px-4 py-5 sm:p-6 space-y-4">
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">Review all information before making a decision.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full sm:w-auto"
                >
                  <CheckCircleIcon className="-ml-1 mr-2 h-5 w-5" />
                  Approve
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full sm:w-auto"
                >
                  <XCircleIcon className="-ml-1 mr-2 h-5 w-5" />
                  Reject
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full sm:w-auto"
                >
                  <ClockIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                  Request Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
