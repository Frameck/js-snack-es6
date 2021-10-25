const teams = [
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
    },
]



for (let i = 0; i < teams.length; i++) {
    const { name, pointsScored, foulsIncurred } = teams[i]
    
}


// genera un numero casuale tra un min e un max (included)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}