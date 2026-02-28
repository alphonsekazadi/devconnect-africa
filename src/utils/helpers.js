// Generate unique IDs for requests
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Parse comma-separated tech stack into array
export const parseTechStack = (techStackString) => {
  return techStackString
    .split(',')
    .map(tech => tech.trim())
    .filter(tech => tech.length > 0);
};

// Filter requests based on search criteria
export const filterRequests = (requests, filters) => {
  return requests.filter(request => {
    // Filter by type
    if (filters.type && filters.type !== 'all' && request.type !== filters.type) {
      return false;
    }

    // Filter by level
    if (filters.level && filters.level !== 'all' && request.level !== filters.level) {
      return false;
    }

    // Filter by tech stack (keyword search)
    if (filters.techStack && filters.techStack.trim() !== '') {
      const searchTerm = filters.techStack.toLowerCase();
      const hasTech = request.techStack.some(tech => 
        tech.toLowerCase().includes(searchTerm)
      );
      if (!hasTech) return false;
    }

    return true;
  });
};

// Format date for display
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
