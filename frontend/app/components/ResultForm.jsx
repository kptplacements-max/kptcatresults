"use client";

import { useState } from "react";
import axios from "axios";

export default function ResultForm() {
  const [formData, setFormData] = useState({
    applicationNumber: "",
    aadhaarLast4: "",
  });

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/results/search`,
        formData,
      );

      setResult(response.data.student);

      setShowModal(true);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-200 p-5">
        <div className="text-center">
          <div className="text-4xl mb-2">🎓</div>

          <h2 className="text-xl font-bold text-[#081633]">
            KPT Admission 2026
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Student Result Verification Portal
          </p>
        </div>

        <div className="border-t border-gray-200 my-4" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Application Number
            </label>

            <input
              type="text"
              name="applicationNumber"
              placeholder="Enter Application Number"
              value={formData.applicationNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last 4 Digits of Aadhaar Number
            </label>

            <input
              type="password"
              name="aadhaarLast4"
              placeholder="Enter Last 4 Digits"
              maxLength={4}
              value={formData.aadhaarLast4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#081633] to-[#12326b] text-white font-semibold text-sm py-3 rounded-xl shadow-lg hover:opacity-95 transition"
          >
            {loading ? "Verifying..." : "View Result"}
          </button>
        </form>

        {error && (
          <div className="mt-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}
      </div>

      {/* RESULT MODAL */}
      {showModal && result && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
          <div
            className="
        relative
        bg-white
        w-full
        max-w-6xl
        h-[95vh]
        rounded-2xl
        shadow-2xl
        overflow-hidden
        flex
        flex-col
      "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="
          absolute
          top-3
          right-4
          z-20
          text-white
          text-3xl
          font-light
          hover:text-red-300
        "
            >
              ×
            </button>

            {/* HEADER */}
            <div className="bg-[#0b1d48] text-white px-4 md:px-6 py-4 shrink-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Draft Merit List Published
                  </h2>

                  <p className="text-blue-100 text-sm mt-1">
                    Karnataka Polytechnic Common Admission Test 2026
                  </p>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xs text-blue-100 uppercase tracking-wide">
                    Draft Merit No.
                  </p>

                  <h3 className="text-3xl font-bold mt-1">
                    {result.draftMeritNo || "-"}
                  </h3>
                </div>
              </div>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-5">
              {/* STUDENT INFO */}
              <SectionTitle title="Student Information" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <InfoCard label="Student Name" value={result.studentName} />
                <InfoCard
                  label="Application Number"
                  value={result.applicationNumber}
                />
                <InfoCard label="Date of Birth" value={result.dob} />
                <InfoCard label="Gender" value={result.gender} />

                <InfoCard
                  label="Aadhaar Number"
                  value={`XXXX XXXX ${result.aadhaar?.toString().slice(-4)}`}
                />

                <InfoCard label="Category" value={result.category} />
              </div>

              {/* PERFORMANCE */}
              <SectionTitle title="Performance Summary" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <ScoreCard title="CAT Max" value={result.catMaxMarks || "-"} />

                <ScoreCard
                  title="CAT Obtained"
                  value={result.catObtained || "-"}
                />

                <ScoreCard
                  title="CAT %"
                  value={
                    result.catPercentage
                      ? Number(result.catPercentage).toFixed(2)
                      : "-"
                  }
                />

                <ScoreCard
                  title="SSLC Max"
                  value={result.sslcMaxMarks || "-"}
                />

                <ScoreCard
                  title="SSLC Obtained"
                  value={result.sslcObtained || "-"}
                />

                <ScoreCard
                  title="SSLC %"
                  value={result.sslcPercentage || "-"}
                />

                <ScoreCard
                  title="Overall % (75% SSLC + 25% CAT)"
                  value={result.overallPercentage || "-"}
                />

                <ScoreCard
                  title="Science + Maths"
                  value={result.totalScienceMaths || "-"}
                />
              </div>

              {/* QUOTA */}
              <SectionTitle title="Reservation & Quota Details" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <InfoCard label="Rural Quota" value={result.rural} />

                <InfoCard label="Kannada Medium" value={result.kannadaMedium} />

                <InfoCard
                  label="Hyderabad Karnataka"
                  value={result.hydKarnataka}
                />

                <InfoCard
                  label="Group (For SC Only)"
                  value={result.groupForSCOnly}
                />

                <InfoCard
                  label="Special Category"
                  value={result.specialCategory}
                />
              </div>

              {/* NOTICE */}
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
                <h3 className="text-sm md:text-base font-bold text-amber-800">
                  ⚠ Objection / Discrepancy Notice
                </h3>

                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  Students are advised to carefully verify all marks,
                  reservation details and merit information displayed above.
                </p>

                <p className="text-sm text-gray-700 mt-2">
                  Any objections should be submitted before
                  <span className="font-bold text-red-700">
                    {" "}
                    25/05/2026 - 5:00 PM
                  </span>
                </p>
              </div>

              {/* FOOTER BUTTON */}
              <div className="text-center pb-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="
              bg-[#0b1d48]
              hover:bg-[#132d6b]
              text-white
              px-8
              py-2.5
              rounded-xl
              text-sm
              font-semibold
              transition
            "
                >
                  Close Result
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="text-base md:text-lg font-bold text-[#081633] border-l-4 border-blue-700 pl-3">
      {title}
    </h3>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
      <p className="text-[9px] uppercase tracking-wide text-gray-500 font-semibold">
        {label}
      </p>

      <p className="mt-1 text-xs md:text-sm font-bold text-[#081633] break-words leading-snug">
        {value || "-"}
      </p>
    </div>
  );
}

function ScoreCard({ title, value }) {
  return (
    <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-3 shadow-sm">
      <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-bold text-[#081633]">{value || "-"}</h3>
    </div>
  );
}
