allStudents = [];
allTeachers = [];
allSections = [];
var Student = function(firstName,lastName,grade,id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id;
    this.sections = [];
    this.leaveSection = function(sectionId){
        for(var i=0; i<this.sections.length;i++){
            if(this.sections[i].id = sectionId){
                this.sections.splice(i);
            }
        }
    }
};

var Teacher = function(firstName,lastName,subject,id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id;
};

var Section = function(name,maxSize,id){
    this.name = name;
    this.currentSize = 0;
    this.maxSize = maxSize;
    this.students = [];
    this.teacher = "";
    this.addTeacher = function(teacher){
        this.teacher = (teacher);
    };
    this.id = id;
    this.addStudent = function(student){
        this.students.push(student);
    };
    this.removeStudent = function(studentId){
        for(var i=0; i<this.students.length; i++){
            if(this.students[i].id = studentId){
                this.students.splice(i);
            }
        }
    };
};