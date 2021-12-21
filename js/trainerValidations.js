// ************* TRAINERS ************* //
document.getElementById("trainersForm").addEventListener("submit", trainersFormValidation);

function trainersFormValidation(event) {
    var pattern = /^[A-Za-z\s]+$/
    firstName = document.getElementById("trainersFirstName");
    lastName = document.getElementById("trainersLastName");
    subject = document.getElementById("trainersSubject")

    if (firstName.value === "" || lastName.value === "" || subject.value === "") {
        document.getElementById("trainersValidation").innerHTML = "Required Fields";
        document.getElementById("trainersForm").style.color = "blue";
        event.preventDefault();

    } else {
        document.getElementById("trainersValidation").innerHTML = " ";

        if ((pattern.test(firstName.value) === true) && firstName.value.length < 10) {
            document.getElementById("trainersFirstNameValidation").innerHTML = ""
        } else {
            document.getElementById("trainersFirstNameValidation").innerHTML = "Only Characters Allowed. Max 10 Characters."
            event.preventDefault();
        }

        if (pattern.test(lastName.value) !== true) {
            document.getElementById("trainersLastNameValidation").innerHTML = "Only Characters Allowed"
            event.preventDefault();
        } else {
            document.getElementById("trainersLastNameValidation").innerHTML = ""
        }

    }
}