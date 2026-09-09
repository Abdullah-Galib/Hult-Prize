export const metadata = {
  title: 'Media Gallery',
  description: 'Photo highlights from Hult Prize events at GUB.',
};

export default function GalleryPage() {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Media Gallery</h1>
      <p className="text-gray-600 mb-12">Capturing the energy and innovation of our student changemakers.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {placeholders.map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100 rounded-md flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 text-sm">[Optimized Image {i + 1}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}