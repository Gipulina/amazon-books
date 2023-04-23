import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import newBooks from './newBooks';
import Book from './Book';

const BookList = () => {
  const getBook = (id) =>{
    const book = newBooks.find((book)=>book.id === id)
    console.log(book);
  }
  return (
    <div>
      <h1>Amazon Book List</h1>
      <EventExamples/>
      <section className="booklist">
        {newBooks.map((book,index) => {
          return (
            <div   key={book.id} > 
              <Book book={book}number={index} />
              console.log(number);
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
    
    const handleFormSubmission = (e) =>{
      e.preventDefault();
      console.log('form submitted');
    }
    
    const handleButtonClick = () =>{
      alert('handle form input');
    };
    return (
      <section>
      <h2>Typical Form</h2>
      <form onSubmit={handleFormSubmission}>
        <input type="text" name='example' onChange={(e)=>console.log(e.target.value)} style={{  margin: '1rem 0'}}/>
      <button type='submit'>Submit</button>
      </form>
      <div>
      <button onClick={handleButtonClick}>Click me </button>
      </div>
    </section>
  );
};



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
