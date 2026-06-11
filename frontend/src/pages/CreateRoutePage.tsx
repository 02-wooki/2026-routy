import React from 'react';
import RouteMap from '../components/map/RouteMap';
import PhotoFeed from '../components/feed/PhotoFeed';
import { useSocialStore } from '../store/useSocialStore';
import { ChevronLeft, Share2 } from 'lucide-react';

interface CreateRoutePageProps {
  onBack: () => void;
}

const CreateRoutePage: React.FC<CreateRoutePageProps> = ({ onBack }) => {
  const { followingIds, toggleFollow } = useSocialStore();
  const userId = 'user-1'; // 니혼진데스 ID
  const isFollowing = followingIds.includes(userId);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white pb-32 lg:pb-0">
      {/* 상단 헤더 - 모바일에서만 유지하거나 데스크톱에서는 스타일 변경 */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-40 lg:hidden">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">루트 만들기</h1>
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 size={20} />
        </button>
      </header>

      <main className="flex-1 lg:flex lg:gap-10 lg:px-10 lg:py-10">
        {/* 왼쪽 섹션: 지도 및 정보 (데스크톱에서 고정 느낌) */}
        <section className="flex-1 space-y-8 px-6 lg:px-0 lg:max-w-xl lg:sticky lg:top-10 lg:h-fit">
          <div className="hidden lg:flex items-center gap-4 mb-8">
            <button 
              onClick={onBack}
              className="p-2 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter text-balance">새로운 루트 기록</h1>
          </div>

          <div className="w-full h-48 lg:h-80 rounded-[32px] overflow-hidden shadow-2xl shadow-blue-100/50 border border-blue-50">
            <RouteMap />
          </div>

          {/* 사용자 정보 섹션 */}
          <div className="flex items-center justify-between bg-gray-50/50 p-6 rounded-[32px] border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900 leading-tight">니혼진데스</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">팔로워 1.4K · 루트 24</p>
              </div>
            </div>
            <button 
              onClick={() => toggleFollow(userId)}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all active:scale-95 ${
                isFollowing 
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-100' 
                  : 'bg-blue-600 text-white shadow-xl shadow-blue-200'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
          
          <div className="hidden lg:block">
            <h3 className="text-xl font-bold text-gray-900 mb-4">루트 상세 설명</h3>
            <p className="text-gray-500 leading-relaxed">
              오사카의 상징인 오사카 성을 중심으로 주변의 역사적인 명소들을 탐방하는 루트입니다. 
              봄에는 벚꽃이 만개하여 더욱 아름다운 풍경을 자아내며, 가을에는 단풍이 절경을 이룹니다.
            </p>
          </div>
        </section>

        {/* 오른쪽 섹션: 사진 피드 */}
        <section className="flex-1 mt-8 lg:mt-0 px-6 lg:px-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl lg:font-black tracking-tight">여정 기록</h2>
            <button className="lg:hidden p-2 bg-gray-50 rounded-xl">
              <Share2 size={18} />
            </button>
          </div>
          <PhotoFeed />
        </section>
      </main>
    </div>
  );
};

export default CreateRoutePage;
