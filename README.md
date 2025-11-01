# React Week 3: Task Manager & API Integration

A comprehensive React application demonstrating component architecture, state management, hooks usage, and API integration. Built with Vite, React, React Router, and Tailwind CSS.

Netlify URL https://reactapp230.netlify.app/

## 🚀 Features

### Component Architecture
- **Button Component**: Reusable button with variants (primary, secondary, danger)
- **Card Component**: Content container with dark mode support
- **Navbar**: Navigation bar with routing and theme toggle
- **Footer**: Footer with links and copyright information
- **Layout**: Wrapper component that includes Navbar and Footer

### State Management & Hooks
- **TaskManager Component**: Full CRUD operations for tasks
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- **React Hooks Usage**:
  - `useState` for component state management
  - `useEffect` for side effects and data persistence
  - `useContext` for theme management (light/dark mode)
- **Custom Hook**: `useLocalStorage` for persisting tasks in browser storage

### API Integration
- Fetches data from JSONPlaceholder API
- Displays data in a clean card layout
- Loading states with spinner animation
- Error handling with retry functionality
- Pagination support (Previous/Next buttons)
- Search functionality to filter posts by title or body

### Styling & Design
- Fully responsive design (mobile, tablet, desktop)
- Dark mode support with theme switcher
- Tailwind CSS utility classes throughout
- Custom animations (fade-in, slide-up, bounce-subtle)
- Smooth transitions and hover effects

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-js-jsx-and-css-mastering-front-end-development-DawitiHunde
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
react-js-jsx-and-css-mastering-front-end-development-DawitiHunde/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Card.jsx            # Card container component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Layout.jsx          # Layout wrapper
│   │   ├── Navbar.jsx          # Navigation bar
│   │   └── TaskManager.jsx    # Task management component
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Theme context for dark mode
│   ├── hooks/
│   │   └── useLocalStorage.js  # Custom localStorage hook
│   ├── pages/
│   │   ├── API.jsx             # API integration page
│   │   ├── Home.jsx            # Home page
│   │   └── Tasks.jsx           # Tasks page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Home Page
- Overview of the application features
- Links to navigate to different sections

### Tasks Page
1. **Add a Task**: Type a task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed
3. **Delete a Task**: Click the "Delete" button on any task
4. **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view different task states
5. Tasks are automatically saved to localStorage and persist across page refreshes

### API Page
1. **View Posts**: Posts from JSONPlaceholder are displayed in cards
2. **Navigate Pages**: Use Previous/Next buttons to paginate through posts
3. **Search**: Type in the search box to filter posts by title or body content
4. **Loading States**: See loading spinner while data is being fetched
5. **Error Handling**: If an error occurs, an error message is displayed with a retry button

### Theme Switcher
- Click the moon/sun icon in the navbar to toggle between light and dark modes
- Theme preference is saved to localStorage

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📦 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🧪 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **JSONPlaceholder**: Fake REST API for testing

## 📸 Screenshots

*Note: Add screenshots of your application here after running it locally*

### Home Page
- Overview of features and navigation cards

### Tasks Page
- Task management interface with filtering options

### API Page
- Posts displayed with pagination and search functionality

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme.

### Adding New Components
Create new components in `src/components/` following the existing component patterns.

### Modifying API
Update the API endpoint in `src/pages/API.jsx` to fetch from a different source.

## 📝 License

This project is created for educational purposes as part of React Week 3 assignment.

## 👨‍💻 Author

Created as part of React Week 3 specialization course.

---

**Live Demo**: [Add your deployed URL here]

**Repository**: [Add your GitHub repository URL here]
