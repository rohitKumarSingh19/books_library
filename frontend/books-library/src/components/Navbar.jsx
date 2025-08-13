import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
export default function Navbar() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            My Library
                        </Link>
                        <Link to="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        {user && (
                            <Link to="/mybooks" className="text-gray-700 hover:text-blue-600">
                                My Books
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        {!user ? (
                            <>
                                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <span className="text-gray-600">{user.email}</span>
                                <button
                                    onClick={() => dispatch(logoutUser())}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
