function checkStrength() {
    let password = document.getElementById("password").value;
    let meter = document.getElementById("meter");
    let strengthText = document.getElementById("strength-text");

    let strength = 0;

    if (password.length >= 6) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[$@#&!]/)) strength += 1;

    let strengthPercent = (strength / 5) * 100;
    
    
    meter.style.width = strengthPercent + "%";

    if (strengthPercent <= 30) {
        meter.style.background = "red";
        strengthText.innerText = "Weak 😖";
    } else if (strengthPercent <= 60) {
        meter.style.background = "orange";
        strengthText.innerText = "Moderate 😐";
    } else if (strengthPercent <= 80) {
        meter.style.background = "yellow";
        strengthText.innerText = "Good 🙂";
    } else {
        meter.style.background = "green";
        strengthText.innerText = "Strong 💪";
        meter.style.width = "100%";  
    }
}
