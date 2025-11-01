import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              React App
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/tasks')
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Tasks
            </Link>
            <Link
              to="/api"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/api')
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              API
            </Link>
            <Button
              variant="secondary"
              onClick={toggleTheme}
              className="px-3 py-1 text-sm"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
