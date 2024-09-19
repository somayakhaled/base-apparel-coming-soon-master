// let submit = document.getElementById("submit");
// let email = document.querySelector("[name='email']");
// let emailError = document.querySelector(".emailError");

// submit.onclick = function(e) {
//     emailValid = false;

//     if(email.value !== ""){
//         emailValid = true;
//     }
//     else{
//         emailError.innerHTML = "Please provide a valid email";
//         email.style.borderColor = "hsl(0, 93%, 68%)";
//         email.style.borderWidth  = "2px";
//         email.style.backgroundImage = "url('images/icon-error.svg')";
//         email.style.backgroundRepeat = "no-repeat";
//         email.style.backgroundPosition = "80% 50%";
//     }

//     if(emailValid === false){
//         e.preventDefault();
//     }
// }

// let submit = document.getElementById("submit");  
// let email = document.querySelector("[name='email']");  
// let emailError = document.querySelector(".emailError"); 
 

// submit.onclick = function(e) {  
//     let emailValid = true; // Assume email is valid by default  

//     // Regular expression for basic email validation  
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

//     // Reset previous error state  
//     emailError.innerHTML = ""; // Clear any previous error message  
//     email.style.borderColor = ""; // Reset border color  
//     email.style.backgroundImage = ""; // Reset background image  

//     // Check if the email field is empty  
//     if (email.value === "") {  
//         emailValid = false; // Mark as invalid  
//         emailError.innerHTML = "Please provide a valid email";  
//     }   
//     // Check format of the email  
//     else if (!emailPattern.test(email.value)) {  
//         emailValid = false; // Mark as invalid  
//         emailError.innerHTML = "Please provide a valid email format";  
//     }  

//     // If email is invalid, apply styling and prevent form submission  
//     if (!emailValid) {  
//         e.preventDefault(); // Prevent form submission  
//         email.style.borderColor = "hsl(0, 93%, 68%)"; // Set border color to indicate error  
//         email.style.borderWidth = "2px";  
//         email.style.backgroundImage = "url('images/icon-error.svg')"; // Set background image for error  
//         email.style.backgroundRepeat = "no-repeat";  
//         email.style.backgroundPosition = "80% 50%";  
//     }  
// };

let submit = document.getElementById("submit");  
let email = document.querySelector("[name='email']");  
let emailError = document.querySelector(".emailError");   

submit.onclick = function(e) {  
    let emailValid = true; // Assume email is valid by default  

    // Regular expression for basic email validation  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

    // Reset previous error state  
    emailError.innerHTML = ""; // Clear any previous error message  
    email.style.borderColor = ""; // Reset border color  
    email.style.backgroundImage = ""; // Reset background image  

    // Check if the email field is empty  
    if (email.value === "") {  
        emailValid = false; // Mark as invalid  
        emailError.innerHTML = "Please provide a valid email";  
    }   
    // Check format of the email  
    else if (!emailPattern.test(email.value)) {  
        emailValid = false; // Mark as invalid  
        emailError.innerHTML = "Please provide a valid email format";  
    }  

    // If email is invalid, apply styling and prevent form submission  
    if (!emailValid) {  
        e.preventDefault(); // Prevent form submission  
        email.style.borderColor = "hsl(0, 93%, 68%)"; // Set border color to indicate error  
        email.style.borderWidth = "2px";  
        email.style.backgroundImage = "url('images/icon-error.svg')"; // Set background image for error  
        email.style.backgroundRepeat = "no-repeat";  
        email.style.backgroundPosition = "80% 50%";  
    }  
};  

// Add event listener for input event to clear error when typing  
email.addEventListener("input", function() {  
    // Clear error state on input  
    emailError.innerHTML = ""; // Clear any error messages  
    email.style.borderColor = ""; // Reset border color  
    email.style.borderWidth = ""; // Reset border width  
    email.style.backgroundImage = ""; // Reset background image  
});  