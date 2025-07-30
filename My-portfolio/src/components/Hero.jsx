function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-500">Sivaneswari</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-xl">
          A passionate <strong>Frontend Developer</strong> and <strong>MERN Stack Developer</strong> crafting responsive and user-friendly web applications 🚀
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="#contact">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:from-pink-500 hover:to-yellow-500 transition">
              Hire Me
            </button>
          </a>
          <a href="/Sivaneswari__resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md hover:from-pink-500 hover:to-yellow-500 transition">
              View Resume
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src="/profile_picture.jpg"
          alt="Shiva"
          className="rounded-full mx-auto w-60 h-60 md:w-80 md:h-80 object-cover shadow-lg hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
}

export default Hero;
