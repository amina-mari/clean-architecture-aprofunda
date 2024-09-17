import { BookRepository } from "../repositories/book-repository";

export class DeleteBookUseCase {
    constructor(
        private bookRepository: BookRepository
    ){}

    execute(id: string) {
        return this.bookRepository.delete(id);
    }
}