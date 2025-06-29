import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvoiceItem = ({ invoiceId, orderId, date, items, amount }) => {
    return (
        <tr className="text-sm text-muted-foreground border-b">
            <td className="py-4 px-2">{invoiceId}</td>
            <td className="py-4 px-2">{orderId}</td>
            <td className="py-4 px-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                {date}
            </td>
            <td className="py-4 px-2">{items}</td>
            <td className="py-4 px-2 font-semibold">₹{amount}</td>
            <td className="py-4 px-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                </Button>
            </td>
        </tr>
    );
};

const MyBill = () => {
    const totalSpent = 997; // Replace with dynamic data if needed
    const invoices = [
        {
            invoiceId: "INV001",
            orderId: "ORD001",
            date: "15/01/2024",
            items: "Data Structures Assignment - Semester 3",
            amount: 299,
        },
        {
            invoiceId: "INV002",
            orderId: "ORD002",
            date: "20/01/2024",
            items: "Machine Learning Project - Semester 5",
            amount: 499,
        },
        {
            invoiceId: "INV003",
            orderId: "ORD003",
            date: "25/01/2024",
            items: "Web Development Assignment - Semester 4",
            amount: 199,
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 border rounded-xl p-4">
            <h1 className="text-2xl font-bold mb-1">My Bills</h1>
            <p className="text-muted-foreground mb-6">
                Download and manage your invoices
            </p>

            <div className="bg-white border rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Invoice History</h2>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Total Spent
                        </p>
                        <p className="text-lg font-semibold text-green-600">₹{totalSpent}</p>
                    </div>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-sm text-muted-foreground border-b">
                            <th className="py-3 px-2">Invoice ID</th>
                            <th className="py-3 px-2">Order ID</th>
                            <th className="py-3 px-2">Date</th>
                            <th className="py-3 px-2">Items</th>
                            <th className="py-3 px-2">Amount</th>
                            <th className="py-3 px-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <InvoiceItem key={invoice.invoiceId} {...invoice} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBill;
