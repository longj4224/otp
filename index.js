verifyBtn = document.getElementById("otp-button");
otpInputBox = document.getElementById("token");

function stopButton () {
    verifyBtn.classList.add("stop-button");
    verifyBtn.classList.remove("go-button")
    console.log("Stop!")
}

function goButton () {
    verifyBtn.classList.add("go-button");
    verifyBtn.classList.remove("stop-button");
    console.log("Go!")
}

stopButton();
otpInputBox.addEventListener("input", function() {
    const maxLength = parseInt(otpInputBox.getAttribute("maxlength"));
    const currentLength = otpInputBox.value.length;
    if (currentLength === maxLength) {
        goButton();
    } 
    else {
        stopButton();
    }
});