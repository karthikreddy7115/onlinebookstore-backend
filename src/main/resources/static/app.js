const { useState, useEffect } = React;

function App() {

const [books, setBooks] = useState([]);
const [search, setSearch] = useState("");

const [name, setName] = useState("");
const [author, setAuthor] = useState("");
const [price, setPrice] = useState("");

useEffect(() => {
    loadBooks();
}, []);

function loadBooks() {

fetch("http://localhost:8080/books")

.then(response => response.json())

.then(data => {
    setBooks(data);
})

.catch(error => console.log(error));

}

function addBook() {

const book = {
    name: name,
    author: author,
    price: price
};

fetch("http://localhost:8080/books", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(book)
})
.then(() => {
    loadBooks();
    setName("");
    setAuthor("");
    setPrice("");
});

}

function deleteBook(id) {

fetch("http://localhost:8080/books/" + id, {
method: "DELETE"
})
.then(() => loadBooks());

}

const filteredBooks = books.filter(book =>
book.name.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="container">

<h2>Add Book</h2>

<input
placeholder="Title"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
placeholder="Author"
value={author}
onChange={(e) => setAuthor(e.target.value)}
/>

<input
placeholder="Price"
value={price}
onChange={(e) => setPrice(e.target.value)}
/>

<br/><br/>

<button onClick={addBook}>Add Book</button>

<h2>Available Books</h2>

<input
placeholder="Search book"
onChange={(e) => setSearch(e.target.value)}
/>

{filteredBooks.map(book => (

<div className="bookCard" key={book.id}>

<h3>{book.name}</h3>

<p>Author: {book.author}</p>

<p>Price: ₹{book.price}</p>

<button onClick={() => deleteBook(book.id)}>
Delete
</button>

</div>

))}

</div>

);

}

ReactDOM.render(<App />, document.getElementById("root"));