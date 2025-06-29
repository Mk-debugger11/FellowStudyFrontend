import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "The dissertation help was phenomenal. The research was thorough and the writing quality exceeded my expectations. Highly recommended!",
    name: "Rahul Kumar",
    university: "Mumbai University",
    initials: "RK",
    gradient: "from-green-400 to-blue-500",
  },
  {
    text: "Fellowstudy's project guidance helped me crack my final year project. Timely support and quality assurance were top notch!",
    name: "Anjali Verma",
    university: "Delhi Technological University",
    initials: "AV",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    text: "Great assignment help service. Reliable, original, and always on time!",
    name: "Karan Singh",
    university: "IIT Kanpur",
    initials: "KS",
    gradient: "from-yellow-400 to-orange-500",
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-black mb-2">What Our Students Say</h2>
      <p className="text-gray-500 mb-8">
        Real reviews from students who achieved academic success with our help
      </p>

      <div className="bg-white shadow-md border rounded-xl p-10 relative min-h-[272px]">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination dots */}
        <div className="flex justify-center mb-4 space-x-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stars */}
        <div className="flex justify-center mb-4 text-yellow-400">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5" />
            ))}
        </div>

        {/* Review Text */}
        <p className="italic text-lg text-gray-600 mb-6 transition-all duration-500 ease-in-out">
          “{reviews[index].text}”
        </p>

        {/* Reviewer Info */}
        <div className="flex items-center justify-center gap-4">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${reviews[index].gradient} flex items-center justify-center text-white font-bold text-lg`}
          >
            {reviews[index].initials}
          </div>
          <div className="text-left">
            <p className="text-black font-semibold">{reviews[index].name}</p>
            <p className="text-gray-500 text-sm">{reviews[index].university}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
