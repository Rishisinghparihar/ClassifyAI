import React from "react";
import Logo from "../apps/Logo";

const SideNav = () => {
  return (
    <div className="bg-gradient-to-br h-screen special-shadow from-gray-900/70 via-gray-500/70 to-gray-900/70  text-white p-4 w-[25vw] flex flex-col items-center ">
        <Logo width={400} height={400} />
        <h2 className="text-4xl font-serif font-semibold -mt-8 ml-20">Admin</h2>
      <ul className="space-y-2">
        <li>
          <a href="/admin/dashboard" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/users" className="hover:underline">
            Users
          </a>
        </li>
        <li>
          <a href="/admin/settings" className="hover:underline">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
