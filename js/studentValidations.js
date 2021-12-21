// ************* STUDENTS ************* //

document.getElementById("studentForm").addEventListener('submit', studentFormValidation)

function studentFormValidation(e) {

    var studentFirstName = document.getElementById("studentFirstName");
    var studentLastName = document.getElementById("studentLastName");
    var dob = document.getElementById("studentDoB");
    var tuitionFee = document.getElementById("tuitionFee");
  

    if (studentFirstName.value === "" || studentLastName.value === "" || dob.value === "" || tuitionFee.value === "" ) {
        document.getElementById("studentForm").style.color = "blue";
        document.getElementById("studentFormValidations").innerHTML = "Required Fields";
        document.getElementById("studentFirstNameValidation").innerHTML = "";
        document.getElementById("studentLastNameValidation").innerHTML = "";
        e.preventDefault();
    } else {

        document.getElementById("studentFormValidations").innerHTML = "";

        var patternName = /^[A-Za-z\s]+$/


        if (patternName.test(studentFirstName.value) !== true) {
            document.getElementById("studentFirstNameValidation").innerHTML = "Only Characters Allowed";
            e.preventDefault();
        } else {
            document.getElementById("studentFirstNameValidation").innerHTML = "";
        }

        if (patternName.test(studentLastName.value) !== true) {
            document.getElementById("studentLastNameValidation").innerHTML = "Only Characters Allowed";
            e.preventDefault();
        } else {
            document.getElementById("studentLastNameValidation").innerHTML = "";
        }
        
        if(tuitionFee.value < 0){
            document.getElementById("tuitionFeeValidation").innerHTML = "Negative Number not Allowed"
            e.preventDefault();
        }
    }
}