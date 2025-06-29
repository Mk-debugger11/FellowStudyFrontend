import {
    Gift,
    ShoppingBag,
    Plus,
    Coins,
    Settings,
    ToggleLeft,
} from "lucide-react";


const MyWallet = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 border rounded-xl p-4">
            <h1 className="text-2xl font-bold mb-1">My Wallet</h1>
            <p className="text-muted-foreground mb-6">
                Manage your coins and rewards
            </p>

            {/* Wallet Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl flex flex-col justify-between">
                    <div className="text-sm">Current Balance</div>
                    <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold">115</div>
                        <Coins className="w-5 h-5" />
                    </div>
                    <span className="text-xs">coins</span>
                </div>
                <div className="bg-white border p-4 rounded-xl text-green-700">
                    <div className="text-sm">Total Earned</div>
                    <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold">145</div>
                        <Plus className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-white border p-4 rounded-xl text-blue-600">
                    <div className="text-sm">From Referrals</div>
                    <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold">100</div>
                        <Gift className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-white border p-4 rounded-xl text-purple-600">
                    <div className="text-sm">From Purchases</div>
                    <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold">20</div>
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Wallet Settings */}
            <div className="bg-white border rounded-xl p-4 mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5" /> Wallet Settings
                </h2>
                <div className="flex items-center gap-3 mt-2">
                    <ToggleLeft className="w-5 h-5 text-black" />
                    <div>
                        <p className="font-medium text-sm">Use coins at checkout</p>
                        <p className="text-muted-foreground text-xs">
                            Automatically apply available coins to reduce your order total
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex text-sm font-medium border rounded-lg overflow-hidden mb-4">
                <button className="w-full bg-muted py-2">All Transactions (5)</button>
                <button className="w-full py-2">Earned (4)</button>
                <button className="w-full py-2">Used (1)</button>
            </div>

            {/* Transaction History */}
            <div className="bg-white border rounded-xl p-4">
                <h2 className="text-lg font-semibold mb-4">Transaction History</h2>

                {/* Single Transaction */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-t pt-4">
                    <div>
                        <p className="font-medium text-sm">
                            Referral bonus for John Smith
                        </p>
                        <p className="text-muted-foreground text-xs">Earned • 15 Jan 2024</p>
                    </div>
                    <div className="text-green-600 font-bold text-sm mt-2 sm:mt-0">
                        +100 coins
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWallet;
