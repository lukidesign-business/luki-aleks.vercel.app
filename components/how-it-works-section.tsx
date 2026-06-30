"use client"

import { useEffect, useState } from "react"

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("how-it-works-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "Wybierz kasyno",
      description: "Przegladaj liste sprawdzonych kasyn i wybierz to, ktore Ci odpowiada",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Skopiuj kod ALEKSO",
      description: "Kliknij przycisk kopiowania przy wybranym kasynie",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Zarejestruj sie",
      description: "Utworz konto w kasynie uzywajac mojego kodu bonusowego",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Odbierz bonus",
      description: "Ciesz sie darmowymi spinami i bonusami powitalnymi!",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#0a1628]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Odbierz bonus w <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">4 krokach</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            Prosta sciezka do Twoich darmowych spinow
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="text-center group">
                  {/* Number Circle */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-5">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Circle */}
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-gray-900 font-black text-xs">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-white font-bold text-sm sm:text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-14 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-0.5"
          >
            <span>Wybierz Kasyno Teraz</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
