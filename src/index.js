import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const newBooks = [
  {
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    title: "The Last Thing He Told Me",
    author: "Laura Dave",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
  {
    title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    author: "David Grann ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg",
    id: 3,
  },
];

const BookList = () => {
  return (
    <div>
      <h1>Amazon Book List</h1>
      <EventExamples/>
      <section className="booklist">
        {newBooks.map((book) => {
          return (
            <div key={book.id}> 
              <Book book={book}  />
            </div>
          );
        })}
      </section>
    </div>
  );
};

const EventExamples = () =>{
  const handleFormInput = () =>{
    console.log('handle form input');
  };
  const handleButtonClick = () =>{
    alert('handle form input');
  };
  return (
    <section>
      <h2>Typical Form</h2>
      <form>
        <input type="text" name='example' onChange={handleFormInput} style={{  margin: '1rem 0'}}/>
      </form>
      <button onClick={handleButtonClick}>Click me </button>
    </section>
  );
};
const Book = (props) => {
  const { image, title, author } = props.book;
return(
  <article className="book">
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <h4>{author}</h4>
  </article>
)
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
