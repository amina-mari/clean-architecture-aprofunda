import { BookRepository } from '../../application/repositories/book-repository';
import { Book } from '../../domain/book';

export class Repository implements BookRepository {
  //seu codigo aqui
  private books: Book[] = []
  
  save(book: Book): void {
    this.books.push(book)  
  }
}