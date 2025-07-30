import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-300">Sivaneswari Portfolio</div>

        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-blue-300 hover:text-pink-400">Home</a>
          <a href="#about" className="text-blue-300 hover:text-pink-400">About</a>
          <a href="#projects" className="text-blue-300 hover:text-pink-400">Projects</a>
          <a href="#contact" className="text-blue-300 hover:text-pink-400">Contact</a>
          <a href="/Sivaneswari_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-pink-400">Resume</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">☰</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#hero" className="block text-blue-300 hover:text-pink-400">Home</a>
          <a href="#about" className="block text-blue-300 hover:text-pink-400">About</a>
          <a href="#projects" className="block text-blue-300 hover:text-pink-400">Projects</a>
          <a href="#contact" className="block text-blue-300 hover:text-pink-400">Contact</a>
          <a href="/Sivaneswari__resume.pdf" target="_blank" rel="noopener noreferrer" className="block text-blue-300 hover:text-pink-400">Resume</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


