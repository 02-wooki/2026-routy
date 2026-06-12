import Input from '../atoms/Input';
import { colorThemeMap } from '../utils/theme';

const IconInput = ({
  icon: Icon,
  colorTheme, // 'p' | 's' | 'm'
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  iconSize = 20,
  ...props
}) => {
  const theme = colorThemeMap[colorTheme] || colorThemeMap.p;

  return (
    <div className={`relative group w-full ${className}`}>
      {Icon && (
        <Icon
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-m400 group-focus-within:${theme.text} transition-colors pointer-events-none`}
          size={iconSize}
        />
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        colorTheme={colorTheme}
        hasIcon={!!Icon}
        {...props}
      />
    </div>
  );
};

export default IconInput;
