"use client";

export default function WaitingForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* WAITING CARD */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">
        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-[#081633] to-[#12326b] text-white text-center px-6 py-7">
          <h2 className="text-xl md:text-2xl font-bold">
            Karnataka (Govt.) Polytechnic - Admission (Regular Diploma) 2026
          </h2>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8 text-center">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Karnataka (Govt.) Polytechnic, Mangaluru Draft Merit List will
                be made available online today
              </p>

              <div className="mt-4 text-3xl font-bold text-orange-600">
                5.00 PM
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
                , and
                <span className="font-semibold text-[#081633]">
                  {" "}
                  Aadhaar details
                </span>
                ready for result verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
