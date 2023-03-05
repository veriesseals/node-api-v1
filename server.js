/*
Build A Server With Node.js
*/
// -----------------------------------------------------

// Import express and create port
// -----------------------------------------------------
const express = require('express');
const server = express();
const PORT = 3000 || process.env.PORT;

// Create a database connection
// -----------------------------------------------------
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aleceia1998',
    database: 'sakila'
});

// 6. All Route
server.get('/api/film', (req, res) =>{
    // run a query
    connection.query(
        // sql query, callback function
        'SELECT * FROM film;',
        (error, rows) => {
            if(!error) {
                if(rows.lenght ===1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        })

}) 

server.get('/api/actor', (req, res) => {
    // run a query
    connection.query(
        // sql query, callback function
        'SELECT * FROM actor;',
        (error, rows) => {
            if(!error) {
                if(rows.lenght === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        })
})

server.get('/api/customer', (req, res) => {
    // run a query
    connection.query(
        // sql query, callback function
        'SELECT * FROM customer;',
        (error, rows) => {
            if(!error) {
                if(rows.lenght === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        })
})

// Single Route
// ------------------------------------------------------------
server.get('/api/film/:id', (req, res)=> {
    // console.log(req.params.id)
    const id = req.params.id
    connection.query(
        `SELECT * FROM film WHERE film_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if (rows.lenght ===1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        }
    )
});

// Single Route
// ------------------------------------------------------------
server.get('/api/actor/:id', (req, res)=> {
    // console.log(req.params.id)
    const id = req.params.id
    connection.query(
        `SELECT * FROM actor WHERE actor_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if (rows.lenght === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        }
    )
});

// Single Route
// ------------------------------------------------------------
server.get('/api/customer/:id', (req, res)=> {
    // console.log(req.params.id)
    const id = req.params.id
    connection.query(
        `SELECT * FROM customer WHERE customer_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if (rows.lenght ===1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error', error)
            }
        }
    )
});


// Connect to database
// -----------------------------------------------------
connection.connect((error) => {
    if (!error) {
    console.log('Connected to database...')
    } else {
    console.log('Database connection failed...', error)
    };
});

// Root Routes
// .get(path, callback function)
server.get('/', (req, res) => {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Customers': `http://localhost:${PORT}/api/customer`
    });
});


// Listen to port
// .listen (port, callback)
// -----------------------------------------------------
server.listen(PORT, () => 
    console.log(`Port ${PORT} is listening...`));


