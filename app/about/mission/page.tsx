export const metadata = {
  title: 'Mission & Vision',
  description: 'The core mission of Hult Prize at Green University of Bangladesh.',
};

export default function MissionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Mission & Vision</h1>
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-[#E6007F] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To inspire, educate, and equip Green University students to build sustainable, impact-driven startup enterprises that solve the world's most pressing challenges.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#FF9900] mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To establish Green University of Bangladesh as a leading hub for student innovation and social entrepreneurship in the region, bridging the gap between academic theory and real-world corporate partnerships.
          </p>
        </section>
      </div>
    </div>
  );
}