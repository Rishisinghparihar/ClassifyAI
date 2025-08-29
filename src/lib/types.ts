export interface Token {
  id: string;
  token: string;
  subject: string;
  issuedAt: string;
  expiresAt: string;
}

export interface Attendance {
  id: string;
  subject: string;
  date: string;
  status: string;
  markedBy: string;
}

export interface SDetails {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: string;
  branch?: string;
  year?: number;
  semester?: number;
}

export type Plan = {
  name: string;
  price: number;
};

export type PremiumStatusResponse = {
  isPremium: boolean;
  plan: "Starter" | "Pro" | "Ultimate" | null;
  features: string[];
};

export interface HorizontalBarProps {
  content: string;
  linkRef: string;
  title: string;
}

export interface NumberCardsProps {
  title: string;
  value: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  subject: string;
  status: string;
  date: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  date: string;
  subject?: string;
}

export interface BunkStats {
  subject: string;
  total: number;
  present: number;
  percentage: number;
  safeBunks: number;
}

export interface RecentAttendance {
  id: string;
  student: {
    name: string;
  };
  subject: string;
  date: string;
  status: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  isPremium: boolean;
  createdAt: string;
  premiumFeatures: { name: string }[];
};

export type PremiumUser = {
  id: string;
  name: string;
  email: string;
  plan: "PRO" | "ULTIMATE";
  startDate: string; // ISO date
  endDate: string; // ISO date
  status: "ACTIVE" | "EXPIRED";
};

export type Stats = {
  totalUsers: number;
  premiumUsers: number;
  proUsers: number;
  ultimateUsers: number;
  expiredPremiums: number;
};

export type Expiration = {
  id: string;
  name: string;
  date: string;
};

export type Activity = {
  id: string;
  text: string;
  date: string;
  username: string;
};

export type EventStats = {
  totalEvents: number;
  exams: number;
  holidays: number;
  others: number;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  type: string; // e.g. Exam, Holiday, Other
  description?: string;
  active: boolean;
};

export type SupportRequest = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export  interface TeacherDetails {
  id: string;
  name: string;
  email: string;
  role: "TEACHER" | "STUDENT" | "ADMIN"; // extend kar sakta hai agar aur roles ho
  isPremium: boolean;
  premiumExpiresAt: string | null;
  premiumFeatures: string[];
  branch: string | null;
  semester: number | null;
  year: number | null;
  createdAt: string; // ISO date string
}

export interface Teacher {
  id: string;
  userId: string;
}

export interface TeacherSubject {
  name: string;
  code: string;
  teacher: Teacher;
}
