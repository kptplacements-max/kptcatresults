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
      {/* FORM CARD */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-200 p-5">
        <div className="text-center">
          <div className="text-4xl mb-2">🎓</div>

          <h2 className="text-xl font-bold text-[#081633]">KPT-CAT 2026</h2>

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

      {showModal && result && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-2 md:p-4 overflow-y-auto">
          <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-4 md:my-0">
            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-white text-3xl z-10 hover:text-red-300"
            >
              ×
            </button>

            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#081633] via-[#12326b] to-[#1d4ed8] text-white px-4 py-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-3xl mb-1">🏆</div>

                  <h2 className="text-xl md:text-2xl font-bold">
                    Result Published
                  </h2>

                  <p className="text-blue-100 mt-1 text-xs md:text-sm">
                    Karnataka Polytechnic Common Admission Test 2026
                  </p>
                </div>

                {/* MERIT */}
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-center min-w-[100px]">
                  <p className="text-[10px] text-blue-100">Draft Merit No.</p>

                  <h3 className="text-2xl font-extrabold mt-1">
                    {result.draftMeritNo || "-"}
                  </h3>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="p-3 md:p-4">
              {/* STUDENT INFO */}
              <div className="mb-4">
                <h3 className="text-base md:text-lg font-bold text-[#081633] mb-3">
                  Student Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <InfoCard label="Student Name" value={result.studentName} />

                  <InfoCard label="Father Name" value={result.fatherName} />

                  <InfoCard label="Mother Name" value={result.motherName} />

                  <InfoCard
                    label="Application Number"
                    value={result.applicationNumber}
                  />

                  <InfoCard label="Date of Birth" value={result.dob} />

                  <InfoCard label="Gender" value={result.gender} />

                  <InfoCard label="Category" value={result.category} />

                  <InfoCard label="Caste Name" value={result.casteName} />

                  <InfoCard
                    label="Aadhaar Number"
                    value={`XXXX XXXX ${result.aadhaar?.toString().slice(-4)}`}
                  />

                  <InfoCard
                    label="Kannada Medium"
                    value={result.kannadaMedium}
                  />

                  <InfoCard label="Rural Quota" value={result.rural} />

                  <InfoCard
                    label="Draft Merit No."
                    value={result.draftMeritNo}
                  />
                </div>
              </div>

              {/* PERFORMANCE */}
              <div className="mb-4">
                <h3 className="text-base md:text-lg font-bold text-[#081633] mb-3">
                  Performance Summary
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <ScoreCard
                    title="CAT Marks"
                    value={result.catObtained || "-"}
                    color="green"
                  />

                  <ScoreCard
                    title="CAT %"
                    value={result.catPercentage || "-"}
                    color="blue"
                  />

                  <ScoreCard
                    title="SSLC Marks"
                    value={result.sslcObtained || "-"}
                    color="orange"
                  />

                  <ScoreCard
                    title="SSLC %"
                    value={result.sslcPercentage || "-"}
                    color="green"
                  />

                  <ScoreCard
                    title="Overall %"
                    value={result.overallPercentage || "-"}
                    color="blue"
                  />
                </div>
              </div>

              {/* STATUS */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-4 text-white shadow-xl mb-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-widest opacity-90">
                      Admission Status
                    </p>

                    <h2 className="text-lg md:text-xl font-extrabold mt-1">
                      Eligible for Counselling
                    </h2>

                    <p className="mt-1 text-xs md:text-sm text-green-50 leading-relaxed">
                      Candidate is provisionally eligible for KPT-CAT 2026
                      counselling process.
                    </p>
                  </div>

                  <div className="text-4xl md:text-5xl">✅</div>
                </div>
              </div>

              {/* NOTICE */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-300 rounded-xl p-4">
                <h3 className="text-sm md:text-base font-bold text-orange-700">
                  ⚠ Objection / Discrepancy Notice
                </h3>

                <p className="text-xs md:text-sm text-gray-700 mt-2 leading-relaxed">
                  Students are advised to carefully verify all details including
                  marks, category, rural quota, Kannada medium status and merit
                  number.
                </p>

                <p className="text-xs md:text-sm text-gray-700 mt-2 leading-relaxed">
                  If any discrepancy is found, objections may be raised before
                  publication of the final merit list.
                </p>

                <div className="mt-3 bg-white border border-orange-200 rounded-xl p-3">
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Objections must be raised within notified schedule.</li>

                    <li>Supporting documents should be produced.</li>

                    <li>Final merit list will be published after scrutiny.</li>
                  </ul>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-5 text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#081633] hover:bg-[#102552] text-white px-6 py-2 rounded-xl text-sm font-semibold shadow-lg transition"
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

/* INFO CARD */
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

/* SCORE CARD */
function ScoreCard({ title, value, color }) {
  const colors = {
    green: "from-green-600 to-emerald-500",
    blue: "from-blue-600 to-sky-500",
    orange: "from-orange-500 to-amber-500",
  };

  return (
    <div
      className={`bg-gradient-to-r ${colors[color]} rounded-lg text-white p-3 shadow-lg`}
    >
      <p className="text-[10px] font-medium opacity-90">{title}</p>

      <h3 className="text-lg md:text-2xl font-extrabold mt-1 break-words">
        {value}
      </h3>
    </div>
  );
}
