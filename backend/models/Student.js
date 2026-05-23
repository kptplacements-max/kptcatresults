import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    // MERIT
    draftMeritNo: {
      type: Number,
      default: null,
    },

    finalMeritNo: {
      type: Number,
      default: null,
    },

    // BASIC DETAILS
    applicationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    satsNumber: {
      type: String,
      trim: true,
    },

    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    fatherName: {
      type: String,
      trim: true,
    },

    motherName: {
      type: String,
      trim: true,
    },

    dob: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      trim: true,
    },

    // AADHAAR
    aadhaar: {
      type: String,
      required: true,
      trim: true,
    },

    aadhaarLast4: {
      type: Number,
      required: true,
    },

    // CONTACT DETAILS
    mobileNumber: {
      type: String,
      trim: true,
    },

    parentMobileNumber: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    district: {
      type: String,
      trim: true,
    },

    pincode: {
      type: String,
      trim: true,
    },

    // EDUCATION DETAILS
    qualifyingExam: {
      type: String,
      trim: true,
    },

    passingYear: {
      type: Number,
      default: null,
    },

    sslcRegisterNumber: {
      type: String,
      trim: true,
    },

    sslcMaxMarks: {
      type: Number,
      default: null,
    },

    sslcObtained: {
      type: Number,
      default: null,
    },

    sslcPercentage: {
      type: String,
      trim: true,
    },

    // CET DETAILS
    catMaxMarks: {
      type: Number,
      default: null,
    },

    catObtained: {
      type: Number,
      default: null,
    },

    catPercentage: {
      type: String,
      trim: true,
    },

    // SCIENCE + MATHS
    scienceMarks: {
      type: Number,
      default: null,
    },

    mathsMarks: {
      type: Number,
      default: null,
    },

    totalScienceMaths: {
      type: Number,
      default: null,
    },

    // FINAL SCORE
    overallPercentage: {
      type: String,
      trim: true,
    },

    // CATEGORY DETAILS
    category: {
      type: String,
      trim: true,
    },

    groupForSCOnly: {
      type: String,
      trim: true,
    },

    casteName: {
      type: String,
      trim: true,
    },

    religion: {
      type: String,
      trim: true,
    },

    nationality: {
      type: String,
      trim: true,
      default: "Indian",
    },

    income: {
      type: String,
      trim: true,
    },

    rural: {
      type: String,
      trim: true,
    },

    kannadaMedium: {
      type: String,
      trim: true,
    },
    hydKarnataka: {
      type: String,
      trim: true,
    },

    specialCategory: {
      type: String,
      trim: true,
    },

    // DOCUMENTS
    certificateAvailable: {
      type: String,
      trim: true,
    },

    acknowledgementNumber: {
      type: String,
      trim: true,
    },

    // COUNSELLING
    objectionRaised: {
      type: Boolean,
      default: false,
    },

    objectionReason: {
      type: String,
      trim: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    admissionStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

// LOGIN INDEX
studentSchema.index({
  applicationNumber: 1,
  aadhaarLast4: 1,
});

// MERIT SEARCH INDEX
studentSchema.index({
  draftMeritNo: 1,
  finalMeritNo: 1,
  category: 1,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
