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
        // MERIT
        draftMeritNo: student.draftMeritNo,
        finalMeritNo: student.finalMeritNo,

        // BASIC DETAILS
        applicationNumber: student.applicationNumber,
        satsNumber: student.satsNumber,

        studentName: student.studentName,
        fatherName: student.fatherName,
        motherName: student.motherName,

        dob: student.dob,
        gender: student.gender,

        // AADHAAR
        aadhaar: student.aadhaar,
        aadhaarLast4: student.aadhaarLast4,

        // CONTACT
        mobileNumber: student.mobileNumber,
        parentMobileNumber: student.parentMobileNumber,
        email: student.email,

        address: student.address,
        state: student.state,
        district: student.district,
        pincode: student.pincode,

        // EDUCATION
        qualifyingExam: student.qualifyingExam,
        passingYear: student.passingYear,

        sslcRegisterNumber: student.sslcRegisterNumber,

        sslcMaxMarks: student.sslcMaxMarks,
        sslcObtained: student.sslcObtained,
        sslcPercentage: student.sslcPercentage,

        // CAT
        catMaxMarks: student.catMaxMarks,
        catObtained: student.catObtained,
        catPercentage: student.catPercentage,

        // SCIENCE + MATHS
        scienceMarks: student.scienceMarks,
        mathsMarks: student.mathsMarks,
        totalScienceMaths: student.totalScienceMaths,

        // FINAL %
        overallPercentage: student.overallPercentage,

        // CATEGORY
        category: student.category,
        groupForSCOnly: student.groupForSCOnly,
        casteName: student.casteName,

        religion: student.religion,
        nationality: student.nationality,
        income: student.income,

        rural: student.rural,
        kannadaMedium: student.kannadaMedium,
        hydKarnataka: student.hydKarnataka,
        specialCategory: student.specialCategory,

        // DOCUMENTS
        certificateAvailable: student.certificateAvailable,
        acknowledgementNumber: student.acknowledgementNumber,

        // STATUS
        objectionRaised: student.objectionRaised,
        objectionReason: student.objectionReason,

        verified: student.verified,
        admissionStatus: student.admissionStatus,

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
