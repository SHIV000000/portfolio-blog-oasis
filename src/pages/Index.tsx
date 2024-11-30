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
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
              SOFTWARE
              <span className="block text-secondary">DEVELOPER</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              An enthusiastic technically prepared individual with technical experience ready to explore new technologies
              and solve complex problems.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/lovable-uploads/d9b61507-d6c4-4af1-8447-ea1c4ffe013b.png"
              alt="Developer"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-primary/5 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-muted p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="border-l-2 border-secondary pl-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-secondary mb-2">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/5 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-secondary focus:outline-none transition-colors"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/80 transition-colors"
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