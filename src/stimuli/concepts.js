// export const concepts = ['Paper', 'Plastic', 'glass', 'Metal', 'Compost', 'Trash',
//     'Justice', 'Peace', 'Comfort', 'Efficiency', 'reliability', 'Safety', 'Speed']

// // The list below was used for Pilot #1
// export const concepts = {
//     "en": {
//         cptFood: ['Banana', 'Carrot', 'Mango', 'Peach'],
//         cptAbstract: ['Comfort', 'Justice', 'Peace', 'Safety'],
//         cptEmotion: ['Angry', 'Happy', 'Love', 'Sad'],
//         cptWeather: ['Drought', 'Hurricane', 'Lightning', 'Sandstorm']
//     },
//     "fr": {
//         cptFood: ['Banane', 'Carotte', 'Mangue', 'Pêche'],
//         cptAbstract: ['Confort', 'Justice', 'Paix', 'Sécurité',],
//         cptEmotion: ['En colère', 'Heureux', 'Amour', 'Triste'],
//         cptWeather: ['Sécheresse', 'Ouragan', 'Foudre', 'Tempête de sable' ]
//     }
// }

// // List of concepts for Pilot #2
// // Concepts that did not have / have fewer colors w/ significant differences (from the combined dataset) are replaced 
// // w/ carrot -> Spices, comfort -> Life, safety -> Death, 
// // hurricane -> Tree, lightning -> Healthy, sandstorm --> Sick

export const concepts = {
    "en": {
        cptFood: ['Banana', 'Spices', 'Mango', 'Peach'],
        cptAbstract: ['Life', 'Justice', 'Peace', 'Death'],
        cptEmotion: ['Angry', 'Happy', 'Love', 'Sad'],
        cptWeather: ['Drought', 'Tree', 'Healthy', 'Sick']
    },
    "fr": {
        cptFood: ['Banane', 'Épices', 'Mangue', 'Pêche'],
        cptAbstract: ['Vie', 'Justice', 'Paix', 'Mort',],
        cptEmotion: ['En colère', 'Heureux', 'Amour', 'Triste'],
        cptWeather: ['Sécheresse', 'Arbre', 'En bonne santé', 'Malade']
    }
}

export const getConcepts = (lang) => {
    const con = concepts[lang]
    const res = [];
    for (let i = 0; i < con.length; i++) {
        const key = Object.keys(con[i])[0]
        res.push(...con[i][key])
    }
    return res
}


// const shuffle = (a) => { //Fisher-Yates shuffle
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i]; a[i] = a[j]; a[j] = x;
//     } return a;
// }


