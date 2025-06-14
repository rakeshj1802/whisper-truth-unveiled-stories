
import React from 'react';

interface ConfessionCardBodyProps {
  title: string;
  content: string;
  preview: string;
  isExpanded: boolean;
}

const ConfessionCardBody: React.FC<ConfessionCardBodyProps> = ({
  title,
  content,
  preview,
  isExpanded,
}) => {
  return (
    <>
      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-purple-300 transition-colors leading-tight">
        {title}
      </h3>
      <div className="text-gray-300 mb-6 relative">
        <p className={`text-sm leading-relaxed transition-all duration-500 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}>
          {isExpanded ? content : preview}
        </p>
        
        {!isExpanded && content.length > preview.length && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900 to-transparent"></div>
        )}
      </div>
    </>
  );
};

export default ConfessionCardBody;
