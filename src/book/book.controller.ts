import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
    constructor (private bookService: BookService) {}

    //retrieve all available books in the system
    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }
    
    //create new book
   @Post('new')
   async createBook(
    @Body()
    book: CreateBookDto
   ): Promise<Book> {
    return this.bookService.create(book);

   }


   //get single book that are available in the system
   @Get(':id')
    async getBook(
        @Param('id')
        id:string
    ): Promise<Book> {
        return this.bookService.findById(id);
    }

    @Put(':id')
   async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto
   ): Promise<Book> {
    return this.bookService.updateById(id,book);

   }
}
