import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CalculatorForm {
  homePrice: string;
  downPayment: string;
  loanTerm: string;
  interestRate: string;
  propertyTax: string;
  insurance: string;
}

const MortgageCalculator: NextPage = () => {
  const { register, handleSubmit } = useForm<CalculatorForm>();
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = (data: CalculatorForm) => {
    const principal = parseFloat(data.homePrice) - parseFloat(data.downPayment);
    const monthlyRate = parseFloat(data.interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(data.loanTerm) * 12;

    const monthlyMortgage =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalMonthlyPayment =
      monthlyMortgage +
      parseFloat(data.propertyTax) / 12 +
      parseFloat(data.insurance) / 12;

    setMonthlyPayment(totalMonthlyPayment);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Mortgage Calculator</h1>
      
      <form onSubmit={handleSubmit(calculateMortgage)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Home Price
          </label>
          <input
            type="number"
            {...register('homePrice')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Add similar input fields for other form elements */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Calculate
        </button>
      </form>

      {monthlyPayment && (
        <div className="mt-8 p-4 bg-blue-50 rounded-md">
          <h2 className="text-xl font-semibold">
            Estimated Monthly Payment: ${monthlyPayment.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator; 