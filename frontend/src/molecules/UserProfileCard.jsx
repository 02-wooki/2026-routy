import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';

const UserProfileCard = ({
  userId,
  userName,
  userImage,
  userStats = '팔로워 1.4K · 루트 24',
  isFollowing = false,
  onFollowToggle,
  avatarSize = 'xl', // 'lg' | 'xl'
  hasBackground = true, // card style with bg/border vs raw flex container
  className = '',
  ...props
}) => {
  const containerClasses = hasBackground
    ? `flex items-center justify-between bg-m50/30 p-6 rounded-[32px] border border-m100/50 ${className}`
    : `flex items-center justify-between ${className}`;

  const spacingClass = avatarSize === 'xl' ? 'gap-4' : 'gap-3';
  const nameSizeClass = avatarSize === 'xl' ? 'text-lg text-m900' : 'text-base text-m900';
  const statsSizeClass = avatarSize === 'xl' ? 'text-xs text-m400 font-bold uppercase tracking-wider mt-0.5' : 'text-[11px] text-m400 font-medium';

  return (
    <div className={containerClasses} {...props}>
      <div className={`flex items-center ${spacingClass}`}>
        <Avatar src={userImage} alt={userName} size={avatarSize} border={true} shadow={true} />
        <div>
          <h2 className={`font-bold leading-tight ${nameSizeClass}`}>{userName}</h2>
          <p className={statsSizeClass}>{userStats}</p>
        </div>
      </div>
      <Button
        onClick={() => onFollowToggle && onFollowToggle(userId)}
        variant={isFollowing ? 'secondary' : 'primary'}
        colorTheme="s"
        size="sm"
        className={`px-6 sm:px-8 py-2.5 rounded-2xl text-xs sm:text-sm font-black active:scale-95 transition-all shadow-sm ${
          isFollowing ? 'bg-white text-m900 border border-m100/80 shadow-sm' : ''
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </div>
  );
};

export default UserProfileCard;
