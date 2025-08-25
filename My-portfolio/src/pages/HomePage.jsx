// HomePage.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

function HomePage() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100"
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 leading-snug">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Sivaneswari
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          A passionate <strong>Frontend Developer</strong> &{" "}
          <strong>MERN Stack Developer</strong>.  
          I love building modern, responsive web apps with smooth user experiences 🚀
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/profile_picture.jpg"
          alt="Sivaneswari"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-white hover:scale-105 transition duration-500"
        />
      </div>
    </motion.section>
  );
}

export default HomePage;

