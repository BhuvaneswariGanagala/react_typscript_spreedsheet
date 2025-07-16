import React from "react";
import type { FC } from "react";
import {
  EyeOff,
  Filter,
  ArrowUpDown,
  LayoutGrid,
  ChevronsRight
} from "lucide-react";

const Toolbar: FC = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-black">
      {/* Left Label: Tool bar » */}
      <div className="flex items-center space-x-1">
        <span className="font-medium">Tool bar</span>
        <ChevronsRight className="w-4 h-4" />
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-5 bg-gray-300" />

      {/* Toolbar Buttons - placed side by side closely */}
      <ToolbarButton icon={<EyeOff className="w-4 h-4" />} label="Hide fields" />
      <ToolbarButton icon={<ArrowUpDown className="w-4 h-4" />} label="Sort" />
      <ToolbarButton icon={<Filter className="w-4 h-4" />} label="Filter" />
      <ToolbarButton icon={<LayoutGrid className="w-4 h-4" />} label="Cell view" />
    </div>
  );
};

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ToolbarButton: FC<ToolbarButtonProps> = ({ icon, label }) => (
  <button
    className="flex items-center space-x-1 px-1 py-1 text-sm text-black hover:text-blue-600 transition"
    onClick={() => console.log(`${label} clicked`)}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Toolbar;

// import { FC } from "react";
// import {
//   EyeOff,
//   Filter,
//   ArrowUpDown,
//   LayoutGrid,
//   ChevronsRight
// } from "lucide-react";

// const Toolbar: FC = () => {
//   return (
//     <div className="flex items-center justify-between w-full">
//       {/* Left Label: Tool bar » */}
//       <div className="flex items-center text-sm font-medium text-black space-x-1 pr-4">
//         <span>Tool bar</span>
//         <ChevronsRight className="w-4 h-4" />
//         {/* Vertical Divider */}
//         <div className="w-px h-5 bg-gray-300 mx-3" />
//       </div>

//       {/* Toolbar Buttons */}
//       <div className="flex items-center space-x-6">
//         <ToolbarButton icon={<EyeOff className="w-4 h-4" />} label="Hide fields" />
//         <ToolbarButton icon={<ArrowUpDown className="w-4 h-4" />} label="Sort" />
//         <ToolbarButton icon={<Filter className="w-4 h-4" />} label="Filter" />
//         <ToolbarButton icon={<LayoutGrid className="w-4 h-4" />} label="Cell view" />
//       </div>
//     </div>
//   );
// };

// interface ToolbarButtonProps {
//   icon: React.ReactNode;
//   label: string;
// }

// const ToolbarButton: FC<ToolbarButtonProps> = ({ icon, label }) => (
//   <button
//     className="flex items-center space-x-1 text-sm text-black hover:text-blue-600 transition"
//     onClick={() => console.log(`${label} clicked`)}
//   >
//     {icon}
//     <span>{label}</span>
//   </button>
// );

// export default Toolbar;
