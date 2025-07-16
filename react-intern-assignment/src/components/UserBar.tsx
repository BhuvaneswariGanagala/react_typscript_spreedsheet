import React from "react";
import type { FC } from "react";
import { Bell, Search } from "lucide-react";

const UserBar: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="search within sheet"
          className="h-9 pl-8 pr-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notification Bell */}
      <div className="relative">
  <button
    onClick={() => console.log("Notifications clicked")}
    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600 relative"
  >
    <Bell className="w-5 h-5" />
    {/* Notification badge */}
    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-semibold h-4 w-4 rounded-full flex items-center justify-center">
      3
    </span>
  </button>
</div>
<div className="flex items-center space-x-3">
  {/* Circular Image Avatar */}
  <img
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="User Avatar"
    className="w-10 h-10 rounded-full object-cover"
  />

  {/* Name and Truncated Email Name Part */}
  <div>
    <div className="text-lg font-semibold text-black leading-tight">John Doe</div>
    <div className="text-sm text-gray-500 truncate max-w-[80px]">john.doe...</div>
  </div>
</div>

    </div>
  );
};

export default UserBar;
