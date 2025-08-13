export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
                <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Welcome to <span className="text-yellow-300">My Library</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-100">
                        Discover, track, and review your favorite books — all in one place.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="/login"
                            className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Login
                        </a>
                        <a
                            href="/register"
                            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>

            {/* Featured Books */}
            <div className="mt-16 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
                {[1, 2, 3].map((book) => (
                    <div
                        key={book}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                    >
                        <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                        <h2 className="text-lg font-semibold">Book Title {book}</h2>
                        <p className="text-gray-500">Author Name</p>
                        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                            Want to Read
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
