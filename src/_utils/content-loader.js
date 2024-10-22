// // Routines to load the corresponding pages depending on the language on the experiment

import * as options from "./selectOptions" // These are the options for Select forms for Countries and Languages

import { stimuliBar } from '../stimuli/stimuliBar.js'
import { stimuliRadial } from '../stimuli/stimuliRadial.js'
import { arabicTexts } from "../translations/arabic.js"
import { englishTexts } from "../translations/english.js"

const shuffle = (a) => { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i]; a[i] = a[j]; a[j] = x;
    } return a;
}

// export const loadPages_inLang = (lang) => {
//     // switch (lang) { case "ar": return pages_inAr // TODO: update this to pages_inAr instead
//     // }
// }

export const loadCountries_inLang = (lang) => { return options.countryNames[lang] }

export const loadLanguages_inLang = (lang) => {
    return options.languageNames.map(obj => ({ lang: obj[lang], "alpha3": obj.alpha3 }))
}

export const loadTexts_inLang = (lang) => {
    switch (lang) {
        case "ar": return arabicTexts // TODO: update this to pages_inAr instead
        case "en": return englishTexts
        default: return "Language unknown -- exp. pages not found"
    }
}


export const loadStimuli_inLang = (lang, chartType) => {
    let radialFirstPos = shuffle([5, 6, 11, 12])
    let tmp, fin;
    switch (chartType) {
        case "bar":
            tmp = stimuliBar;
            fin = [   // Removing unnecessary questions
                tmp[0],
                [tmp[1], tmp[2]][(Math.random() > 0.5) ? 1 : 0],
                tmp[3],
                [tmp[4], tmp[5]][(Math.random() > 0.5) ? 1 : 0],
                [tmp[6], tmp[7]][(Math.random() > 0.5) ? 1 : 0],
                [tmp[8], tmp[9]][(Math.random() > 0.5) ? 1 : 0],
            ]
            break;

        case "radial":
            tmp = stimuliRadial;
            // set the final set of stimuli for radial
            let q1 = stimuliRadial[0]
            let q2 = stimuliRadial[1]
            q2.qId = q2.qId + radialFirstPos[0];
            q2.imgSrc = q2.imgSrc + radialFirstPos[0] + ".svg";
            q2.first = radialFirstPos[0];
            fin = [q1, q2]

            // console.log(q2, radialFirstPos[0])
            break;

        default: tmp = stimuliBar;
    }

    let allLang = ['ar', 'en']
    let langToRemove = allLang.filter(function (item) { return item !== lang })
    for (let i = 0; i < tmp.length; i++) {
        // // Function to delete all the nested values of the languages from the flatten stimuli list
        // // This function is enough since at the end we might not even need to store the question
        // // Just use stimuli[i][expLan].q to access the question
        for (let i = 0; i < tmp.length; i++) {
            for (let j = 0; j < langToRemove.length; j++) {
                delete tmp[i][langToRemove[j]];
            }
        }
    }

    // Removing unnecessary questions
    // let fin = [
    //     tmp[0],
    //     [tmp[1], tmp[2]][(Math.random() > 0.5) ? 1 : 0],
    //     tmp[3],
    //     [tmp[4], tmp[5]][(Math.random() > 0.5) ? 1 : 0],
    //     [tmp[6], tmp[7]][(Math.random() > 0.5) ? 1 : 0],
    //     [tmp[8], tmp[9]][(Math.random() > 0.5) ? 1 : 0],

    // ]
    return (fin)

    // imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],

}
