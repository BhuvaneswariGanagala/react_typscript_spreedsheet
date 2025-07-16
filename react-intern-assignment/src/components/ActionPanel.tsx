import { FC } from "react";
import {
  Upload,
  Download,
  Share2,
  MoveDownRight
} from "lucide-react";

const ActionsPanel: FC = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Outline Buttons */}
      <OutlineButton icon={<Download className="w-3.5 h-3.5" />} label="Import" />
      <OutlineButton icon={<Upload className="w-3.5 h-3.5" />} label="Export" />
      <OutlineButton icon={<Share2 className="w-3.5 h-3.5" />} label="Share" />

      {/* Filled Green Button */}
      <FilledButton icon={<MoveDownRight className="w-3.5 h-3.5" />} label="New Action" />
    </div>
  );
};

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
}

const OutlineButton: FC<ButtonProps> = ({ icon, label }) => (
  <button
    className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-xs text-gray-700 bg-white hover:bg-gray-100 transition"
    onClick={() => console.log(`${label} clicked`)}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const FilledButton: FC<ButtonProps> = ({ icon, label }) => (
  <button
    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-700 text-white rounded-md text-xs hover:bg-green-800 transition"
    onClick={() => console.log(`${label} clicked`)}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default ActionsPanel;
