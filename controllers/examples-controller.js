export let users = [
    {
        "_id" : 123,
        "name" : "alice"
    },
    {
        "_id" : 234,
        "name" : "bob"
    }
]

export const getUsers = () => users;

// we are able to pass the app to this module
const controller = (app) => {
    // specify path and handlers
    // path is the location, always matching URL
    // what client sends are always stored in req(request)
    // res(response) allows us to create response to the request, here we send 'hello world!' back to the client
    // For browsers (client), http://localhost:4000//hello is referred to as a URL (Uniform Resource Locator)
    // For server, http://localhost:4000//hello is the [HTTP] endpoint
    app.get('/hello',
        (req, res) => {res.send('Hello World!')});

    // a and b are the placeholder, pass to the server
    app.get('/add/:a/:b', (req, res) => {
        const A = parseInt(req.params.a);
        const B = parseInt(req.params['b']);
        const C = A + B;
        res.send(`${A} + ${B} = ${C}`)
    })

}

export default controller;

