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
       <div className="flex flex-col items-center justify-center flex-1">
        <main className="w-[90rem]  h-[60rem] bg-white/5 rounded-lg backdrop-blur-xl border border-white/10 p-1 flex flex-col shadow-lg">{children}</main>
      </div>
    </div>
  );
}
