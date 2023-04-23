const Book = (props) => {
    const { image, title, author, number } = props.book;
    return(
    <article className="book">
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  )
  };
  export default Book;