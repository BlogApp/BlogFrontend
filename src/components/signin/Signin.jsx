import img1 from '../../assets/signup-signin/bg1.png';
import img2 from '../../assets/signup-signin/s2.png';
import img3 from '../../assets/signup-signin/S3.png';
import img4 from '../../assets/signup-signin/G.png';

export default function Signin() {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-black min-h-screen">
      <div className="hidden lg:block flex-1 relative">
        <img
          src={img1}
          alt="back"
          className="h-200 w-150 translate-y-10 translate-x-5 object-cover rounded-lg"
        />
      </div>

      <div className="relative flex-1 px-6 py-10 sm:px-10 md:px-20">
        <img
          src={img2}
          alt="PinkSquigly"
          className="hidden md:block absolute top-10 right-10 h-40 md:-translate-x-10 lg:-translate-x-10"
        />

        <div className="text-md font-black mb-5 translate-y-7 sm:-translate-x-200 md:-translate-x-50 lg:-translate-x-70">
          Sign-Up /&nbsp;
          <a href="" className="text-green-700 hover:text-green-900">
            Sign-In
          </a>
        </div>


        <div className="mt-10 max-w-md mt-20 md:translate-x-10 lg:translate-y-10 lg:translate-x-20">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <h2 className="text-base mb-10">Sign in to continue from where you left</h2>

          <div className="mb-4">
            <label className="block mb-1 font-semibold sm: -translate-x-20 md:-translate-x-40">E-Mail Address</label>
            <input type="text" placeholder="abc@xyz.com"className="border rounded-3xl px-4 py-2 w-full"/>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="font-semibold">Password</label>
              <a className="text-green-700 hover:text-green-900 text-sm" href="">
                Forgot Password?
              </a>
            </div>
            <input type="password" placeholder="********" className="border rounded-3xl px-4 py-2 w-full"
            />
          </div>

          <button type="button" className="w-full bg-green-700 hover:bg-green-800 text-white rounded-4xl py-2.5 mt-6 text-lg">Sign-In</button>

          <button type="button" className="w-full bg-white border hover:bg-gray-100 text-black rounded-4xl py-2.5 my-4 flex items-center justify-center">
            <img src={img4} alt="google" className="h-6 mr-2" />Continue with Google 
            </button>

          <div className="mt-4 text-sm">
            New here? Create an Account &nbsp;
            <a className="text-green-700 hover:text-green-900 " href="/signup">Sign-Up</a>
          </div>

          <img
            src={img3}
            alt="cyan squiggle"
            className="mt-5 mx-auto h-30 hidden md:block md:translate-x-40"
          />
        </div>
      </div>
    </div>
  );
}
