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
      type: Number,
      required: true,
    },

    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    FatherName: {
      type: String,
      trim: true,
    },

    dob: {
      type: String,
      required: true,
    },

    Gender: {
      type: String,
      trim: true,
    },

    "Nationality Indian": {
      type: String,
      trim: true,
    },

    Religion: {
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

    TotalSM: {
      type: Number,
      default: null,
    },

    Category: {
      type: String,
      trim: true,
    },

    Rural: {
      type: String,
      trim: true,
    },

    KannadaMedium: {
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
