const stats = [
    {
        count: "10000+",
        label: "Happy Students",
    },
    {
        count: "500+",
        label: "Projects Completed",
    },
    {
        count: "50+",
        label: "Partner Colleges",
    },
];

const StatsSection = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl font-semibold text-black mb-8">
                    Trusted by Students Across India
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-gray-600 text-lg flex gap-3 items-center justify-center relative"
                        >
                            <div className="text-2xl  font-bold text-gray-900 mb-1">
                                {stat.count}
                            </div>
                            <span>{stat.label}</span>

                            {/* Divider between items (only show for middle elements) */}
                            {index < stats.length - 1 && (
                                <div className="hidden sm:block absolute right-[-2rem] top-1/2 transform -translate-y-1/2 h-10 w-px bg-gray-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
