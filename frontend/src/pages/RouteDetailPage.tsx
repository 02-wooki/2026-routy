import React from 'react';
import { ChevronLeft, Share2, MapPin, Heart, MessageCircle } from 'lucide-react';
import { MOCK_ROUTES } from '../api/mockData';
import RouteMap from '../components/map/RouteMap';
import { useSocialStore } from '../store/useSocialStore';

interface RouteDetailPageProps {
  routeId: string;
  onBack: () => void;
}

const RouteDetailPage: React.FC<RouteDetailPageProps> = ({ routeId, onBack }) => {
  const route = MOCK_ROUTES.find(r => r.id === routeId) || MOCK_ROUTES[0];
  const { followingIds, toggleFollow } = useSocialStore();
  const isFollowing = followingIds.includes(route.userId);

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      {/* 상단 헤더 */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">{route.title}</h1>
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 size={20} />
        </button>
      </header>

      <main className="flex-1 space-y-8">
        {/* 상단 지도 영역 */}
        <section className="px-6 mt-2">
          <div className="w-full h-56 rounded-[32px] overflow-hidden shadow-2xl shadow-blue-100/50 border border-blue-50">
            <RouteMap points={route.points} activeIndex={0} />
          </div>
        </section>

        {/* 사용자 정보 섹션 */}
        <section className="flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={route.userImage} 
                alt={route.userName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 leading-tight">{route.userName}</h2>
              <p className="text-[11px] text-gray-400 font-medium">팔로워 1.4K · 루트 24</p>
            </div>
          </div>
          <button 
            onClick={() => toggleFollow(route.userId)}
            className={`px-6 py-2 rounded-2xl text-sm font-bold transition-all active:scale-95 ${
              isFollowing 
                ? 'bg-gray-100 text-gray-900' 
                : 'bg-blue-600 text-white shadow-lg shadow-blue-200'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </section>

        {/* 장소 리스트 */}
        <div className="overflow-x-auto scroll-smooth no-scrollbar pb-10 px-6">
          <div className="flex gap-6 snap-x snap-mandatory">
            {route.points.map((point, index) => (
              <section key={point.id} className="min-w-[85vw] sm:min-w-[52vw] lg:min-w-[34vw] flex-shrink-0 snap-center space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {index === 0 ? '첫 번째' : index === 1 ? '두 번째' : `${index + 1}번째`} 장소 - {point.description.split(' ')[0]}
                  </h3>
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <MapPin size={12} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-wider text-nowrap">Point {index + 1}</span>
                  </div>
                </div>

                {/* 이미지 */}
                <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl shadow-gray-200/50">
                  <img 
                    src={point.photoUrl} 
                    alt={point.description} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 설명 */}
                <div className="space-y-4 pt-2">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {point.description}
                    <br /><br />
                    간사이 공항에 내렸으면 긴말 말고 글리코상부터 가야죠. 반박 시 내 말이 맞다데스.
                    근데 저희 같은 일본인들은 니네처럼 대충 침흘리면서 쳐다만 보지 않는다. 칸코쿠진들밖에 안가는 개범티 스팟 말고 나만 아는 찐 사진 스팟 알려줌.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                     <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                      <Heart size={20} />
                      <span className="text-xs font-bold">1.2k</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                      <MessageCircle size={20} />
                      <span className="text-xs font-bold">48</span>
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* 데스크톱용 플로팅 액션 바 (옵션) */}
      <div className="hidden lg:flex fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-full px-8 py-4 items-center gap-8 z-50">
        <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <Heart size={20} /> Like
        </button>
        <div className="w-px h-4 bg-gray-200" />
        <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <MessageCircle size={20} /> Comment
        </button>
        <div className="w-px h-4 bg-gray-200" />
        <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <Share2 size={20} /> Share
        </button>
      </div>
    </div>
  );
};

export default RouteDetailPage;
