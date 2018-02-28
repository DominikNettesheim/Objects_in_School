function addStudent(){
    var sfn = document.getElementById("studentFirstName").value;
    var sln = document.getElementById("studentLastName").value;
    var sg = document.getElementById("studentGrade").value;
    var sid =allStudents.length+1;
    allStudents.push(new Student(sfn,sln,sg,sid));
    console.log(allStudents);
}

function addTeacher(){
    var tfn = document.getElementById("teacherFirstName").value;
    var tln = document.getElementById("teacherLastName").value;
    var ts = document.getElementById("teacherSubject").value;
    var tid = allTeachers.length+1;
    allTeachers.push(new Teacher(tfn,tln,ts,tid));
    console.log(allTeachers);
}

function addSection(){
    var sn = document.getElementById("sectionName").value;
    var sc = document.getElementById("sectionCount").value;
    var secid = allSections.length+1;
    allSections.push(new Section(sn,sc,secid));
    console.log(allSections);
}

function listItems() {
    var selected = document.getElementById("list").value;
    var array = allItems[selected];
    var t = "<table class=\"table table-hover\" >";
    if (selected == 2) {
    t+= "<tr><th>Name</th><th>Maximum Size</th><th>ID #</th></tr>";
    for (var i = 0; i < array.length; i++) {
        t += "<tr>";
        for (key in array[i]) {
            if (key === "maxSize" || key === "name" || key === "id") {
                t += "<td>";
                t += array[i][key] + " ";
                t += "</td>";
            }
        }
        t += "</tr>"
    }
} else if(selected == 1) {
        t+= "<tr><th>First Name</th><th>Last Name</th><th>Subject</th><th>ID #</th></tr>";
        for (i = 0; i < array.length; i++) {
        t += "<tr>";
        for (key in array[i]) {
            if (key === "firstName" || key === "lastName" || key === "subject" || key === "id") {
                t += "<td>";
                t += array[i][key] + " ";
                t += "</td>";
            }
        }
        t += "</tr>"
    }
} else{
        t+= "<tr><th>First Name</th><th>Last Name</th><th>Grade</th><th>ID #</th></tr>";
        for (i = 0; i < array.length; i++) {
        t += "<tr>";
        for (key in array[i]) {
            if (key === "firstName" || key === "lastName" || key === "grade" || key === "id") {
                t += "<td>";
                t += array[i][key] + " ";
                t += "</td>";
            }
    }
t += "</tr>"
        }
    }
    t += "</table>";
    document.getElementById("finishedList").innerHTML = t;
}
function createLists(){
    for(var i=0;i<allItems[0].length;i++) {
        document.getElementById("selectStudent").innerHTML +=
            "<option value ='" + allStudents[i].id + "'>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var i=0;i<allItems[0].length;i++) {
        document.getElementById("selectStudent1").innerHTML +=
            "<option value ='" + allStudents[i].id + "'>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var a=0;a<allItems[1].length;a++) {
        document.getElementById("selectTeacher").innerHTML +=
            "<option value ='" + allTeachers[a].id + "'>" + allItems[1][a].firstName + " " + allItems[1][a].lastName + "</option>"
    }
    for(var b=0;b<allItems[2].length;b++) {
        document.getElementById("selectSection").innerHTML +=
            "<option value ='" + allSections[b].id + "'>" + allItems[2][b].name + "</option>"
    }
}

function studentToSection(){
    var selectedStudentId = document.getElementById("selectStudent1").value;
    var selectedSectionId = document.getElementById("selectSection").value;
    console.log(selectedSectionId);
    for(var s=0; s<allStudents.length; s++){
        if(allStudents[s].id == selectedStudentId){
            var selectedStudent = allStudents[s];
        }
    }
    for(var i=0; i<allSections.length; i++){
        if(allSections[i].id == selectedSectionId){
            var section = allSections[i];
            section.addStudent(selectedStudent);
            selectedStudent.sections.push(allSections[i].name);
        }
    }
    section.currentSize +=1;
    console.log(section.students);
    console.log(selectedStudent);
}

function teacherToSection(){
    var selectedTeacherId = document.getElementById("selectTeacher").value;
    var selectedSectionId = document.getElementById("selectSection").value;
    console.log(selectedSectionId);
    for(var t=0; t<allTeachers.length; t++){
        if(allTeachers[t].id == selectedTeacherId){
            var selectedTeacher = allTeachers[t];
        }
    }
    for(var i=0; i<allSections.length; i++){
        if(allSections[i].id == selectedSectionId){
            var section = allSections[i];
            section.addTeacher(selectedTeacher);
        }
    }
    console.log(section.teacher);
    console.log(selectedTeacher);
}

function studentFromSection(){
    var selectedStudentId = document.getElementById("selectStudent1").value;
    var selectedSectionId = document.getElementById("selectSection").value;
    console.log(selectedSectionId);
    for(var s=0; s<allStudents.length; s++){
        if(allStudents[s].id == selectedStudentId){
            var selectedStudent = allStudents[s];
        }
    }
    for(var i=0; i<allSections.length; i++){
        if(allSections[i].id == selectedSectionId){
            var section = allSections[i];
            section.removeStudent(selectedStudentId);
            selectedStudent.leaveSection(selectedSectionId)
        }
    }
    console.log(section.students);
    console.log(selectedStudent);
}

function displayInfo() {
    var selectedSection = document.getElementById("selectSection").value;
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].id == selectedSection) {
            var section = allSections[i];
        }
    }
    var html = "<tr><th>Section Name</th><td>";
    html += section.name + "</td></tr>";
    if(section.teacher){
        html += "<tr><th>Teacher</th><td>";
        html += section.teacher.firstName + " " + section.teacher.lastName + "</td></tr>";
    }
    html += "<tr><th>Maximum Size</th><td>";
    html += section.maxSize + "</td></tr>";
    html += "<tr><th>Current Size</th><td>";
    html += section.currentSize + "</td></tr>";
    html += "<tr><th>Students</th></tr>";
    for(var s=0; s<section.students.length; s++){
        html+= "<tr><td>" + section.students[s].firstName + " " + section.students[s].lastName
    }
    document.getElementById("sectionInformation").innerHTML = html;
}

function findStudent(){
    var html = "";
    var selectedStudentId = document.getElementById("selectStudent").value;
    for(var s=0; s<allStudents.length; s++){
        if(allStudents[s].id == selectedStudentId){
            var selectedStudent = allStudents[s];
        }
    }
    html += "<tr><th>Name</th><td>" + selectedStudent.firstName + " " + selectedStudent.lastName + "</td></tr>";
    html += "<tr><th>Grade</th><td>" + selectedStudent.grade + "</td></tr>";
    html += "<tr><th>Sections</th>";
    for(var i=0; i<selectedStudent.sections.length; i++){
        html += "<td>" + selectedStudent.sections[i] + "</td>";
    }
    document.getElementById("studentSection").innerHTML = html;

}
