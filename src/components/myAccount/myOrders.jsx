import { Clock, User, FileText, Eye, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderItem = ({ title, id, date, status }) => {
    return (
        <div className="border rounded-xl p-6 mb-6 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-muted-foreground">Order ID: {id}</p>
                    <p className="text-sm text-muted-foreground">Ordered: {date}</p>
                </div>
                <div className="mt-3 md:mt-0">
                    <span className="text-sm bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full">
                        {status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-4">
                <div>
                    <Clock className="mx-auto text-blue-500" />
                    <p className="text-sm mt-1">Assignment Booked</p>
                </div>
                <div>
                    <User className="mx-auto text-orange-500" />
                    <p className="text-sm mt-1">Expert Assigned</p>
                </div>
                <div>
                    <FileText className="mx-auto text-purple-500" />
                    <p className="text-sm mt-1">Plagiarism Check</p>
                </div>
                <div>
                    <Eye className="mx-auto text-yellow-500" />
                    <p className="text-sm mt-1">English Review</p>
                </div>
                <div>
                    <CheckCircle className="mx-auto text-green-500" />
                    <p className="text-sm mt-1">Ready for Download</p>
                </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
                Your assignment is ready for download
            </p>

            <Button className="cursor-pointer w-full bg-black text-white hover:bg-gray-800">
                <Download className="h-4 w-4 mr-2" />
                Download Assignment
            </Button>
        </div>
    );
};

const MyOrders = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 border rounded-xl p-4">
            <h1 className="text-2xl font-bold mb-1">My Orders</h1>
            <p className="text-muted-foreground mb-6">
                Track your assignment orders and download completed work
            </p>

            {/* Tabs Placeholder */}
            <div className="flex justify-center gap-1 rounded-md overflow-hidden mb-6 border bg-muted text-muted-foreground text-sm font-medium">
                <button className="px-4 py-2 bg-white text-black">All Orders (1)</button>
                <button className="px-4 py-2">In Progress (0)</button>
                <button className="px-4 py-2">Completed (1)</button>
            </div>

            {/* Sample Order */}
            <OrderItem
                title="Data Structures Assignment - Semester 3"
                id="ORD001"
                date="15/01/2024"
                status="Ready for Download"
            />
        </div>
    );
};

export default MyOrders;
