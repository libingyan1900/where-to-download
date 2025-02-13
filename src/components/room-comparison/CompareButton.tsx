
import { GitCompare } from "lucide-react";

interface CompareButtonProps {
  selectedCount: number;
  onCompare: () => void;
}

export const CompareButton = ({ selectedCount, onCompare }: CompareButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
      <button
        onClick={onCompare}
        disabled={selectedCount === 0}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-white ${
          selectedCount > 0
            ? 'bg-[#409EFF] hover:bg-[#66b1ff] active:bg-[#3a8ee6]'
            : 'bg-gray-400'
        }`}
      >
        <GitCompare className="w-5 h-5" />
        开始对比 ({selectedCount + 1}个房型)
      </button>
    </div>
  );
};
