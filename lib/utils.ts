import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function bytesFormat(bytes: number, decimals = 2) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(decimals) + " " + sizes[i];
}
