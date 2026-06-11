import exifr from 'exifr';

/**
 * 이미지 파일 배열을 받아 EXIF 데이터를 추출하고 좌표순(시간순)으로 정렬하여 반환합니다.
 */
export const parsePhotos = async (files) => {
  const parsedPromises = files.map(async (file) => {
    try {
      // EXIF 데이터 추출 (GPS 및 날짜)
      const data = await exifr.parse(file, {
        gps: true,
        tiff: true,
      });

      if (!data || !data.latitude || !data.longitude) {
        console.warn(`파일에 GPS 정보가 없습니다: ${file.name}`);
        return null;
      }

      const photoUrl = URL.createObjectURL(file);
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        lat: data.latitude,
        lng: data.longitude,
        timestamp: data.DateTimeOriginal ? new Date(data.DateTimeOriginal).getTime() : Date.now(),
        photoUrl: photoUrl,
        description: `${file.name}에서 추출된 장소`,
      };
    } catch (error) {
      console.error(`파일 처리 중 오류 발생: ${file.name}`, error);
      return null;
    }
  });

  const results = await Promise.all(parsedPromises);
  
  // null 제외 및 시간순 정렬
  return results
    .filter((p) => p !== null)
    .sort((a, b) => a.timestamp - b.timestamp);
};
