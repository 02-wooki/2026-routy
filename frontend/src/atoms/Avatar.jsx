const Avatar = ({
  src,
  alt = 'Profile image',
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  border = true,
  shadow = true,
  className = '',
  ...props
}) => {
  // Size classes
  let sizeClasses = 'w-10 h-10';
  switch (size) {
    case 'sm':
      sizeClasses = 'w-8 h-8';
      break;
    case 'lg':
      sizeClasses = 'w-12 h-12';
      break;
    case 'xl':
      sizeClasses = 'w-14 h-14';
      break;
    case 'md':
    default:
      sizeClasses = 'w-10 h-10';
      break;
  }

  // Border & Shadow
  const borderClass = border ? 'border-2 border-white' : '';
  const shadowClass = shadow ? (size === 'xl' || size === 'lg' ? 'shadow-md' : 'shadow-sm') : '';

  return (
    <div className={`rounded-full overflow-hidden bg-m200 shrink-0 ${sizeClasses} ${borderClass} ${shadowClass} ${className}`} {...props}>
      <img
        src={src || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
