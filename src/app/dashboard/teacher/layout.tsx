import Sidebar from "@/components/teacher/Sidebar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="ml-32 mt-64">
      <Sidebar />
      </div>
       <div className="flex flex-col flex-1">
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
