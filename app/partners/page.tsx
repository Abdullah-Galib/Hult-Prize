import { partnersData } from '../../data/partners';
import Link from 'next/link';

export const metadata = {
  title: 'Our Partners',
  description: 'Organizations and corporate partners driving impact with Hult Prize at GUB.',
};

export default function PartnersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We are proud to collaborate with organizations that share our vision for youth-led innovation.
        </p>
        <Link href="/sponsor" className="inline-block bg-[#E6007F] text-white px-6 py-3 rounded font-medium hover:bg-[#A30A7B] transition">
          Become a Partner
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {partnersData.map((partner) => (
          <div key={partner.id} className="border border-gray-100 p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 mb-4 rounded">
              [Logo: {partner.name}]
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">{partner.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{partner.partnershipType} • {partner.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}