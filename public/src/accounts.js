function findAccountById(accounts, id) {
  let idFound = accounts.find((account) => account.id === id);
 return idFound;
};

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
};

function getTotalNumberOfBorrows(account, books) {
  let totalRented = 0;
  for (let i = 0; i < books.length; i++) {
   for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
     totalRented += 1;
    }
   }
  }
  return totalRented;
};

function addAuthorsToBooks(books, authors) {
  books.forEach((book) => {
    const authorInfo = authors.find((author) => author.id === book.authorId);
    book['author'] = authorInfo;
  });
  
  return books;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const result = [];
  addAuthorsToBooks(books,authors);

  books.forEach((book) => {
    const newestBorrow = book.borrows[0];

    if (newestBorrow.id === accountId && !newestBorrow.returned) {
      result.push(book);
    }
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
