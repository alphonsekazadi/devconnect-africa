import { Search } from 'lucide-react';

// Empty state component for better UX
// WHY: Provides clear feedback when no data is available
export const EmptyState = ({ title, description, action }) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <Search className="w-16 h-16 mx-auto mb-4 text-gray-600" />
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
};
