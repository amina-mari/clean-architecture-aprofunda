import { BookRepository } from '../../application/repositories/book-repository';
import { Book } from '../../domain/book';

export class Repository implements BookRepository {
  //seu codigo aqui
  private books: Book[] = []
  
  save(book: Book): void {
    this.books.push(book)  
  }
  
  findAll(): Book[] {
    return this.books;
  }

  update(id: string, params: {[key: string]: any}): Book | undefined {
    let book: Book | undefined = this.books.find(book => book.id === id)
   for (let prop in params) {
    book[prop] = params[prop]
   }
   return book;
  }

  findOne(id: string){
    let book: Book | undefined = this.books.find(book => book.id === id)
    return book;
  }

  delete(id: string) {
    this.books = this.books.filter(book => book.id !== id);
  }
}