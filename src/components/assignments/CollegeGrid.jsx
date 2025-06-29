const colleges = [
    {
        name: "Delhi University",
        assignments: 45,
        icon: "🏛️",
        color: "bg-red-500",
    },
    {
        name: "Mumbai University",
        assignments: 38,
        icon: "🌊",
        color: "bg-blue-500",
    },
    {
        name: "Bangalore University",
        assignments: 52,
        icon: "💻",
        color: "bg-green-500",
    },
    {
        name: "Chennai University",
        assignments: 29,
        icon: "🎓",
        color: "bg-yellow-500",
    },
    {
        name: "Kolkata University",
        assignments: 34,
        icon: "📚",
        color: "bg-purple-500",
    },
    {
        name: "Pune University",
        assignments: 41,
        icon: "🔬",
        color: "bg-blue-400",
    },
    {
        name: "Hyderabad University",
        assignments: 27,
        icon: "⚡",
        color: "bg-pink-500",
    },
    {
        name: "Gujarat University",
        assignments: 33,
        icon: "🌟",
        color: "bg-teal-500",
    },
];

const CollegeGrid = () => {
    return (
        <section className="w-full px-4 py-10 max-w-full mx-0 mt-14 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Choose Your College</h2>
                <p className="text-gray-500 mt-2">
                    Select your college to browse semester-wise assignments
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {colleges.map((college, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white border rounded-xl p-6 text-center hover:shadow-md transition-all"
                    >
                        <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${college.color}`}
                        >
                            {college.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{college.name}</h3>
                        <div className="text-sm bg-gray-100 text-gray-700 inline-block px-3 py-1 rounded-full mt-2 font-semibold">
                            {college.assignments} Assignments Available
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Click to explore semesters
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollegeGrid;
