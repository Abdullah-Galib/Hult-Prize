export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the organizing team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Whether you are a student looking to participate, a potential mentor, or media personnel, we would love to hear from you.
          </p>
          
          <div className="space-y-4 text-gray-600">
            <p><strong className="text-gray-900">Email:</strong> [Official Email Placeholder]</p>
            <p><strong className="text-gray-900">Phone:</strong> [Phone Number Placeholder]</p>
            <p><strong className="text-gray-900">Address:</strong><br/>
              Green University of Bangladesh<br/>
              [Address Line 1]<br/>
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <form className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" required className="w-full border-gray-300 rounded p-2 border focus:ring-[#E6007F]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required className="w-full border-gray-300 rounded p-2 border focus:ring-[#E6007F]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea required rows={5} className="w-full border-gray-300 rounded p-2 border focus:ring-[#E6007F]"></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded font-bold hover:bg-[#E6007F] transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}