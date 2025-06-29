import { MessageCircle } from "lucide-react";

const Support = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 pb-16 md:p-10 text-center max-w-6xl mx-auto mt-10 mb-24">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Still Have Questions?
      </h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base max-w-2xl mx-auto">
        Our expert team is here to help you with any academic challenges you're facing
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
        <a
          href="#"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default Support;
