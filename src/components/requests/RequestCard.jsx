import { useState } from 'react';
import { Calendar, BookOpen, Users, Lightbulb, Zap, Sprout, Heart } from 'lucide-react';
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

  const typeIcons = {
    learning: BookOpen,
    mentoring: Lightbulb,
    collaboration: Users,
  };

  const levelIcons = {
    beginner: Sprout,
    intermediate: Zap,
    advanced: Zap,
  };

  const TypeIcon = typeIcons[request.type];
  const LevelIcon = levelIcons[request.level];

  return (
    <div className={`bg-gray-900 border-2 rounded-lg p-6 hover:border-primary transition-colors ${typeColors[request.type]}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{request.title}</h3>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(request.createdAt)}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LevelIcon className={`w-5 h-5 ${request.level === 'advanced' ? 'text-accent' : 'text-primary'}`} title={request.level} />
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
          <span className="text-gray-400 capitalize flex items-center">
            <TypeIcon className="w-4 h-4 mr-1" />
            {request.type}
          </span>
          <span className="text-gray-400 capitalize flex items-center">
            <LevelIcon className="w-4 h-4 mr-1" />
            {request.level}
          </span>
        </div>
        {request.interested > 0 && (
          <span className="text-sm text-gray-400 flex items-center">
            <Heart className="w-4 h-4 mr-1 fill-red-500 text-red-500" />
            {request.interested}
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
          I'm Interested
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
