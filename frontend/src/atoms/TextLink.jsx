import { colorThemeMap } from '../utils/theme';

const TextLink = ({
  children,
  colorTheme = 's', // 'p' | 's' | 'm'
  underline = true,
  customText = 'text-m400',
  customHoverText = '',
  className = '',
  onClick,
  ...props
}) => {
  const theme = colorThemeMap[colorTheme] || colorThemeMap.s;

  const baseClasses = 'text-sm font-bold transition-colors cursor-pointer select-none';
  const underlineClasses = underline ? 'underline underline-offset-4' : '';
  const hoverTextClass = customHoverText || theme.hoverText;
  const colorClasses = `${customText} ${hoverTextClass}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${underlineClasses} ${colorClasses} bg-transparent border-none p-0 outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextLink;
