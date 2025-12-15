'use client';

import { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function SavingsCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [savings, setSavings] = useState(144000);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate savings based on loan amount (simplified for demo)
  useEffect(() => {
    const calculateSavings = () => {
      // Simple calculation: ~0.3% of loan amount as savings per year
      // For a 30-year loan, this would be ~9% of the loan amount
      const calculatedSavings = Math.round(loanAmount * 0.3 * 3.33);
      setSavings(calculatedSavings);
    };

    calculateSavings();
  }, [loanAmount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-indigo-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is why you shop around
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Assuming a 30-year fixed home loan at current market rates
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Loan Amount Slider */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="loan-amount" className="block text-sm font-medium leading-6 text-gray-900">
                    Loan Amount
                  </label>
                  <span className="text-sm text-gray-500">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    id="loan-amount"
                    min="100000"
                    max="2000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100K</span>
                    <span>$2M+</span>
                  </div>
                </div>
              </div>

              {/* Interest Rate Slider (Visual only for this demo) */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Interest Rate
                    <span className="ml-1 text-gray-400">(estimated)</span>
                  </label>
                  <span className="text-sm text-gray-500">6.25%</span>
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.125"
                    value="6.25"
                    disabled
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-not-allowed"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2%</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Display */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500 mb-1">Lifetime Savings?</div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {isLoading ? (
                    <div className="h-12 flex items-center justify-center">
                      <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
                    </div>
                  ) : (
                    <span className="animate-pulse-slow">{formatCurrency(savings)}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Potential savings over the life of your loan by comparing rates
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setIsLoading(!isLoading)}
                >
                  {isLoading ? 'Calculating...' : 'Calculate Savings'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-sm text-gray-500">
              <InformationCircleIcon className="h-4 w-4 mr-1" />
              <span>These are estimated savings. Actual savings may vary based on credit score, loan type, and other factors.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
