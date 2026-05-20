import ResultForm from "./src/components/ResultForm";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-[#f5f5f5] overflow-hidden">
      {/* HEADER */}
      <header className="bg-gradient-to-b from-white to-gray-100 border-b border-gray-300 shadow-sm shrink-0">
        <div className="max-w-[1600px] mx-auto px-3 md:px-6 py-2 md:py-3">
          <div className="flex items-center justify-between gap-2 md:gap-6">
            {/* LEFT LOGO */}
            <div className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Left Logo"
                className="w-14 sm:w-16 md:w-24 object-contain"
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="flex-1 text-center leading-tight">
              {/* TOP LOGO */}
              <img
                src="/logo1.jpg"
                alt="Govt Logo"
                className="w-8 sm:w-10 md:w-14 mx-auto mb-1"
              />

              {/* GOVT */}
              <h3 className="text-[9px] sm:text-xs md:text-xs font-semibold tracking-[2px] md:tracking-[8px] text-blue-800 uppercase">
                Government of Karnataka
              </h3>

              {/* DEPARTMENT */}
              <h4 className="text-[10px] sm:text-sm md:text-xl font-medium text-green-700 mt-1">
                Department of Collegiate and Technical Education
              </h4>

              {/* COLLEGE NAME */}
              <h1 className="mt-1 md:mt-2 text-xl sm:text-xl md:text-4xl font-extrabold leading-none">
                <span className="bg-gradient-to-r from-red-700 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                  Karnataka (Govt.) Polytechnic, Mangaluru
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="italic text-gray-600 text-[10px] sm:text-xs md:text-xl mt-1 md:mt-2">
                (An Autonomous Polytechnic under AICTE, New Delhi)
              </p>
            </div>

            {/* RIGHT LOGO */}
            <div className="flex-shrink-0">
              <img
                src="/logo2.png"
                alt="Right Logo"
                className="w-14 sm:w-16 md:w-24 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="flex-1 grid lg:grid-cols-2 overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block h-full">
          <img
            src="/clgimg1.jpg"
            alt="College"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl xl:text-5xl font-bold">
              Student Result Portal
            </h2>

            <div className="w-24 h-1 bg-red-500 mt-4 mb-4" />

            <p className="text-lg max-w-lg leading-relaxed">
              Official online facility for verification of KPT-CAT 2026
              examination results.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <ResultForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081633] text-white text-center py-2 text-xs md:text-sm shrink-0">
        © 2026 Karnataka (Govt.) Polytechnic, Mangaluru. All rights reserved.
      </footer>
    </main>
  );
}
