import React from 'react'
import ReferralProgram from '../components/assignments/refeerralProgram'
import WhyChoose from '../components/assignments/WhyChoose'
import Support from '../components/assignments/support'
import CollegeGrid from '../components/assignments/CollegeGrid'
import Footer from '../components/footer'
function Assignments() {
    return (
        <>
            <div className="fixed z-20 flex justify-between min-h-[50px] items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-md shadow-md w-full">
                <p className="text-sm md:text-base">
                    🎉 <span className="font-semibold">First 10 users</span> will get free unique assignment, next 10 up to <span className="font-semibold">50% discount!</span>
                </p>
                <button className="bg-white text-blue-600 px-3 py-1 rounded font-semibold text-sm hover:bg-blue-100 transition">
                    Claim
                </button>
            </div>
            <CollegeGrid />
            <ReferralProgram />
            <WhyChoose />
            <Support />
            <Footer />
        </>

    )
}

export default Assignments