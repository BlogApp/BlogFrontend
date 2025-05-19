import React from 'react';
import arrow from '../../../assets/landing-page/arrow.png'; 
import crown from '../../../assets/landing-page/crown.png';
import colab from '../../../assets/landing-page/colab.png'; 

export default function Collaboration() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-white">
      <img
        src={arrow}
        alt="Decorative arrow"
        className="absolute translate-x-20 translate-y-10 hidden lg:block w-16 sm:w-20 opacity-80"
      />

    <div className="flex items-center gap-2 mb-2">
        <img src={crown} alt="Crown" className="absolute translate-x-100 hidden lg:block translate-y-35 w-10 h-10" />
    </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl text-black font-bold m-4">
            Creative <span className='text-green-600'>Collaboration</span>
          </h2>
          <h4 className="text-xl md:text-lg text-black font-bold mt-6 mb-2">
            Bringing Ideas Together
          </h4>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
          Writers, illustrators, and designers can connect and collaborate on projects, bringing words and visuals together seamlessly.
          </p>

    
            
        </div>
        <div className="flex-1">
          <img 
            src={colab} 
            alt="Collaboration" 
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
