let names = [
  { firstname: "Rishab", lastname: "Gupta", age: 23, gender: "Male" },
  { firstname: "Khushi", lastname: "Gupta", age: 24, gender: "Female" },
  { firstname: "Irfan", lastname: "Pathan", age: 45, gender: "Male" },
];

function check(name) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].age > 18 && names[i].gender == "Male") {
      console.log(name[i].firstname + " " + name[i].lastname);
    }
  }
}
check(names);
