document.getElementById("gmail_button").addEventListener("click", checkGmail);

function checkGmail() {
    var input = document.getElementById("gmail_input").value;
    var resultSpan = document.getElementById("gmail_result");

    if (input.toLowerCase().endsWith("@gmail.com")) {
        resultSpan.textContent = "Valid Gmail address!";
        resultSpan.style.color = "green";
    } else {
        resultSpan.textContent = "Not a Gmail address. Please enter a valid Gmail address.";
        resultSpan.style.color = "red";
    }
}
