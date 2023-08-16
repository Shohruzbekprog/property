let person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return this.firstName + " " + this.lastName
  },
}

console.log(person.firstName);
console.log(person.fullName());

let a = 5;

console.log(a);