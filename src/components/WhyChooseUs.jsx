import {
    CheckCircle,
    Clock,
    ShieldCheck,
    Users,
  } from "lucide-react";
  
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "All assignments and projects are thoroughly reviewed by our expert team",
      bgColor: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We ensure all deliverables are completed within the agreed timeframe",
      bgColor: "bg-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "100% Original Work",
      description:
        "Plagiarism-free content with proper citations and references",
      bgColor: "bg-violet-500",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist with your queries",
      bgColor: "bg-orange-500",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-lg">
            We're committed to providing exceptional educational support that helps you achieve
            academic excellence
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start">
          {features.map(({ icon: Icon, title, description, bgColor }, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200 text-center shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${bgColor}`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  