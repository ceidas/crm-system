// ************* ASSIGNMENTS/COURSE ************* //
document.getElementById("assignmentPerCourseForm").addEventListener("submit", function (event) {
    console.log("test");
    let selectCourse = document.getElementById("selectCourse"),
        selectAssignment = document.getElementById("selectAssignment");

    if (selectCourse.value === "") {
        document.getElementById("selectCourseValidation").innerHTML = "Select Option"
        document.getElementById("assignmentPerCourseForm").style.color = "blue";
        event.preventDefault();
    }else{
        document.getElementById("selectCourseValidation").innerHTML = " "
    }

    if (selectAssignment.value === "") {
        document.getElementById("selectAssignmentValidation").innerHTML = "Select Option"
        event.preventDefault();
    }else{
        document.getElementById("selectAssignmentValidation").innerHTML = ""
    }
});