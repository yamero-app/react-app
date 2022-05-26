import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // REDIRECTS TO /feed IF LOGGED IN
  useEffect(() => {
    if (session) {
      router.push('/feed');
    }
  }, [session, router]);

  return (
    <section className="py-12 w-full flex flex-col items-center">
      <div className="my-9">
        <div className="text-6xl font-bold">
          <h1 className="mb-2">Do you&apos;ve Problems?</h1>
          <h1>We have solutions!</h1>
        </div>
        <div className="mt-8 font-semibold text-white dark:text-gray-300 text-xl">
          <p>Yamero is exactly what you need right now.</p>
          <p>It’s simple, safe and anonymous.</p>
          <p className="mt-4">
            You can ask anything and it will be answered (privately).
          </p>
        </div>
        <div className="mt-20 text-xl font-bold italic relative">
          <p>Ask. Answer. Stay Anonymous.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
