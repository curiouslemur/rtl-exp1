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
            let q1 = stimuliRadial[0]
            let q2 = stimuliRadial[1]
            q2.qId = q2.qId + radialFirstPos[0];
            q2.imgSrc = q2.imgSrc + radialFirstPos[0] + ".svg";
            q2.first = radialFirstPos[0];

            // Participants will see either the before or after question. Qs use the same images, it's the ansC and ansCounter that change
            let q3_after = stimuliRadial[2]
            q3_after.qId = q3_after.qId + radialFirstPos[1];
            q3_after.imgSrc = q3_after.imgSrc + radialFirstPos[1] + ".svg";
            q3_after.first = radialFirstPos[1];

            let q3_before = stimuliRadial[3]
            q3_before.qId = q3_before.qId + radialFirstPos[1];
            q3_before.imgSrc = q3_before.imgSrc + radialFirstPos[1] + ".svg";
            q3_before.first = radialFirstPos[1];

            let q4 = stimuliRadial[4]
            let n_sg = [2, 3][(Math.random() > 0.5) ? 1 : 0]
            q4.qId = q4.qId + n_sg;
            q4.imgSrc = q4.imgSrc + n_sg + ".svg";
            q4.first = n_sg === 2 ? 11 : 5;

            let q5_after = stimuliRadial[5]
            q5_after.qId = q5_after.qId + radialFirstPos[2];
            q5_after.imgSrc = q5_after.imgSrc + radialFirstPos[2] + ".svg";
            q5_after.first = radialFirstPos[2];

            let q5_before = stimuliRadial[6]
            q5_before.qId = q5_before.qId + radialFirstPos[2];
            q5_before.imgSrc = q5_before.imgSrc + radialFirstPos[2] + ".svg";
            q5_before.first = radialFirstPos[2];

            let q6_after = stimuliRadial[7]
            q6_after.qId = q6_after.qId + radialFirstPos[3];
            q6_after.imgSrc = q6_after.imgSrc + radialFirstPos[3] + ".svg";
            q6_after.first = radialFirstPos[3];

            let q6_before = stimuliRadial[8]
            q6_before.qId = q6_before.qId + radialFirstPos[3];
            q6_before.imgSrc = q6_before.imgSrc + radialFirstPos[3] + ".svg";
            q6_before.first = radialFirstPos[3];

            fin = [q1, q2,
                [q3_after, q3_before][(Math.random() > 0.5) ? 1 : 0],
                q4,
                [q5_after, q5_before][(Math.random() > 0.5) ? 1 : 0],
                [q6_after, q6_before][(Math.random() > 0.5) ? 1 : 0]
            ]

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
