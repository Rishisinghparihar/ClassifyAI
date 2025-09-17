import { Subject, ClassSession } from "@/lib/types";

export function QuickActionsCard() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">🚀<span className="block mt-1 text-sm">New Assignment</span></div>
                <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">📢<span className="block mt-1 text-sm">New Announcement</span></div>
                <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">📚<span className="block mt-1 text-sm">Upload Resources</span></div>
                <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">✅<span className="block mt-1 text-sm">Manual Attendance</span></div>
            </div>
        </div>
    );
}

export function SubjectsCard({ subjects }: { subjects: Subject[] }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Subjects</h2>
            {subjects.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {subjects.map(sub => (
                        <div key={sub.id} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                            <p className="font-bold">{sub.name}</p>
                            {sub.code && <p className="text-xs text-gray-400">{sub.code}</p>}
                        </div>
                    ))}
                </div>
            ) : <p className="text-gray-400">No subjects assigned.</p>}
        </div>
    );
}

export function ScheduleCard({ classes }: { classes: ClassSession[] }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Today's Schedule</h2>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {classes.length > 0 ? (
                    classes.map(cls => (
                        <div key={cls.id} className="bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500">
                            <p className="font-bold">{cls.subject.name}</p>
                            <p className="text-sm text-gray-300">Section {cls.section} • Sem {cls.semester}</p>
                            <p className="text-xs text-gray-400 mt-1">
                                {new Date(cls.startTime).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })} - {new Date(cls.endTime).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}
                            </p>
                        </div>
                    ))
                ) : <p className="text-gray-400 text-center py-10">No classes today. Enjoy your day!</p>}
            </div>
        </div>
    );
}