// Filter bar for searching and filtering requests
// WHY: Allows users to quickly find relevant requests
export const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tech Stack Search */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Search Tech Stack
          </label>
          <input
            type="text"
            placeholder="e.g., React, Python..."
            value={filters.techStack}
            onChange={(e) => onFilterChange({ ...filters, techStack: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Types</option>
            <option value="learning">Learning</option>
            <option value="mentoring">Mentoring</option>
            <option value="collaboration">Collaboration</option>
          </select>
        </div>

        {/* Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Level
          </label>
          <select
            value={filters.level}
            onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
    </div>
  );
};
