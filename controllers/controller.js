import students from "../dummy/student.js";

class Controller {
  // Get all students
  static getAllStudents(req, res) {
    return res.status(200).json({
      students,
      message: "All the students",
    });
  }
  // Get a single student
  static getSingleStudent(req, res) {
    const findStudent = students.find((student) => student.id === parseInt(req.params.id, 10));
    if (findStudent) {
      return res.status(200).json({
        student: findStudent,
        message: "A single student record",
      });
    }
    return res.status(404).json({
      message: "Student record not found",
    });
  }
  // Add a student
  static addStudent(req, res) {
    const arr = req.params.info.split("-");
    students.push({ id: students.length + 1, name: arr[0], age: parseInt(arr[1]) });
    return res.status(200).json({
      students,
      message: "Added student",
    });
  }
  // update a student name
  static updateStudentName(req, res) {
    const arr = req.params.info.split("-");
    students.forEach((student) => {
      if (student.id === parseInt(arr[0])) {
        student.name = arr[1];
      }
    });
    return res.status(200).json({
      students,
      message: "Updated specified student name",
    });
  }

  // delete a student
  static deleteStudent(req, res) {
    const student = students.find((student) => student.id === parseInt(req.params.id));
    const index = students.indexOf(student);
    if (index > -1) {
      // only splice array when item is found
      students.splice(index, 1); // 2nd parameter means remove one item only
    }
    return res.status(200).json({
      students,
      message: "Delete specified student name",
    });
  }
}

export default Controller;
