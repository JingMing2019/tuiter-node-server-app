import people from './users.js'

let users = people

// use express instance app to declare HTTP GET request pattern /api/users to call a function
const UserController = (app) => {
    // requesting data from a server
    app.get('/api/users', findUsers)
    // map path pattern to handler function
    // The colon (:) followed by uid declares a placeholder that matches any literal string.
    // The actual value in the placeholder can be retrieved using uid as a key into the request's params map.
    app.get('/api/users/:uid', findUserById);
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

const findUserById = (req, res) => {
    // get uid from request parameter map
    const userId = req.params.uid;
    // const userId = req.params['uid'];
    // find user in users array whose _id matches userId retrieved from params
    const user = users.find(u => u._id === userId);
    res.json(user);
}


export default UserController