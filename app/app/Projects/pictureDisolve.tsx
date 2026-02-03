'use client'
import React, { useState, useEffect } from 'react';

 export default function ImageDissolve() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'Vaccibitelogo.png', alt: 'vaccibite logo' },
    { src: 'darwin.jpg', alt: 'darwin logo' },
    { src: 'logo.png', alt: 'lutong mang kanor logo' },
  ];
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
          <div className="relative h-120 w-100 rounded-4xl overflow-hidden z-0 transition-transform duration-1000 scale-110">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
