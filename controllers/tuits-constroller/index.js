import tuits from './tuits.js'

const TuitsController = (app) => {
    app.get('/tuits', (req, res) => {res.send(tuits)})

    // access the element with specified id
    app.get('/tuits/:tid', (req, res) => {
        // params['tid'] is the same as params.tid, json bracket notation vs dot notation
        const tuitId = req.params['tid'];
        const tuit = tuits.find(t => t._id === tuitId)
        res.send(tuit)
    })

    app.post('/tuits', (req, res) => {

    })

    app.put('', () => {})

    // remove tuits by its id
    app.delete('/tuits/:tid', (req, res) => {})
}

export default TuitsController;