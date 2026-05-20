import Student from "../models/Student.js";

const getResult = async (req, res) => {
  try {
    const { applicationNumber, dob, aadhaarLast4 } = req.body;

    if (!applicationNumber || !dob || !aadhaarLast4) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = await Student.findOne({
      applicationNumber,
      dob,
      aadhaarLast4,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,

      student: {
        applicationNumber: student.applicationNumber,

        studentName: student.studentName,

        fatherName: student.fatherName,

        dob: student.dob,

        gender: student.gender,

        religion: student.religion,

        cetMarks: student.cetMarks,

        sslcMarks: student.sslcMarks,

        totalSM: student.totalSM,

        category: student.category,

        rural: student.rural,

        kannadaMedium: student.kannadaMedium,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { getResult };
