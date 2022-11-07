class Student {
  name;
  courses = ["Javascript", "HTML", "CSS"];

  constructor(name) {
    this.name = name;
  }

  getData(){
    return {
        name : this.name,
        list : this.courses
    }
  }
}

const student = new Student("Renzo")
console.log(student.getData());
