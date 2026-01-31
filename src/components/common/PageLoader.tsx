export const PageLoader = () => (
  <div className="fixed left-0 top-0 z-10 h-1 w-full bg-gray-200 overflow-hidden">
    <div
      className="h-full w-1/3 bg-blue-500 animate-pulse"
      style={{
        animation: 'slideLoader 1.5s ease-in-out infinite'
      }}
    />
  </div>
)