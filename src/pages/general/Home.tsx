import { Link } from "react-router-dom";
import hero from "../../assets/hero.svg";

const Home = () => {
  return (
    <div>
      <header className="p-4 flex items-center shadow justify-between lg:px-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-12 h-12" alt="" />{" "}
          <span className="text-red-500 font-bold text-2xl">HMS</span>
        </div>

        <div className="hidden md:flex gap-8">
        <Link to={""} className="block mb-2">Home</Link>
          <Link to={""} className="block mb-2">Services</Link>
          <Link to={""} className="block mb-2">About</Link>
          <Link to={""} className="block mb-2">Contact</Link>
          <Link to={""} className="block mb-2">Register</Link>
        </div>

        <div>
          <Link to={"/login"}>
            <button className="bg-[#161e54] text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <section className="p-4 md:p-20 min-h-[90vh] md:grid grid-cols-2 mb-20">
        <div className="max-w-lg pt-10 mb-10">
          <p className="text-red-500 mb-4">Introducing the best</p>

          <h1 className="text-3xl md:text-6xl text-[#161e54] font-bold tracking-wide">
            Digital Hospital Management at one place
          </h1>

          <p className="text-gray-600 text-xl mt-4">
            Next-Gen Hospital Solutions: Drive Innovation, Deliver Quality
            Healthcare
          </p>

         <div className="mt-8">
         <Link to={"/login"}>
            <button className="bg-[#161e54] text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </Link>
         </div>
        </div>

        <div>
          <img src={hero} className="" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
