import { useState, useMemo } from 'react';
import { RequestList } from '../components/requests/RequestList';
import { FilterBar } from '../components/requests/FilterBar';
import { useRequests } from '../context/RequestsContext';
import { filterRequests } from '../utils/helpers';

// Home page - Browse all skill requests
// WHY: Main landing page, combines filtering and display logic
export const Home = () => {
  const { requests } = useRequests();
  
  const [filters, setFilters] = useState({
    techStack: '',
    type: 'all',
    level: 'all',
  });

  // Memoize filtered results to avoid unnecessary recalculations
  const filteredRequests = useMemo(() => {
    return filterRequests(requests, filters);
  }, [requests, filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Connect with African Developers
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Find collaborators, mentors, or share your expertise with the community
        </p>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} onFilterChange={setFilters} />

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-400">
          {filteredRequests.length} {filteredRequests.length === 1 ? 'request' : 'requests'} found
        </p>
      </div>

      {/* Request List */}
      <RequestList requests={filteredRequests} />
    </div>
  );
};
