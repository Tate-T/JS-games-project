let yesNoLeap = document.getElementById('yes-no-leap');
document.querySelector('.input-but__leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap-input').value;

    if (userInput) {
        if (userInput % 4 === 0) {
            yesNoLeap.textContent = "Ви народились у високосний рік";
            yesNoLeap.style.color = "#039900";
        } else {
            yesNoLeap.textContent = "Ви не народились у високосний рік";
            yesNoLeap.style.color = "#990000";
        }
        yesNoLeap.style.transition = "all 500ms ease";
    } else {
        yesNoLeap.textContent = "Будь ласка, введіть рік народження";
        yesNoLeap.style.color = "#000000";
    }
    yesNoLeap.style.opacity = "1";
});

