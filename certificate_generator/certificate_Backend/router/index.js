const express = require("express");
const router = express.Router();
const studentRouter = require("../router/student.router");

const application = [
  {
    path: "/studentData",
    route: studentRouter,
  },
];

application.forEach((paths) => {
  router.use(paths.path, paths.route);
});

module.exports = router;
