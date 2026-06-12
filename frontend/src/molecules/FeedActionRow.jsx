import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';
import Button from '../atoms/Button';

const FeedActionRow = ({
  routeId,
  onViewRoute,
  onLike,
  onComment,
  onShare,
  showViewRoute = true,
  isLiked = false,
  likesCount = 0,
  commentsCount = 0,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center justify-between px-5 py-4 ${className}`} {...props}>
      <div className="flex items-center gap-4">
        {/* Like Button */}
        <button
          onClick={() => onLike && onLike(routeId)}
          className={`text-m900 hover:scale-110 transition-transform active:scale-95 focus:outline-none ${isLiked ? 'text-red-500' : ''}`}
        >
          <Heart size={26} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        {/* Comment Button */}
        <button
          onClick={() => onComment && onComment(routeId)}
          className="text-m900 hover:scale-110 transition-transform active:scale-95 focus:outline-none"
        >
          <MessageCircle size={26} />
        </button>

        {/* Share Button */}
        <button
          onClick={() => onShare && onShare(routeId)}
          className="text-m900 hover:scale-110 transition-transform active:scale-95 focus:outline-none"
        >
          <Share2 size={24} />
        </button>
      </div>

      {showViewRoute && onViewRoute && (
        <Button
          onClick={() => onViewRoute(routeId)}
          variant="light"
          colorTheme="s"
          size="sm"
          icon={MapPin}
          className="font-black text-xs uppercase tracking-tighter px-3 py-1 bg-s50 text-s600 hover:bg-s100 transition-colors"
        >
          View Route
        </Button>
      )}
    </div>
  );
};

export default FeedActionRow;
