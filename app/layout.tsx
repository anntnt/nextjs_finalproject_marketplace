import './globals.css';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCartSum } from '../database/cartProducts';
import { getUser } from '../database/users';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | eStores',
    template: '%s | eStores',
  },
  description: 'eStores Marketplace',
};

type Props = {
  children: ReactNode;
};
export default async function RootLayout({ children }: Props) {
  // Display the logged in user's username in the navigation bar and hide the login and register links depending on whether the user is logged in or not
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));
  let cartSum = '0';
  const cartSumResult =
    sessionTokenCookie && (await getCartSum(sessionTokenCookie.value));
  if (cartSumResult && cartSumResult.totalamount) {
    cartSum = cartSumResult.totalamount;
  }

  // 3. Make decision whether to show the login and register links or not
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-gray-50  antialiased dark:bg-gray-900">
          <Header user={user} cartSum={cartSum} />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
