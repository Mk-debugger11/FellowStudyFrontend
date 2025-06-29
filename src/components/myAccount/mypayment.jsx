import { Calendar, CheckCircle, XCircle, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyPayment = () => {
    const payment = {
        paymentId: "PAY001",
        orderId: "ORD001",
        mode: "UPI",
        amount: 299,
        date: "15/01/2024",
        time: "14:30",
        status: "Success",
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 border rounded-xl p-4">
            <h1 className="text-2xl font-bold mb-1">My Payments</h1>
            <p className="text-muted-foreground mb-6">
                View your transaction history and payment details
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Total Paid</p>
                        <p className="text-lg font-bold text-green-600">₹798</p>
                    </div>
                    <CheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Successful</p>
                        <p className="text-lg font-bold">2</p>
                    </div>
                    <CheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Pending</p>
                        <p className="text-lg font-bold">1</p>
                    </div>
                    <Clock className="text-yellow-500 w-5 h-5" />
                </div>
                <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Failed</p>
                        <p className="text-lg font-bold text-red-500">1</p>
                    </div>
                    <XCircle className="text-red-500 w-5 h-5" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border rounded-md overflow-hidden mb-6 text-sm font-medium">
                <button className="w-full py-2 bg-muted">All (4)</button>
                <button className="w-full py-2">Success (2)</button>
                <button className="w-full py-2">Pending (1)</button>
                <button className="w-full py-2">Failed (1)</button>
            </div>

            {/* Transaction Table */}
            <div className="bg-white border rounded-xl shadow-sm p-6 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Transaction History
                </h2>
                <table className="w-full text-sm border-collapse min-w-[600px]">
                    <thead>
                        <tr className="text-muted-foreground border-b">
                            <th className="py-2 text-left">Payment ID</th>
                            <th className="py-2 text-left">Order ID</th>
                            <th className="py-2 text-left">Payment Mode</th>
                            <th className="py-2 text-left">Amount</th>
                            <th className="py-2 text-left">Date & Time</th>
                            <th className="py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3">{payment.paymentId}</td>
                            <td className="py-3">{payment.orderId}</td>
                            <td className="py-3 flex items-center gap-2">
                                <CreditCard className="h-4 w-4" /> {payment.mode}
                            </td>
                            <td className="py-3 font-semibold">₹{payment.amount}</td>
                            <td className="py-3 flex flex-col">
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gray-500" />
                                    {payment.date}
                                </span>
                                <span className="text-xs text-muted-foreground pl-6">{payment.time}</span>
                            </td>
                            <td className="py-3">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                    {payment.status}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPayment;
