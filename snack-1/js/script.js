const container = document.querySelector('.container')

const bicyclesArr = [
    {
        name: 'Red dragon',
        weight: 20
    },
    {
        name: 'Blue squirrel',
        weight: 25
    },
    {
        name: 'Black panda',
        weight: 40
    },
    {
        name: 'Yellow dog',
        weight: 55
    },
    {
        name: 'Green cat',
        weight: 10
    }
]


findLighterBicycle(bicyclesArr)


function findLighterBicycle(bicycles) {
    const weights = []

    // creo un array con tutti i pesi delle bici
    for (let i = 0; i < bicycles.length; i++) {
        const { weight } = bicycles[i]
        weights.push(weight)
    }

    // ordino l'array per trovare il peso minore
    weights.sort((a, b) => a - b)

    // stampo nel DOM la bici che pesa meno controllando con un blocco if
    for (let i = 0; i < bicycles.length; i++) {
        const { name, weight } = bicycles[i]
        
        // interrompe il ciclo for quando trova la corrispondenza
        if (weight === weights[0]) {
            return container.innerHTML = `Nome bici: ${name}, peso: ${weight}kg`
        }
    }
}