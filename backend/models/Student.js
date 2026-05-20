import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    applicationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    aadhaar: {
      type: String,
      required: true,
      trim: true,
    },

    aadhaarLast4: {
      type: String,
      required: true,
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

    dob: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      trim: true,
    },

    nationalityIndian: {
      type: String,
      trim: true,
    },

    religion: {
      type: String,
      trim: true,
    },

    cetMarks: {
      type: Number,
      default: null,
    },

    sslcMarks: {
      type: Number,
      default: null,
    },

    totalSM: {
      type: String,
      trim: true,
    },

    category: {
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

studentSchema.index({
  applicationNumber: 1,
  dob: 1,
  aadhaarLast4: 1,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
