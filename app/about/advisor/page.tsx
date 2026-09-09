export const metadata = {
  title: "Advisor's Message",
  description: 'A message from the Faculty Advisor of Hult Prize at Green University.',
};

export default function AdvisorPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Advisor's Message</h1>
      
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-48 h-48 bg-gray-200 rounded-md shrink-0 flex items-center justify-center text-gray-400">
          [Portrait Placeholder]
        </div>
        
        <div>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "[Placeholder for the final approved English copy of the Advisor's message. 
            This statement should encapsulate the university's commitment to social innovation 
            and student empowerment through the Hult Prize framework.]"
          </blockquote>
          
          <div>
            <h3 className="font-bold text-gray-900 text-lg">[Advisor Name Placeholder]</h3>
            <p className="text-[#E6007F] font-medium">[Official Designation Placeholder]</p>
            <p className="text-gray-500 text-sm">Green University of Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}