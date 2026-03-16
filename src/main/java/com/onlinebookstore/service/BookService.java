package com.onlinebookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinebookstore.model.Book;
import com.onlinebookstore.repository.BookRepository;

@Service
public class BookService {

@Autowired
BookRepository repo;

public List<Book> getAllBooks(){

return repo.findAll();

}

public Book saveBook(Book book){

return repo.save(book);

}

public void deleteBook(Long id){

repo.deleteById(id);

}

}