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
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-200 p-5 md:p-6">
        {/* TOP */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#081633]">
            Result Verification
          </h2>

          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Enter your details to view your result
          </p>
        </div>

        <div className="border-t border-gray-200 my-4" />

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* APPLICATION NUMBER */}
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* AADHAAR */}
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#081633] hover:bg-[#102552] text-white font-semibold text-sm py-3 rounded-lg transition duration-300"
          >
            {loading ? "Checking..." : "View Result"}
          </button>
        </form>

        {/* ERROR */}
        {error && (
          <div className="mt-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}
      </div>

      {/* RESULT MODAL */}
      {showModal && result && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              ×
            </button>

            {/* TOP BANNER */}
            <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white text-center px-6 py-8">
              <div className="text-5xl mb-3">🎉</div>

              <h2 className="text-2xl md:text-3xl font-bold">
                Congratulations!
              </h2>

              <p className="text-sm md:text-base mt-2 text-green-100">
                Your KPT-CAT 2026 result has been successfully verified.
              </p>
            </div>

            {/* RESULT DETAILS */}
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">
                    Student Name
                  </span>

                  <span className="font-bold text-[#081633] text-right">
                    {result.studentName}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">
                    Application No
                  </span>

                  <span className="font-bold text-[#081633]">
                    {result.applicationNumber}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">
                    Father Name
                  </span>

                  <span className="font-bold text-[#081633] text-right">
                    {result.fatherName}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">
                    Aadhaar Number
                  </span>

                  <span className="font-bold text-[#081633]">
                    XXXX XXXX {result.aadhaar?.toString().slice(-4)}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">CET Marks</span>

                  <span className="font-bold text-green-700 text-xl">
                    {result.cetMarks}
                  </span>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#081633] hover:bg-[#102552] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
