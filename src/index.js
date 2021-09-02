import React from 'react'
import ReactDOM from 'react-dom'
//CSS
import './index.css'
//Setup Vars
const firstBook = {
  author: 'Rhonda Byrne',
  title: 'The Secret',
  img: 'https://images-eu.ssl-images-amazon.com/images/I/61mEFHtyGVL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
}

const secondBook = {
  author: 'Sataz',
  title: 'The Peace',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51yIFhF3RFL._SX487_BO1,204,203,200_.jpg',
}
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>

      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  )
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  //console.log(props)
  return (
    <article>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
