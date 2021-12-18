// function validationForm(){
//     let x = document.forms["myForm"].value;
//     if ( x==""){
//         alert(All cells must be filled out);
//         return false;
//     }
// }
//https://www.w3schools.com/js/js_validation.asp 
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js

// ************* COURSES ************* //

document.getElementById("courseForm").addEventListener('submit', validateCourseForm)

function validateCourseForm(e) {

    var coursename = document.getElementById("courseName");
    var stream = document.getElementById("stream");
    var type = document.getElementById("stream");
    var startdate = document.getElementById("startDate");
    var enddate = document.getElementById("endDate");

    if (coursename.value === "" || stream.value === "" || type.value === "" || startdate.value === "" || enddate.value === "") {
        document.getElementById("courseValidation").innerHTML = "Required Fields";
        document.getElementById("courseForm").style.color = "red";
        e.preventDefault();
    } else {

        document.getElementById("courseValidation").innerHTML = "";

        var patternOne = /^CB/;
        var patternTwo = /^De/;

        if ((patternOne.test(coursename.value) !== true) && (patternTwo.test(coursename.value) !== true)) {
            document.getElementById("courseNameValidation").innerHTML = "Course name must start with either CB or De";
            e.preventDefault();
        } else {
            document.getElementById("courseNameValidation").innerHTML = "";
        }
        // let now = new Date();
        // console.log(new Date())
        let start = new Date(startdate.value);
        let end = new Date(enddate.value);
        // console.log(new Date(startdate.value));

        if (end.getFullYear() - start.getFullYear() > 1) {
            document.getElementById("startDateValidation").innerHTML = "Cannot be more than one year difference";
            e.preventDefault();

        } else if ((end.getFullYear() < start.getFullYear()) || ((end.getFullYear() === start.getFullYear()) && end.getMonth() < start.getMonth())) {
            document.getElementById("startDateValidation").innerHTML = "Invalid date input";
            e.preventDefault();
        } else {
            document.getElementById("startDateValidation").innerHTML = "";
        }





    }

}



// ************* ASSIGNMENTS ************* //


// ************* ASSIGNMENTS/COURSE ************* //


// ************* TRAINERS ************* //


// ************* TRAINERS/COURSE ************* //


// ************* STUDENTS ************* //


// ************* STUDENTS/COURSE ************* //