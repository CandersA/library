const displayBookForm = document.getElementById('displayform');
const submitBookForm = document.getElementById('submitform');
const bookForm = document.getElementById('bookadd');
const darken = document.getElementById('darken');
const closeBtn = document.querySelector('.closebtn');
const bookSection = document.getElementById('main');
const emptyPara = document.getElementById('empty');
let i = 0;
const myLibrary = [];

function Book(name, author, numOfPages, read, bookNr) {
  this.name = name;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.bookNr = bookNr;
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
  myLibrary[i] = new Book(bookName, bookAuthor, pageNumber, isRead, i);
  closeForm();
}

function removeBook() {
  const allBooks = Array.from(document.getElementsByClassName('book'));
  if (allBooks.length === 1) {
    emptyPara.style.display = 'block';
  }
  const removeBtn = this.querySelector('.remove');
  const parentOfButton = removeBtn.parentNode;
  parentOfButton.remove();
}

function createBook() {
  emptyPara.style.display = 'none';
  const newBook = document.createElement('div');
  const bookName = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const bookPages = document.createElement('span');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');
  readBtn.classList.add('read');
  removeBtn.classList.add('remove');
  newBook.classList.add('book');
  newBook.appendChild(bookName);
  newBook.appendChild(bookAuthor);
  newBook.appendChild(bookPages);
  newBook.appendChild(readBtn);
  newBook.appendChild(removeBtn);
  bookName.textContent = myLibrary[i].name;
  bookAuthor.textContent = myLibrary[i].author;
  bookPages.textContent = `${myLibrary[i].numOfPages} pages`;
  removeBtn.textContent = 'Remove';
  if (myLibrary[i].read === true) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('green');
  } else {
    readBtn.textContent = 'Not read';
  }
  bookSection.appendChild(newBook);
  removeBtn.addEventListener('click', () => {
    removeBook.apply(newBook);
  }, { once: true });
}

function displayBook() {
  getData();
  createBook();
  i += 1;
}

displayBookForm.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);
submitBookForm.addEventListener('click', displayBook);
