import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Head from 'next/head';

interface StartFormData {
  email: string;
  propertyType: string;
  purpose: string;
  zipCode: string;
}

const Start: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StartFormData>();

  const onSubmit = (data: StartFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <Head>
        <title>Get Started - Better Clone</title>
        <meta name="description" content="Start your mortgage application" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Start your application
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Let's get you on the path to homeownership
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                {...register('propertyType', { required: 'Property type is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select property type</option>
                <option value="single-family">Single Family</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
              {errors.propertyType && (
                <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Start; 