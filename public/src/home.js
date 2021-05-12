function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    const book = books[i].borrows;
    const returnedBook = book[0].returned
    if (returnedBook === false) {
      result ++
    }
  }
  return result
  //alt solution maybe
  //return books.find((borrow) => borrow.borrows[0].returned === false)
  // not working TypeError: Cannot read property '0' of undefined
  // let borrow = 0
  // for (let book in books) {
  //   if (book.borrows[0]) {
  //     if (book.borrows[0].returned) {
  //       borrow++
  //     }
  //   }
  // }
  // return borrow
}

function _sortByValues(obj){
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) =>{
    if(obj[keyA] > obj[keyB]){
      return -1
    } else if (obj[keyA] > obj[keyB]){
      return 1;
    }else {
      return 0;
    }
  })
}

function getMostCommonGenres(books) {
const count = books.reduce((acc, {genre}) => {
  if (acc[genre]) {
    acc[genre] += 1
  } else {
    acc[genre] = 1
  }
  return acc;
}, {});
const sorted = _sortByValues(count);
return sorted.map((name) => ({name, count: count[name]})).slice(0,5);
  
  // alt solution maybe
  // potential anwer, missing actual counting. Could possibly use reduce. Revisit after thinkful
  // const commonGeneres = books.map((book) => {
  // return { name: book.genre, count: 1};
  // });
  //   console.log(commonGeneres.sort((genre1, genre2) => genre2.name.toLowerCase() < genre1.name.toLowerCase() ? 1 : -1));
}


function getMostPopularBooks(books) {
  const mappedBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return mappedBooks.sort((book1, book2) => book2.count - book1.count).slice(0, 5);
}





  // attempted to use require but webpage did not like it

function findAuthorById(authors, id) {
  return authors.find((byId) => byId.id === id)
}
function getMostPopularAuthors(books, authors) {
  // most popular author 
  // popularity is determined by the times borrowed
  // return array with two keys
  // maybe an if statement 
  // const {findAuthorById} = require("./books.js");
  const mappedBooks = books.map((book) => {
    const {name : {first, last}} = findAuthorById(authors, book.authorId);
    return { name: `${first} ${last}`, count: book.borrows.length };
  });
  return mappedBooks.sort((book1, book2) => book2.count - book1.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
