const express = require("express");

const server = express();
const PORT = 3000;

// Middleware
server.use(express.json());

// Sample Movie Data
let movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    director: "Christopher Nolan",
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/I/51s+K2e7K-L._AC_.jpg",
    description:
      "A skilled thief enters people's dreams to steal secrets but is given the chance to perform the impossible task of inception."
  }
];

// Home Route
server.get("/", (req, res) => {
  res.status(200).send("Movie Server is running");
});

// GET All Movies
server.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// POST New Movie
server.post("/movies", (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
    director: req.body.director,
    rating: req.body.rating,
    poster: req.body.poster,
    description: req.body.description,
  };

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully",
    movie: newMovie,
  });
});

// PUT Update Movie
server.put("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movie.title = req.body.title;
  movie.genre = req.body.genre;
  movie.year = req.body.year;
  movie.director = req.body.director;
  movie.rating = req.body.rating;
  movie.poster = req.body.poster;
  movie.description = req.body.description;

  res.status(200).json({
    message: "Movie updated successfully",
    movie,
  });
});
// DELETE Movie
server.delete("/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const movieIndex = movies.findIndex((m) => m.id === id);
  
    if (movieIndex === -1) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }
  
    const deletedMovie = movies.splice(movieIndex, 1);
  
    res.status(200).json({
      message: "Movie deleted successfully",
      movie: deletedMovie[0],
    });
  });
// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});