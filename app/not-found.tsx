import Link from 'next/link'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <FileQuestion className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-deep-navy mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-electric-blue text-deep-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

