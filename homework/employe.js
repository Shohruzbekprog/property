function Employee(name, salary, workName) {
  this.name = name;
  this.salary = salary;
  this.workName = workName;
}
Employee.prototype.increaseSalary = function(percent) {
  let increase = (this.salary * percent) / 100;
  let newSalary = this.salary + increase;
  return newSalary;
}
// Create an Employee instance
let john = new Employee("John Doe", 5000, "Developer");

let newSalary = john.increaseSalary(10);
console.log("New salary:", newSalary);
