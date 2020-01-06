const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'root',
    port: 5432,
})

//users API backends
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const { name, address } = request.body
    pool.query('INSERT INTO users (name, address) VALUES ($1, $2)', [name, address], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json(results.rows)
    })
}
//orders API backends
const getOrderById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getOrders = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createOrder = (request, response) => {
    const { naming, sizes, statuses, quantity, custId } = request.body
    console.log(request.body);
    pool.query('INSERT INTO orders (naming, sizes, statuses, quantity, custid) VALUES ($1, $2, $3, $4, $5)', [naming, sizes, statuses, quantity, custId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json(results.rows)
    })
}
const deleteOrder = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    getOrders,
    createOrder,
    getOrderById,
    deleteOrder
}