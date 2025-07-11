import LinkCards from "@/components/admin/LinkCards";
import UserTable from "@/components/admin/UserTable";
import { Tektur } from "next/font/google";
import React from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ManageUsers = () => {
  return (
    <div>
      <div className="h-[65vh] overflow-scroll scrollbar-hide">
        <h1
          className={`text-4xl ${tektur.className} text-center text-orange-200 mt-5`}
        >
          Manage Users
        </h1>
        <UserTable />
      </div>
      <div className="flex gap-5 h-[15vw]">
          <LinkCards for = "student"/>
          <LinkCards for = "teacher"/>
      </div>
    </div>
  );
};

export default ManageUsers;
