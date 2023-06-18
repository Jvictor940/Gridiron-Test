// For '/user' endpoints

const getUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Got All Users!'})
}

const createUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created a user by the name of ${req.body.userName}!`})
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the profile of ${req.body.userName}!`})
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleted All Users!'})
}

module.exports = {
    getUsers,
    createUser, 
    putUser,
    deleteUsers
}