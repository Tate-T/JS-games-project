document.querySelector('.input-but__leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap-input').value;


    if (userInput) {
        userInput.value % 4 === 0
        document.getElementById('yes-no-leap').textContent = "Ви народились у високосний рік";
    } else {
        document.getElementById('yes-no-leap').textContent = "Ви не народились у високосний рік";
    }
});

