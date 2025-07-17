"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PremiumUser } from "@/lib/types";
import PremiumCancelModal from "../ui/PremiumCancelModal";
import { useRouter } from "next/navigation";
import { showSuccessMessage } from "@/lib/helper";

const PremiumUsersTable = ({ users }: { users: PremiumUser[] }) => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<PremiumUser | null>(null);
  const router = useRouter();
  const handleCancelConfirm = async (reason: string) => {
    if (!selectedUser) return;

    try {
      const res = await fetch("/api/admin/remove-premium", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: selectedUser.id,
          reason,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // optionally refresh page or remove user from UI
        showSuccessMessage("Premium removed");
        router.refresh();
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowCancelModal(false);
      setSelectedUser(null);
    }
  };

  return (
    <div className="px-6">
      <div className="rounded-xl shadow overflow-hidden">
        <div className="relative">
          <table className="min-w-full bg-orange-50/5 text-sm text-orange-50">
            <thead className="bg-orange-800/50 text-xs uppercase sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 w-[120px]">Name</th>
                <th className="px-4 py-2  w-[180px]">Email</th>
                <th className="px-4 py-2  w-[100px]">Plan</th>
                <th className="px-4 py-2  w-[120px]">Start Date</th>
                <th className="px-4 py-2  w-[120px]">End Date</th>
                <th className="px-4 py-2  w-[100px]">Status</th>
                <th className="px-4 py-2  w-[180px]">Actions</th>
              </tr>
            </thead>
          </table>

          <div className="h-[250px] overflow-y-auto scrollbar-hide scroll-smooth">
            <table className="min-w-full bg-orange-50/5 text-sm text-orange-50">
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-orange-700/50 hover:bg-orange-900/20"
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-center truncate  w-[120px]">
                      {user.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center truncate  w-[180px]">
                      {user.email}
                    </td>
                    <td className="px-4 py-4 text-center  w-[100px]">
                      <Badge
                        variant={
                          user.plan === "ULTIMATE" ? "destructive" : "default"
                        }
                      >
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-center w-[120px]">
                      {new Date(user.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-center w-[120px]">
                      {new Date(user.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-center w-[100px] ">
                      <Badge
                        variant={
                          user.status === "ACTIVE" ? "default" : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-center space-x-2 w-[180px]">
                      <Button size="sm" variant="secondary">
                        Downgrade
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowCancelModal(true);
                          console.log(showCancelModal, selectedUser);
                        }}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PremiumCancelModal
            isOpen={showCancelModal}
            onClose={() => setShowCancelModal(false)}
            onConfirm={handleCancelConfirm}
            message={`Are you sure you want to cancel premium for ${selectedUser?.name}?`}
          />

          {/* Fade overlays */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumUsersTable;
