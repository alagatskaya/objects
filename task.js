function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

student1 = new Student("Tony", "male", 37);
student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {

  if (this.marks === undefined) {
    this.marks = [mark]; // Первая оценка добавляется в массив
  } else {
    this.marks.push(mark); // Все остальные оценки пушатся
  }
  
}

Student.prototype.addMarks = function(...marks){
  if (this.marks === undefined){
    this.marks = [];
  }
  this.marks.push(...marks); 
 
} 

  
Student.prototype.getAverage = function(){
  // console.log(this.marks)
  let i = 0;
  let sum = 0;
    while (this.marks[i]) {
      sum += this.marks[i];
      i++;
      // this.marks++;
    }
  return sum / i;
}

Student.prototype.exclude = function(reason) {
  delete Student.marks;
  delete Student.subject;

  this.exclude = reason;
}