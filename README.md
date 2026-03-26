# Node.js RESTful API Course

A practical implementation of a RESTful API using Node.js with native HTTP module, demonstrating fundamental concepts of web server development and API design.

## Overview

This project showcases a complete RESTful API for managing movie data, built from scratch using Node.js without external frameworks. It serves as an educational example for understanding core HTTP server concepts and REST principles.

## Features

- **RESTful API Design**: Complete CRUD operations following REST conventions
- **Native HTTP Server**: Built using Node.js built-in `http` module
- **JSON Data Handling**: Request/response processing with proper content types
- **Environment Configuration**: Configurable port and environment settings
- **Error Handling**: Proper HTTP status codes and error responses

## API Endpoints

### Movies API
- `GET /api/movies/` - Retrieve all movies
- `GET /api/movies/:id` - Retrieve specific movie by ID
- `POST /api/movies/` - Create new movie
- `PUT /api/movies/:id` - Update existing movie

## Sample Data

The API manages a collection of movies with the following structure:
```json
{
  "id": 1,
  "title": "The Godfather",
  "year": 1972,
  "rating": 9.2
}
```

## Getting Started

### Prerequisites
- Node.js installed on your system
- npm package manager

### Installation
1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### Configuration
Create a `.env` file with the following variables:
```
PORT=3000
NODE_ENV=development
```

## Usage Examples

### Get All Movies
```bash
curl http://localhost:3000/api/movies/
```

### Get Movie by ID
```bash
curl http://localhost:3000/api/movies/1
```

### Create New Movie
```bash
curl -X POST http://localhost:3000/api/movies/ \
  -H "Content-Type: application/json" \
  -d '{"title": "New Movie", "year": 2023, "rating": 8.5}'
```

### Update Movie
```bash
curl -X PUT http://localhost:3000/api/movies/1 \
  -H "Content-Type: application/json" \
  -d '{"rating": 9.5}'
```

## Project Structure

```
nodejs-course/
├── index.js          # Main server implementation
├── package.json      # Project dependencies and scripts
├── .env             # Environment variables
├── .gitignore       # Git ignore rules
├── AGENTS.md        # Comprehensive Node.js guide
└── README.md        # This file
```

## Learning Objectives

This project demonstrates:
- HTTP server creation using Node.js
- Request routing and method handling
- JSON parsing and serialization
- Error handling with proper HTTP status codes
- Environment variable management
- REST API design principles

## Dependencies

- **dotenv**: Environment variable management
- **express**: Web framework (installed but not used in current implementation)

## License

ISC License
