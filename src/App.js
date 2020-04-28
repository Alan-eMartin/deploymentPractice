import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Book from './Book';
class App extends Component {
  constructor() {
    //put all the book titles in an array (in state) and map over them. 
    super();
    this.state = {
      books: [],
      userInput: ""
    }
  }
  //grab the list of books from our database
  componentDidMount() {
    //set up listener to firebase database
    const dbRef = firebase.database().ref();
    dbRef.on('value', (result) => {
      const data = result.val();
      //turn data from an object into an array
      //THIS IS ANOTHER OPTION FOR TURNING AN OBJECT INTO AN ARRAY
      // const bookArray = Object.values()
      const booksArray = []
      for (let key in data) {
        booksArray.push({ bookName: data[key], bookId: key })
      }
      console.log(booksArray)
      this.setState({
        books: booksArray
      })
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.userInput !== '') {
      const dbRef = firebase.database().ref()
      dbRef.push(this.state.userInput)
      this.setState({
        userInput: ''
      })
    }
  }
  handleUserIput = (event) => {
    //take event.target.value (what the user is typing)
    //put it into this.state.userInput
    this.setState({
      userInput: event.target.value
    })
  }
  render() {
    console.log(firebase)
    return (
      <div className="App">
        <h1>📓 My Bookshelf 🍎</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" id="userBook" value={this.state.userInput} onChange={this.handleUserIput} />
          <button type="submit">Add Book</button>
        </form>
        <ul>
          {this.state.books.map((book) => {
            console.log(book.bookId)
            return (
              <Book bookId={book.bookId} bookTitle={book.bookName} />
            )
          })}
        </ul>
      </div>
    );
  }
}
export default App;