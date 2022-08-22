function Student(name, gender, age) {
    // Ваш код
    function Student(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
     
  }
  let Student1 = new Student('Katya', 'female', 24);
  let Student2 = new Student('Anton', 'male', 20);
  let Student3 = new Student('Peter', 'male', 34);


}

Student.prototype.setSubject = function(subjectName) {
  return subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
  this.marks = [mark]; // Первая оценка добавляется в массив
  } else {
  this.marks.push(mark); // Все остальные оценки пушатся
  }
  console.log(this.marks);
  }

  Student.prototype.addMarks = function(...mark){
    return mark;
  }
  
  Student.prototype.getAverage = function(){
    for (let i = 0; i < this.marks.length; i++){
      let sum = 0;
      sum += this.marks[i];
    }
    console.log(sum);
    return sum / this.marks.length;
  }