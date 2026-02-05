const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-8 w-3/4 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-6 w-1/3 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-4 bg-gray-100 rounded-lg">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mb-2"></div>
                  <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse mb-1"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsSkeleton;