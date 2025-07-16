import { ChevronRight, MoreHorizontal } from "lucide-react";

const Breadcrumbs = () => {
  return (
  <div className="flex items-center space-x-2 text-sm mt-4">
      {/* Green bordered icon with 1/2 fill from the right */}
      <div className="w-4 h-4 border-2 border-green-700 rounded-sm mr-1 relative">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-green-700" />
      </div>

      {/* Breadcrumb trail */}
      <div className="flex items-center space-x-1 text-gray-400">
        <span>Workspace</span>
        <ChevronRight className="w-3 h-3" />
        <span>Folder 2</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-black font-medium">Spreadsheet 3</span>
      </div>

      {/* Ellipsis */}
      <MoreHorizontal className="w-4 h-4 text-gray-400 ml-1" />
    </div>
  );
};

export default Breadcrumbs;
