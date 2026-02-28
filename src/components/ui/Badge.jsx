// Badge component for tech stack tags
// WHY: Consistent visual representation of tags throughout the app
export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-800 text-gray-300',
    primary: 'bg-primary/20 text-primary',
    accent: 'bg-accent/20 text-accent',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
