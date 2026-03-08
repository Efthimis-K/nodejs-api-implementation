// // Using CommonJS require (Node.js default)
// const http = require('http');

// // Or using ES modules (Node.js 14+ with "type": "module" in
// // package.json)
// import http from 'http';

// // Creating an HTTP Server

// let http = require("http");

// http
//     .createServer(function (req, res) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("Hello from a server!");
//     })
//     .listen(8080);

// // Setting Response Headers

// let http = require("http");

// http
//     .createServer(function (req, res) {
//         res.writeHead(200, {
//             "Content-Type": "text/html",
//             "X-Powered-By": "Node.js",
//             "Set-Cookie": "sessionId=12345; HttpOnly",
//             "Cache-Control": "no-cache",
//             "Access-Control-Allow-Origin": "*",

//         });
//         res.end("Hello from a server!");
//     })
//     .listen(8080);

// // Reading Request Headers

// let http = require("http");

// http
//     .createServer(function (req, res) {
//         const userAgent = req.headers['user-agent'];
//         const acceptLanguage = req.headers['accept-language'];
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(`User-Agent: ${userAgent}; Accept-Language: ${acceptLanguage}`);
//     }).listen(8080);

// // Getting the Request

// // URL 
// // const http = require("http");

// http
//     .createServer(function (req, res) {
//         const { method, url } = req;

//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(`You did a ${method} request to ${url}`);
//     })
//     .listen(8080);

// // Parsing URLs using the URL Module



// const http = require("http");

// const url = require('url');



// http
//     .createServer(function (req, res) {
//         // Parse the URL
//         // `true` tells to parse the query string into an object
//         const parsedUrl = url.parse(req.url, true);

//         // Get parts of the URL
//         // `pathname` - the path without query string
//         // `query` - query string as an object const { pathname, query } = parsedUrl;

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({
//             url: req.url,
//             pathname,
//             query
//         }));
//     })
//     .listen(8080);

// // Using the Query Strings

// const http = require("http");
// const { URL } = require("url");
// const querystring = require("querystring");

// http
//     .createServer(function (req, res) {
//         // Parse the URL
//         const baseURL = `http://${req.headers.host}/`;
//         const parsedUrl = new URL(req.url, baseURL);

//         // Get query parameters as an object
//         const params = Object.fromEntries(parsedUrl.searchParams);

//         // Extend query parameters object
//         const queryParams = { ...params, rating: 8.7 };

//         // Convert query parameters object into query string
//         const queryString = querystring.stringify(queryParams);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//             JSON.stringify({
//                 baseURL,
//                 pathname: parsedUrl.pathname,
//                 queryString,
//             })
//         );
//     })
//     .listen(8080);



require('dotenv').config();
// load express
let express = require('express');


const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';


let movies = [
    { id: 1, title: "The Godfather", year: 1972, rating: 9.2 },
    { id: 2, title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0 },
    { id: 4, title: "Pulp Fiction", year: 1994, rating: 8.9 },
    { id: 5, title: "Forrest Gump", year: 1994, rating: 9.7 },
    { id: 6, title: "Inception", year: 2010, rating: 8.8 }
];


// http
//     .createServer(function (req, res) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Hello World!</h1>");
//     })
//     .listen(PORT, () => {
//         console.log(`Server running on port http://localhost:${PORT} in ${ENV} mode`);
//     });


const app = express();

app.use(express.json());

app.get('/api/movies', (req, res) => {
    const { year } = req.query;

    if (!year) {
        return res.status(200).json(movies);
    }

    const parsedYear = parseInt(year, 10);

    if (Number.isNaN(parsedYear)) {
        return res.status(400).json({ error: 'Year must be a valid number' });
    }

    const filteredMovies = movies.filter(movie => movie.year === parsedYear);

    if (filteredMovies.length === 0) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    return res.status(200).json(filteredMovies);
});

app.get('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const movie = movies.find(item => item.id === id);

    if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    return res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
    try {
        const movie = {
            ...req.body,
            id: movies.length + 1
        };

        movies.push(movie);
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }
});

app.put('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const movieIndex = movies.findIndex(item => item.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    movies[movieIndex] = { ...movies[movieIndex], ...req.body, id };
    return res.status(200).json(movies[movieIndex]);
});

app.delete('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const movieExists = movies.some(item => item.id === id);

    if (!movieExists) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    movies = movies.filter(item => item.id !== id);
    return res.status(200).json({ message: 'Movie deleted' });
});

app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} in ${ENV} mode`);
});





