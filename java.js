console.log ("Hello World");


let nameError= document.getElementById ("name-error");


function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required.";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Full name please.";
        return false;
    }

    nameError.innerHTML = "";
    return true;

}