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
    let tmp, fin;
    let img_extension = ".png"

    switch (chartType) {
        case "bar":
            tmp = stimuliBar;
            let tmp_fin = [   // Removing unnecessary questions
                tmp[0],
                [tmp[1], tmp[2]][Math.round(Math.random())], // random between 0 and 1
                tmp[3],
                [tmp[4], tmp[5]][Math.round(Math.random())],
                [tmp[6], tmp[7]][Math.round(Math.random())],
                [tmp[8], tmp[9]][Math.round(Math.random())],
                [tmp[10], tmp[11], tmp[12], tmp[13], tmp[14], tmp[15]][Math.floor(Math.random() * 6)] // rand between 0 and 5
            ]
            // some questions need to be fixed since they are attention checks as well
            fin = [
                tmp_fin[0],
                ...shuffle(tmp_fin.slice(1, 4)),
                tmp_fin[4],
                ...shuffle(tmp_fin.slice(5, 7))
            ]
            console.log(fin)
            break;

        case "radial":
            let radialFirstPos = shuffle([5, 6, 11, 12]) // to ensure all position of firstPos are covered

            tmp = stimuliRadial;
            let q1 = stimuliRadial[0]
            let q2 = stimuliRadial[1]
            q2.qId = q2.qId + radialFirstPos[0];
            q2.imgSrc = q2.imgSrc + radialFirstPos[0] + img_extension;
            q2.firstGuestPos = radialFirstPos[0];

            // Participants will see either the before or after question. Qs use the same images, it's the ansC and ansCounter that change
            let q3_after = stimuliRadial[2]
            q3_after.qId = q3_after.qId + radialFirstPos[1];
            q3_after.imgSrc = q3_after.imgSrc + radialFirstPos[1] + img_extension;
            q3_after.firstGuestPos = radialFirstPos[1];

            let q3_before = stimuliRadial[3]
            q3_before.qId = q3_before.qId + radialFirstPos[1];
            q3_before.imgSrc = q3_before.imgSrc + radialFirstPos[1] + img_extension;
            q3_before.firstGuestPos = radialFirstPos[1];

            let q4 = stimuliRadial[4]
            let n_sg = [2, 3][(Math.random() > 0.5) ? 1 : 0]
            q4.qId = q4.qId + n_sg;
            q4.imgSrc = q4.imgSrc + n_sg + img_extension;
            q4.firstGuestPos = n_sg === 2 ? 11 : 5;
            q4[lang].ansCounter = n_sg
            q4[lang].ansClock = n_sg
            q4.ansExpected = n_sg

            let q5_after = stimuliRadial[5]
            q5_after.qId = q5_after.qId + radialFirstPos[2];
            q5_after.imgSrc = q5_after.imgSrc + radialFirstPos[2] + img_extension;
            q5_after.firstGuestPos = radialFirstPos[2];

            let q5_before = stimuliRadial[6]
            q5_before.qId = q5_before.qId + radialFirstPos[2];
            q5_before.imgSrc = q5_before.imgSrc + radialFirstPos[2] + img_extension;
            q5_before.firstGuestPos = radialFirstPos[2];

            let q6_after = stimuliRadial[7]
            q6_after.qId = q6_after.qId + radialFirstPos[3];
            q6_after.imgSrc = q6_after.imgSrc + radialFirstPos[3] + img_extension;
            q6_after.firstGuestPos = radialFirstPos[3];

            let q6_before = stimuliRadial[8]
            q6_before.qId = q6_before.qId + radialFirstPos[3];
            q6_before.imgSrc = q6_before.imgSrc + radialFirstPos[3] + img_extension;
            q6_before.firstGuestPos = radialFirstPos[3];

            fin = [q1, q2,
                [q3_after, q3_before][(Math.random() > 0.5) ? 1 : 0],
                q4,
                [q5_after, q5_before][(Math.random() > 0.5) ? 1 : 0],
                [q6_after, q6_before][(Math.random() > 0.5) ? 1 : 0]
            ]

            // console.log("fin : ", fin)
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

    return (fin)

    // imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],

}
