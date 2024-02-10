// Routines to load the corresponding pages depending on the language on the experiment
import * as pages_inAr from "../locals/arabic/_pagesAr"
import * as pages_inEn from "../locals/english/_pagesEn"
import * as pages_inFr from "../locals/french/_pagesFr"
import * as options from "./selectOptions" // These are the options for Select forms for Countries and Languages
import { stimuli } from '../stimuli/stimuli.js'

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
    return (tmp)


}