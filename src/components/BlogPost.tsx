import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  preview: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, preview, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{preview}</p>
      <a
        href={link}
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        Read More
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

export default BlogPost;