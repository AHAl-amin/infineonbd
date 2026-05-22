const Sidebar = () => {
    return (
        <div className="w-76 mt-4 h-screen bg-gray-100 p-4 ">

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