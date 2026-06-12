import { colorThemeMap } from '../utils/theme';

const Input = ({
  colorTheme, // 'p' | 's' | 'm'
  hasIcon = false, // adjusts left padding to accommodate icons
  customBg = 'bg-gray-100',
  customBorder = 'border-2 border-transparent',
  customFocusBg = 'focus:bg-white',
  customFocusBorder = '',
  customFocusRing = 'focus:ring-4',
  customFocusRingColor = '',
  className = '',
  type = 'text',
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const theme = colorThemeMap[colorTheme] || colorThemeMap.p;

  const baseClasses = 'w-full rounded-2xl py-3 pr-4 text-sm font-bold transition-all placeholder:text-m300 outline-none';
  const paddingLeftClass = hasIcon ? 'pl-12' : 'pl-6';

  const defaultFocusBorder = customFocusBorder || theme.focusBorder;
  const defaultFocusRingColor = customFocusRingColor || theme.ring;

  const styleClasses = `${customBg} ${customBorder} ${customFocusBg} ${defaultFocusBorder} ${customFocusRing} ${defaultFocusRingColor}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${paddingLeftClass} ${styleClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;
