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

// document.getElementById("courseForm").addEventListener('submit', courseFormValidation)

// function courseFormValidation(e) {

//     var coursename = document.getElementById("courseName");
//     var stream = document.getElementById("stream");
//     var type = document.getElementById("stream");
//     var startdate = document.getElementById("startDate");
//     var enddate = document.getElementById("endDate");

//     if (coursename.value === "" || stream.value === "" || type.value === "" || startdate.value === "" || enddate.value === "") {
//         document.getElementById("courseForm").style.color = "blue";
//         document.getElementById("courseValidation").innerHTML = "Required Fields";
//         e.preventDefault();
//     } else {

//         document.getElementById("courseValidation").innerHTML = "";

//         var patternOne = /^CB/;
//         var patternTwo = /^De/;

//         if ((patternOne.test(coursename.value) !== true) && (patternTwo.test(coursename.value) !== true)) {
//             document.getElementById("courseNameValidation").innerHTML = "Course name must start with either CB or De";
//             e.preventDefault();
//         } else {
//             document.getElementById("courseNameValidation").innerHTML = "";
//         }
//         // let now = new Date();
//         // console.log(new Date())
//         let start = new Date(startdate.value);
//         let end = new Date(enddate.value);
//         // console.log(new Date(startdate.value));

//         if (end.getFullYear() - start.getFullYear() > 1) {
//             document.getElementById("startDateValidation").innerHTML = "Cannot be more than one year difference";
//             e.preventDefault();

//         } else if ((end.getFullYear() < start.getFullYear()) || ((end.getFullYear() === start.getFullYear()) && end.getMonth() < start.getMonth())) {
//             document.getElementById("startDateValidation").innerHTML = "Invalid date input";
//             e.preventDefault();
//         } else {
//             document.getElementById("startDateValidation").innerHTML = "";
//         }
//     }
// }


// ************* ASSIGNMENTS ************* //

// document.getElementById("assignmentForm").addEventListener("submit", function (assignmentFormValidation) {
//     var title = document.getElementById("title");
//     var description = document.getElementById("textArea");
//     var deadline = document.getElementById("deadline");
//     var oMark = document.getElementById("oralMark");
//     var tMark = document.getElementById("totalMark");
//     console.log(tMark.value);

//     if (title.value === "" || description.value === "" || deadline.value === "" || oMark.value === "" || tMark.value === "") {
//         document.getElementById("assignmentForm").style.color = "blue";
//         document.getElementById("assignmentValidation").innerHTML = "Required Fields";
//         assignmentFormValidation.preventDefault();

//         if (oMark.value === "" || tMark.value === "") {
//             document.getElementById("oralMarkValidation").innerHTML = "Must input number only"
//             document.getElementById("totalMarkValidation").innerHTML = "Must input number only"
//             assignmentFormValidation.preventDefault();
//         }

//     } else {
//         document.getElementById("assignmentValidation").innerHTML = "";

//         if (title.value.length > 10) {
//             document.getElementById("titleValidation").innerHTML = "Title must be less than 10 characters";
//             assignmentFormValidation.preventDefault();
//         } else {
//             document.getElementById("titleValidation").innerHTML = "";
//         }

//         if (description.value.length > 100) {
//             document.getElementById("textValidation").innerHTML = "Description must be less than 100 character";
//             assignmentFormValidation.preventDefault();
//         } else {
//             document.getElementById("textValidation").innerHTML = "";
//         }
//     }
// });

// ************* ASSIGNMENTS/COURSE ************* //


// ************* TRAINERS ************* //


// ************* TRAINERS/COURSE ************* //


// ************* STUDENTS ************* //


// ************* STUDENTS/COURSE ************* //