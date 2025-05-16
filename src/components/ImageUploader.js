import { useRef, useState } from "react";

export default function ImageUploader() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageObjs = files.map((file) => ({
      id: URL.createObjectURL(file), // id로 사용
      file,
    }));
    setImages((prev) => [...prev, ...imageObjs]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleRemove = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    URL.revokeObjectURL(id); // 메모리 누수 방지
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
      <div className="flex overflow-x-auto space-x-3 scrollbar-thin scrollbar-thumb-gray-300">
        {/* 업로드 버튼 */}
        <div
          onClick={handleUploadClick}
          className="w-20 h-20 min-w-[80px] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* 이미지 미리보기 + 삭제 버튼 */}
        {images.map((img, idx) => (
          <div key={img.id} className="relative w-20 h-20 min-w-[80px]">
            <img
              src={img.id}
              alt={`이미지${idx + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => handleRemove(img.id)}
              className="absolute -top-1 -right-1 bg-white text-gray-500 rounded-full shadow p-[2px] hover:text-red-500"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
