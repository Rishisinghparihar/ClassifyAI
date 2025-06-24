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
}

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