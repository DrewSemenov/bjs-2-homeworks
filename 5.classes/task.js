"use strict";

//task 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  get state() {
    return this._state;
  }

  /**
   * @param {number} value
   */
  set state(value) {
    value < 0
      ? (this._state = 0)
      : value > 100
      ? (this._state = 100)
      : (this._state = value);
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// task 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    book.state > 30 && this.books.push(book);
  }

  findBookBy(type, value) {
    return this.books.find((el) => el[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((el) => el.name === bookName);
    return bookIndex !== -1 ? this.books.splice(bookIndex, 1)[0] : null;
  }
}
