const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.control");

router.route("/entry").post(studentController.creation);
router.route("/generation/:id").put(studentController.certificateGeneration);
router.route("/find").get(studentController.Table);
router.route("/find/:id").get(studentController.FindById);
router.route("/userAndPdf/:id").delete(studentController.UserDelete);

module.exports = router;
