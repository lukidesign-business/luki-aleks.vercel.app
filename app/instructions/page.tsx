"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function InstructionsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [copiedDns, setCopiedDns] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleCopyDns = async (dns: string) => {
    try {
      await navigator.clipboard.writeText(dns)
      setCopiedDns(dns)
      setTimeout(() => setCopiedDns(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-blue-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-transparent to-[#0a1628]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-[20%] left-[10%] animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
        <div className="absolute w-3 h-3 bg-amber-400 rounded-full top-[40%] right-[15%] animate-bounce shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-[30%] left-[20%] animate-pulse shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Back Button */}
        <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 rounded-full text-white/80 hover:text-cyan-300 text-sm font-medium transition-all duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Powrot do strony glownej</span>
          </Link>
        </div>

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Instrukcje <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Dostepu</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Jak Obejsc Ograniczenia Dostawcy Internetu
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* DNS Card */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group relative h-full">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-indigo-700/80 rounded-2xl overflow-hidden border border-white/20 p-6 h-full">
                {/* Tile Overlay */}
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
                  <Image src="/images/card-tile-bg.png" alt="" fill className="object-cover grayscale" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 mt-2">DNS</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Najprostszym rozwiazaniem w tej sytuacji jest zmiana domyslnych serwerow DNS na inne. Mozna to zrobic bezposrednio w ustawieniach routera - wtedy kazde urzadzenie podlaczone do sieci automatycznie skorzysta z nowego DNS - lub indywidualnie na wybranym urzadzeniu.
                  </p>
                  <p className="text-white/70 text-sm mb-6">
                    Po takiej zmianie, w zdecydowanej wiekszosci przypadkow, korzystanie z VPN nie bedzie juz konieczne.
                  </p>
                  
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-300 text-xs font-semibold mb-3 uppercase tracking-wider">Rekomendowane DNS (Cloudflare):</p>
                    <div className="flex flex-wrap gap-3">
                      {["1.1.1.1", "1.0.0.1"].map((dns) => (
                        <button
                          key={dns}
                          onClick={() => handleCopyDns(dns)}
                          className="flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 font-mono font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          {copiedDns === dns ? (
                            <>
                              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Skopiowano!</span>
                            </>
                          ) : (
                            <>
                              <span>{dns}</span>
                              <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VPN Card */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group relative h-full">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-600/80 via-fuchsia-600/80 to-pink-700/80 rounded-2xl overflow-hidden border border-white/20 p-6 h-full">
                {/* Tile Overlay */}
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
                  <Image src="/images/card-tile-bg.png" alt="" fill className="object-cover grayscale" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 mt-2">VPN</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Jesli wolisz korzystac z VPN, to wygodny sposob na uzyskanie dostepu i cieszenie sie gra w najlepszych kasynach online. VPN pozwala zmienic Twoja lokalizacje IP, szyfruje polaczenia, dzieki czemu mozesz ominac blokady regionalne i zwiekszyc swoja prywatnosc w Internecie.
                  </p>
                  <p className="text-white/70 text-sm mb-6">
                    Wystarczy zainstalowac aplikacje wybranego dostawcy, zalogowac sie, wybrac kraj i polaczyc - to wszystko. VPN bedzie szczegolnie przydatny podczas korzystania z uslug niedostepnych w Twoim regionie.
                  </p>
                  
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-fuchsia-300 text-xs font-semibold mb-3 uppercase tracking-wider">Popularni dostawcy VPN:</p>
                    <div className="flex flex-wrap gap-2">
                      {["NordVPN", "Surfshark", "ProtonVPN"].map((vpn) => (
                        <span key={vpn} className="bg-white/10 text-white/90 text-sm font-medium px-3 py-1.5 rounded-lg border border-white/10">
                          {vpn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl border border-amber-500/30 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-300 mb-3">Wazne Informacje</h3>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                    <p>
                      Ta strona internetowa prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne, ktore sa przeznaczone wylacznie dla osob przebywajacych w regionach, w ktorych hazard online jest dozwolony przez prawo.
                    </p>
                    <p>
                      Uzytkownicy sa odpowiedzialni za zapewnienie, ze ich aktywnosc jest zgodna z lokalnymi przepisami. Nie zachecamy ani nie wspieramy nielegalnych form hazardu.
                    </p>
                    <p>
                      Przed skorzystaniem z jakichkolwiek ofert prezentowanych na tej stronie, zdecydowanie zalecamy sprawdzenie legalnosci hazardu online w Twojej lokalizacji.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className={`text-center mt-10 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-xl text-white font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Wroc do strony glownej</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
