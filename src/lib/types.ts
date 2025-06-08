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
