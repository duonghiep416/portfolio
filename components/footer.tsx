import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-900 dark:to-purple-950/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Dev</span>
              <span className="text-gray-800 dark:text-white">Portfolio</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">© {currentYear} Duong Hiep. All rights reserved.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
