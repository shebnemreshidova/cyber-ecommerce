
export const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-sm w-full sm:w-56 md:w-64">
        <div className="bg-gray-200 h-40 sm:h-48 md:h-56 rounded-t-lg animate-pulse"></div>
        <div className="p-4 sm:p-5 md:p-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
    </div>
);