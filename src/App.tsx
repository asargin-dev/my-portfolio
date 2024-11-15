import { Github, Mail, Linkedin, Download, ChevronDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import WorkHistory from "./components/WorkHistory";
import NavBar from "./components/NavBar";

function App() {
  const workHistory = [
    {
      company: "Ftech Labs",
      position: "Back End Developer",
      period: "Jan 2024 - Present",
      location: "Istanbul, TR",
      description: [
        "Developed backend APIs for web and mobile applications in the cryptocurrency sector",
        "Engineered custom applications for trading in Borsa Istanbul",
        "Executed scheduled cron jobs for data analysis",
        "Implemented microservices architecture using gRPC",
        "Utilized technologies such as Golang (Gin, Fiber), PostgreSQL, MySQL, SQLite, Redis, gRPC, MQTT, and Amazon Keyspaces",
      ],
    },
    {
      company: "Tarla.io",
      position: "Full Stack Developer",
      period: "Jan 2022 - Jan 2024",
      location: "Ankara, TR",
      description: [
        "Created mobile and web applications tailored for agricultural needs",
        "Integrated satellite APIs to gather and process agricultural information",
        "Developed image processing applications for satellite imagery",
        "Designed global rain and cloud tracking applications for meteorological purposes",
        "Built weather alert applications for hazard warnings",
        "Scheduled cron jobs for comprehensive agricultural data analysis",
        "Technologies used include Golang (Gin), Python (Aiohttp, Flask, Sanic), PostgreSQL, Redis, React.js, Google Maps, Mapbox, Leaflet, Google Cloud Platform, and AWS Services",
      ],
    },
    {
      company: "BTC-AG",
      position: "Software Developer",
      period: "Oct 2020 - Jan 2022",
      location: "Istanbul, TR",
      description: [
        "Developed SAP and Java backend data integration APIs (REST, SOAP)",
        "Created stock management web applications",
        "Engineered custom cloud-based CRM applications",
        "Designed production cycle management dashboards",
        "Utilized Java Spring, Hibernate, and Java Server Faces",
        "Implemented CI/CD processes using Jenkins",
        "Worked with SAP (Cloud for Customers - C4C) and embedded scripting",
      ],
    },
  ];

  const projects = [
    {
      title: "Gouant",
      description:
        "Provides functions to calculate implied volatility and various Greeks for financial derivatives, such as options.",
      github: "https://github.com/asargin-dev/gouant",
      tech: ["Golang"],
    },
    {
      title: "Countdown Task Manager",
      description:
        "Developed a tool to track tasks and set countdown timers.Recorded planned versus actual completion times for tasks.",
      github: "https://github.com/asargin-dev/countdown-task-manager",
      tech: ["Typescript", "React"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavBar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
            Ahmet Sargın
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-delay-1">
            Software Engineer
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400 animate-fade-in-delay-2">
            Passionate about building scalable applications and solving complex
            problems.
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-3">
            <a
              href="https://github.com/asargin-dev"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ahmetsargin"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@ahmetsargin.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>

      {/* About Section */}
      <Section title="About Me" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Workspace"
              className="relative rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With over 5 years of experience in software development, I
              specialize in building high-performance web applications and
              distributed systems. I'm passionate about clean code, scalable
              architecture, and emerging technologies.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Python",
                "Golang",
                "TypeScript",
                "React",
                "Node.js",
                "AWS",
                "GCP",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </Section>

      {/* Work History Section */}
      <Section title="Work Experience" id="experience">
        <div className="max-w-3xl mx-auto">
          {workHistory.map((job, index) => (
            <WorkHistory key={index} {...job} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects" id="projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* Blog Section */}
      {/*<Section title="Latest Blog Posts" id="blog">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <BlogPost key={blog.title} {...blog} />
          ))}
        </div>
      </Section>*/}

      {/* Contact Section */}
      <Section title="Get in Touch" id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:contact@ahmetsargin.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ahmetsargin"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm py-6 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Ahmet Sargın. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
