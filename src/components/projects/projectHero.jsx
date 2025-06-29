import { useState } from "react";
import CustomProjectForm from "./customProjectModal";
const ProjectHero = () => {
    const [open,setOpen] = useState(false)
    function handleClick(){
        setOpen(true)
    }
    return (
        <>
        <CustomProjectForm isOpen={open} onClose={() => setOpen(false)}/>
        <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-green-50 text-center">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Explore & Order Your Final<br className="hidden md:block" /> Year Project Reports
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    Ready-made & custom-built academic projects tailored to your specialization.
                    Get high-quality, plagiarism-free project reports delivered instantly.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="cursor-pointer px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-base shadow-md hover:scale-105 transition"
                    onClick={handleClick}
                    >
                        Request Custom Project
                    </button>
                </div>
                <div className="image mt-10 rounded-xl overflow-hidden h-[420px]">
                    <img src="/discussion.png" className="w-full"/>
                </div>
            </div>
        </section>
        </>
    );
};

export default ProjectHero;
