function Student(name, gender, age) {
  (this.name = name),
    (this.gender = gender),
    (this.age = age),
    (this.marks = []);
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  this.marks && (this.marks = [...this.marks, ...marks]);
};

Student.prototype.getAverage = function () {
  return this.marks?.length
    ? this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length
    : 0;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;

  delete this.subject;
  delete this.marks;
};
