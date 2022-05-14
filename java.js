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
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");


let regex = /^[\d,\s,\+,\-]{5,20}/;

check.addEventListener("click",()=>{
    if(number.value =="") {
        Text.innerText = "Please Enter Your Phone Number";
        Text.style.color = "#fff";
    }
    else if(number.value.match(regex)) {
        Text.innerText = "Phone Number Validated";
        Text.style.color = "rgba(205, 209, 228);, 1";
    }
    else 
    {
        Text.innertext = "Oops! Your Phone Number Is Invalid";
        Text.style.color = "";
    }

})