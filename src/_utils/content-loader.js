// Routines to load the corresponding pages depending on the language on the experiment
import * as pages_inAr from "../locales/arabic/_pagesAr"
import * as pages_inEn from "../locales/english/_pagesEn"
import * as pages_inFr from "../locales/french/_pagesFr"
import * as options from "./selectOptions" // These are the options for Select forms for Countries and Languages
import { stimuli } from '../stimuli/stimuli.js'
import { arabicTexts } from "../translations/arabic.js"
import { englishTexts } from "../translations/english.js"

export const loadPages_inLang = (lang) => {
    switch (lang) {
        case "ar":
            return pages_inAr // TODO: update this to pages_inAr instead
        case "en":
            return pages_inEn
        case "fr":
            return pages_inFr
        default:
            return "Language unknown -- exp. pages not found"
    }
}

export const loadCountries_inLang = (lang) => {
    return options.countryNames[lang]
}

export const loadLanguages_inLang = (lang) => {
    return options.languageNames.map(obj => ({ lang: obj[lang], "alpha3": obj.alpha3 }))
}

export const loadTexts_inLang = (lang) => {
    switch (lang) {
        case "ar":
            return arabicTexts // TODO: update this to pages_inAr instead
        case "en":
            return englishTexts
        default:
            return "Language unknown -- exp. pages not found"
    }
}

export const loadStimuli_inLang = (lang) => {
    let tmp = stimuli
    let allLang = ['ar', 'en']
    let langToRemove = allLang.filter(function (item) {
        return item !== lang
    })
    for (let i = 0; i < tmp.length; i++) {
        // // function to delete all the nested values of the languages from the flatten stimuli list
        // // This function is enough since at the end we might not even need to store the question
        // // Just use stimuli[i][expLan].q to access the question
        for (let i = 0; i < tmp.length; i++) {
            for (let j = 0; j < langToRemove.length; j++) {
                delete tmp[i][langToRemove[j]];
            }
        }
    }

    // Removing unnecessary questions

    let fin = [
        tmp[0],
        [tmp[1], tmp[2]][(Math.random() > 0.5) ? 1 : 0],
        tmp[3],
        [tmp[4], tmp[5]][(Math.random() > 0.5) ? 1 : 0],
        [tmp[6], tmp[7]][(Math.random() > 0.5) ? 1 : 0],
        [tmp[8], tmp[9]][(Math.random() > 0.5) ? 1 : 0],

    ]
    return (fin)



    // imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],

}