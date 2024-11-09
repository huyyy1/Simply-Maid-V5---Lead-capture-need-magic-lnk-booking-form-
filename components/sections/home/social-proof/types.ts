import { type LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PaymentNotification {
  timestamp: string;
  status: "complete" | "pending" | "failed";
}