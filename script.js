function validate() {
    var firstName = document.querySelector("#firstName");
    var lastName = document.querySelector("#lastName");
    var emailAddress = document.querySelector("#emailAddress");
    var phoneNumber = document.querySelector("#phoneNumber");
    if (firstName.value == "" || lastName.value == "" || emailAddress == "" || phoneNumber.value == "") {
        errorMessage.innerHTML = "All fields are mandatory.";
        if (firstName.value == "") {
            firstName.style.animation = "errorAnimation linear 2s";
        }
        else if (lastName.value == "") {
            lastName.style.animation = "errorAnimation linear 2s";
        }
        else if (emailAddress.value == "") {
            emailAddress.style.animation = "errorAnimation linear 2s";
        }
        else if (phoneNumber.value == "") {
            phoneNumber.style.animation = "errorAnimation linear 2s";
        }
    }
    else {
        errorMessage.innerHTML = "";
    }
}
