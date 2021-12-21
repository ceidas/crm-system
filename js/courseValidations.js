// ************* COURSES ************* //

document.getElementById("courseForm").addEventListener('submit', courseFormValidation)

function courseFormValidation(e) {

    var coursename = document.getElementById("courseName");
    var stream = document.getElementById("stream");
    var type = document.getElementById("stream");
    var startdate = document.getElementById("startDate");
    var enddate = document.getElementById("endDate");
    var type = document.getElementById("type");

    if (coursename.value === "" || stream.value === "" || type.value === "" || startdate.value === "" || enddate.value === "" || type.value === "") {
        document.getElementById("courseForm").style.color = "blue";
        document.getElementById("courseValidation").innerHTML = "Required Fields";
        document.getElementById("courseNameValidation").innerHTML = "";
        document.getElementById("startDateValidation").innerHTML = "";
        document.getElementById("endDateValidation").innerHTML = "";
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
            document.getElementById("endDateValidation").innerHTML = "Invalid date input";
            e.preventDefault();
        } else {
            document.getElementById("startDateValidation").innerHTML = "";
            document.getElementById("endDateValidation").innerHTML = "";

        }
    }
}