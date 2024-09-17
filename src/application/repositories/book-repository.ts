import { Book } from '../../domain/book';

export interface BookRepository {
 //seu codigo aqui
 save(book: Book): void
 findAll(): Book[]
 findOne(id: string): Book | undefined
 update(id: string, params: {}): Book | undefined
 delete(id: string): void
}