import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatPhoneNumber(phone) {
  // Remove anything that's not a digit
  const digits = phone.replace(/\D/g, "");
  // Prepend tel:+1 (assuming US country code)
  return `tel:+1${digits}`;
}