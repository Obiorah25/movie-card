import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Container, Button, Form } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([
    // Example initial movies
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the nature of his reality',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.7,
    },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <Container>
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <div>
        <h2>Add New Movie</h2>
        <Form onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            title: e.target.title.value,
            description: e.target.description.value,
            posterURL: e.target.posterURL.value,
            rating: parseFloat(e.target.rating.value),
          };
          handleAddMovie(newMovie);
        }}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster URL</Form.Label>
            <Form.Control type="text" name="posterURL" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" name="rating" step="0.1" required />
          </Form.Group>
          <Button type="submit">Add Movie</Button>
        </Form>
      </div>
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
