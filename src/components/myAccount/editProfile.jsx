import React from 'react'
import {
    User,
    Receipt,
    CreditCard,
    Ticket,
    Wallet,
    LogOut,
    Lock,
    Mail,
    Phone,
    GraduationCap,
} from "lucide-react";
function EditProfile() {
    return (
        <>
            <div className='border rounded-xl p-4'>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                        <p className="text-gray-500">Manage your personal information</p>
                    </div>
                    <button className="cursor-pointer bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-semibold">
                        Edit Profile
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Personal Information */}
                    <div className="bg-white p-6 rounded-xl border flex-1">
                        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                            <User className="text-gray-600" /> Personal Information
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="John Doe"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-700">Email</label>
                                <div className="flex items-center gap-2 border rounded-lg px-4">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <input
                                        type="email"
                                        defaultValue="john.doe@example.com"
                                        className="w-full py-2 text-sm outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-700">Mobile Number</label>
                                <div className="flex items-center gap-2 border rounded-lg px-4">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <input
                                        type="tel"
                                        defaultValue="+91 9876543210"
                                        className="w-full py-2 text-sm outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-700">College Name</label>
                                <div className="flex items-center gap-2 border rounded-lg px-4">
                                    <GraduationCap className="w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        defaultValue="Delhi University"
                                        className="w-full py-2 text-sm outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Password Settings */}
                    <div className="bg-white p-6 rounded-xl border flex-1">
                        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                            <Lock className="text-gray-600" /> Password Settings
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-700">Current Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile