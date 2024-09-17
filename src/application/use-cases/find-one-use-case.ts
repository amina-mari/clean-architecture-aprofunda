import { BookRepository } from "../repositories/book-repository";
import { Book } from "../../domain/book";

export class FindOneUseCase {
    constructor(
        private bookRepository: BookRepository
    ) {}

    execute(id: string) {
        let book : Book | undefined = this.bookRepository.findOne(id);
        return book;
    }
}