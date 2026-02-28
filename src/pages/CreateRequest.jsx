import { RequestForm } from '../components/requests/RequestForm';

// Create Request page
// WHY: Dedicated page for posting new skill requests
export const CreateRequest = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Post a Skill Request
          </h2>
          <p className="text-gray-400">
            Looking to learn, mentor, or collaborate? Share your request with the community.
          </p>
        </div>

        {/* Form */}
        <RequestForm />
      </div>
    </div>
  );
};
