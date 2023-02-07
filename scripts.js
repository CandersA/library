const addBookBtn = document.querySelector('.addbook');
const bookForm = document.getElementById('bookadd');
const darken = document.getElementById('darken');
const closeBtn = document.querySelector('.closebtn');
let formOpened = false;

function toggleForm() {
  if (formOpened === false) {
    bookForm.style.display = 'flex';
    darken.style.filter = 'brightness(70%)';
  } else {
    bookForm.style.display = 'none';
    darken.style.filter = null;
  }
  formOpened = !formOpened;
}

addBookBtn.addEventListener('click', toggleForm);
closeBtn.addEventListener('click', toggleForm);
