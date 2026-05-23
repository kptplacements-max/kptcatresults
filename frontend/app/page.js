import ResultForm from "./components/ResultForm";
import WaitingForm from "./components/WaitingForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-300 shadow-sm shrink-0">
        <div className="w-full px-3 md:px-6 py-1.5">
          <div className="grid grid-cols-[60px_1fr_60px] md:grid-cols-[90px_1fr_90px] items-center">
            {/* LEFT LOGO */}
            <div className="flex justify-start">
              <img
                src="/logo.jpg"
                alt="Left Logo"
                className="w-10 md:w-16 object-contain"
              />
            </div>

            {/* CENTER */}
            <div className="text-center leading-tight px-2">
              {/* GOVT LOGO */}
              <img
                src="/logo1.jpg"
                alt="Govt Logo"
                className="w-6 md:w-8 mx-auto mb-0.5"
              />

              <h3
                className="text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-[2px] md:tracking-[5px] text-blue-900 uppercase"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                Government of Karnataka
              </h3>

              <h4
                className="text-[9px] sm:text-[10px] md:text-sm font-medium text-green-800"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                Department of Collegiate and Technical Education
              </h4>

              <h1
                className="text-lg sm:text-2xl md:text-3xl font-bold text-[#b22222] leading-none mt-0.5"
                style={{
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                Karnataka (Govt.) Polytechnic, Mangaluru
              </h1>

              <p
                className="italic text-gray-600 text-[7px] sm:text-[9px] md:text-xs mt-0.5"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                (An Autonomous Polytechnic under AICTE, New Delhi)
              </p>
            </div>

            {/* RIGHT LOGO */}
            <div className="flex justify-end">
              <img
                src="/logo2.png"
                alt="Right Logo"
                className="w-10 md:w-16 object-contain"
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
        {/* <div className="flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <ResultForm />
        </div> */}

        <div className="flex items-center justify-center p-4 md:p-6">
          <WaitingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081633] text-white text-center py-2 text-xs md:text-sm shrink-0">
        © 2026 Karnataka (Govt.) Polytechnic, Mangaluru. All rights reserved.
      </footer>
    </main>
  );
}
