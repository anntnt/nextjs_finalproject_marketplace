export const metadata = {
  title: 'Contact',
  description: 'Contact',
};
export default function Page() {
  return (
    <main className="bg-gray-50  antialiased dark:bg-gray-900 flex-grow  w-full max-w-full px-5 xl:px-48 sm:px-20 py-12">
      <h1 className="mb-4 text-4xl text-center">About </h1>
      <section className="py-8 antialiased  md:py-16     text-xl  font-normal   sm:px-16 xl:px-48 dark:text-gray-400">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <p>
            Welcome to eStores, a dynamic online marketplace where buyers and
            sellers connect to exchange a wide variety of products. We aim to
            provide an easy-to-use platform user-friendly interfaces.
          </p>
          <p className="py-8   text-red-600   ">
            <i>
              Note: This website is a project created solely for study purposes.
              It is not an actual marketplace.
            </i>
          </p>
          <p className=" ">
            Images are sourced from Pexels and Pixabay, platforms offering free
            stock photos.{' '}
          </p>
          <p>
            {' '}
            The text on this page was generated by AI, specifically ChatGPT from
            OpenAI.
          </p>
        </div>
      </section>
    </main>
  );
}
