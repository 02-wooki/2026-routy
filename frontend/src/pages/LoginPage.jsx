import { useState } from 'react';
import { useAuthStore } from '../store/useSocialStore';
import { MapPin, Lock, User as UserIcon, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuthStore();
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login({
        id: 'admin-id',
        name: '관리자',
        handle: '@admin',
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        followerCount: 999,
        followingCount: 0,
        routeCount: 100,
      });
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다. (admin/admin)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center lg:p-10">
      {/* 배경 장식 요소 (데스크톱 전용) */}
      <div className="hidden lg:block fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="hidden lg:block fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-6xl flex bg-white lg:rounded-[48px] lg:shadow-[0_32px_120px_rgba(0,0,0,0.08)] overflow-hidden min-h-screen lg:min-h-[800px]">
        {/* 왼쪽: 히어로 영역 (데스크톱 전용) */}
        <div className="hidden lg:flex flex-1 bg-blue-600 p-20 flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 border-[40px] border-white rounded-full" />
            <div className="absolute bottom-20 left-10 w-96 h-96 border-[60px] border-white rounded-full" />
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10">
              <MapPin className="text-white w-8 h-8" />
            </div>
            <h1 className="text-6xl font-black tracking-tighter mb-6 leading-tight">
              당신의 여정을<br />가장 아름답게.
            </h1>
            <p className="text-xl text-blue-100 font-medium max-w-md leading-relaxed">
              Routy와 함께라면 평범한 산책도 특별한 기록이 됩니다. 지금 바로 시작해보세요.
            </p>
          </div>

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Trusted by 10,000+ travelers</p>
          </div>
        </div>

        {/* 오른쪽: 폼 영역 */}
        <div className="flex-1 flex flex-col px-8 py-12 lg:px-20 lg:py-24 justify-between bg-white">
          <div className="lg:hidden mb-12">
            <div className="w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center shadow-xl shadow-blue-200">
              <MapPin className="text-white w-8 h-8" />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Welcome back</h2>
              <p className="text-gray-400 font-medium">관리자 계정으로 접속하여 기능을 확인해보세요. (admin/admin)</p>
            </div>

            <div className="space-y-8">
              <div className="flex bg-gray-100 p-1 rounded-2xl">
                <button 
                  onClick={() => setIsLoginView(true)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${isLoginView ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}
                >
                  로그인
                </button>
                <button 
                  onClick={() => setIsLoginView(false)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${!isLoginView ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}
                >
                  회원가입
                </button>
              </div>

              <form onSubmit={handleAuth} className="space-y-4">
                <div className="relative group">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 pl-12 pr-4 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 pl-12 pr-4 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-gray-300"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-black text-lg shadow-2xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-[0.98] lg:hover:scale-[1.02] transition-all mt-8"
                >
                  {isLoginView ? '로그인' : '계정 만들기'}
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="text-gray-400 text-sm font-bold hover:text-blue-600 transition-colors underline underline-offset-4">
              비밀번호를 잊으셨나요?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
