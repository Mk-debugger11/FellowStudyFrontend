import React from 'react';
import AboutSection from '../components/AboutSection';
import QuickAccessCard from '../components/QuickAccessCard';
import { FileText, BookOpen } from "lucide-react";
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/statsSection';
import Footer from '../components/footer';
import ReviewCarousel from '../components/reviewCarousel';
import SearchAndFilter from '../components/SearchAndFilter';
function HomePage() {
    return (
        <main className="min-h-screen">
            <div className="fixed z-20 flex justify-between min-h-[50px] items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-md shadow-md w-full">
                <p className="text-sm md:text-base">
                    🎉 <span className="font-semibold">First 10 users</span> will get free unique assignment, next 10 up to <span className="font-semibold">50% discount!</span>
                </p>
                <button className="bg-white text-blue-600 px-3 py-1 rounded font-semibold text-sm hover:bg-blue-100 transition">
                    Claim
                </button>
            </div>
            <AboutSection />
            <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Heading with better responsive sizing */}
                    <div className="text-center mb-10 md:mb-12 lg:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Quick Access
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Get instant access to academic resources
                        </p>
                    </div>

                    {/* Cards container with improved responsive behavior */}
                    <div className="flex flex-row max-sm:flex-col justify-between max-w-5xl mx-auto ">
                        <QuickAccessCard
                            to="/projects"
                            icon={<FileText className="w-8 h-8" />}
                            iconBgColor="bg-blue-500"
                            title="Looking for Project/Dissertation?"
                            description="Get expert help with your research projects and dissertations from our comprehensive collection."
                            buttonText="Explore Projects"
                            buttonColor="bg-blue-500 hover:bg-blue-600 focus-visible:ring-blue-400"
                        />
                        <QuickAccessCard
                            to="/assignments"
                            icon={<BookOpen className="w-8 h-8" />}
                            iconBgColor="bg-green-500"
                            title="Looking for Assignments?"
                            description="Browse thousands of assignments organized by college, course, and semester."
                            buttonText="Shop by College"
                            buttonColor="bg-green-500 hover:bg-green-600 focus-visible:ring-green-400"
                        />
                    </div>
                </div>
            </section>
            <SearchAndFilter />
            <WhyChooseUs />
            <StatsSection />
            <ReviewCarousel />
            <Footer />
        </main>
    );
}

export default HomePage;