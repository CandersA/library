const displayBookForm = document.getElementById('displayform');
const submitBookForm = document.getElementById('submitform');
const bookForm = document.getElementById('bookadd');
const darken = document.getElementById('darken');
const closeBtn = document.querySelector('.closebtn');
const singleBook = document.querySelector('.book');
const removeBtn = document.querySelector('.remove');

let i = 0;

const myLibrary = [];

function Book(name, author, numOfPages, read) {
  this.name = name;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function openForm() {
  bookForm.style.display = 'flex';
  darken.style.filter = 'brightness(70%)';
}

function closeForm() {
  bookForm.style.display = null;
  darken.style.filter = null;
}

function getData() {
  const bookName = document.getElementById('bookname').value;
  const bookAuthor = document.getElementById('bookauthor').value;
  const pageNumber = document.getElementById('numofpages').value;
  const isRead = document.getElementById('bookread').checked;
  myLibrary[i] = new Book(bookName, bookAuthor, pageNumber, isRead);
  closeForm();
}

function displayBook() {
  getData();
  const newBook = singleBook.cloneNode(true);
  const spanArray = singleBook.getElementsByTagName('span');
  spanArray[0].textContent = myLibrary[i].name;
  spanArray[1].textContent = myLibrary[i].author;
  spanArray[2].textContent = `${myLibrary[i].numOfPages} pages`;
  const buttons = singleBook.getElementsByTagName('button');
  if (myLibrary[i].read === true) {
    buttons[0].textContent = 'Read';
    buttons[0].style.backgroundColor = '#9be06c';
  }
  singleBook.after(newBook);
  i += 1;
}

displayBookForm.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);
submitBookForm.addEventListener('click', displayBook);
