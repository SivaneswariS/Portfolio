function AboutPage() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          About Me
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">
          I’m <span className="font-semibold text-gray-900">Sivaneswari S</span>, 
          a dedicated <span className="font-medium">Frontend and Full Stack Developer</span> with a strong interest 
          in creating responsive, user-friendly web applications. Skilled in the 
          <span className="font-medium"> MERN stack</span>, I enjoy turning ideas into functional solutions. 
          Through hands-on project experience, I continue to sharpen my coding skills 
          and embrace new challenges to grow as a developer. 
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Skills & Expertise
        </h3>
        <ul className="list-disc ml-6 mb-8 text-gray-800 space-y-2">
          <li><span className="font-medium">Frontend:</span> React.js, HTML, CSS, JavaScript (ES6+), Tailwind CSS</li>
          <li><span className="font-medium">Backend:</span> Node.js, Express.js</li>
          <li><span className="font-medium">Database:</span> MongoDB</li>
          <li><span className="font-medium">Tools:</span> Git, GitHub, Vercel, REST APIs</li>
        </ul>

        {/* Education */}
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Education
        </h3>
        <p className="text-gray-800 mb-8">
          <span className="font-medium">B.Tech in Mechanical Engineering</span> – 
          SASTRA Deemed University, Thanjavur
        </p>

        {/* Experience */}
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Experience
        </h3>
        <p className="text-gray-800">
          Worked on multiple <span className="font-medium">personal projects</span> 
          focused on <span className="font-medium">Full Stack Development</span>.  
          These projects helped me strengthen my skills in building and deploying 
          web applications.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
