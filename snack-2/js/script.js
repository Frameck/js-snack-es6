const teamsArr = [
    {
        name: 'Juventus',
        pointsScored: 0,
        foulsIncurred: 0
    },
    {
        name: 'Milan',
        pointsScored: 0,
        foulsIncurred: 0
    },
    {
        name: 'Inter',
        pointsScored: 0,
        foulsIncurred: 0
    }
]


setValues(teamsArr)


function setValues(teams) {
    const newTeams = []

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i]
        team.pointsScored = randomIntFromInterval(1, 100)
        team.foulsIncurred = randomIntFromInterval(1, 100)
    
        let { name, foulsIncurred } = teams[i]
        newTeams.push({
            name,
            foulsIncurred
        })
    }
    
    console.log(teams)
    console.log(newTeams)
}

// genera un numero casuale tra un min e un max (included)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}