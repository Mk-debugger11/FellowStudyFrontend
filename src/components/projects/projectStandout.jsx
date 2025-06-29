const ProjectStandout = () => {
    const features = [
      {
        title: "Expert-Curated Content",
        description:
          "All projects are researched and written by subject matter experts with relevant academic qualifications.",
        color: "from-blue-400 to-blue-600",
        icon: "🛡️",
      },
      {
        title: "Plagiarism-Checked",
        description:
          "Every project report is thoroughly checked for originality using advanced plagiarism detection tools.",
        color: "from-green-400 to-green-600",
        icon: "✅",
      },
      {
        title: "Custom-Written for Indian Universities",
        description:
          "Projects are tailored to meet the specific requirements and standards of Indian educational institutions.",
        color: "from-purple-400 to-purple-600",
        icon: "👥",
      },
      {
        title: "MS Word & PDF Formats",
        description:
          "Receive your project in editable Word format along with a professional PDF version.",
        color: "from-orange-400 to-orange-600",
        icon: "📄",
      },
      {
        title: "Fast Delivery with Quality Assurance",
        description:
          "Quick turnaround time without compromising on quality. Multiple quality checks ensure excellence.",
        color: "from-teal-400 to-teal-600",
        icon: "⚡",
      },
      {
        title: "Citation & Referencing Standards",
        description:
          "Proper academic citations and references following international standards (APA, MLA, Harvard).",
        color: "from-pink-400 to-pink-600",
        icon: "❤️",
      },
    ];
  
    return (
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Makes Our Projects Stand Out?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We take pride in delivering high-quality, original project reports that meet
            the highest academic standards. Here's what sets our projects apart from the rest.
          </p>
  
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="hover:-translate-y-[4px] transition-transform duration-200 flex flex-col items-center bg-white rounded-xl shadow-sm border w-full sm:w-[47%] lg:w-[30%] p-6 text-center"
              >
                <div
                  className={`text-3xl p-4 rounded-full text-white bg-gradient-to-r ${feature.color} mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectStandout;
  