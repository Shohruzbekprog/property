function Person(name, age, currentYear) {
  this.name = name;
  this.age = age;
  this.currentYear = currentYear;
}

Person.prototype.getBirthYear = function() {
  return this.currentYear - this.age;
};
let john = new Person("John", 25, 2023);
console.log(john.getBirthYear());
