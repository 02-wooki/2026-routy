import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, PolylineF } from '@react-google-maps/api';
import { useRouteStore } from '../../store/useRouteStore';
import { Map as MapIcon, Loader2 } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  gestureHandling: "greedy",
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9f1f9" }] // 연한 블루 톤 물
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }] // 아주 밝은 그레이 배경
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }] // 흰색 도로
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e2f3e4" }] // 연한 연두색 공원
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }] // 차분한 텍스트
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }] // POI 텍스트는 숨김
    }
  ]
};

const RouteMap = ({ points: propPoints, activeIndex: propActiveIndex }) => {
  const { points: storePoints, activeIndex: storeActiveIndex } = useRouteStore();
  const points = propPoints ?? storePoints;
  const activeIndex = propActiveIndex ?? storeActiveIndex;
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
  });

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  // activeIndex가 변경될 때마다 지도의 중심을 해당 포인트로 이동
  useEffect(() => {
    if (map && points[activeIndex]) {
      const { lat, lng } = points[activeIndex];
      map.panTo({ lat, lng });
      map.setZoom(16);
    }
  }, [activeIndex, map, points]);

  // 처음 데이터가 로드될 때 모든 포인트를 포함하도록 지도 범위 조정
  useEffect(() => {
    if (map && points.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      points.forEach(p => bounds.extend({ lat: p.lat, lng: p.lng }));
      map.fitBounds(bounds);
    }
  }, [map, points]);

  if (loadError) {
    return (
      <div className="w-full h-full bg-red-50 flex flex-col items-center justify-center text-red-400 p-4 text-center">
        <p>지도 로드 중 오류가 발생했습니다.<br />API 키를 확인해 주세요.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full bg-slate-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
      </div>
    );
  }

  if (points.length === 0) {
    return (
      <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-400">
        <MapIcon size={48} strokeWidth={1} className="mb-2 opacity-50" />
        <p className="text-sm font-medium">지도를 생성하려면 사진을 업로드하세요</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={points[0] ? { lat: points[0].lat, lng: points[0].lng } : { lat: 37.5665, lng: 126.9780 }}
      zoom={13}
      onLoad={(map) => setMap(map)}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      {/* 동선 (Polyline) */}
      <PolylineF
        path={points.map(p => ({ lat: p.lat, lng: p.lng }))}
        options={{
          strokeColor: "#3b82f6",
          strokeOpacity: 0.8,
          strokeWeight: 4,
        }}
      />

      {/* 방문지 마커들 */}
      {points.map((point, index) => (
        <MarkerF
          key={point.id}
          position={{ lat: point.lat, lng: point.lng }}
          icon={
            index === activeIndex 
              ? {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: "#ef4444",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                  scale: 8,
                }
              : {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: "#3b82f6",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                  scale: 5,
                }
          }
          zIndex={index === activeIndex ? 100 : 1}
        />
      ))}
    </GoogleMap>
  );
};

export default RouteMap;
