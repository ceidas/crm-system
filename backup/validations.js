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
//             document.getElementById("endDateValidation").innerHTML = "Invalid date input";
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
// document.getElementById("assignmentPerCourseForm").addEventListener("submit", function (event) {
//     console.log("test");
//     let selectCourse = document.getElementById("selectCourse"),
//         selectAssignment = document.getElementById("selectAssignment");

//     if (selectCourse.value === "") {
//         document.getElementById("selectCourseValidation").innerHTML = "Select Option"
//         event.preventDefault();
//     }else{
//         document.getElementById("selectCourseValidation").innerHTML = " "
//     }

//     if (selectAssignment.value === "") {
//         document.getElementById("selectAssignmentValidation").innerHTML = "Select Option"
//         event.preventDefault();
//     }else{
//         document.getElementById("selectAssignmentValidation").innerHTML = ""
//     }
// });


// document.getElementById("assignmentPerCourseForm").addEventListener("submit", function(event) {
//     console.log("test");
//     let selectCourse = document.getElementById("selectCourse"),
//         selectAssignment = document.getElementById("selectAssignment");

//     if (selectCourse === "" || selectAssignment === "") {
//         document.getElementById("assignmentPerCourseValidation").innerHTML = "Option Required"
//         event.preventDefault();
//     }
// })

// // ************* TRAINERS ************* //
// document.getElementById("trainersForm").addEventListener("submit", trainersFormValidation);

// function trainersFormValidation(event) {
//     var pattern = /^[A-Za-z\s]+$/
//     firstName = document.getElementById("trainersFirstName");
//     lastName = document.getElementById("trainersLastName");
//     subject = document.getElementById("trainersSubject")

//     if (firstName.value === "" || lastName.value === "" || subject.value === "") {
//         document.getElementById("trainersValidation").innerHTML = "Required Fields";
//         event.preventDefault();

//     } else {
//         document.getElementById("trainersValidation").innerHTML = " ";

//         if ((pattern.test(firstName.value) === true) && firstName.value.length < 10) {
//             document.getElementById("trainersFirstNameValidation").innerHTML = ""
//         } else {
//             document.getElementById("trainersFirstNameValidation").innerHTML = "Only Characters Allowed. Max 10 Characters."
//             event.preventDefault();
//         }

//         if (pattern.test(lastName.value) !== true) {
//             document.getElementById("trainersLastNameValidation").innerHTML = "Only Characters Allowed"
//             event.preventDefault();
//         } else {
//             document.getElementById("trainersLastNameValidation").innerHTML = ""
//         }

//     }
// }

// ************* TRAINERS/COURSE ************* //

// document.getElementById("trainersPerCourseForm").addEventListener("submit", function (event) {
//     let selectCourse = document.getElementById("selectCourse"),
//         selectAssignment = document.getElementById("selectTrainer");

//     if (selectCourse.value === "") {
//         document.getElementById("selectCourseValidation").innerHTML = "Select Option"
//         event.preventDefault();
//     }else{
//         document.getElementById("selectCourseValidation").innerHTML = " "
//     }

//     if (selectAssignment.value === "") {
//         document.getElementById("selectTrainerValidation").innerHTML = "Select Option"
//         event.preventDefault();
//     }else{
//         document.getElementById("selectTrainerValidation").innerHTML = ""
//     }
// });
// ************* STUDENTS ************* //

// document.getElementById("studentForm").addEventListener('submit', studentFormValidation)

// function studentFormValidation(e) {

//     var studentFirstName = document.getElementById("studentFirstName");
//     var studentLastName = document.getElementById("studentLastName");
//     var dob = document.getElementById("studentDoB");
//     var tuitionFee = document.getElementById("tuitionFee");


//     if (studentFirstName.value === "" || studentLastName.value === "" || dob.value === "" || tuitionFee.value === "" ) {
//         document.getElementById("studentForm").style.color = "blue";
//         document.getElementById("studentFormValidations").innerHTML = "Required Fields";
//         document.getElementById("studentFirstNameValidation").innerHTML = "";
//         document.getElementById("studentLastNameValidation").innerHTML = "";
//         e.preventDefault();
//     } else {

//         document.getElementById("studentFormValidations").innerHTML = "";

//         var patternName = /^[A-Za-z\s]+$/


//         if (patternName.test(studentFirstName.value) !== true) {
//             document.getElementById("studentFirstNameValidation").innerHTML = "Only Characters Allowed";
//             e.preventDefault();
//         } else {
//             document.getElementById("studentFirstNameValidation").innerHTML = "";
//         }
//         if (patternName.test(studentLastName.value) !== true) {
//             document.getElementById("studentLastNameValidation").innerHTML = "Only Characters Allowed";
//             e.preventDefault();
//         } else {
//             document.getElementById("studentLastNameValidation").innerHTML = "";
//         }
//     }
// }



// // ************* STUDENTS/COURSE ************* //

// document.getElementById("studentPerCourseForm").addEventListener("submit", function (event) {
//     let selectCourse = document.getElementById("selectCourse"),
//         selectStudent = document.getElementById("selectStudent");

//     if (selectCourse.value === "") {
//         document.getElementById("selectCourseValidation").innerHTML = "Select Option"
//         document.getElementById("studentPerCourseForm").style.color = "blue";
//         event.preventDefault();
//     } else {
//         document.getElementById("selectCourseValidation").innerHTML = " "
//     }

//     if (selectStudent.value === "") {
//         document.getElementById("selectStudentValidation").innerHTML = "Select Option"
//         document.getElementById("studentPerCourseForm").style.color = "blue";
//         event.preventDefault();
//     } else {
//         document.getElementById("selectStudentValidation").innerHTML = ""
//     }
// });

// ************* ASSIGNMENT/STUDENTS/COURSE ************* //
