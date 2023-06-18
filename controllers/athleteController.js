// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Got All Athletes!'})
}

const createAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created an athlete by the name of ${req.body.athleteName}!`})
}

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Updated an Athletes!'})
}

const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleted All Athletes!'})
}

module.exports = {
    getAthletes,
    createAthlete, 
    putAthlete,
    deleteAthletes
}