const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
