"use client";

import { useState } from "react";
import axios from "axios";

export default function MeritList() {
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
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl border border-pink-100 p-5">
        <div className="text-center">
          <div className="text-4xl mb-2">🎓</div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
            KPT Admission 2026
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Student Result Verification Portal
          </p>
        </div>

        <div className="border-t border-pink-100 my-4" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-pink-700 mb-1">
              Application Number
            </label>

            <input
              type="text"
              name="applicationNumber"
              placeholder="Enter Application Number"
              value={formData.applicationNumber}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-pink-700 mb-1">
              Last 4 Digits of Aadhaar Number
            </label>

            <input
              type="password"
              name="aadhaarLast4"
              placeholder="Enter Last 4 Digits"
              maxLength={4}
              value={formData.aadhaarLast4}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:opacity-90"
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
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-1 sm:p-2 overflow-x-hidden overflow-y-auto">
          <div className="relative bg-[#fff9fc] w-full max-w-5xl max-h-[95vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col mx-auto">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 z-20 text-white text-3xl font-light hover:text-pink-200"
            >
              ×
            </button>

            {/* HEADER */}
            <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400 text-white px-4 md:px-6 py-4 shrink-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Final Merit List Published
                  </h2>

                  <p className="text-pink-100 text-sm mt-1">
                    Karnataka Polytechnic Common Admission Test 2026
                  </p>
                </div>

                <div className="bg-white/20 border border-white/30 rounded-2xl px-5 py-3 text-center shadow-lg">
                  <p className="text-xs uppercase tracking-wide text-pink-100">
                    Final Merit No.
                  </p>

                  <h3 className="text-3xl font-bold">
                    {result.draftMeritNo || "-"}
                  </h3>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-5">
              {/* STUDENT INFO */}
              <SectionTitle title="👤 Student Information" />

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
              <SectionTitle title="📊 Performance Summary" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                <ScoreCard title="CAT Max" value={result.catMaxMarks || "-"} />

                <ScoreCard
                  title="CAT Marks"
                  value={result.catObtained || "-"}
                />

                <ScoreCard
                  title="CAT %"
                  value={
                    result.catPercentage
                      ? parseFloat(result.catPercentage).toFixed(2)
                      : "-"
                  }
                />

                <ScoreCard
                  title="SSLC Max"
                  value={result.sslcMaxMarks || "-"}
                />

                <ScoreCard
                  title="SSLC Marks"
                  value={result.sslcObtained || "-"}
                />

                <ScoreCard
                  title="SSLC %"
                  value={
                    result.sslcPercentage
                      ? parseFloat(result.sslcPercentage).toFixed(2)
                      : "-"
                  }
                />

                <ScoreCard
                  title="Overall %"
                  value={
                    result.overallPercentage
                      ? parseFloat(result.overallPercentage).toFixed(2)
                      : "-"
                  }
                />

                <ScoreCard
                  title="Science + Maths"
                  value={result.totalScienceMaths || "-"}
                />
              </div>

              {/* QUOTA */}
              <SectionTitle title="🏷 Reservation & Quota Details" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <InfoCard label="Rural Quota" value={result.rural} />

                <InfoCard label="Kannada Medium" value={result.kannadaMedium} />

                <InfoCard
                  label="Hyderabad Karnataka"
                  value={result.hydKarnataka}
                />

                {result.groupForSCOnly &&
                  result.groupForSCOnly !== "-" &&
                  result.groupForSCOnly !== "N/A" && (
                    <InfoCard
                      label="Group (For SC Only)"
                      value={result.groupForSCOnly}
                    />
                  )}

                {result.specialCategory &&
                  result.specialCategory !== "-" &&
                  result.specialCategory !== "N/A" &&
                  result.specialCategory !== "No" && (
                    <InfoCard
                      label="Special Category"
                      value={result.specialCategory}
                    />
                  )}
              </div>

              {/* FOOTER BUTTON */}
              <div className="text-center pb-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-90"
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
    <h3 className="text-lg font-bold text-pink-700 border-l-4 border-pink-500 pl-3">
      {title}
    </h3>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-2.5 sm:p-3 shadow-sm min-w-0">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-pink-500 font-bold break-words leading-tight">
        {label}
      </p>

      <p className="mt-1 text-sm sm:text-base font-semibold text-gray-800 break-words leading-snug">
        {value || "-"}
      </p>
    </div>
  );
}

function ScoreCard({ title, value }) {
  return (
    <div className="bg-white border-t-4 border-pink-500 rounded-2xl p-2.5 sm:p-3 shadow-sm min-w-0">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-pink-500 font-bold break-words leading-tight">
        {title}
      </p>

      <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-bold text-[#081633] break-words leading-tight">
        {value || "-"}
      </h3>
    </div>
  );
}
