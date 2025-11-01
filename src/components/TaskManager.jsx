import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Button from './Button'
import Card from './Card'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  useEffect(() => {
    // This effect runs whenever tasks change
    // Tasks are already persisted via useLocalStorage
  }, [tasks])

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Task Manager
        </h2>
        
        {/* Add Task Form */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          />
          <Button onClick={addTask} variant="primary">
            Add Task
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
            className="text-sm"
          >
            All ({tasks.length})
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
            className="text-sm"
          >
            Active ({tasks.filter((t) => !t.completed).length})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
            className="text-sm"
          >
            Completed ({tasks.filter((t) => t.completed).length})
          </Button>
        </div>
      </Card>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {filter === 'all'
                ? 'No tasks yet. Add one above!'
                : filter === 'active'
                ? 'No active tasks.'
                : 'No completed tasks.'}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              className={`transition-all duration-200 animate-slide-up ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span
                  className={`flex-1 ${
                    task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {task.text}
                </span>
                <Button
                  variant="danger"
                  onClick={() => deleteTask(task.id)}
                  className="text-sm"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskManager