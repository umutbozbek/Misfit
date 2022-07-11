const { query } = require("express");
const Course = require("../models/Course");

const User = require("../models/User");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,

      user: req.session.userID,
    });
    req.flash("succes", `${course.name} başarıyla oluşturuldu`);
    res.status(201).redirect("/users/dashboard");
  } catch (error) {
    req.flash("error", `Bir şeyler ters gitti!!!`);
    res.status(400).redirect("/");
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndRemove({ slug: req.params.slug });
    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    course.name = req.body.name;
    course.description = req.body.description;

    course.save();
    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).sort("-createdAt").populate("user");
    res.status(200).render("courses", {
      courses,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.enrollCource = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);

    await user.courses.push({ _id: req.body.course_id });
    await user.save();

    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.releaseCourse = async (req, res) => {

    try {
        const user=await User.findById(req.session.userID)
        await user.courses.pull({_id:req.body.course_id})
        await user.save()
        
        res.status(200).redirect('/users/dashboard');
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error

        })
    }
}


exports.getCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    const course = await Course.findOne({ slug: req.params.slug }).populate(
      "user"
    );

    res.status(200).render("course", {
      course,
      page_name: "courses",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
