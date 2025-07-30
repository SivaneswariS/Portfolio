const projects = [
  {
    title: "Netflix Login Page",
    description: (
      <>
        Build a Login Page (Frontend + Backend Integration) replicating Netflix's login screen using React and Node.js.
        <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
          <li>Frontend with React (Vite or CRA)</li>
          <li>Responsive Login UI</li>
          <li>Form handling & validation</li>
          <li>Express backend with mock authentication</li>
          <li>Error handling and success redirect</li>
          <li>Styled with Tailwind CSS</li>
        </ul>
      </>
    ),
    github: "https://github.com/SivaneswariS/LoginReact",
    live: "https://login-react-flame.vercel.app/",
  },
  {
    title: "Movie App",
    description: (
      <>
        Movie App with TMDB API integration to fetch popular movies with pagination, search, and favorites.
        <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
          <li>API integration with TMDB</li>
          <li>Pagination & search feature</li>
          <li>Favorites stored locally</li>
          <li>Dedicated favorites page</li>
        </ul>
      </>
    ),
    github: "https://github.com/SivaneswariS/Movie-App-project",
    live: "http://movie-app-sigma-bay.vercel.app/",
  },
  {
    title: "Weather Report",
    description: (
      <>
        Responsive React app fetching real-time weather data using OpenWeatherMap API.
        <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
          <li>Search weather by city</li>
          <li>Axios for API requests</li>
          <li>Clean layout with Tailwind CSS</li>
          <li>Responsive design with flex/grid</li>
          <li>Basic error handling</li>
        </ul>
      </>
    ),
    github: "https://github.com/SivaneswariS/AXIO",
    live: "https://axio-mocha.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg shadow-md my-12"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, github, live }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-blue-100"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
            <div className="text-gray-600 mb-4">{description}</div>
            <div className="flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition text-sm font-semibold"
              >
                GitHub
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
