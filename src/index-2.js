import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


const BookList = () =>{
    return ( 
    <div>
      <h1>Amazon Book List</h1>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
    );
}

const Book = () =>{
    return <article className='book'>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () =>  <img src="https://images-na.ssl-images-amazon.com/images/I/81Ct7OSVBDL._AC_UL600_SR600,400_.jpg" alt="You Can't Joke About That: Why Everything IsYou Can't Joke About That: Why Everything Is Funny, Nothing Is Sacred, and We're All in This Together"/>;
const Title = () => <h3>You Can't Joke About That: Why Everything Is Funny, Nothing Is Sacred, and We're All in This Together</h3>;
const Author = () => {
    return <h4> Kat Timpf
    </h4>;
};
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList/>);