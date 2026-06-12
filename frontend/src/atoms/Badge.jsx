import { colorThemeMap } from '../utils/theme';

const Badge = ({
  children,
  variant = 'light', // 'solid' | 'light' | 'overlay'
  colorTheme = 's', // 'p' | 's' | 'm'
  icon: Icon = null,
  className = '',
  ...props
}) => {
  const theme = colorThemeMap[colorTheme] || colorThemeMap.s;

  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-nowrap select-none';

  let variantClasses = '';
  switch (variant) {
    case 'solid':
      variantClasses = `${theme.bg} text-white`;
      break;
    case 'light':
      variantClasses = `${theme.lightBg} ${theme.lightText}`;
      break;
    case 'overlay':
      variantClasses = 'bg-black/20 backdrop-blur-md text-white border border-white/20';
      break;
  }

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {Icon && <Icon size={12} strokeWidth={3} className="shrink-0" />}
      {children}
    </div>
  );
};

export default Badge;
