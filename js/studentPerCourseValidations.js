// ************* STUDENTS/COURSE ************* //

document.getElementById("studentPerCourseForm").addEventListener("submit", function (event) {
    let selectCourse = document.getElementById("selectCourse"),
        selectStudent = document.getElementById("selectStudent");

    if (selectCourse.value === "") {
        document.getElementById("selectCourseValidation").innerHTML = "Select Option"
        document.getElementById("studentPerCourseForm").style.color = "blue";
        event.preventDefault();
    } else {
        document.getElementById("selectCourseValidation").innerHTML = " "
    }

    if (selectStudent.value === "") {
        document.getElementById("selectStudentValidation").innerHTML = "Select Option"
        document.getElementById("studentPerCourseForm").style.color = "blue";
        event.preventDefault();
    } else {
        document.getElementById("selectStudentValidation").innerHTML = ""
    }
});