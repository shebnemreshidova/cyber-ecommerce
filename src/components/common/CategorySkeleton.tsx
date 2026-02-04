    export const CategorySkeleton = () => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-10 px-4 sm:px-8 md:px-20">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-md p-4 animate-pulse">
                    <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-md mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </div>
            ))}
        </div>
    );