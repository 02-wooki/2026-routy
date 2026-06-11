import { Home, Compass, User, Search, MapPin } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'routes', label: 'Routes', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'search', label: 'Search', icon: Search },
  ];

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[32px] px-8 py-4 flex justify-between items-center z-50">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => (id === 'routes' || id === 'explore') && onPageChange(id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon size={24} strokeWidth={currentPage === id ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop Sidebar Nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 xl:w-64 bg-white border-r border-gray-100 flex-col py-10 px-4 z-50 transition-all">
        <div className="flex items-center gap-3 px-2 mb-12">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 shrink-0">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter hidden xl:block">Routy</span>
        </div>

        <div className="flex-1 space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => (id === 'routes' || id === 'explore') && onPageChange(id)}
              className={`w-full flex items-center gap-4 px-3 py-4 rounded-2xl transition-all group ${
                currentPage === id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <Icon size={24} strokeWidth={currentPage === id ? 2.5 : 2} className="shrink-0" />
              <span className={`font-bold text-sm hidden xl:block transition-all ${
                currentPage === id ? 'translate-x-1' : 'group-hover:translate-x-1'
              }`}>{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto px-2">
          <button className="flex items-center gap-3 w-full p-2 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="User" />
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-sm font-bold text-gray-900">관리자</p>
              <p className="text-[11px] font-medium text-gray-400">@admin</p>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
