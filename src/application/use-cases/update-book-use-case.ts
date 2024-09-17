import { BookRepository } from "../repositories/book-repository";
import { Book } from "../../domain/book";

export class UpdateBooksUseCase {
    constructor(
        private bookRepository: BookRepository, id: number
    ) {}

    execute(id: string, params: {}) {
        let book : Book | undefined = this.bookRepository.update(id, params);
        return book;
    }
}