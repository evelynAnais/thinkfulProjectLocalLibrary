function findAuthorById(authors, id) {
  return authors.find((byId) => byId.id === id)
}

function findBookById(books, id) {
  return books.find((byId) => byId.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((borrow) => borrow.borrows[0].returned === false)
  const returned = books.filter((borrow) => borrow.borrows[0].returned === true)
  return [borrowed,returned];
}








  // attempted to use require but webpage did not like it

function findAccountById(accounts, id) {
  return accounts.find((byId) => byId.id === id);
}
function getBorrowersForBook(book, accounts) {
  // const {findAccountById} = require("./accounts.js")
  let result = []
  for (let idx in book.borrows) {
    const account = findAccountById(accounts, book.borrows[idx].id);
    if (result.length < 10) {
      result.push({...account, returned: book.borrows[idx].returned});
    }
  }
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
