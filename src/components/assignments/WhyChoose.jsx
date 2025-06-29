import {
    ShieldCheck,
    Clock,
    Users,
    BadgeCheck,
    CheckCircle,
    Headphones,
} from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-white" />,
        bgColor: "bg-green-500",
        title: "Plagiarism-Free Content",
        description:
            "All assignments are 100% original and verified with plagiarism detection tools",
    },
    {
        icon: <Clock className="w-10 h-10 text-white" />,
        bgColor: "bg-blue-500",
        title: "Fast Delivery",
        description:
            "Get your assignments delivered within 24-48 hours guaranteed",
    },
    {
        icon: <Users className="w-10 h-10 text-white" />,
        bgColor: "bg-purple-500",
        title: "Expert Writers",
        description:
            "Our team consists of qualified professionals with relevant academic backgrounds",
    },
    {
        icon: <BadgeCheck className="w-10 h-10 text-white" />,
        bgColor: "bg-orange-500",
        title: "Quality Assurance",
        description:
            "Every assignment goes through multiple quality checks before delivery",
    },
    {
        icon: <CheckCircle className="w-10 h-10 text-white" />,
        bgColor: "bg-teal-500",
        title: "Customization Available",
        description:
            "Tailored solutions to meet your specific requirements and guidelines",
    },
    {
        icon: <Headphones className="w-10 h-10 text-white" />,
        bgColor: "bg-pink-500",
        title: "24/7 Support",
        description:
            "Round-the-clock customer support to assist you with any queries",
    },
];

const WhyChoose = () => {
    return (
        <section className="px-4 py-12 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
                Why Choose Fellowstudy?
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
                We're committed to providing the highest quality academic support to
                help you succeed in your studies
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="hover:translate-y-[-4px] transition-transform duration-200 w-full sm:w-[45%] lg:w-[30%] bg-white border rounded-xl p-6 shadow-sm text-center"
                    >
                        <div
                            className={`mx-auto mb-4 rounded-full p-4 w-fit ${feature.bgColor}`}
                        >
                            {feature.icon}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChoose;
