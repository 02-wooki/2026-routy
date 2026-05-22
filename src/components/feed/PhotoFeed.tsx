import React, { useRef } from 'react';
import { useRouteStore } from '../../store/useRouteStore';
import { parsePhotos } from '../../utils/exifParser';
import { ImagePlus, MapPin } from 'lucide-react';

const PhotoFeed: React.FC = () => {
  const { points, activeIndex, setPoints, setActiveIndex } = useRouteStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const parsedData = await parsePhotos(Array.from(files));
    if (parsedData.length > 0) {
      setPoints(parsedData);
      setActiveIndex(0);
    } else {
      alert('선택한 사진에서 GPS 정보를 찾을 수 없습니다.');
    }
  };

  return (
    <div className="flex flex-col relative">
      {/* 데이터가 없을 때 표시할 빈 화면 */}
      {points.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
            <ImagePlus className="text-blue-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">나의 여행 기록하기</h3>
          <p className="text-gray-500 text-sm mt-2 mb-6 px-10 leading-relaxed">
            GPS 정보가 포함된 사진을 업로드하면<br />자동으로 멋진 동선이 만들어집니다.
          </p>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-black text-white px-8 py-3 rounded-2xl font-bold active:scale-95 transition-transform"
          >
            사진 선택하기
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {/* 현재 활성화된 장소 정보 */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                {activeIndex + 1}번째 장소 - {points[activeIndex].description.split('에서')[0]}
              </h3>
            </div>

            {/* 가로 스크롤 사진 캐러셀 */}
            <div 
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 gap-4"
              onScroll={(e) => {
                const target = e.currentTarget;
                const index = Math.round(target.scrollLeft / target.clientWidth);
                if (index !== activeIndex) {
                  setActiveIndex(index);
                }
              }}
            >
              {points.map((point) => (
                <div 
                  key={point.id}
                  className="min-w-[85%] aspect-[4/5] snap-center relative"
                >
                  <div className="w-full h-full rounded-[32px] overflow-hidden shadow-xl shadow-blue-900/10">
                    <img 
                      src={point.photoUrl} 
                      alt={point.description}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center shadow-sm border border-white/20">
                        <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-xs font-black text-gray-800 uppercase tracking-wider">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* 추가 업로드 카드 */}
              <div className="min-w-[40%] aspect-[4/5] snap-center flex items-center justify-center">
                 <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-500 hover:bg-white hover:shadow-lg transition-all border border-gray-100"
                >
                  <ImagePlus size={24} />
                </button>
              </div>
            </div>

            {/* 설명 텍스트 영역 */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed font-medium">
                {points[activeIndex].description} 에 다녀왔습니다. 날씨가 너무 좋아서 사진이 정말 잘 나왔네요! 이 장소의 분위기를 사진에 다 담을 수 없어서 아쉽습니다.
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex + 1 ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 숨겨진 파일 입력 필드 */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple 
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default PhotoFeed;
