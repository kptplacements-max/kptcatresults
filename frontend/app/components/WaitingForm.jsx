"use client";

export default function WaitingForm() {
  return (
    <div className="w-full flex flex-col mt-20 items-center">
      {/* ANNOUNCEMENT */}
      <div className="w-full max-w-md mb-4">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl shadow-lg p-4 border border-orange-300">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📢</div>

            <div>
              <h3 className="font-bold text-base  md:text-lg">
                KPT-CAT 2026 Result Announcement
              </h3>

              <p className="text-sm md:text-base mt-1 leading-relaxed text-orange-50">
                CET examination results will be published today at{" "}
                <span className="font-bold text-white">5:00 PM</span>.
              </p>

              <p className="text-xs md:text-sm mt-2 text-orange-100">
                Students can check their results using Application Number, Date
                of Birth, and Aadhaar verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WAITING CARD */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">
        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-[#081633] to-[#12326b] text-white text-center px-6 py-7">
          <div className="text-5xl mb-3 animate-pulse">⏳</div>

          <h2 className="text-2xl md:text-3xl font-bold">
            Results Yet to be Published
          </h2>

          <p className="text-sm md:text-base mt-2 text-blue-100">
            Please wait until the official announcement time.
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8 text-center">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-[#081633] mb-2">
                KPT-CAT 2026
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Karnataka (Govt.) Polytechnic, Mangaluru Entrance Examination
                results will be made available online today at
              </p>

              <div className="mt-4 text-3xl font-bold text-orange-600">
                5:00 PM
              </div>
            </div>

            {/* NOTE */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Students are advised to keep their
                <span className="font-semibold text-[#081633]">
                  {" "}
                  Application Number
                </span>
                ,
                <span className="font-semibold text-[#081633]">
                  {" "}
                  Date of Birth
                </span>
                , and
                <span className="font-semibold text-[#081633]">
                  {" "}
                  Aadhaar details
                </span>
                ready for result verification.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-6 text-xs text-gray-500">
            Official Result Portal • KPT Mangaluru
          </div>
        </div>
      </div>
    </div>
  );
}
