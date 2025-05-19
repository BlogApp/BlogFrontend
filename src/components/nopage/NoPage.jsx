import NotFound from '../../assets/NoPage/NoPage.png'; 
import FourOFour from '../../assets/NoPage/404.png'; 

export default function NoPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <div className="w-full flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="text-xl font-bold">HUB </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <a href="/" className="hover:text-green-700">Home</a>
          <a href="/" className="hover:text-green-700">Features</a>
          <a href="/" className="hover:text-green-700">About Us</a>
          <a href="/pricing" className="hover:text-green-700">Pricing</a>
          <a href="/" className="hover:text-green-700">Contact Us</a>
        </nav>
        <div className="flex gap-4 text-sm">
          <a href="/signin" className=" translate-y-1 hover:text-green-700">Sign In</a>
          <a href="/signup" className="bg-green-700 text-white px-4 py-1 rounded-full hover:bg-green-800">SignUp</a>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:flex-row">

        <div className="hidden lg:flex items-center justify-center  w-1/2">
          <img src={NotFound} alt="404 Illustration" className="max-w-lg " />
        </div>


        <div className="flex flex-col items-center justify-center flex-1 px-6 py-10 text-center">
        <img src={FourOFour} alt="404" className="w-48 h-auto mb-10" />
          <p className="text-2xl font-medium mb-5">Well, that's a bit weird.<br />Looks very empty.</p>
          <p className="text-gray-400 mb-6 text-md">
            This page doesn't exist or was removed!<br />We suggest you back to home.
          </p>
          <a
            href="/" className="bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 transition"> Back to homepage </a>
        </div>
      </div>
    </div>
  );
}
