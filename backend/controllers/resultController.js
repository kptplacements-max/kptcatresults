import Student from "../models/Student.js";

const getResult = async (req, res) => {
  try {
    const { applicationNumber, aadhaarLast4 } = req.body;

    // VALIDATION
    if (!applicationNumber || !aadhaarLast4) {
      return res.status(400).json({
        success: false,
        message: "Application Number and Aadhaar Last 4 Digits are required",
      });
    }

    // FIND STUDENT
    const student = await Student.findOne({
      applicationNumber: applicationNumber.trim(),

      aadhaarLast4: Number(aadhaarLast4),
    });

    // STUDENT NOT FOUND
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
        draftMeritNo: student.draftMeritNo,

        applicationNumber: student.applicationNumber,

        studentName: student.studentName,

        fatherName: student.fatherName,

        motherName: student.motherName,

        dob: student.dob,

        gender: student.gender,

        aadhaar: student.aadhaar,

        aadhaarLast4: student.aadhaarLast4,

        sslcObtained: student.sslcObtained,

        sslcPercentage: student.sslcPercentage,

        catObtained: student.catObtained,

        catPercentage: student.catPercentage,

        overallPercentage: student.overallPercentage,

        category: student.category,

        casteName: student.casteName,

        rural: student.rural,

        kannadaMedium: student.kannadaMedium,

        createdAt: student.createdAt,
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
