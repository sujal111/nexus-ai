'use client';

import { useState } from 'react';
import { CheckCircleIcon, ClockIcon, XCircleIcon, ArrowPathIcon, DocumentTextIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Mock data for the demo
const mockApprovals = [
  {
    id: 1,
    title: 'Mortgage Application - John D.',
    amount: '$450,000',
    status: 'pending',
    date: '2023-11-30',
    type: 'New Application',
  },
  {
    id: 2,
    title: 'Refinance - Sarah M.',
    amount: '$320,000',
    status: 'approved',
    date: '2023-11-28',
    type: 'Refinance',
  },
  {
    id: 3,
    title: 'Home Equity Loan - Robert J.',
    amount: '$150,000',
    status: 'rejected',
    date: '2023-11-25',
    type: 'Home Equity',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredApprovals = activeTab === 'all' 
    ? mockApprovals 
    : mockApprovals.filter(item => item.status === activeTab);

  const stats = [
    { name: 'Total Applications', value: '24', icon: DocumentTextIcon },
    { name: 'Pending Approval', value: '8', icon: ClockIcon },
    { name: 'Approved', value: '14', icon: CheckCircleIcon },
    { name: 'Rejected', value: '2', icon: XCircleIcon },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Approval Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">
            Review and manage all mortgage applications in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            New Application
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">Overview</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-3">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { name: 'All', value: 'all', count: mockApprovals.length },
              { name: 'Pending', value: 'pending', count: mockApprovals.filter(a => a.status === 'pending').length },
              { name: 'Approved', value: 'approved', count: mockApprovals.filter(a => a.status === 'approved').length },
              { name: 'Rejected', value: 'rejected', count: mockApprovals.filter(a => a.status === 'rejected').length },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.value)}
                className={`${activeTab === tab.value
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
              >
                {tab.name}
                {tab.count > 0 && (
                  <span
                    className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${activeTab === tab.value ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900'}`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Applications list */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Application
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredApprovals.map((approval) => (
                    <tr key={approval.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {approval.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{approval.type}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{approval.amount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(approval.date).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            approval.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : approval.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {approval.status.charAt(0).toUpperCase() + approval.status.slice(1)}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          View<span className="sr-only">, {approval.title}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
