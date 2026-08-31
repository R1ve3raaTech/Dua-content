import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Miniatura (primer frame) generada para cada video, para que se vea una
// vista previa aunque el video todavía no se haya descargado.
// /videos/resultado-1.mp4 -> /videos/posters/resultado-1.jpg
export function posterDeVideo(src: string) {
  return src.replace("/videos/", "/videos/posters/").replace(/\.mp4$/, ".jpg")
}
