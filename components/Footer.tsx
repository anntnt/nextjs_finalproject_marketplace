'use client';

import { Footer } from 'flowbite-react';

export default function Component() {
  return (
    <Footer container className="mt-auto bg-gray-100">
      <div className="w-full max-w-full flex flex-col md:flex-row justify-between items-center py-4 px-4 sm:px-10 xl:px-6 2xl:px-20 ">
        <Footer.Copyright
          href="/"
          by="eStores™"
          year={new Date().getFullYear()}
        />
        <Footer.LinkGroup>
          <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
          <Footer.Link href="/terms-of-service">Terms of Service</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
}
