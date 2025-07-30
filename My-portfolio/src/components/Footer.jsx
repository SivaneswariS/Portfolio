import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-lg mb-4">© {new Date().getFullYear()} Sivaneswari. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/SivaneswariS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sivaneswari10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sivaneswarisivakumar12@gmail.com"
            className="hover:text-blue-400 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
