import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '../../../../database/users';

export default async function UserProfilePage() {
  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. Query the current user with the sessionToken
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));

  // 3. If user doesn't exist, redirect to login page
  if (!user) {
    redirect('/login');
  }

  return (
    <main className="flex-grow  w-full max-w-full px-20 py-12">
      <h1 className="mb-4 text-4xl text-center">My Orders</h1>
      <section className="py-8 antialiased  md:py-16     text-xl  font-normal   sm:px-16 xl:px-48 dark:text-gray-400">
        <div className="mx-auto text-center max-w-screen-xl px-4 2xl:px-0">
          <p>
            <i>This page is currently in progress. Please check back later.</i>
          </p>
        </div>
      </section>
    </main>
  );
}
