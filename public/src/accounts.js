function findAccountById(accounts, id) {
  return accounts.find((byId) => byId.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1, lastName2) => lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  // total number a books an account(account.id) has to be in borrowed(book.borrows[i].id) 
  // account.id is in book.borrows how many times
  const result = []
  for (let bookNumber in books) {
    const found = books[bookNumber].borrows.find((borrow) => borrow.id === account.id ) 
    if (found) {
      result.push(found)
    }
  }
  return result.length;
}
  // alt solution
  // let total = 0;
  // books.forEach(book => book.borrows.forEach(borrow => account.id === borrow.id && total++));
  // return total;
  // const {find}







  // attempted to use require but webpage did not like it

function findAuthorById(authors, id) {
  return authors.find((byId) => byId.id === id)
}
function getBooksPossessedByAccount(account, books, authors) {
  // account that has books
  // array of books and author based on currently checked out by account
  // author object is inside book object
  // author in book
  // const {findAuthorById} = require('./books')
  const accountId = account.id
  const bookFil = books.filter((book) => book.borrows.some((borrow => !borrow.returned && borrow.id === accountId)))
  bookFil.forEach((book => book.author = findAuthorById(authors, book.authorId)))
  return bookFil
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
