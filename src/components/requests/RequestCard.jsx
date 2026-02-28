import { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useRequests } from '../../context/RequestsContext';
import { formatDate } from '../../utils/helpers';

// Individual request card component
// WHY: Encapsulates request display logic and interest interaction
export const RequestCard = ({ request }) => {
  const [showContact, setShowContact] = useState(false);
  const { incrementInterest } = useRequests();

  const handleInterest = () => {
    setShowContact(true);
    incrementInterest(request.id);
  };

  // Visual indicators for type and level
  const typeColors = {
    learning: 'bg-blue-900/50 border-blue-700',
    mentoring: 'bg-green-900/50 border-green-700',
    collaboration: 'bg-purple-900/50 border-purple-700',
  };

  const levelEmojis = {
    beginner: '🌱',
    intermediate: '🚀',
    advanced: '⚡',
  };

  return (
    <div className={`bg-gray-900 border-2 rounded-lg p-6 hover:border-primary transition-colors ${typeColors[request.type]}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{request.title}</h3>
          <p className="text-sm text-gray-400">{formatDate(request.createdAt)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl" title={request.level}>
            {levelEmojis[request.level]}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp-3">{request.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {request.techStack.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-400 capitalize">
            📋 {request.type}
          </span>
          <span className="text-gray-400 capitalize">
            {levelEmojis[request.level]} {request.level}
          </span>
        </div>
        {request.interested > 0 && (
          <span className="text-sm text-gray-400">
            ❤️ {request.interested} interested
          </span>
        )}
      </div>

      {/* Action Button */}
      {!showContact ? (
        <Button
          variant="primary"
          className="w-full"
          onClick={handleInterest}
        >
          I'm Interested 🤝
        </Button>
      ) : (
        <div className="bg-gray-800 border border-primary rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-2">Contact via:</p>
          <p className="text-white font-medium break-all">{request.contact}</p>
        </div>
      )}
    </div>
  );
};
