
import { useNavigate } from "react-router-dom";

export const TopNavBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 px-4 py-3 flex justify-between items-center shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="text-[#409EFF] hover:text-[#66b1ff]"
      >
        返回
      </button>
      <h1 className="text-lg font-medium">房型对比</h1>
      <div className="w-10" />
    </div>
  );
};
