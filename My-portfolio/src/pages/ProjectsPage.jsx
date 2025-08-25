// ProjectsPage.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Netflix Login Page",
    image: "/netflix login.jpg",
    description: "Netflix login UI with backend integration using React & Node.js.",
    github: "https://github.com/SivaneswariS/LoginReact",
    live: "https://login-react-flame.vercel.app/",
  },
  {
    title: "Movie App",
    image: "/Movieapp.jpg",
    description: "Movie browsing app with TMDB API, pagination & favorites.",
    github: "https://github.com/SivaneswariS/Movie-App-project",
    live: "http://movie-app-sigma-bay.vercel.app/",
  },
  {
    title: "Weather Report",
    image: "/weatherreport.jpg",
    description: "Weather app with OpenWeatherMap API & Tailwind CSS.",
    github: "https://github.com/SivaneswariS/AXIO",
    live: "https://axio-mocha.vercel.app/",
  },
];

function ProjectsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, image, description, github, live }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={image} alt={title} className="rounded-lg mb-5 w-full h-44 object-cover shadow-md" />
            <h3 className="text-xl font-semibold mb-3 text-blue-700">{title}</h3>
            <p className="text-gray-600 mb-5">{description}</p>
            <div className="flex space-x-4">
              <a href={github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition">GitHub</a>
              <a href={live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 transition">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsPage;
