import people from './users.js'

let users = people

// use express instance app to declare HTTP GET request pattern /api/users to call a function
const UserController = (app) => {
    // requesting data from a server
    app.get('/api/users', findUsers)
}

// responds with array of users
const findUsers = (req, res) => {
    // send data to server as querying string parameters, path parameters, or in the request body
    // query string parameters encoded at the end of a URL after a question mark (?).
    // Query string parameters are name value pairs separated by ampersands (&).
    // retrieve type parameter from query
    // test with http://localhost:4000/api/users?type=STUDENT
    const type = req.query.type
    // const type = req.query['type']
    if(type) {
        // if type parameter in query find users of that type
        const usersOfType = users.filter(u => u.type === type)
        // respond with users of that type
        res.json(usersOfType)
        // return so it doesn't continue
        return
    }
    //
    res.json(users)
}

export default UserController