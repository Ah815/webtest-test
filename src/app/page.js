
import React from 'react'
import Link from 'next/link';
export default function page() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">MyApp</div>
        <div>
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
  Login
</Link>

        </div>
      </div>
    </nav>
  );
}




