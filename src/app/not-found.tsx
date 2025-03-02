import Link from 'next/link';

import { _class } from '@/functions/class';

export default async function NotFound() {
  return (
    <div className={_class(
      "flex flex-col items-center justify-center",
      "p-4 text-center gap-4"
    )}>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p>Page not found</p>
      </div>
      <Link href="/" className="text-blue-400 hover:underline">
        Go back home
      </Link>
    </div>
  );
}