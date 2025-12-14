'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-deep-navy mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">{error.message || 'An unexpected error occurred'}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-electric-blue text-deep-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-deep-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}

