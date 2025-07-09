import React from 'react'

function NotFound() {
 return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
);

}

export default NotFound