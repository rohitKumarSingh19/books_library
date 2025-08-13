export default function MyBooks() {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">📚 My Books</h1>

                {/* Empty State */}
                <div className="bg-white shadow rounded-lg p-8 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        No books added yet
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Start by browsing books on the Home page and add them to your collection.
                    </p>
                    <a
                        href="/"
                        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Browse Books
                    </a>
                </div>
            </div>
        </div>
    );
}
