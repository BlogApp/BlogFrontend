import React from 'react';

import greenArrow from '../../../assets/landing-page/arrow-green.png'; 
import scribblePurple from '../../../assets/landing-page/Vector.png';
import arrowScribble from '../../../assets/landing-page/arrow, hand drawn, scribble, doodle, arrows, 7.png';
import sparkle from '../../../assets/landing-page/spark, sparkle, 26.png';
import squiggle from '../../../assets/landing-page/Vector2.png';

function Hero () {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-8 lg:px-16 py-30 bg-white text-center">
    
      <img src={greenArrow} alt="" className="absolute top-10 translate-x-40 translate-y-10 w-20 hidden lg:block lg:w-40 z-0" />
      <img src={scribblePurple} alt="" className="absolute top-24 translate-x-280 w-16 hidden md:block lg:w-28 z-0" />
      <img src={arrowScribble} alt="" className="absolute bottom-10 translate-x-200 translate-y-5  w-16 hidden md:block" />
      <img src={sparkle} alt="" className="absolute top-4 right-10 w-6 sm:w-8 z-0" />
      

      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">
          Write your new <span className="text-green-600">Story</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10">
          It’s time to share your voice with the world. Join a growing community of writers, designers, and thought leaders showcasing their work.
        </p>
        <a
          href="/signup"
          className="inline-block bg-green-600 text-white px-30 py-3 rounded-4xl font-medium hover:bg-green-700 transition"
        >
          Start Writing Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
