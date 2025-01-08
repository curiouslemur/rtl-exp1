import * as dao from '../_utils/firebase-config'

export const isProlificUser = () => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    if (dem.prolificID) { return true } else { return false }
}

export const sendComment = (c) => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.comment = c
    sessionStorage.setItem("demography", JSON.stringify(dem))
    let demPath = dem.expLang + "-" + dem.expName + "-dem/" + dem.sessionID
    dao.logDem(demPath, dem)
}

export const handleDailyChange = (e, type) => {
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem[type] = e.target.value
    sessionStorage.setItem("demography", JSON.stringify(dem))
    let demPath = dem.expLang + "-" + dem.expName + "-dem/" + dem.sessionID
    dao.logDem(demPath, dem)
}