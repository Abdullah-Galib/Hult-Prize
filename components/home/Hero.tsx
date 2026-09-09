import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <span className="text-[#E6007F] font-semibold tracking-wider text-sm uppercase">
        HULT PRIZE AT GREEN UNIVERSITY
      </span>
      <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 text-gray-900 leading-tight">
        Empowering Student Changemakers
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Positioning Hult Prize at Green University of Bangladesh as a credible, modern, high-impact student innovation movement.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          href="/sponsor" 
          className="bg-[#E6007F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#A30A7B] transition shadow-sm"
        >
          Become a Sponsor
        </Link>
        <Link 
          href="/impact" 
          className="bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Explore Our Impact
        </Link>
      </div>
    </section>
  );
}