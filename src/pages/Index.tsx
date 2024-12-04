import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");

  const projects = [
    {
      title: "Blockchain Certificate Generator",
      description: "A tool for generating secure digital certificates using blockchain technology.",
      link: "#",
    },
    {
      title: "Image Drive",
      description: "Cloud storage solution with advanced image processing capabilities.",
      link: "#",
    },
    {
      title: "LineUp",
      description: "Event management and queuing system for large-scale venues.",
      link: "#",
    },
  ];

  const experiences = [
    {
      role: "Freelance Software Developer",
      period: "2021 - Present",
      description: "Working with various clients on web and mobile applications.",
    },
    {
      role: "React Native Intern",
      period: "2020 - 2021",
      description: "Developed mobile applications using React Native framework.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message, budget });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Animation with Enhanced Noise */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark to-background-dark animate-gradient opacity-95"></div>
        <div className="absolute inset-0 noise-bg opacity-70 contrast-150 brightness-150"></div>
        <div className="absolute inset-0 dark:glare-effect-dark light:glare-effect-light opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/90"></div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 border-4 border-white/20 py-12">
          <h2 className="text-4xl font-bold mb-12 text-left hover:text-primary transition-colors">Projects</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="bg-muted p-6 rounded-none border-4 border-white/20 hover:border-white/40 transition-all duration-300 hover:translate-x-2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:text-white/80">
                      <span className="sr-only">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    <button className="p-2 hover:text-white/80">
                      <span className="sr-only">GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </button>
                    <button className="p-2 hover:text-white/80">
                      <span className="sr-only">External Link</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </button>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="container mx-auto px-4 py-20 border-4 border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-left hover:text-primary transition-colors">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.role}
              className="border-l-4 border-white/20 pl-6 hover:border-white/40 transition-colors hover:translate-x-2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-secondary">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-12 bg-[#141414] border-4 border-white/20">
          <h2 className="text-8xl font-bold mb-12 tracking-tighter">LET'S WORK <span className="text-gray-500">TOGETHER</span></h2>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-3 bg-[#2A2A2A] rounded-none text-white placeholder:text-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your@email.com"
                  className="w-full p-3 bg-[#2A2A2A] rounded-none text-white placeholder:text-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm text-gray-400">Budget</label>
              <select
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-3 bg-[#2A2A2A] rounded-none text-white appearance-none focus:outline-none"
                required
              >
                <option value="" disabled>Select...</option>
                <option value="small">$1,000 - $5,000</option>
                <option value="medium">$5,000 - $10,000</option>
                <option value="large">$10,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full p-3 bg-[#2A2A2A] rounded-none text-white placeholder:text-gray-500 focus:outline-none min-h-[120px]"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#F97316] text-white py-4 transition-colors hover:bg-[#F97316]/90"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
