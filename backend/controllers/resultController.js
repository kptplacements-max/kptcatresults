import Student from "../models/Student.js";

const getResult = async (req, res) => {
  try {
    const { applicationNumber, dob, aadhaarLast4 } = req.body;
    console.log(applicationNumber);
    // VALIDATION
    if (!applicationNumber || !dob || !aadhaarLast4) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // FORMAT DOB
    const formattedDOB = new Date(dob)
      .toLocaleDateString("en-US")
      .replace(/\//g, "-");

    // FIND STUDENT
    const student = await Student.findOne({
      applicationNumber,

      aadhaarLast4: Number(aadhaarLast4),

      $or: [{ dob }, { dob: formattedDOB }],
    });

    // NOT FOUND
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // SUCCESS RESPONSE
    return res.status(200).json({
      success: true,

      student: {
        applicationNumber: student.applicationNumber,

        studentName: student.studentName,

        fatherName: student.FatherName,

        aadhaar: student.aadhaar,

        dob: student.dob,

        gender: student.Gender,

        religion: student.Religion,

        cetMarks: student.cetMarks,

        sslcMarks: student.sslcMarks,

        totalSM: student.TotalSM,

        category: student.Category,

        rural: student.Rural,

        kannadaMedium: student.KannadaMedium,
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
