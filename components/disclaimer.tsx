export default function Disclaimer() {
  return (
    <div className="bg-[#0a1628] border-t border-cyan-500/20 py-4 px-4 md:py-5">
      <div className="container mx-auto">
        <div className="flex items-start gap-2 md:gap-3 text-white text-xs md:text-sm">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="leading-tight md:leading-relaxed">
            Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie
            dla osób w regionach, gdzie hazard online jest legalny. Użytkownicy są odpowiedzialni za zgodność z
            lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
          </p>
        </div>
      </div>
    </div>
  )
}
