// app/dashboard/page.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Budget Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Income</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$5,000</span>
                        {/* <AiOutlineArrowUp className="text-green-500 text-2xl" /> */}
                        {"↑"}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Expenses</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$3,200</span>
                        {/* <AiOutlineArrowDown className="text-red-500 text-2xl" /> */}
                        {"↓"}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Remaining Balance</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$1,800</span>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                        <span>Salary</span>
                        <span className="text-green-500">+$2,500</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Rent</span>
                        <span className="text-red-500">-$1,200</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Groceries</span>
                        <span className="text-red-500">-$300</span>
                    </li>
                </ul>
            </div>

            {/* AI Budget Suggestions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">AI Budget Suggestions</h2>
                <p className="text-gray-600">Based on your spending, you should consider investing in stocks and reducing entertainment expenses.</p>
                <Button className="mt-4">Get More Suggestions</Button>
            </div>
        </div>
    );
};

export default Dashboard;
