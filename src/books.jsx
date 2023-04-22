import React from 'react';
import ReactDom from 'react-dom/client';

const BookList = () =>{
    return <section>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section> 
}

const Book = () =>{
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () =>  <h2>Image Placeholder</h2>;
const Title = () => <h2>Book Title </h2>;
const Author = () => {
    return <h4> Author </h4>;
};
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Book/>);