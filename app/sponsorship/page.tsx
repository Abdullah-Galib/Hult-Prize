import Link from 'next/link';
import { sponsorshipPackages } from '../../data/sponsorship';

export const metadata = {
  title: 'Sponsorship',
  description: 'Partner with Hult Prize at Green University to drive social impact and youth innovation.',
};

export default function SponsorshipPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partner With Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Align your brand with the world's largest youth movement for social impact. 
          Gain unparalleled visibility among the brightest minds at Green University of Bangladesh.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {sponsorshipPackages.map((pkg) => (
          <div key={pkg.id} className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-[#E6007F] mb-2">{pkg.name}</h3>
            <p className="text-xl font-semibold text-gray-900 mb-6">{pkg.amount}</p>
            <ul className="space-y-3 mb-8">
              {pkg.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-[#FFDA00] mr-3">✔</span> {benefit}
                </li>
              ))}
            </ul>
            <Link 
              href="/sponsor" 
              className="block text-center w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-[#E6007F] transition"
            >
              Select Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}