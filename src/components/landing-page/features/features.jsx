
import sparkle from '../../../assets/landing-page/spark, sparkle, 26.png';
import arrow from '../../../assets/landing-page/arrow.png'; 
import featureIcon1 from '../../../assets/landing-page/storytelling.png'; 
import featureIcon2 from '../../../assets/landing-page/create.png';
import featureIcon3 from '../../../assets/landing-page/opinion.png';

const features = [
  {
    icon: featureIcon1,
    title: 'Seamless Storytelling',
    desc: 'Write distraction-free with our clean and intuitive editor. Show your work to the world.',
  },
  {
    icon: featureIcon2,
    title: 'Curated Collections',
    desc: 'Find and contribute to hand-picked topics that inspire deeper conversations.',
  },
  {
    icon: featureIcon3,
    title: 'Creative Hub',
    desc: 'A dedicated space for illustrators and designers to showcase and collaborate.',
  },
  {
    icon: featureIcon3,
    title: 'AI-integrated',
    desc: 'Leverage AI tools to enhance your writing and design process.',
  },
  
];

const Features = () => {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <img src={sparkle} alt="decorative sparkle" className="absolute top-10 left-10 w-8 sm:w-10 opacity-70" />
       <img
              src={arrow}
              alt="Decorative arrow"
              className="absolute transform rotate-180 translate-x-300 translate-y-2 hidden md:block w-16 sm:w-20 opacity-80"
            />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          Create. Customize. Collaborate.
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Our platform is designed to help you tell your story, your way. With a focus on simplicity and flexibility, you can create beautiful content without the hassle.</p>
        <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 w-70 border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition text-left bg-white flex flex-col items-start">
              <img src={feature.icon} alt="feature icon" className="w-40 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
