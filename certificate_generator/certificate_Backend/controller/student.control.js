const StudentServices = require("../service/student.service");

const creation = async (req, res) => {
  let data = await StudentServices.studentEntry(req);
  if (data == null) {
    res.status(401).send({ message: "Student data is already exists" });
  } else {
    res.status(200).send({ id: data._id });
  }
};

const certificateGeneration = async (req, res) => {
  let data = await StudentServices.PdfGen(req);
  if (data != null) {
    res.status(201).send(data);
  } else {
    res.status(401).send({ message: "user not found" });
  }
};

const Table = async (req, res) => {
  let tableValue = await StudentServices.Find(req);
  if (tableValue != null) {
    res.status(200).send(tableValue);
  } else {
    res.status(401).send({ message: "user not found" });
  }
};

const FindById = async (req, res) => {
  let dataId = await StudentServices.FindOne(req);
  if (dataId != null) {
    res.status(201).send(dataId);
  } else {
    res.status(401).send({ message: "User not exists" });
  }
};

const UserDelete = async (req, res) => {
  let data = await StudentServices.DeleteBoth(req);
  console.log("data ----->>", data);
  if (data != null) {
    res.status(200).send({ message: "USER DELETED SUCCESSFULLY......." });
  } else {
    res.status(404).send({ message: "File not Found" });
  }
};

module.exports = {
  creation,
  certificateGeneration,
  Table,
  FindById,
  UserDelete,
};
