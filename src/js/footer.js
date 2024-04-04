const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
  footerInput: document.querySelector(".footer__gmail-input"),
  backdropButton: document.querySelector(".footer__subscribe"),
};
function toggleModal() {
  refs.backdrop.classList.toggle('footer__is-hidden');
  footerInput.value = ""
}

function logBackdropClick() {
  console.log('Це клік в бекдроп');
}
refs.backdropButton.addEventListener("click", (event) => {
  if (refs.footerInput.value === "") {
    alert("Введіть пошту")
  } else {
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    refs.backdrop.addEventListener('click', logBackdropClick);
    
  }
})
//     const refs = {
//       openModalBtn: document.querySelector('[data-open-modal]'),
//       closeModalBtn: document.querySelector('[data-close-modal]'),
//       backdrop: document.querySelector('[data-backdrop]'),
//     };
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
    
//     refs.backdrop.addEventListener('click', logBackdropClick);
    
//     function toggleModal() {
//       refs.backdrop.classList.toggle('footer__is-hidden');
//       footerInput.value = ""
//     }
    
//     function logBackdropClick() {
//       console.log('Це клік в бекдроп');
//     }

  