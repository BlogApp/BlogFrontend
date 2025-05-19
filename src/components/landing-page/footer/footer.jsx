import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../../assets/landing-page/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12  text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="space-y-3">
          <h4 className="font-semibold text-black">for writers, designers and storytellers</h4>
          <p>All rights reserved.</p>
          <span>Need Help? Contact us at:
          <br />
          <a href="#" className="text-gray-500 hover:underline hover:text-gray-700">
            support@contact.com
          </a>
          </span>
          <div className="flex justify-center mt-2 md:justify-start space-x-3 pt-2">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
          <div className="pt-4">
            <img src={logo} alt="Hub Logo" className="h-5 mx-auto md:mx-0" />
          </div>
        </div>


        <div>
          <h4 className="font-semibold mb-3 text-black">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#"className="hover:text-black" >Terms</a></li>
            <li><a href="#"className="hover:text-black">Privacy</a></li>
            <li><a href="#"className="hover:text-black">Cookies</a></li>
            <li><a href="#"className="hover:text-black">Pricing</a></li>
            <li><a href="#"className="hover:text-black">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-black">Features</h4>
          <ul className="space-y-2">
            <li>All Features</li>
            <li>To be added</li>
            <li>To be added</li>
            <li>To be added</li>
            <li>To be added</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
