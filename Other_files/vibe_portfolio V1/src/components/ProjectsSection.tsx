import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online store with product filtering, user accounts, and secure checkout process using Stripe integration.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio site showcasing work samples, skills, and contact information with a modern UI/UX design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application featuring task creation, categorization, due dates, and progress tracking with user authentication.",
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Firebase", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application displaying current conditions and forecasts using geolocation and a third-party weather API.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex gap-4 justify-center">
              <a 
                href={project.githubUrl} 
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-teal-500 transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github className="text-white" size={20} />
              </a>
              <a 
                href={project.liveUrl} 
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-teal-500 transition-colors"
                aria-label="View Live Demo"
              >
                <ExternalLink className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent works. Each project reflects my commitment to quality,
            functionality, and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;