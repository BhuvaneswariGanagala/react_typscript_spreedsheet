import type { FC } from "react";
import { Link2, RefreshCw, Plus, Sparkles, Star } from "lucide-react";

const TabHeaderRow: FC = () => {
  return (
    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-t-md border border-gray-200 border-b-0 text-sm font-medium text-gray-800">
      <div className="w-[40px]" /> {/* Row # */}

      {/* Task Request: Q3 Financial Overview */}
      <div className="w-[300px]">
        <MainTab label="Q3 Financial Overview" />
      </div>

      <div className="w-[105px]" /> {/* Submit Date */}
      <div className="w-[100px]" /> {/* Status */}
      <div className="w-[149px]" /> {/* Submitter */}

      {/* URL: White Box */}
      <div className="w-[120px] flex items-center">
        <div className="h-8 bg-white rounded-sm w-full" />
      </div>

      {/* Assigned: ABC */}
      <div className="w-[150px]">
        <ActionTab label="ABC" color="bg-green-100 text-green-800" icon="sparkles" />
      </div>

      {/* Priority + Due Date + Est. Value merged */}
      <div className="w-[200px]">
        <ActionTab label="Answer a question" color="bg-purple-100 text-purple-800" icon="sparkles" />
      </div>

      <div className="w-[100px]">
        <ActionTab label="Extract" color="bg-orange-200 text-black" icon="star" />
      </div>

      {/* Final column: + Add button centered */}
      <div className="flex items-center justify-center w-[100px]">
        <AddTab />
      </div>
    </div>
  );
};

const MainTab: FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center px-3 py-1.5 bg-white gap-2 w-full">
    <Link2 className="w-4 h-4 text-blue-600" />
    <span className="text-gray-800 font-medium truncate">{label}</span>
    <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
  </div>
);

const ActionTab: FC<{ label: string; color: string; icon: "sparkles" | "star" }> = ({
  label,
  color,
  icon,
}) => {
  const Icon = icon === "sparkles" ? Sparkles : Star;

  return (
    <div className={`flex items-center px-3 py-1.5 gap-1.5 justify-start ${color} w-full`}>
      <Icon className="w-4 h-4 opacity-60" />
      <span className="truncate">{label}</span>
    </div>
  );
};

const AddTab: FC = () => (
  <button className="w-[90px] h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
    <Plus className="w-4 h-4 text-gray-600" />
  </button>
);

export default TabHeaderRow;

// import type { FC } from "react";
// import { Link2, RefreshCw, Plus, Sparkles } from "lucide-react";

// const TabHeaderRow: FC = () => {
//   return (
//     <div className="flex items-center bg-gray-100 px-2 py-1 rounded-t-md border border-gray-200 border-b-0 text-sm font-medium text-gray-800">
//       <div className="w-[40px]" /> {/* Row # */}

//       {/* Task Request: Q3 Financial Overview */}
//       <div className="w-[300px]">
//         <MainTab label="Q3 Financial Overview" />
//       </div>

//       <div className="w-[105px]" /> {/* Submit Date */}
//       <div className="w-[100px]" /> {/* Status */}
//       <div className="w-[149px]" /> {/* Submitter */}

//       {/* URL: White Box */}
//       <div className="w-[120px] flex items-center">
//         <div className="h-8 bg-white rounded-sm w-full" />
//       </div>

//       {/* Assigned: ABC */}
//       <div className="w-[150px]">
//         <ActionTab label="ABC" color="bg-green-100 text-green-800" />
//       </div>

//       {/* Priority + Due Date + Est. Value merged: Answer a question */}
//       <div className="w-[200px]">
//         <ActionTab label="Answer a question" color="bg-purple-100 text-purple-800" />
//       </div>
//       <div className="w-[100px]">
//         <ActionTab label="Extract" color="bg-orange-200 text-black-800" />
//       </div>

//       {/* Final column: + Add button centered */}
//       <div className="flex items-center justify-center w-[100px]">
//         <AddTab />
//       </div>
//     </div>
//   );
// };

// const MainTab: FC<{ label: string }> = ({ label }) => (
//   <div className="flex items-center px-3 py-1.5 bg-white gap-2 w-full">
//     <Link2 className="w-4 h-4 text-blue-600" />
//     <span className="text-gray-800 font-medium truncate">{label}</span>
//     <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
//   </div>
// );

// const ActionTab: FC<{ label: string; color: string }> = ({ label, color }) => (
//   <div className={`flex items-center px-3 py-1.5 gap-1.5 justify-start ${color} w-full`}>
//     <Sparkles className="w-4 h-4 opacity-60" />
//     <span className="truncate">{label}</span>
//   </div>
// );

// const AddTab: FC = () => (
//   <button className="w-[90px] h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
//     <Plus className="w-4 h-4 text-gray-600" />
//   </button>
// );

// export default TabHeaderRow;
