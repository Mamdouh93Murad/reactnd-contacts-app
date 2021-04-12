import React, { Component } from 'react'
import ListContacts from "./ListContacts.js"
import ListMovies from "./movies.js"
const profiles = [
  {
 
    userID: '1',
    favoriteMovieID: '1',
  },
  {

    userID: '2',
    favoriteMovieID: '1',
  },
  {

    userID: '4',
    favoriteMovieID: '5',
  },
  {

    userID: '5',
    favoriteMovieID: '2',
  },
  {

    userID: '3',
    favoriteMovieID: '5',
  },
  {

    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = [
  {
    id: '1',
    name: 'Jane Jones',
    userName: 'coder',
  },
  {
    id: '2',
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  {
    id: '3',
    name: 'Autumn Green',
    userName: 'user123',
  },
  {
    id: '4',
    name: 'John Doe',
    userName: 'user123',
  },
  {
    id: '5',
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  {
    id: '6',
    name: 'Nicholas Lain',
    userName: 'user123',
  },
];

const movies = [
  {
    id: '1',
    name: 'Planet Earth',
  },
  {
    id: '2',
    name: 'Selma',
  },
  {
    id: '3',
    name: 'Million Dollar Baby',
  },
  {
    id: '4',
    name: 'Forrest Gump',
  },
  {
    id: '5',
    name: 'Get Out',
  },
];


const contacts = [
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
        <ListMovies movies={movies} profiles={profiles} users={users}/>
      </div>

    );
  }
}

export default App;
