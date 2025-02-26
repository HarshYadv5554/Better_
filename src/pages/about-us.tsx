import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Better Clone</title>
        <meta name="description" content="Learn more about Better Clone and our mission" />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About Better
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-500">
              We're making homeownership simpler, faster, and more accessible for all Americans.
            </p>
          </motion.div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs; 