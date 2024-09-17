import { Repository } from '../../infrastructure/database/repository';
import { CreateBookUseCase } from '../../application/use-cases/create-book-use-case';
import { IdentifierGenerator } from './id-generator';
import { BookController } from '../../interface/book-controller';
import { ListAllBooksUseCase } from '../../application/use-cases/list-all-books-use-case';
import { UpdateBooksUseCase } from '../../application/use-cases/update-book-use-case';
import { FindOneUseCase } from '../../application/use-cases/find-one-use-case';
import { DeleteBookUseCase } from '../../application/use-cases/delete-book-use-case';

export function configureDependencies() {
 //seu codigo aqui
 const bookRepository = new Repository();
 const idGenerator = new IdentifierGenerator();
 const createBookUseCase = new CreateBookUseCase(bookRepository, idGenerator);
 const listAllBooksUseCase = new ListAllBooksUseCase(bookRepository);
 const updateBookUseCase = new UpdateBooksUseCase(bookRepository);
 const findOneBookUseCase = new FindOneUseCase(bookRepository);
 const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

 const bookController = new BookController(createBookUseCase, listAllBooksUseCase, findOneBookUseCase, updateBookUseCase, deleteBookUseCase);

 return {
    bookController
 }
} 