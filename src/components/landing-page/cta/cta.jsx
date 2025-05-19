import vector from "../../../assets/landing-page/Vector2.png";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  }
    return (
    <section className="py-24 px-6 md:px-20 bg-white">
        <img
          src={vector}
          alt="Decorative vector"
          className="absolute text-black w-10 sm:w-8 translate-x-55 translate-y-5 "/>
      <div className="bg-green-200 rounded-3xl p-20 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          Unlock Your Creative Potential – <br /> Join for Free!
        </h2>
        <button onClick={handleSignUp} className="bg-green-600 text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition">
          Sign Up now
        </button>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Want To Take Your Writing And Creativity To The Next Level? Join Our
          Platform And Start Sharing Your Ideas With The World
        </p>
      </div>
      </section>
    );
  }
  