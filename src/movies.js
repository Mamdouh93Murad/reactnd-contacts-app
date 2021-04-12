import React, { Component } from "react";

class ListMovies extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.movies.map((movie) =>
          /* <li key={movie.id} className='contact-list-item'>
                  <div className='contact-details'>
                    <p>{movie.name}</p>
                  </div>
                  <button className='contact-remove'>
                    Remove
                  </button>
                </li> */
                <div><li>{movie.name}</li> 
          {this.props.profiles.map((profile) => movie.id === profile.favoriteMovieID &&
          
          this.props.users.map((user) => profile.userID === user.id &&
            <ol><li>{user.name}</li></ol>
            )
          )}
          </div>
        )}
      </ol>
    );
  }
}
export default ListMovies;