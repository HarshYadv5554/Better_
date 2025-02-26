import { FC } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: FC = () => {
  return (
    <Disclosure as="nav" className="bg-white fixed w-full top-0 z-50 border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex justify-between h-[72px]">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <span className="text-[#000000] text-[22px] font-bold tracking-tighter">better</span>
                </Link>
                <div className="hidden md:ml-10 md:flex md:space-x-8">
                  <Link href="/mortgage-calculator" 
                    className="text-[15px] text-gray-900 hover:text-[#0062FF] transition-colors">
                    Mortgage Calculator
                  </Link>
                  <Link href="/about-us" 
                    className="text-[15px] text-gray-900 hover:text-[#0062FF] transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center">
                <Link href="/start" 
                  className="bg-[#0062FF] hover:bg-[#0053D9] text-white text-[15px] font-medium px-6 py-2 rounded-lg transition-colors">
                  Get Started
                </Link>
              </div>
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="p-2">
                  {open ? (
                    <XMarkIcon className="h-6 w-6 text-gray-700" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-gray-700" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3 bg-white">
              <Link href="/mortgage-calculator" 
                className="block text-[15px] text-gray-900">
                Mortgage Calculator
              </Link>
              <Link href="/about-us" 
                className="block text-[15px] text-gray-900">
                About Us
              </Link>
              <Link href="/start" 
                className="block text-[15px] text-[#0062FF] font-medium">
                Get Started
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header; 