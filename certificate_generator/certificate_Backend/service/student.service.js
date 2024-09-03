const { Student } = require("../model/student.model");
const PDFkit = require("pdfkit");
const fs = require("fs");
const path = require("path");

const studentEntry = async (req) => {
  let body = req.body;
  let certify = body.certificate_no;
  let checkId = await Student.findOne({ certificate_no: certify });
  if (!checkId) {
    let creation = await Student.create(body);
    return creation;
  } else {
    return null;
  }
};

const PdfGen = async (req) => {
  let id = req.params.id;
  const findUserByid = await Student.findById(id);
  if (!findUserByid) {
    return null;
  } else {
    let details = {
      name: findUserByid.name,
      course_name: findUserByid.course_name,
      duration: findUserByid.duration,
      certificate_no: findUserByid.certificate_no,
    };
    const doc = new PDFkit({
      layout: "portrait",
      size: "a3",
    });

    const pdfpath = path.join(
      "./public/certificate",
      `${details.name} certificate.pdf`
    );

    doc.pipe(fs.createWriteStream(pdfpath));

    doc.image("assets/Minithasri_page-0001.jpg", 0, 0, { width: 840 });

    doc
      .fontSize(32)
      .fillColor("white")
      .text(`${details.name}`, 220, 558, { width: 400, align: "center" });

    doc
      .fontSize(20)
      .fillColor("#5B213C")
      .text(
        `has been awarded the Post Graduate certificate with Merit in ${details.course_name} `,
        205,
        660,
        { align: "center", width: 440 }
      );

    doc
      .fillColor("#5B213C")
      .fontSize(20)
      .text(`${details.duration} 2023`, 65, 740, { align: "center" });

    doc.moveDown();
    doc
      .fillColor("#5B213C")
      .fontSize(12)
      .text(`Reg No: ${details.certificate_no}`, 70, 1100, { align: "right" });

    doc.end();

    if (!details) {
      return null;
    } else {
      return details;
    }
  }
};

const Find = async (req) => {
  let values = await Student.find();
  if (!values) {
    return null;
  } else {
    return values;
  }
};

const FindOne = async (req) => {
  let id = req.params.id;
  let value = await Student.findById(id);
  if (!value) {
    return null;
  } else {
    return value;
  }
};

const DeleteBoth = async (req) => {
  let id = req.params.id;
  let profile = await Student.findOne({ _id: id });
  if (!profile) {
    return null;
  } else {
    let profileName = profile.name;
    console.log("profileName", profileName);

    let PublicPath = path.resolve(
      __dirname,
      "../public/certificate",
      `${profileName} certificate.pdf`
    );
    console.log("PublicPath ---->>", PublicPath);
    fs.access(PublicPath, fs.constants.F_OK, async (err) => {
      if (err) {
        console.log("File not found");
        return null;
      } else {
        console.log("File exists, deleting...");
        fs.unlink(PublicPath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
            return null;
          } else {
            console.log("File deleted successfully");
            console.log("profile id ----->>", profile._id);
          }
        });
      }
    });
    profile = await Student.findByIdAndDelete(id);
    return profile;
  }
};

module.exports = {
  studentEntry,
  Find,
  PdfGen,
  FindOne,
  DeleteBoth,
};
