import arrowgreen from '../../../assets/landing-page/arrow-green.png';
import Vector2 from '../../../assets/landing-page/Vector2.png';
import Vector from '../../../assets/landing-page/Vector.png';
import arrow from '../../../assets/landing-page/arrow-wit.png'; 

export default function AboutUs() {
    return (
        <section className="py-24 px-6 md:px-20 bg-white">
      <div className="relative py-16 px-4 text-center max-w-4xl mx-auto">
        <img
          src={Vector2}
          alt="Leaf"
          className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10"
        />
        <img
          src={arrowgreen}
          alt="Green shape"
          className="hidden lg:block absolute left-1/4 top-0 w-15 h-15"
        />
        <img
          src={Vector}
          alt="Squiggle"
          className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 w-30 h-50"
        />
  
        <h2 className="text-3xl text-black font-bold mb-4">
          About <span className="text-green-600">Us</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Our platform is built for writers, designers, and creatives who want to
          share their work, grow their audience, and collaborate in a vibrant
          community.
        </p>
  
        <div className="relative inline-block">
          <img
            src={arrow}
            alt="Arrow"
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-5 w-10 h-10"
          />
          <button className="bg-green-100 text-green-700 px-10 py-3 rounded-full font-medium hover:bg-green-200 transition">
            Contact Us
          </button>
        </div>
      </div>
      </section>
    );
  }
  