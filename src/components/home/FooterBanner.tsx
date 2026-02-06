import footerBanner from '../../assets/footer-banner.png';

const FooterBanner = () => {
    return (
        <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${footerBanner})`
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2 sm:mb-4">
                    <span className="text-gray-200">Big Summer </span>
                    <span className="font-bold text-white">Sale</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light mb-6 sm:mb-8 max-w-md">
                    Commodo fames vitae vitae leo mauris. Eu consequat.
                </p>
                <button className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 border-2 border-gray-400 text-gray-200 font-medium text-sm sm:text-base hover:border-white hover:text-white transition-all duration-300 hover:bg-white/10">
                    Shop Now
                </button>
            </div>
        </div>
    );
}
export default FooterBanner