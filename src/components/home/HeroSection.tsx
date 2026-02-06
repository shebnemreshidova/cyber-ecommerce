import { useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import heroImg from '../../assets/banner-img.png'
export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: 40, x: 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.9,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-[90vh] overflow-hidden bg-[#211C24]" >

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <motion.div className="space-y-6 lg:space-y-8" variants={containerVariants}>

            <motion.div variants={textVariants}>
              <p className="text-gray-400 text-sm sm:text-base font-light tracking-wider">
                Pro.Beyond.
              </p>
            </motion.div>

            <motion.div variants={textVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight">
                iPhone 14
                <span className="font-normal"> Pro</span>
              </h1>
            </motion.div>

            <motion.div variants={textVariants}>
              <p className="text-gray-300 text-base sm:text-lg font-light max-w-md leading-relaxed">
                Created to change everything for the better. For everyone
              </p>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <motion.button
                className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-white text-white font-light tracking-wide text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end items-center h-full"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg perspective">

              <motion.div
                className="relative"
                animate={{
                  rotateY: isHovering ? 5 : 0,
                  rotateX: isHovering ? -2 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <img
                  src={heroImg}
                  alt="iPhone 14 Pro"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
export default HeroSection