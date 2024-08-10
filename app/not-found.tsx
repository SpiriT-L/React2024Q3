import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <main>
      <div className="container not-found">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Image src="/404.png" alt="404 Not Found" width={310} height={310} />
        <Link href="/">Return Home</Link>
      </div>
    </main>
  );
};

export default Page;
