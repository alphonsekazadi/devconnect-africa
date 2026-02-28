import { RequestCard } from './RequestCard';
import { EmptyState } from '../ui/EmptyState';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

// List component that renders all requests in a grid
// WHY: Separates list rendering logic from individual card logic
export const RequestList = ({ requests }) => {
  if (requests.length === 0) {
    return (
      <EmptyState
        title="No requests found"
        description="Be the first to post a skill request or adjust your filters."
        action={
          <Link to="/create">
            <Button variant="accent">Post First Request</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
};
