import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, tech }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <Github size={16} />
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;