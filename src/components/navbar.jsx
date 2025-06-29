import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    BookText,
    Moon,
    ShoppingCart,
    LogIn,
    Menu,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="border-b sticky top-0 bg-white z-50">
                <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
                            F
                        </div>
                        <span className="text-xl font-semibold">
                            <span className="text-blue-600">Fellow</span>
                            <span className="text-green-600">study</span>
                        </span>
                    </Link>

                    {/* Center: Navigation Links - Desktop */}
                    <nav className="hidden md:flex gap-6 ml-10 text-base font-medium text-black">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link to="/assignments" className="hover:text-blue-600 transition-colors">Assignments</Link>
                        <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
                        <Link to="/career" className="hover:text-blue-600 transition-colors">Career Portal</Link>
                        <Link to="/account" className="hover:text-blue-600 transition-colors">My Account</Link>
                    </nav>

                    {/* Right: Icons and Login Button - Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        <div className="p-2 rounded-md hover:bg-gray-200 transition cursor-pointer">
                            <Search className="w-5 h-5" />
                        </div>
                        <div className="p-2 rounded-md hover:bg-gray-200 transition cursor-pointer">
                            <BookText className="w-5 h-5" />
                        </div>
                        {/* <div className="p-2 rounded-md hover:bg-gray-200 transition cursor-pointer">
                            <Moon className="w-5 h-5" />
                        </div> */}
                        <div className="p-2 rounded-md hover:bg-gray-200 transition cursor-pointer">
                            <ShoppingCart className="w-5 h-5" />
                        </div>
                        <Link to="/login">
                            <Button className="bg-black text-white hover:bg-neutral-800 text-base flex items-center gap-2 cursor-pointer">
                                <LogIn className="w-4 h-4" />
                                Login
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu - Full screen overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-white z-40 mt-16 overflow-y-auto">
                        <div className="px-4 py-6 flex flex-col space-y-6 bg-gray-100 rounded-xl">
                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-4">
                                <Link
                                    to="/"
                                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/assignments"
                                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Assignments
                                </Link>
                                <Link
                                    to="/projects"
                                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/career"
                                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Career Portal
                                </Link>
                                <Link
                                    to="/account"
                                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    My Account
                                </Link>
                            </div>

                            {/* Icons and Actions */}
                            <div className="border-t pt-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-md hover:bg-gray-200 transition cursor-pointer">
                                            <Search className="w-5 h-5" />
                                        </div>
                                        <div className="p-3 rounded-md hover:bg-gray-200 transition cursor-pointer">
                                            <BookText className="w-5 h-5" />
                                        </div>
                                        <div className="p-3 rounded-md hover:bg-gray-200 transition cursor-pointer">
                                            <Moon className="w-5 h-5" />
                                        </div>
                                        <div className="p-3 rounded-md hover:bg-gray-200 transition cursor-pointer">
                                            <ShoppingCart className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <Link to="/login" className="ml-auto">
                                        <Button
                                            className="bg-black text-white hover:bg-neutral-800 text-lg flex items-center gap-2 cursor-pointer px-6 py-3"
                                            onClick={toggleMobileMenu}
                                        >
                                            <LogIn className="w-5 h-5" />
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;