import { colorThemeMap } from '../utils/theme';

const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'light' | 'ghost' | 'text' | 'danger'
  colorTheme = 'p', // 'p' | 's' | 'm'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon = null,
  iconPosition = 'left', // 'left' | 'right'
  customBg = '',
  customHoverBg = '',
  customActiveBg = '',
  customText = '',
  customShadow = '',
  customBorder = '',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const theme = colorThemeMap[colorTheme] || colorThemeMap.s;

  // 1. Base structure classes
  let baseClasses = 'inline-flex items-center justify-center font-bold transition-all active:scale-95 duration-200 select-none';

  // 2. Size classes
  let sizeClasses = '';
  if (variant !== 'text') {
    switch (size) {
      case 'sm':
        sizeClasses = 'px-4 py-2 rounded-xl text-xs';
        break;
      case 'lg':
        sizeClasses = 'px-8 py-4 rounded-[24px] text-lg font-black';
        break;
      case 'full':
        sizeClasses = 'w-full py-4 rounded-2xl text-sm';
        break;
      case 'md':
      default:
        sizeClasses = 'px-6 py-3 rounded-2xl text-sm';
        break;
    }
  }

  // 3. Variant styles (combining background, text, borders, hovers, active and shadows)
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = `${customBg || theme.bg} ${customText || 'text-white'} ${customHoverBg || theme.hoverBg} ${customActiveBg || theme.activeBg} shadow-2xl ${customShadow || theme.shadow}`;
      break;
    case 'secondary':
      variantClasses = `${customBg || 'bg-white'} ${customText || 'text-m900'} ${customBorder || 'border border-m100'} ${customHoverBg || 'hover:bg-m50'} ${customActiveBg || 'active:bg-m100'} shadow-sm`;
      break;
    case 'light':
      variantClasses = `${customBg || theme.lightBg} ${customText || theme.lightText} ${customHoverBg || theme.lightHoverBg} ${customActiveBg || 'active:scale-95'}`;
      break;
    case 'ghost':
      variantClasses = `${customBg || 'bg-transparent'} ${customText || 'text-m400 hover:text-m900'} ${customHoverBg || 'hover:bg-m50'} ${customActiveBg || 'active:bg-m100'}`;
      break;
    case 'text':
      baseClasses = 'inline-flex items-center transition-colors duration-200';
      variantClasses = `${customText || 'text-m400'} ${customHoverBg || theme.hoverText} underline underline-offset-4 font-bold`;
      break;
    case 'danger':
      variantClasses = 'bg-danger text-white hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-100';
      break;
  }

  if (disabled) {
    baseClasses += ' opacity-50 cursor-not-allowed pointer-events-none';
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={`shrink-0 ${children ? 'mr-2' : ''}`} size={size === 'sm' ? 14 : size === 'lg' ? 22 : 18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={`shrink-0 ${children ? 'ml-2' : ''}`} size={size === 'sm' ? 14 : size === 'lg' ? 22 : 18} />}
    </button>
  );
};

export default Button;
