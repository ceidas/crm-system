// ************* ASSIGNMENTS ************* //

document.getElementById("assignmentForm").addEventListener("submit", function (assignmentFormValidation) {
    var title = document.getElementById("title");
    var description = document.getElementById("textArea");
    var deadline = document.getElementById("deadline");
    var oMark = document.getElementById("oralMark");
    var tMark = document.getElementById("totalMark");
    console.log(tMark.value);

    if (title.value === "" || description.value === "" || deadline.value === "" || oMark.value === "" || tMark.value === "") {
        document.getElementById("assignmentForm").style.color = "blue";
        document.getElementById("assignmentValidation").innerHTML = "Required Fields";
        assignmentFormValidation.preventDefault();

        if (oMark.value === "" ) {
            document.getElementById("oralMarkValidation").innerHTML = "Must input number only"
            assignmentFormValidation.preventDefault();
        }else{
            document.getElementById("oralMarkValidation").innerHTML = ""
            
        }
        if(tMark.value === ""){
            document.getElementById("totalMarkValidation").innerHTML = "Must input number only"
            assignmentFormValidation.preventDefault();

        }else{
            document.getElementById("totalMarkValidation").innerHTML = ""
        
        }

    } else {
        document.getElementById("assignmentValidation").innerHTML = "";

        if (title.value.length > 10) {
            document.getElementById("titleValidation").innerHTML = "Title must be less than 10 characters";
            assignmentFormValidation.preventDefault();
        } else {
            document.getElementById("titleValidation").innerHTML = "";
        }

        if (description.value.length > 100) {
            document.getElementById("textValidation").innerHTML = "Description must be less than 100 character";
            assignmentFormValidation.preventDefault();
        } else {
            document.getElementById("textValidation").innerHTML = "";
        }

        if (oMark.value < 0 || oMark.value > 100) {
            document.getElementById("oralMarkValidation").innerHTML = "Accepted value >= 0 and <=100"
            assignmentFormValidation.preventDefault();
        }else{
            document.getElementById("oralMarkValidation").innerHTML = ""
        }
        if (tMark.value < 0 || tMark.value > 100){
            document.getElementById("totalMarkValidation").innerHTML = "Accepted value >= 0 and <=100"
            assignmentFormValidation.preventDefault();
        }else{
            document.getElementById("totalMarkValidation").innerHTML = ""
        }
    }
});