import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="p-6 bg-gray-100 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="w-full p-2 border rounded h-32" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a href="https://github.com/SivaneswariS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sivaneswari10" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
        <a href="mailto:sivaneswarisivakumar12@gmail.com" className="hover:text-blue-500"><FaEnvelope /></a>
      </div>

      <div className="mt-6">
        <a href="/Sivaneswari_full stack developer_resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Download Resume</a>
      </div>
    </section>
  );
}

export default ContactPage;
