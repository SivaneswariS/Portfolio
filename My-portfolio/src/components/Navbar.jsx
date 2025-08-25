// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Sivaneswari
        </div>

        <div className="hidden md:flex space-x-6 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-blue-300 hover:text-pink-400 transition duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/Sivaneswari_full stack developer_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-pink-400 transition duration-300 relative group"
          >
            Resume
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-blue-300 font-medium">
          <Link to="/" className="block hover:text-pink-400">Home</Link>
          <Link to="/about" className="block hover:text-pink-400">About</Link>
          <Link to="/projects" className="block hover:text-pink-400">Projects</Link>
          <Link to="/contact" className="block hover:text-pink-400">Contact</Link>
          <a 
            href="/Sivaneswari_full stack developer_resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block hover:text-pink-400"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


