"use client"

import { Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function SocialSection() {
  return (
    <section
      id="social"
      className="py-8 md:py-16 relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-purple-900/60"
    >
      <div className="absolute top-0 left-0 right-0 h-20 md:h-40 bg-gradient-to-b from-black via-black/90 to-transparent z-5"></div>

      <div className="absolute inset-0 z-0">
        <Image src="/images/sociale-socials.jpg" alt="Social Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 font-montserrat text-center">
          <span className="text-white drop-shadow-2xl font-black">OBSERWUJ </span>
          <span className="text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-pink-500 bg-clip-text drop-shadow-[0_0_30px_rgba(168,85,247,0.9)] font-black">
            MNIE
          </span>
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-10 w-fit">
            <a href="https://kick.com/rfnx" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/20 hover:border-purple-400/80 rounded-full transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-blue-500/15 hover:to-pink-500/20 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-400/40 transform hover:rotate-3">
                <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 137 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white group-hover:text-purple-400 transition-all duration-500 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  >
                    <path
                      d="M0 0 C14.19 0 28.38 0 43 0 C43 9.9 43 19.8 43 30 C47.95 30 52.9 30 58 30 C58 25.05 58 20.1 58 15 C62.62 15 67.24 15 72 15 C72 10.05 72 5.1 72 0 C86.19 0 100.38 0 115 0 C115 14.85 115 29.7 115 45 C110.38 45 105.76 45 101 45 C101 49.95 101 54.9 101 60 C96.05 60 91.1 60 86 60 C86 64.95 86 69.9 86 75 C90.95 75 95.9 75 101 75 C101 79.95 101 84.9 101 90 C105.62 90 110.24 90 115 90 C115 104.85 115 119.7 115 135 C100.81 135 86.62 135 72 135 C72 130.05 72 125.1 72 120 C67.38 120 62.76 120 58 120 C58 115.05 58 110.1 58 105 C53.05 105 48.1 105 43 105 C43 114.9 43 124.8 43 135 C28.81 135 14.62 135 0 135 C0 90.45 0 45.9 0 0 Z"
                      fill="currentColor"
                      transform="translate(10,0)"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-transparent to-blue-500/0 group-hover:from-purple-400/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/rafonixofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/20 hover:border-purple-400/80 rounded-full transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-blue-500/15 hover:to-pink-500/20 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-400/40 transform hover:rotate-3">
                <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <Instagram
                    size={24}
                    className="text-white group-hover:text-purple-400 transition-all duration-500 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-transparent to-blue-500/0 group-hover:from-purple-400/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              </div>
            </a>

            <a href="https://x.com/rafonixxx" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/20 hover:border-purple-400/80 rounded-full transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-blue-500/15 hover:to-pink-500/20 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-400/40 transform hover:rotate-3">
                <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <Twitter
                    size={24}
                    className="text-white group-hover:text-purple-400 transition-all duration-500 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-transparent to-blue-500/0 group-hover:from-purple-400/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              </div>
            </a>

            <a
              href="https://t.me/+XA7aTv5gRBZjNmI0?fbclid=PAZXh0bgNhZW0CMTEAAafzha7tbcSHvvfJ3szBDQcCYimn6tUFEy8YGbRJIp4-sgiWEQjU7yJWuO7Miw_aem_gFvMHI1eeSUOGnPWxGOh0A"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 backdrop-blur-md border-2 border-purple-400/20 hover:border-purple-400/80 rounded-full transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-blue-500/15 hover:to-pink-500/20 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-400/40 transform hover:rotate-3">
                <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white group-hover:text-purple-400 transition-all duration-500 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.65.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-transparent to-blue-500/0 group-hover:from-purple-400/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-5"></div>
    </section>
  )
}
