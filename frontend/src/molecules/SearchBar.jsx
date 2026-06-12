import { Search } from 'lucide-react';
import Input from '../atoms/Input';

const SearchBar = ({
  placeholder = '어디로 떠나고 싶으신가요?',
  value,
  onChange,
  className = '',
  colorTheme = 's',
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search
        className="absolute left-6 top-1/2 -translate-y-1/2 text-m400 group-focus-within:text-s600 transition-colors pointer-events-none"
        size={20}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        colorTheme={colorTheme}
        hasIcon={true}
        customBg="bg-m50/60"
        customBorder="border-none"
        customFocusBg="focus:bg-white"
        className="py-5 pl-14 pr-6 rounded-[24px] text-base font-medium shadow-sm border border-m50/40"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
