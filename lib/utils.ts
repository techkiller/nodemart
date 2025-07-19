import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//
export function convertToPo<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//format number
