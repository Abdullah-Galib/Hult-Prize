import { impactData } from '../../data/impact';

export const metadata = {
  title: 'Our Impact',
  description: 'Measurable impact and metrics created by Hult Prize at GUB.',
};

export default function ImpactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We measure our success by the tangible innovation and engagement we foster within the Green University community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {impactData.map((metric) => (
          <div key={metric.id} className="p-8 border border-gray-100 rounded-lg text-center shadow-sm">
            <span className="block text-5xl font-bold text-[#E6007F] mb-4">{metric.value}</span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Source: {metric.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}