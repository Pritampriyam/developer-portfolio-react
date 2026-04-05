import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "WorkNexus – Role-Based Access Control System",
    description:
      "A role-based access control system supporting Admin, Freelancer, and User roles with protected routes, dashboards, and CRUD operations. Features secure access control, analytics, and real-time role-specific functionality.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "RBAC", "CRUD", "localStorage"],
    link: "https://work-nexus-role-based-access-contro.vercel.app/",
    github: "https://github.com/Pritampriyam/-WorkNexus-Role-Based-Access-Control-System",
  },
  {
    title: "AI Interview Preparation Platform",
    description:
      "A full-stack AI-driven platform that analyzes resumes and job descriptions to generate personalized interview strategies, match scores, questions, and preparation roadmaps. Includes secure JWT-based authentication and dynamic resume PDF generation.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google Gemini AI", "Puppeteer"],
    link: "https://interviewnavigator-a71o.onrender.com",
    github: "https://github.com/Pritampriyam/InterviewNavigator",
  },

  {
    title: "Developer Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with React and Tailwind CSS featuring animated UI, project showcase, experience timeline, and an EmailJS-powered contact system for real-time communication.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS", "EmailJS", "JavaScript", "Responsive Design"],
    link: "https://developer-portfolio-wheat-three.vercel.app/",
    github: "https://github.com/Pritampriyam/developer-portfolio-react",
  },
  {
    title: "Full Stack Todo List Application",
    description:
      "A feature-rich MERN stack todo application with task management, priority levels, due dates, drag-and-drop reordering, and real-time filtering. Includes a RESTful API, MongoDB persistence, and offline support using local storage.",
    image: "/projects/project4.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "REST API", "HTML", "CSS"],
    
    link: "https://animated-todo-app.onrender.com",
    github: "https://github.com/Pritampriyam/Animated-Todo-App",
  

  },
  {
    title: "Aurora Weather – Animated Weather Forecast App",
    description:
      "A modern weather forecasting web app built with React and Tailwind CSS, featuring animated UI, real-time weather data using Open-Meteo API, hourly & daily forecasts, and smart activity and outfit suggestions.",
    image: "/projects/project5.png",
    tags: ["React", "Vite", "Tailwind CSS", "Open-Meteo API", "JavaScript", "Responsive UI"],
    link: "https://weather-app-nrg9.onrender.com",
    github: "https://github.com/Pritampriyam/weather-app",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};