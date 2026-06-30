"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function FeaturesSection() {
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

    const section = document.getElementById("features-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ekskluzywne Bonusy",
      description: "Specjalne kody dostepne tylko dla mojej spolecznosci",
      color: "cyan"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Zweryfikowane Kasyna",
      description: "Tylko sprawdzone i licencjonowane platformy",
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Szybkie Wyplaty",
      description: "Kasyna z najszybszym czasem wyplaty srodkow",
      color: "amber"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Wsparcie",
      description: "Pomoc dostepna o kazdej porze dnia i nocy",
      color: "blue"
    }
  ]

  return (
    <section id="features-section" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-blue-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-transparent to-[#0a1628]"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute w-[400px] h-[400px] -top-32 -left-32 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute w-[300px] h-[300px] bottom-0 right-0 bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Dlaczego <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">wybrac</span> moje bonusy?
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            Oferuje tylko najlepsze bonusy od sprawdzonych partnerow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                feature.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                feature.color === 'emerald' ? 'from-emerald-500 to-green-500' :
                feature.color === 'amber' ? 'from-amber-500 to-yellow-500' :
                'from-blue-500 to-indigo-500'
              } rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20 overflow-hidden">
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${
                  feature.color === 'cyan' ? 'from-cyan-500/20' :
                  feature.color === 'emerald' ? 'from-emerald-500/20' :
                  feature.color === 'amber' ? 'from-amber-500/20' :
                  'from-blue-500/20'
                } to-transparent rounded-bl-full`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${
                  feature.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                  feature.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                  feature.color === 'amber' ? 'from-amber-500 to-amber-600' :
                  'from-blue-500 to-blue-600'
                } flex items-center justify-center text-white shadow-lg shadow-${feature.color}-500/30`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
