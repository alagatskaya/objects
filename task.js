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
 let sum = this.marks.reduce((acc, mark) => acc + mark,  0);
 return sum / this.marks.length
}


Student.prototype.exclude = function(reason) {

    this.excluded = reason;

    delete this.marks;
    delete this.subject;

}

