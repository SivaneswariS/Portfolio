const skills = [
  "HTML",
  "CSS",
  "React.js",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
  "REST APIs",
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md my-12"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium transition-transform transform hover:scale-110 hover:from-pink-200 hover:to-yellow-200 duration-300 shadow-md"
            style={{ animationDelay: `${index * 100}ms`, animation: "fade-in 0.5s ease forwards" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
