import { MOCK_ROUTES } from '../api/mockData';
import { Heart, MessageCircle, Share2, MoreHorizontal, MapPin, Plus } from 'lucide-react';

const FeedPage = ({ onAddRoute, onViewRoute }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50 pb-32 lg:pb-10">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter italic">Routy</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={onAddRoute}
            className="p-2 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-200 hover:scale-110 transition-transform"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
            <Heart size={24} />
          </button>
        </div>
      </header>

      {/* 피드 리스트 */}
      <main className="max-w-2xl mx-auto w-full py-6 space-y-8 lg:py-10">
        {MOCK_ROUTES.map((route) => (
          <article key={route.id} className="bg-white lg:rounded-[32px] lg:border border-gray-100 overflow-hidden lg:shadow-sm">
            {/* 게시자 정보 */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                  <img src={route.userImage} alt={route.userName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 leading-none">{route.userName}</h3>
                  <p className="text-[11px] text-gray-400 font-medium mt-1">{route.userHandle}</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* 이미지 영역 */}
            <div 
              onClick={() => onViewRoute(route.id)}
              className="aspect-[4/5] relative bg-gray-100 group cursor-pointer overflow-hidden"
            >
              <img 
                src={route.points[0].photoUrl} 
                alt={route.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* 이미지 위 오버레이 (간단한 지도 정보) */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                  <MapPin size={14} className="text-white" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">{route.points.length} Points</span>
                </div>
              </div>
            </div>

            {/* 액션 버튼 */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-gray-900 hover:scale-110 transition-transform active:scale-95">
                  <Heart size={26} />
                </button>
                <button className="text-gray-900 hover:scale-110 transition-transform active:scale-95">
                  <MessageCircle size={26} />
                </button>
                <button className="text-gray-900 hover:scale-110 transition-transform active:scale-95">
                  <Share2 size={24} />
                </button>
              </div>
              <button 
                onClick={() => onViewRoute(route.id)}
                className="flex items-center gap-1.5 text-blue-600 font-black text-xs uppercase tracking-tighter px-3 py-1 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                <MapPin size={12} strokeWidth={3} />
                <span>View Route</span>
              </button>
            </div>

            {/* 텍스트 내용 */}
            <div className="px-5 pb-6 space-y-2">
              <h4 className="font-black text-gray-900 tracking-tight text-lg">{route.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-900 mr-2">{route.userName}</span>
                이번 여행에서 가장 기억에 남는 순간들이었습니다. {route.title} 코스 정말 추천해요! #여행 #Routy #추억
              </p>
              <button className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-2 hover:text-blue-600 transition-colors">
                View all 12 comments
              </button>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default FeedPage;
