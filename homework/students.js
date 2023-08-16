// Constructor function for Student
function Student(name, course, years, university) {
  this.name = name;
  this.course = course;
  this.years = years;
  this.university = university;
}

Student.prototype.leftYears = function() {
  return Math.max(0, this.years - this.years - 1);
};
const student = new Student("Shohruzbek M", "Computer Science", 4, "TATU University");

console.log(student.name); 
console.log(student.course); 

console.log(student.leftYears()); 
