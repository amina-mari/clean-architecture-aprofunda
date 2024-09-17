import { Request, Response } from 'express';
import { CreateBookUseCase } from '../application/use-cases/create-book-use-case';
import { ListAllBooksUseCase } from '../application/use-cases/list-all-books-use-case';
import { FindOneUseCase } from '../application/use-cases/find-one-use-case';
import { UpdateBooksUseCase } from '../application/use-cases/update-book-use-case';
import { DeleteBookUseCase } from '../application/use-cases/delete-book-use-case';

export interface CreateBookDTO {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  status: 'read' | 'unread' | 'donated';
}

interface BookDTO {
  id: string;
  createdAt: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  status: 'read' | 'unread' | 'donated';
}

export class BookController {
  //seu codigo aqui
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private listAllBooksUseCase: ListAllBooksUseCase,
    private findOneBookUseCase: FindOneUseCase,
    private updateBookUseCase: UpdateBooksUseCase,
    private deleteBookUseCase: DeleteBookUseCase
  ){}

  create(req: Request, res: Response){
    const bookDTO: BookDTO = req.body;
    const book = this.createBookUseCase.execute(bookDTO);
    res.status(201).json(book)
  }

  listAll(req: Request, res: Response) {
    const books = this.listAllBooksUseCase.execute()
    res.json(books);
  }

  findOne(req: Request, res: Response){
    const book = this.findOneBookUseCase.execute(req.params.id);
    if(book) return res.status(200).json(book);
  }

  delete(req: Request, res: Response) {
    this.deleteBookUseCase.execute(req.params.id);
    res.status(200).json({message: "Livro deletado com sucesso"})
  }

  update(req: Request, res: Response) {
    const book = this.updateBookUseCase.execute(req.body);
  }
}