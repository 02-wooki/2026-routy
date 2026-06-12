import Avatar from '../atoms/Avatar';

const RouteCard = ({
  route,
  onViewRoute,
  className = '',
  ...props
}) => {
  const thumbnail = route.points?.[0]?.photoUrl || 'https://images.unsplash.com/photo-1590559899731-a382839e5549';

  return (
    <div
      onClick={() => onViewRoute && onViewRoute(route.id)}
      className={`flex lg:flex-col gap-4 group cursor-pointer bg-white lg:hover:shadow-2xl lg:hover:shadow-s200/50 lg:rounded-[40px] lg:p-4 transition-all duration-500 border border-transparent lg:hover:border-s100/30 ${className}`}
      {...props}
    >
      {/* Route Thumbnail Image */}
      <div className="w-24 h-24 lg:w-full lg:h-64 rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-lg shadow-m200/40 lg:shadow-none shrink-0">
        <img
          src={thumbnail}
          alt={route.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Route Info Section */}
      <div className="flex flex-col justify-center flex-1 min-w-0 lg:mt-2 lg:px-2">
        <h3 className="font-bold text-m900 text-lg lg:text-xl leading-tight truncate">
          {route.title}
        </h3>
        <p className="text-sm text-m500 mt-1 line-clamp-2 leading-relaxed">
          오사카의 아름다운 동선을 따라 걷는 여정입니다. 역사적인 건물들과 고즈넉한 풍경을 함께 즐길 수 있어 추천하는 산책 코스입니다.
        </p>

        {/* Creator Info Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Avatar
              src={route.userImage}
              alt={route.userName}
              size="sm"
              border={true}
              shadow={true}
              className="w-6 h-6"
            />
            <span className="text-[11px] lg:text-xs font-bold text-m400 uppercase tracking-wider">
              {route.userName}
            </span>
          </div>
          <span className="text-[11px] lg:text-xs font-bold text-m300">2일 전</span>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
