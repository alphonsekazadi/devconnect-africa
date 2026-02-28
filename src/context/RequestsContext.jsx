import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateId, parseTechStack } from '../utils/helpers';

const RequestsContext = createContext();

// WHY: Context prevents prop drilling and centralizes request management
// Easy to replace localStorage with API calls in the future
export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useLocalStorage('devconnect-requests', []);

  // Add a new skill request
  const addRequest = (requestData) => {
    const newRequest = {
      id: generateId(),
      ...requestData,
      techStack: parseTechStack(requestData.techStack),
      createdAt: Date.now(),
      interested: 0, // Track how many people showed interest
    };

    setRequests(prev => [newRequest, ...prev]);
    return newRequest;
  };

  // Increment interest count when someone clicks "I'm Interested"
  const incrementInterest = (requestId) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === requestId
          ? { ...req, interested: req.interested + 1 }
          : req
      )
    );
  };

  const value = {
    requests,
    addRequest,
    incrementInterest,
  };

  return (
    <RequestsContext.Provider value={value}>
      {children}
    </RequestsContext.Provider>
  );
};

// Custom hook to use requests context
export const useRequests = () => {
  const context = useContext(RequestsContext);
  if (!context) {
    throw new Error('useRequests must be used within RequestsProvider');
  }
  return context;
};
