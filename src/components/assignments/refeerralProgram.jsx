import { Gift, Users, Coins } from "lucide-react";

const ReferralProgram = () => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 md:p-10">
      <h2 className="text-center text-2xl font-semibold text-gray-900 flex items-center justify-center gap-2 mb-8">
        <Gift className="text-orange-600" />
        Referral Program
      </h2>

      {/* Feature Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <Users className="mx-auto w-10 h-10 text-blue-600" />
          <h3 className="font-semibold text-lg mt-2">Refer Friends</h3>
          <p className="text-gray-500 text-sm">Share with your classmates</p>
        </div>
        <div>
          <Coins className="mx-auto w-10 h-10 text-green-600" />
          <h3 className="font-semibold text-lg mt-2">Earn Coins</h3>
          <p className="text-gray-500 text-sm">Get 50 coins per referral</p>
        </div>
        <div>
          <Gift className="mx-auto w-10 h-10 text-purple-600" />
          <h3 className="font-semibold text-lg mt-2">Get Discounts</h3>
          <p className="text-gray-500 text-sm">Use coins for discounts</p>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-white mt-8 p-4 rounded-lg text-center shadow-sm">
        <p className="text-orange-600 font-semibold text-base md:text-lg">
          🎉 Special Offer: Refer 3 friends and get your next assignment FREE!
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Terms and conditions apply. Valid until end of month.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
          Start Referring Now
        </button>
      </div>
    </div>
  );
};

export default ReferralProgram;
