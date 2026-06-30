"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleCopyCode = async (code: string, containerId: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(containerId)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const casinos = [
    {
      id: "nvcasino",
      name: "NV Casino",
      logo: "/images/nv-casino-logo.png",
      bonus: "80 FS on Hell Hot 100",
      subBonus: "Free Spins",
      link: "https://pinalindrahusth.com/23901/29327?lp=00",
      rank: 1,
      gradient: "from-pink-600 via-fuchsia-600 to-purple-700",
      glowColor: "rgba(236,72,153,0.5)",
      accentColor: "text-pink-300"
    },
    {
      id: "yepcasino",
      name: "YEP Casino",
      logo: "/images/yep-casino-logo.png",
      bonus: "80 FS on Book of Ra Deluxe",
      subBonus: "Free Spins",
      link: "https://pinalindrahusth.com/25374/29712?lp=00",
      rank: 2,
      gradient: "from-amber-500 via-orange-500 to-yellow-600",
      glowColor: "rgba(251,191,36,0.5)",
      accentColor: "text-amber-300"
    }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-crypto-bg.webp"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-[#0a1628]/40"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-[20%] left-[10%] animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
        <div className="absolute w-3 h-3 bg-amber-400 rounded-full top-[40%] right-[15%] animate-bounce shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-[60%] left-[20%] animate-pulse shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full top-[30%] right-[25%] animate-ping shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-8 pb-12 px-4">
        {/* Profile Section */}
        <div className={`flex flex-col items-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Circular Profile with Glow */}
          <div className="relative mb-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-md opacity-75 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50"></div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src="/images/alekso-profile.jpg"
                alt="Alekso Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Name */}
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">ALEKSO</h2>
        </div>

        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight">
            <span className="text-white">MOJE KODY </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300" style={{ filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.6)) drop-shadow(0 0 40px rgba(251,191,36,0.4))' }}>
              BONUSOWE
            </span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto font-medium">
            Zgarnij darmowe obroty i mocne bonusy na start
          </p>
        </div>

        {/* Casino Cards */}
        <div className={`w-full max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-2xl mx-auto">
            {casinos.map((casino, index) => (
              <div
                key={casino.id}
                className="group relative transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rank Badge */}
                <div className="absolute -top-3 -left-3 z-30">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                    casino.rank === 1 ? 'from-amber-400 via-yellow-400 to-amber-500' : 'from-slate-300 via-slate-400 to-slate-500'
                  } flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.5)] border-2 border-white/30`}>
                    <span className="text-white font-black text-sm drop-shadow-lg">#{casino.rank}</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${casino.gradient} rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Card with gradient background */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 h-[260px] sm:h-[280px] shadow-2xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${casino.gradient}`}></div>
                  
                  {/* Tile Texture Overlay - blended to not affect colors */}
                  <div className="absolute inset-0 mix-blend-overlay opacity-30">
                    <Image
                      src="/images/card-tile-bg.png"
                      alt=""
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40"></div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col">
                    {/* Logo */}
                    <div className="flex justify-center mb-3 h-12 sm:h-14">
                      <Image
                        src={casino.logo}
                        alt={casino.name}
                        width={130}
                        height={56}
                        className="object-contain h-full w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      />
                    </div>

                    {/* Bonus Info */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <div className="bg-black/40 backdrop-blur-md rounded-xl py-2 px-3 mb-3 border border-white/10 shadow-inner">
                        <div className="text-white font-black text-sm sm:text-base leading-tight drop-shadow-lg">
                          {casino.bonus}
                        </div>
                        {casino.subBonus && (
                          <div className={`${casino.accentColor} text-xs font-semibold mt-1`}>
                            {casino.subBonus}
                          </div>
                        )}
                      </div>

                      {/* Code */}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-white/60 text-xs font-medium">Kod:</span>
                        <button
                          onClick={() => handleCopyCode("ALEKSO", casino.id)}
                          className="group/btn flex items-center gap-1.5 bg-white/95 hover:bg-white text-gray-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          {copiedCode === casino.id ? (
                            <>
                              <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Skopiowano!</span>
                            </>
                          ) : (
                            <>
                              <span>ALEKSO</span>
                              <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={casino.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 py-3 sm:py-4 px-4 rounded-xl text-center font-black text-sm sm:text-base text-white transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] border border-green-400/30"
                    >
                      ODBIERZ BONUS
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions Link */}
        <div className={`mt-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/instructions"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 rounded-full text-white/80 hover:text-cyan-300 text-sm font-medium transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Instrukcje dostepu</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs font-medium tracking-wider">Przewin w dol</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent z-20 pointer-events-none"></div>
    </section>
  )
}
