import Link from "next/link";
import { Home, BarChart, Folder, Layers } from "lucide-react";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white shadow-md h-screen p-4">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                            <Home className="w-5 h-5" /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/analytics" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                            <BarChart className="w-5 h-5" /> Analytics
                        </Link>
                    </li>
                    <li>
                        <Link href="/collections" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                            <Folder className="w-5 h-5" /> Collections
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                            <Layers className="w-5 h-5" /> Resources
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;