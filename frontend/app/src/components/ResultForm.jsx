"use client";

import { useState } from "react";

import axios from "axios";

export default function ResultForm() {
  const [formData, setFormData] = useState({
    applicationNumber: "",
    dob: "",
    aadhaarLast4: "",
  });

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

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

      setResult(null);

      const response = await axios.post(
        "http://localhost:5000/api/results/search",
        formData,
      );

      setResult(response.data.student);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10">
      {/* TOP */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d234a]">
          Result Verification
        </h2>

        <p className="text-gray-500 text-base md:text-lg mt-2">
          Enter your details to view your KPT-CAT 2026 result
        </p>
      </div>

      <div className="border-t border-gray-300 my-3" />

      {/* FORM TITLE */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#0d234a] mb-5">
        Check Your Result
      </h3>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* APPLICATION NUMBER */}
        <div>
          <label className="block text-base md:text-lg font-semibold mb-2 text-gray-800">
            Application Number
          </label>

          <input
            type="text"
            name="applicationNumber"
            placeholder="Enter Application Number"
            value={formData.applicationNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-base md:text-lg font-semibold mb-2 text-gray-800">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* AADHAAR */}
        <div>
          <label className="block text-base md:text-lg font-semibold mb-2 text-gray-800">
            Last 4 Digits of Aadhaar Number
          </label>

          <input
            type="password"
            name="aadhaarLast4"
            placeholder="Enter Last 4 Digits"
            maxLength={4}
            value={formData.aadhaarLast4}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#081633] hover:bg-[#102552] text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300"
        >
          {loading ? "Checking..." : "View Result"}
        </button>
      </form>

      {/* ERROR */}
      {error && (
        <div className="mt-6 bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-8 bg-green-50 border border-green-300 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            KPT-CAT 2026 Result
          </h3>

          <div className="space-y-3 text-base">
            <p>
              <span className="font-semibold">Student Name:</span>{" "}
              {result.studentName}
            </p>

            <p>
              <span className="font-semibold">Application Number:</span>{" "}
              {result.applicationNumber}
            </p>

            <p>
              <span className="font-semibold">KPT-CAT 2026 Marks:</span>{" "}
              {result.cetMarks}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
