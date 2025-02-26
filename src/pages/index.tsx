import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ChartBarIcon, CurrencyDollarIcon, StarIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Add this features array
const features = [
  {
    title: 'Lower rates and fees',
    description: 'See how we save you thousands in fees and help you get a better rate.',
    icon: ChartBarIcon,
  },
  {
    title: '$0 lender fees',
    description: 'No origination fees. No lender fees. No commission. Really.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Close on time',
    description: 'Get an on-time closing guarantee with our digital mortgage process.',
    icon: HomeIcon,
  },
];

const testimonials = [
  {
    quote: "Better made the process so easy. Everything was done online and the rates were lower than other lenders.",
    author: "Sarah M.",
    location: "First-time homebuyer"
  },
  {
    quote: "I saved thousands in fees and got a great rate. The digital process was smooth from start to finish.",
    author: "Michael R.",
    location: "Home purchase"
  },
  {
    quote: "The online platform made everything transparent. I knew exactly where I stood in the process.",
    author: "Jennifer L.",
    location: "Refinance"
  }
];

const stats = [
  { number: "$100B+", label: "In funded loans" },
  { number: "450k+", label: "Customers helped" },
  { number: "$2,000+", label: "Average savings" }
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better | A Leading Digital Mortgage Lender</title>
        <meta name="description" content="Better is a digital mortgage lender focused on making homeownership more accessible and affordable." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="pt-[72px] bg-[#F7F8FA]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 py-16 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[640px]"
              >
                <h1 className="text-[56px] leading-[1.1] font-bold text-gray-900 tracking-tight">
                  A better way to buy a home
                </h1>
                <p className="mt-6 text-[22px] leading-[1.5] text-gray-600">
                  Get pre-approved in as little as 3 minutes and close up to 10 days faster than the industry average.
                </p>
                <div className="mt-10">
                  <Link href="/start" 
                    className="inline-flex items-center bg-[#0062FF] hover:bg-[#0053D9] text-white text-[17px] font-medium px-8 py-4 rounded-lg transition-colors">
                    Get Started
                  </Link>
                </div>
              </motion.div>
              <div className="hidden lg:block">
                {/* Add hero image here */}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#F7F8FA] py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-[40px] font-bold text-[#0062FF]">{stat.number}</div>
                  <div className="text-[17px] text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold text-gray-900">Why choose Better</h2>
              <p className="mt-4 text-[22px] text-gray-600">We're making homeownership more accessible and affordable</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-[#F7F8FA] hover:bg-[#F0F2F5] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="h-12 w-12 rounded-full bg-[#E1E9FF] flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#0062FF]" />
                  </div>
                  <h3 className="mt-6 text-[22px] font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-[17px] leading-[1.6] text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#F7F8FA] py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold text-gray-900">How it works</h2>
              <p className="mt-4 text-[22px] text-gray-600">Get a mortgage in three simple steps</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "1",
                  title: "Get pre-approved",
                  description: "Complete our online application in as little as 3 minutes"
                },
                {
                  step: "2",
                  title: "Lock your rate",
                  description: "Shop for homes with confidence knowing your rate is locked"
                },
                {
                  step: "3",
                  title: "Close your loan",
                  description: "Close up to 10 days faster than the industry average"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-[#0062FF] text-[24px] font-bold mb-4">Step {item.step}</div>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-[17px] text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold text-gray-900">What our customers say</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#F7F8FA] p-8 rounded-2xl"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-[#0062FF]" />
                    ))}
                  </div>
                  <p className="text-[17px] text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-[15px] text-gray-600">{testimonial.location}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="bg-[#F7F8FA] py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "FDIC Insured",
                  description: "Your information is protected by bank-level security"
                },
                {
                  icon: StarIcon,
                  title: "Highly Rated",
                  description: "Rated 4.8/5 stars by thousands of happy customers"
                },
                {
                  icon: DocumentTextIcon,
                  title: "Licensed Nationwide",
                  description: "Licensed to operate in all 50 states"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <item.icon className="h-8 w-8 text-[#0062FF]" />
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-[15px] text-gray-600">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0062FF] text-white py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-[40px] font-bold">Ready to get started?</h2>
                <p className="text-[22px] text-white/90">
                  Take the first step toward buying your home.
                </p>
                <Link href="/start" 
                  className="inline-block bg-white text-[#0062FF] text-[17px] font-medium px-8 py-4 rounded-lg 
                  hover:bg-[#F7F8FA] transition-colors">
                  Get Pre-approved
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home; 