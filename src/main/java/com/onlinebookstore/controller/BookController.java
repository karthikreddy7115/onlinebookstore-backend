package com.onlinebookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.onlinebookstore.model.Book;
import com.onlinebookstore.service.BookService;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:5173")
public class BookController {

@Autowired
BookService service;

@GetMapping
public List<Book> getBooks(){

return service.getAllBooks();

}

@PostMapping
public Book addBook(@RequestBody Book book){

return service.saveBook(book);

}

@DeleteMapping("/{id}")
public void deleteBook(@PathVariable Long id){

service.deleteBook(id);

}

}