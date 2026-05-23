import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    draftMeritNo: {
      type: Number,
      default: null,
    },

    applicationNumber: {
      type: String,
      required: true,
      unique: true,
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

    aadhaar: {
      type: String,
      required: true,
      trim: true,
    },

    aadhaarLast4: {
      type: Number,
      required: true,
    },

    sslcObtained: {
      type: Number,
      default: null,
    },

    // CHANGE TO STRING
    sslcPercentage: {
      type: String,
      trim: true,
    },

    catObtained: {
      type: Number,
      default: null,
    },

    // CHANGE TO STRING
    catPercentage: {
      type: String,
      trim: true,
    },

    // CHANGE TO STRING
    overallPercentage: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    casteName: {
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

const Student = mongoose.model("Student", studentSchema);

export default Student;
