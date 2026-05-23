const Sidebar = () => {
    return (
        <div className="w-76  h-full shadow-[0_0_10px_rgba(0,0,0,0.3)] border-r-1.5 border-gray-300 p-4 ">

            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul className="space-y-2">
                <li>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Home</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Profile</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Settings</a>
                </li>
                <li>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;