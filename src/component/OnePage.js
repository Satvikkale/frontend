import { useState } from 'react';
import { Link } from 'react-scroll';
import Manhwas from './Manhwas';
import MainChar from './MainChar';
import CalltoAction from './CalltoAction';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
        <h1 className="text-3xl font-bold">Lore Olympus Webtoon</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto top-16 left-0 p-4 md:p-0`}>
          <li className="my-2 md:my-0">
            <Link
              to="mainchar"
              smooth={true}
              duration={600}
              onClick={() => setIsOpen(false)} // Close menu on item click
              className="cursor-pointer hover:text-gray-300 mx-3"
            >
              Main Characters
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="manhwas"
              smooth={true}
              duration={600}
              onClick={() => setIsOpen(false)} // Close menu on item click
              className="cursor-pointer hover:text-gray-300"
            >
              Manhwas
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://imgs.search.brave.com/doLVjG98T8AwgYJOHDvXr_aZOFlKWNQ_13zzp0KdxVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bmltZS1jaGFyYWN0/ZXItdHJhdmVsaW5n/XzIzLTIxNTEyNzg4/MjIuanBnP3NpemU9/NjI2JmV4dD1qcGc)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold animate-pulse">Jaw Dropping Seen on Media</h1>
          <p className="mt-4 text-2xl animate-fadeIn">Discover captivating stories with Lore Olympus</p>
        </div>
      </div>

      {/* Main Characters Section */}
      <section id="mainchar" className="bg-white py-8">
        <MainChar />
      </section>

      {/* Recommended Manhwas Section */}
      <section id="manhwas" className="bg-gray-100 py-8">
        <Manhwas />
      </section>

      {/* Call to Action Section */}
      <section id="calltoaction" className="bg-blue-900 py-8">
        <CalltoAction />
      </section>
    </div>
  );
};

export default LandingPage;
