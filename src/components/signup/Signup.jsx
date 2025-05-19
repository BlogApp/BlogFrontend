import img from '../../assets/signup-signin/Bg.png';
import img1 from '../../assets/signup-signin/G.png';
import img2 from '../../assets/signup-signin/S1.png';
import img3 from '../../assets/signup-signin/S2.png';

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-black min-h-screen">
      <div className="relative flex-1 p-6 sm:p-10 lg:p-16">
        <div className="text-md font-black mb-6 -translate-x-20  -translate-y-4  md:-translate-x-70">
          <span className="text-green-600">Sign-Up</span>/<a>Sign-In</a>
        </div>


        <img
          src={img3}
          alt="PinkSquigly"
          className="hidden md:block absolute -right-10 top-10 h-40 z-0"
        />

        <div className="relative z-10 mt-10 ml-10">
          <h1 className="mb-2 text-3xl font-black lg:-translate-x-40">Get Started Now</h1>
          <h2 className="mb-5 font-medium lg:-translate-x-25">
            Enter your credentials to Create your Account
          </h2>

          <div className="-translate-x-1">
            <div className="font-semibold mb-1 -translate-x-20 md:-translate-x-60">Name</div>
            <input
              type="text"
              placeholder="John Doe"
              className="border rounded-2xl mb-5 px-2 py-2 w-11/12"
            />

            <div className="font-semibold mb-1 -translate-x-12 md:-translate-x-50">E-Mail Address</div>
            <input
              type="email"
              placeholder="abc@xyz.com"
              className="border rounded-2xl mb-5 px-2 py-2 w-11/12"
            />

            <div className="font-semibold mb-1 -translate-x-10 md:-translate-x-49">Create Password</div>
            <input
              type="password"
              placeholder="********"
              className="border rounded-2xl mb-5 px-2 py-2 w-11/12"
            />

            <div className="font-semibold mb-1 -translate-x-10 md:-translate-x-48">Confirm Password</div>
            <input
              type="password"
              placeholder="********"
              className="border rounded-xl mb-5 px-2 py-2 w-11/12"
            />
          </div>

          <div className="mb-5 -translate-x-2 md:-translate-x-27">
            <input type="checkbox" className="mr-2" />
            I agree to the &nbsp;
            <a href="" className="text-green-600 hover:text-green-800 ">
              Terms And Conditions
            </a>
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="bg-green-700 hover:bg-green-900 pointer rounded-3xl text-white text-lg px-20 py-2 md:px-40"
            >
              Sign-Up
            </button>
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 pointer border rounded-3xl text-lg px-1 py-2 flex items-center md:px-20 md:translate-x-24"
            >
              <img src={img1} alt="google" className="h-6 mr-2" />
              Continue with Google
            </button>
          </div>

          <h2>
            Already have an Account? &nbsp;
            <a className="text-green-600 hover:text-green-800" href="/signin">
              Sign-In
            </a>
          </h2>
        </div>

        <img
          src={img2}
          alt="GreenSquigly"
          className="hidden absolute  md:block mt-10 h-40 lg:h-30 lg:-translate-x-20 lg:-translate-y-10"
        />
      </div>

      <div className="hidden lg:block flex-1 relative">
        <img
          src={img}
          alt="BG"
          className="h-200 translate-y-10 w-150 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
