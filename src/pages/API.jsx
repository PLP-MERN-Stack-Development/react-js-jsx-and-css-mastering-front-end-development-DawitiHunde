import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const API = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const postsPerPage = 10

  useEffect(() => {
    fetchPosts()
  }, [page])

  const fetchPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${page}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          JSONPlaceholder API Integration
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Fetching posts from JSONPlaceholder API with pagination and search functionality.
        </p>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts by title or body..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="secondary"
            onClick={handlePrevPage}
            disabled={page === 1 || loading}
          >
            Previous
          </Button>
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            Page {page}
          </span>
          <Button
            variant="secondary"
            onClick={handleNextPage}
            disabled={loading || posts.length < postsPerPage}
          >
            Next
          </Button>
        </div>
      </Card>

      {/* Loading State */}
      {loading && (
        <Card>
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              Loading posts...
            </span>
          </div>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card className="border-red-500 border-2">
          <div className="text-red-600 dark:text-red-400">
            <p className="font-semibold mb-2">Error loading posts:</p>
            <p>{error}</p>
            <Button
              variant="primary"
              onClick={fetchPosts}
              className="mt-4"
            >
              Retry
            </Button>
          </div>
        </Card>
      )}

      {/* Posts List */}
      {!loading && !error && (
        <>
          {filteredPosts.length === 0 ? (
            <Card>
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                {searchTerm
                  ? 'No posts found matching your search.'
                  : 'No posts available.'}
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="transition-all duration-200 hover:shadow-xl animate-slide-up"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                      {post.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {post.body}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Results Count */}
          {searchTerm && (
            <Card>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Showing {filteredPosts.length} result(s) for "{searchTerm}"
              </p>
            </Card>
          )}
        </>
      )}
    </div>
  )
}

export default API
