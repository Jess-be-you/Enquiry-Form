const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const Success = document.querySelector("#Success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
    errorFlag=false;
    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "This is a required field";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email Address";
        email.classList.add("error-border");
        errorFlag=true;
    }
    if (message.value.length < 1) {
        errorNodes[2].innerText = "This is required field";
        message.classList.add("error-border");
        errorFlag=true;
    }
    if(!errorFlag){
        Success.innerText="Success";
    }
}
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    Success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
function emailIsValid(email) {
    let pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
}