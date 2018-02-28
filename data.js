var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Joe","Cohn",11,1));
allStudents.push(new Student("Jane","Smith",12,2));
allStudents.push(new Student("Trent","Arrington",10,3));
allStudents.push(new Student("Becky","Powers",9,4));
allStudents.push(new Student("Jen","Ramirez",12,5));

allTeachers.push(new Teacher("Masha","Albrecht","Math",1));
allTeachers.push(new Teacher("Nakia","Baird","Math",2));
allTeachers.push(new Teacher("Keldon","Clegg","History",3));
allTeachers.push(new Teacher("Matt","Albinson","CS",4));
allTeachers.push(new Teacher("Carl","Rogers","English",5));

allSections.push(new Section("Math 2",30,1));
allSections.push(new Section("Math 3",25,2));
allSections.push(new Section("US History",30,3));
allSections.push(new Section("CS",32,4));
allSections.push(new Section("English",30,5));

var allItems = [allStudents,allTeachers,allSections];

