'use client';

import { Footer } from 'flowbite-react';

export default function Component() {
  return (
    <Footer container className="mt-auto bg-gray-100">
      <div className="w-full max-w-full px-20 flex flex-col md:flex-row justify-between items-center py-4 ">
        <Footer.Copyright href="/" by="Vilya™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="/contect">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
}
