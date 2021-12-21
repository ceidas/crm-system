// ************* ASSIGNMENT/STUDENTS/COURSE ************* //
document.getElementById("assignPerStudPerCourseForm").addEventListener("submit", function (event) {
    let selectCourse = document.getElementById("selectCourse"),
        selectStudent = document.getElementById("selectStudent"),
        selectAssignment = document.getElementById("selectAssignment");

    if (selectCourse.value === "") {
        document.getElementById("selectCourseValidation").innerHTML = "Select Option"
        document.getElementById("assignPerStudPerCourseForm").style.color = "blue";
        event.preventDefault();
    } else {
        document.getElementById("selectCourseValidation").innerHTML = " "
    }

    if (selectStudent.value === "") {
        document.getElementById("selectStudentValidation").innerHTML = "Select Option"
        document.getElementById("assignPerStudPerCourseForm").style.color = "blue";
        event.preventDefault();
    } else {
        document.getElementById("selectStudentValidation").innerHTML = ""
    }

    if (selectAssignment.value === "") {
        document.getElementById("selectAssignmentValidation").innerHTML = "Select Option"
        document.getElementById("assignPerStudPerCourseForm").style.color = "blue";
        event.preventDefault();
    } else {
        document.getElementById("selectAssignmentValidation").innerHTML = ""
    }
});