import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface WorkHistoryProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const WorkHistory: React.FC<WorkHistoryProps> = ({ company, position, period, location, description }) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
      <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700 group-last:hidden" />
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{position}</h3>
        <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{company}</h4>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {location}
          </span>
        </div>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300 before:content-['•'] before:mr-2 before:text-blue-500 dark:before:text-blue-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkHistory;