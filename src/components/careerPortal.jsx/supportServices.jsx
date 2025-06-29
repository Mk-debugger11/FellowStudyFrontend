const services = [
    {
        title: "SELF-CARE",
        description: "Support to write a project report or assignments by yourself.",
    },
    {
        title: "EXAM PREPARATION",
        description: "Help students prepare for exams with tips, schedules, and resources.",
    },
    {
        title: "JOB OPENINGS",
        description: "View or get notified about suitable job openings or internships.",
    },
    {
        title: "RESUME WRITING",
        description: "Get help in creating a professional resume.",
    },
    {
        title: "STUDY MATERIAL",
        description: "Request study material or notes relevant to your subject.",
    },
    {
        title: "ESSAY WRITING",
        description: "Support for writing essays for academic or scholarship use.",
    },
    {
        title: "PROJECT PROPOSAL FOR BUSINESS",
        description: "Help with writing business project proposals.",
    },
    {
        title: "GUIDANCE FOR FURTHER STUDY",
        description: "Recommend good and reputed courses after graduation.",
    },
    {
        title: "UPSKILLING COURSES",
        description: "Suggest short-term online/offline courses for skills development.",
    },
    {
        title: "SCHOLARSHIPS",
        description: "Provide leads and guidance on current scholarships.",
    },
    {
        title: "GRANTS",
        description: "Help identify and apply for government or private educational grants.",
    },
];

const SupportServices = () => {
    return (
        <section className="px-4 py-16 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">Academic & Career Support Services</h2>
            <p className="text-gray-600 mt-2 mb-8">
                Comprehensive support for your academic journey and career development
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm transition hover:shadow-md"
                    >
                        <div className="text-green-600 text-2xl mb-2">📘</div>
                        <h3 className="font-semibold text-gray-800 text-lg">{service.title}</h3>
                        <p className="min-h-[40px] text-sm text-gray-500 mt-1 mb-4">{service.description}</p>
                        <button className="cursor-pointer px-4 py-2 w-full text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SupportServices;
