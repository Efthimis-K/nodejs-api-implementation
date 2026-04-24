# Node.js Movies API

A RESTful API for managing movie data built with Node.js and Express.

## Features
- Complete CRUD operations for movies
- Built using the Express framework
- Environment variable configuration (`.env`)

## API Endpoints
- `GET /api/movies` - Retrieve all movies (supports `?year=` filter)
- `GET /api/movies/:id` - Retrieve a specific movie
- `POST /api/movies` - Create a new movie
- `PUT /api/movies/:id` - Update an existing movie
- `DELETE /api/movies/:id` - Delete a movie

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file:
   ```
   PORT=8080
   NODE_ENV=development
   ```
3. Start the server:
   ```bash
   node index.js
   ```

The server runs on `http://localhost:8080` by default.
