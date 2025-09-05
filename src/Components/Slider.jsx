import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://www.layers.shop/cdn/shop/files/BANNER_JUDGEMENT_DAY_DESKTOP_final_copy.png?v=1713767147&width=1540",
      title: "Judgement Day Collection",
      subtitle: "Unleash Your Phone's Dark Side",
      description: "Premium skins with cutting-edge designs that make your device stand out from the crowd.",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      id: 2,
      image: "https://www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120&width=1540",
      title: "Exclusive Collections",
      subtitle: "Crafted for Perfection",
      description: "Discover our handpicked collection of premium phone skins designed for the modern lifestyle.",
      buttonText: "Explore",
      buttonLink: "/categorypage"
    },
    {
      id: 3,
      image: "https://www.layers.shop/cdn/shop/files/NEW_ARRIVALS_pc.png?v=1712641794&width=1540",
      title: "New Arrivals",
      subtitle: "Fresh Designs, Same Quality",
      description: "Get your hands on the latest designs before anyone else. Limited stock available.",
      buttonText: "View New",
      buttonLink: "/products"
    }
  ];

  const totalSlides = slides.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-secondary-50 to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100 scale-100' 
                : index < currentSlide 
                  ? '-translate-x-full opacity-0 scale-95' 
                  : 'translate-x-full opacity-0 scale-95'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container-max px-6">
                <div className="max-w-2xl text-white animate-slide-up">
                  <p className="text-sm font-medium text-primary-200 mb-2 tracking-wide uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                    >
                      {slide.buttonText}
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a
                      href="/about"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm font-medium rounded-xl transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-8">
        <button
          onClick={goPrev}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 transform hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-8">
        <button
          onClick={goNext}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 transform hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-primary-500/80 text-white' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default Slider;
