import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/services/categoryApi";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { CategorySkeleton } from "../common/CategorySkeleton";

const CategoryList = () => {
    const { data: category, isLoading } = useGetCategoriesQuery();
    const navigate = useNavigate();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    };
    return (
        <div className="w-full bg-[#FAFAFA] py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-20">
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-10"
                variants={containerVariants}
                initial="hidden"
                animate={isLoading ? "hidden" : "visible"}
            >
                {isLoading ? (
                    <CategorySkeleton />
                ) : (
                    category?.map((item) => (
                        <motion.div
                            key={item._id}
                            variants={itemVariants}
                            className="cursor-pointer group"
                            onMouseEnter={() => setHoveredId(item._id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => navigate(`/products?category=${item.name}`)}
                        >
                            <motion.div
                                className="bg-[#EDEDED] flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-md h-full transition-shadow duration-300 hover:shadow-lg"
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="w-12 h-12 sm:w-15 sm:h-15 md:w-15 md:h-15 flex items-center justify-center overflow-hidden rounded-md"
                                    animate={{
                                        scale: hoveredId === item._id ? 1.02 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <img
                                        src={`http://localhost:5000/${item.image}`}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                                <motion.div
                                    className="font-medium text-xs sm:text-sm md:text-base text-center line-clamp-2 w-full"
                                    animate={{
                                        color: hoveredId === item._id ? "#000" : "#333",
                                    }}
                                >
                                    {item.name}
                                </motion.div>
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-md"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: hoveredId === item._id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ originX: 0 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))
                )}
            </motion.div>
        </div>
    );
};

export default CategoryList;