import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useRequests } from '../../context/RequestsContext';

// Form component for creating new skill requests
// WHY: Encapsulates form logic, validation, and submission
export const RequestForm = () => {
  const navigate = useNavigate();
  const { addRequest } = useRequests();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    level: 'beginner',
    contact: '',
    type: 'learning',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.techStack.trim()) {
      newErrors.techStack = 'At least one tech stack is required';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    addRequest(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Looking for React mentor"
          className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary ${
            errors.title ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe what you're looking for..."
          rows="5"
          className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none ${
            errors.description ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Tech Stack */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tech Stack * <span className="text-gray-500">(comma-separated)</span>
        </label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          placeholder="e.g., React, Node.js, MongoDB"
          className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary ${
            errors.techStack ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.techStack && <p className="text-red-500 text-sm mt-1">{errors.techStack}</p>}
      </div>

      {/* Type and Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Type *
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="learning">Learning</option>
            <option value="mentoring">Mentoring</option>
            <option value="collaboration">Collaboration</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Level *
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Contact */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Contact * <span className="text-gray-500">(Discord / Telegram / Email)</span>
        </label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="e.g., @username on Discord or email@example.com"
          className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary ${
            errors.contact ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex space-x-4">
        <Button type="submit" variant="accent" className="flex-1 flex items-center justify-center">
          <Send className="w-4 h-4 mr-2" />
          Post Request
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate('/')}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
