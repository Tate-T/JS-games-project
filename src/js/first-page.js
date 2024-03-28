const closeButton = document.querySelector('.first-page-backdrop__close');
const modal = document.querySelector('.first-page-backdrop');
function closeModal() {
    modal.classList.add('first-page-is-hidden');
}
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});


const name = document.querySelector(".first-page-backdrop__input")
const userName = document.querySelector(".user-name")
const submitName = document.querySelector(".first-page-backdrop__save")
submitName.addEventListener("click", (event) => {
    userName.textContent = name.value
})