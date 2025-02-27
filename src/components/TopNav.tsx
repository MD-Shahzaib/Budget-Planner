import { Search, Bell, User } from "lucide-react";

const TopNav = () => {
    return (
        <header className="flex justify-between items-center bg-white shadow-md p-4">
            <div className="relative w-1/3">
                <input
                    type="text"
                    placeholder="Search files..."
                    className="w-full p-2 pl-10 border rounded-lg focus:ring focus:ring-gray-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
                <User className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
        </header>
    );
};

export default TopNav;