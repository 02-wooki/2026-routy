import { MOCK_ROUTES } from '../api/mockData';
import { Search, Map as MapIcon, ChevronRight } from 'lucide-react';

const ExplorePage = ({ onViewRoute }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-32 lg:pb-10">
      {/* 검색 헤더 */}
      <header className="px-6 py-6 space-y-4 lg:py-12 lg:px-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter lg:text-5xl">Explore</h1>
          <div className="flex bg-gray-100 rounded-full p-1 lg:hidden">
            <button className="p-2 bg-white rounded-full shadow-sm">
              <Search size={18} />
            </button>
            <button className="p-2 text-gray-400">
              <MapIcon size={18} />
            </button>
          </div>
        </div>
        <div className="relative max-w-2xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="어디로 떠나고 싶으신가요?"
            className="w-full bg-gray-50 border-none rounded-[24px] py-5 pl-14 pr-6 text-base font-medium focus:ring-4 focus:ring-blue-50 transition-all"
          />
        </div>
      </header>

      {/* 인기 루트 리스트 */}
      <main className="px-6 space-y-8 lg:px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl lg:font-black tracking-tight">인기 루트 99+</h2>
          <button className="text-sm font-bold text-blue-600 flex items-center hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
            인기순 <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 pb-10">
          {MOCK_ROUTES.map((route) => (
            <div 
              key={route.id} 
              onClick={() => onViewRoute(route.id)}
              className="flex lg:flex-col gap-4 group cursor-pointer bg-white lg:hover:shadow-2xl lg:hover:shadow-blue-100/50 lg:rounded-[40px] lg:p-4 transition-all duration-500 border border-transparent lg:hover:border-blue-50"
            >
              <div className="w-24 h-24 lg:w-full lg:h-64 rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-lg shadow-gray-200 lg:shadow-none shrink-0">
                <img 
                  src={route.points[0].photoUrl} 
                  alt={route.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0 lg:mt-2 lg:px-2">
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl leading-tight truncate">{route.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum quis sapien vulputate...
                </p>
                <div className="flex items-center justify-between mt-4">
                   <div className="flex items-center gap-2">
                     <img src={route.userImage} className="w-6 h-6 rounded-full border border-white shadow-sm" alt="" />
                     <span className="text-[11px] lg:text-xs font-bold text-gray-400 uppercase tracking-wider">{route.userName}</span>
                   </div>
                  <span className="text-[11px] lg:text-xs font-bold text-gray-300">2일 전</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
