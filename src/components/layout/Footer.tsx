import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#161e54] text-white">
      <div className="lg:grid grid-cols-3 gap-8 p-4 md:p-8">
        <div className="flex lg:col-span-1 gap-2 mb-8 md:mb-0">

          <img src="/logo.png" alt="" className="w-16 h-16" />

          <p>Over past 3+ years of experience and skills in various technologies, we built great scalable products</p>
        </div>

        <div className="md:grid grid-cols-2 lg:col-span-2">

          <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-8">Useful Link</h2>

          <Link to={""} className="block mb-2">Home</Link>
          <Link to={""} className="block mb-2">Services</Link>
          <Link to={""} className="block mb-2">About</Link>
          <Link to={""} className="block mb-2">Contact</Link>
          <Link to={""} className="block mb-2">Register</Link>
    
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

            <p className="flex items-center gap-2 mb-4"> <FaPhoneAlt/> +917096336561</p>
            <p className="flex items-center gap-2 mb-4"> <FaClock/> 08:00 AM to 21:00 PM</p>
            <p className="flex items-center gap-2 mb-4"> <FaMapMarkerAlt/> Rivers State, Nigeria</p>
          </div>

        </div>
      </div>

      <hr />

      <div className="p-8 text-center">

        <p>Copyright © 2024 All Rights Reserved by HMS</p>
      </div>
    </footer>
  );
};

export default Footer;
