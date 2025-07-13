"use client";

import React from "react";
import  Badge  from "@/components/ui/Badge";
import  Button   from "@/components/ui/Button";

export type PremiumUser = {
  id: string;
  name: string;
  email: string;
  plan: "PRO" | "ULTIMATE";
  startDate: string;  // ISO date
  endDate: string;    // ISO date
  status: "ACTIVE" | "EXPIRED";
};

const PremiumUsersTable = ({ users }: { users: PremiumUser[] }) => {
  return (
    <div className="px-6">
      <div className="overflow-x-auto rounded-xl border border-orange-400 shadow">
        <table className="min-w-full bg-orange-50/5 text-sm text-orange-50">
          <thead className="bg-orange-800/50 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-orange-700/50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 text-center">
                  <Badge
                    variant={user.plan === "ULTIMATE" ? "destructive" : "default"}
                  >
                    {user.plan}
                  </Badge>
                </td>
                <td className="px-4 py-2 text-center">
                  {new Date(user.startDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">
                  {new Date(user.endDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">
                  <Badge
                    variant={user.status === "ACTIVE" ? "default" : "destructive"}
                  >
                    {user.status}
                  </Badge>
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <Button size="sm" variant="secondary">
                    Downgrade
                  </Button>
                  <Button size="sm" variant="destructive">
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PremiumUsersTable;
