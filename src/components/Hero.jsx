import React, { useEffect, useState } from 'react';
import imag1 from '.././assets/1.png';
import imag2 from '.././assets/2.png';
import imag3 from '.././assets/3.png';

const images = [
  imag1,
  imag2,
  imag3
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Change image automatically every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[480px] md:h-[530px] overflow-hidden font-sans">

      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Image Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'w-8 bg-[#B7E600]'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

    </section>
  );
}