import { Plus, Heart } from 'lucide-react';
import Button from '../atoms/Button';

const FeedHeader = ({
  onAddRoute,
  onLikeFeed,
  className = '',
  ...props
}) => {
  return (
    <header
      className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-m100/50 px-6 py-4 flex justify-between items-center ${className}`}
      {...props}
    >
      <h1 className="text-2xl font-black text-m900 tracking-tighter italic select-none">
        Routy
      </h1>
      <div className="flex items-center gap-4">
        {/* Add Route Button */}
        <Button
          onClick={onAddRoute}
          variant="primary"
          colorTheme="s"
          size="sm"
          icon={Plus}
          className="p-2 bg-s600 text-white rounded-full shadow-lg shadow-s200 hover:scale-110 transition-transform"
        />

        {/* Feed Likes/Notifications Button */}
        <button
          onClick={onLikeFeed}
          className="p-2 text-m400 hover:text-m900 transition-colors focus:outline-none"
        >
          <Heart size={24} />
        </button>
      </div>
    </header>
  );
};

export default FeedHeader;
