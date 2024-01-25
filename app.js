const express = require("express");

const app = express();
require("dotenv").config();

const createUser = require("./controllers/userControllers");

app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.post("/api/users", createUser);

// const createRecord = async () => {
//   const record = await Course.create({
//     title: "Javascript developing",
//     author: "Laurynas",
//     modules: ["Database", "Javascript"],
//   });

//   console.log(record);
// };

// // createRecord();

// const saveRecord = async () => {
//   const course = new Course({
//     title: "Javascript developing",
//     author: "Laurynas",
//     modules: ["Database", "Javascript"],
//   });

//   const result = await course.save();
//   console.log(result);
// };

// // saveRecord();

// const getAllCourses = async () => {
//   const allCourses = await Course.find();
//   console.log(allCourses);
// };

// // getAllCourses();

// const getCustomCourse = async (id) => {
//   const course = await Course.findById(id);
//   console.log(course);
// };

// // getCustomCourse("65b21e3501ae8f162385314a");

// const getByAuthor = async (myauthor) => {
//   const course = await Course.findOne({ author: myauthor });
//   console.log(course);
// };

// // getByAuthor("Laurynas");

// const updateCourse = async (id) => {
//   const course = await Course.findById(id);

//   if (!course) {
//     return;
//   }
//   course.modules.push("TypeScript");
//   const result = await course.save();
//   console.log(result);
// };

// // updateCourse("65b21e3501ae8f162385314a");

// const deleteOne = async (id) => {
//   const course = await Course.deleteOne({ _id: id });
//   console.log(course);
// };

// deleteOne("65b21e3501ae8f162385314a");

app.listen(process.env.PORT, () => {
  console.log("Server is running on port: " + process.env.PORT);
});
