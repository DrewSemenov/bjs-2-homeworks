'use strict';

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
    this.type = 'magazine';
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
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
    const book = this.findBookBy('name', bookName);

    if (!book) {
      return null;
    }

    this.books = this.books.filter((el) => el.name !== bookName);

    return book;
  }
}

// task 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }

    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    const arrMark = this.marks[subjectName];

    return arrMark ? arrMark.reduce((a, b) => a + b) / arrMark.length : 0;
  }

  getAverage() {
    const arrSubjects = Object.keys(this.marks);

    return arrSubjects.length
      ? arrSubjects.reduce((acc, el) => acc + this.getAverageBySubject(el), 0) /
          arrSubjects.length
      : 0;
  }
}
