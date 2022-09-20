const express = require('express')
const router = express.Router()

const { getTeams, getTeam, addTeam, deleteTeam, updateTeam } = require('./../controllers/teamsController')

router.get('/api/teams', getTeams)

router.get('/api/team/:id', getTeam)

router.post('/api/team', addTeam)

router.delete('/api/delete/:id', deleteTeam)

router.put('/api/update/:id', updateTeam)

module.exports = router