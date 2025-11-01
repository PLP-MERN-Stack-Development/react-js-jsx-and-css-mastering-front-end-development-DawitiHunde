import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Welcome to React Week 3
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A comprehensive React application demonstrating component architecture, 
          state management, hooks, and API integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            📝 Task Manager
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Manage your tasks with full CRUD operations. Features include adding tasks, 
            marking them as completed, filtering by status, and persistent storage using 
            custom hooks and localStorage.
          </p>
          <Link to="/tasks">
            <Button variant="primary" className="w-full md:w-auto">
              Go to Tasks
            </Button>
          </Link>
        </Card>

        <Card className="hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🌐 API Integration
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Explore data from JSONPlaceholder API with features like loading states, 
            error handling, pagination, and search functionality. See React hooks in action!
          </p>
          <Link to="/api">
            <Button variant="primary" className="w-full md:w-auto">
              View API Data
            </Button>
          </Link>
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          ✨ Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">
              Component Architecture
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Reusable Button component with variants</li>
              <li>Card component for content layout</li>
              <li>Navbar with routing and theme toggle</li>
              <li>Footer with links</li>
              <li>Layout wrapper component</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">
              React Hooks & State
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>useState for component state</li>
              <li>useEffect for side effects</li>
              <li>useContext for theme management</li>
              <li>Custom useLocalStorage hook</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">
              Styling & Design
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Responsive design (mobile, tablet, desktop)</li>
              <li>Dark mode support</li>
              <li>Tailwind CSS utility classes</li>
              <li>Custom animations and transitions</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">
              API Integration
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Fetch data from JSONPlaceholder</li>
              <li>Loading and error states</li>
              <li>Pagination support</li>
              <li>Search functionality</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Home
