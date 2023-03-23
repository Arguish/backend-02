const { Student } = require("../api/models/student.model");
const { Teacher } = require("../api/models/teacher.model");
const { Contact } = require("../api/models/contact.model");
const { Classroom } = require("../api/models/classroom.model");

function addRelations() {
  //Esta funcion no nhace nada, solo sirve como almacen de require para mandar al index
  Student.hasOne(Contact);
  Contact.belongsTo(Student);

  Teacher.hasMany(Student);
  Student.belongsTo(Teacher);

  Student.belongsToMany(Classroom, {
    through: "student_classroom",
  });
  Classroom.belongsToMany(Student, {
    through: "student_classroom",
  });

  console.log("REL OK ^.^");
}

//
module.exports = addRelations;
