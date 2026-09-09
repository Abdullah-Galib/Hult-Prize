import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h2 className="text-6xl font-bold text-[#E6007F] mb-4">404</h2>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="bg-gray-900 text-white px-6 py-3 rounded font-medium hover:bg-[#E6007F] transition">
        Return to Homepage
      </Link>
    </div>
  );
}