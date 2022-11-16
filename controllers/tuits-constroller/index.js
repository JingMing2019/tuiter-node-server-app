import tuitsArray from './tuits.js'
let tuits = tuitsArray;

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
        const newTuit = req.body;
        newTuit['_id'] = (new Date()).getTime() + "";
        tuits.push(newTuit);
        res.sendStatus(200);
    })

    app.put('/tuits/:tid', (req, res) => {
        const tuitId = req.params['tid'];
        const tuitsUpdates = req.body;
        const tuitsIndex = tuits.findIndex(tuit => tuit._id === tuitId);
        if (tuitsIndex >= 0) {
            // only update the specific attributes
            tuits[tuitsIndex] = {
                ...tuits[tuitsIndex],
                ...tuitsUpdates
            };
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    })

    // remove tuits by its id
    app.delete('/tuits/:tid', (req, res) => {
        const tuitId = req.params['tid'];
        const tuitIndex = tuits.findIndex(tuit => tuit._id === tuitId);
        if (tuitIndex >= 0) {
            tuits.splice(tuitIndex, 1);
            // send(Integer) is deprecated in express
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    })
}

export default TuitsController;