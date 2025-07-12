"use client";
import LinkCards from "@/components/admin/LinkCards";
import UserTable from "@/components/admin/UserTable";
import { Tektur } from "next/font/google";
import React, { useState } from "react";
import useSWR from "swr";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ManageUsers = () => {
  const [role, setRole] = useState<"STUDENT" | "TEACHER">("STUDENT");
  const { mutate } = useSWR(`/api/admin/users?role=${role}`, fetcher);
  return (
    <div>
      <div className="h-[65vh] overflow-scroll scrollbar-hide">
        <h1
          className={`text-4xl ${tektur.className} text-center text-orange-200 mt-5`}
        >
          Manage Users
        </h1>
        <UserTable/>
      </div>
      <div className="flex gap-5 h-[15vw]">
        <LinkCards forRole="student" onActionComplete={() => mutate()} />
        <LinkCards forRole="teacher" onActionComplete={() => mutate()} />
      </div>
    </div>
  );
};

export default ManageUsers;
