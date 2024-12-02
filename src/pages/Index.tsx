import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 border border-white/20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold mb-6">
              SOFTWARE
              <span className="block text-gray-500">DEVELOPER</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              An enthusiastic technically prepared individual with technical experience ready to explore new technologies
              and solve complex problems.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80">
              <img
                src="/lovable-uploads/9646ab6b-ae5b-44cb-84d4-9480515b88ee.png"
                alt="Profile"
                className="w-full h-full object-cover border-2 border-white/20 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 border border-white/20 py-12">
          <h2 className="text-4xl font-bold mb-12 text-left">Projects</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {projects.map((project) => (
              <div key={project.title} className="bg-muted p-6 rounded-none border border-white/10 hover:border-white/30 transition-all duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20 border border-white/20">
        <h2 className="text-4xl font-bold mb-12 text-left">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="border-l-2 border-white/20 pl-6 hover:border-white/40 transition-colors">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-secondary">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 border border-white/20 py-12">
          <h2 className="text-4xl font-bold mb-12">LET'S WORK <span className="text-gray-500">TOGETHER</span></h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full p-3 bg-muted rounded-none border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your@email.com"
                  className="w-full p-3 bg-muted rounded-none border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here"
                className="w-full p-3 bg-muted rounded-none border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-muted text-white py-3 border border-white/20 hover:border-white/40 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;