const { teams } = require('./../models/teams')

const getTeams = async(req, res) => {
    try {
        await res.json(teams)
    } catch (error) {
        console.log(error)
    }
}

const getTeam = async(req, res) => {
    const id = req.params.id
    try {
        let team = []
        for (const myTeam of teams) {
            if(myTeam.id == id){
                team.push(myTeam)
            }
        }
        if(team.length === 0){
            res.json({
                msg: 'There isnt any team'
            })
        }else{
            res.json(team)
        }        
    } catch (error) {
        console.log(error)
    }
}

const addTeam = async(req, res) => {
    const { name, league } = req.body
    try {
        let names = 0
        let id = teams.length + 1
        for (const team of teams) {
            if(team.name != name) {
                names++
            }
        }
        if(teams.length == names){
            if(league.length > 0 && name.length > 0){
                teams.push({
                    id: id,
                    name: name,
                    league: league
                })
                res.status(200).json({
                    msg: 'Team added successfully'
                })
            }else{
                res.status(400).json({
                    msg: 'Fields cannot be empty'
                })
            }
        }else{
            res.status(400).json({
                msg: 'Team is already exists'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteTeam = async(req, res) => {
    const id = req.params.id
    let newTeam = []
    try {
        for(let i = 0; i <= teams.length - 1; i++){
            if(teams[i].id == id){
                newTeam.push(teams[i])
                teams.splice(i, 1)
            }
        }
        if(newTeam.length == 1){
            res.status(200).json({
                msg: 'Team deleted!'
            })
        }else{
            res.status(404).json({
                msg: 'There isnt any team with this ID'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateTeam = async(req, res) => {
    const id = req.params.id
    let count = 0
    const { name, league } = req.body
    try {
        if(name.length > 0 && league.length > 0){
            for(let i = 0; i <= teams.length - 1; i++){
                if(teams[i].id == id){
                    teams[i].name = name
                    teams[i].league = league
                    count++
                }
            }
            if(count > 0){
                res.status(200).json({
                    msg: 'Team updated'
                })
            }else{
                res.status(404).json({
                    msg: 'Team not exist'
                })
            }
        }else{
            res.status(400).json({
                msg: 'Name and league cannot be empty for update'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTeams,
    getTeam,
    addTeam,
    deleteTeam,
    updateTeam
}