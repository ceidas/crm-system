// ************* TRAINERS/COURSE ************* //

document.getElementById("trainersPerCourseForm").addEventListener("submit", function (event) {
    let selectCourse = document.getElementById("selectCourse"),
        selectAssignment = document.getElementById("selectTrainer");

    if (selectCourse.value === "") {
        document.getElementById("selectCourseValidation").innerHTML = "Select Option"
        document.getElementById("trainersPerCourseForm").style.color = "blue";
        event.preventDefault();
    }else{
        document.getElementById("selectCourseValidation").innerHTML = " "
    }

    if (selectAssignment.value === "") {
        document.getElementById("selectTrainerValidation").innerHTML = "Select Option"
        event.preventDefault();
    }else{
        document.getElementById("selectTrainerValidation").innerHTML = ""
    }
});