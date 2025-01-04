import * as dao from '../_utils/firebase-config'

export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    if (dem.prolificID) { return true } else { return false }
}

export const sendComment = (c) => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.comment = c
    let demPath = dem.expLang + "-" + dem.expName + "-dem/" + dem.sessionID
    dao.logDem(demPath, dem)
}