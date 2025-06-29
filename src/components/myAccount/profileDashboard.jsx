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
import { Link } from "react-router-dom";
import { Route, Routes , useLocation , Navigate } from "react-router-dom";
import EditProfile from "./editProfile";
import MyOrders from "./myOrders";
import MyBill from "./myBill";
import MyPayment from "./mypayment";
import MyWallet from "./myWallet";
const SidebarItem = ({ icon: Icon, label, to }) => {
    const location = useLocation();
    const active = location.pathname.startsWith(to);
  
    return (
      <Link
        to={to}
        className={`flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all ${
          active ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100" }`}
      >
        <Icon size={18} />
        <span className="font-medium">{label}</span>
      </Link>
    );
  };
  

const ProfileDashboard = () => {
    
    return (
        <div className="flex flex-col md:flex-row max-w-7.5xl mx-auto mt-10 px-4 gap-6 ">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 border rounded-xl p-4 space-y-1 h-fit">
                <SidebarItem to="/account/profileEdit" icon={User} label="My Profile" />
                <SidebarItem to="/account/myorders" icon={Receipt} label="My Orders" />
                <SidebarItem to="/account/mybill" icon={CreditCard} label="My Bill" />
                <SidebarItem to="/account/mypayment"icon={CreditCard} label="My Payment" />
                {/* <SidebarItem to="/account/mypayment"icon={Ticket} label="My Coupons" /> */}
                <SidebarItem to="/account/mywallet"icon={Wallet} label="My Wallet" />
                <hr className="my-3" />
                <SidebarItem icon={LogOut} label="Logout" />
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <Routes>
                    <Route index element={<Navigate to="/account/profileEdit" replace />} />
                    <Route path="/profileEdit/*" element={<EditProfile />}></Route>
                    <Route path="/myorders/*" element={<MyOrders />}></Route>
                    <Route path="/mybill/*" element={<MyBill />}></Route>
                    <Route path="/mypayment/*" element={<MyPayment />}></Route>
                    {/* <Route path="/mypayment/*" element={<MyPayment />}></Route> */}
                    <Route path="/mywallet/*" element={<MyWallet />}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default ProfileDashboard;
