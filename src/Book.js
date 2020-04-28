import React from 'react'
import firebase from './firebase'
function Book(props) {
  const deleteItem = () => {
    const itemRef = firebase.database().ref(props.bookId)
    itemRef.remove()
  }
  return (
    <li onClick={deleteItem}>{props.bookTitle}</li>
  )
}
export default Book