import { Button } from "@/components/ui/button";

const AboutSection = () => {
    return (
        <section className="py-25 px-4 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h1 className="text-6xl font-extrabold leading-tight mb-6">
                        <span className="text-blue-600">Welcome</span>{" "}
                        <span className="text-green-600">to Fellow Study Club</span>
                    </h1>

                    <h2 className="text-xl font-bold mb-3 text-black">Who We Are</h2>

                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                        We are a dedicated educational platform connecting students with
                        quality assignments, projects, and career opportunities. Our mission
                        is to support your academic journey with reliable resources and
                        expert guidance.
                    </p>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Join thousands of students who trust us for their academic success.
                        From assignments to dissertation projects, we've got you covered
                        with our comprehensive educational services.
                    </p>

                    <Button className="cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-md text-base font-medium hover:opacity-90">
                        Learn More About Us
                    </Button>
                </div>

                {/* Right: Image */}
                <div className="relative flex-1">
                    {/* Top Right Circle */}
                    <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-300 rounded-full opacity-70 z-0"></div>

                    {/* Bottom Left Circle */}
                    <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-200 rounded-full opacity-70 z-0"></div>

                    {/* Image Container */}
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 p-2 max-w-full rounded-2xl shadow-lg relative z-10">
                        <img
                            src="/lab.jpeg"
                            alt="A student working in a science laboratory"
                            className="rounded-xl object-cover w-full max-w-[500px] aspect-video mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
