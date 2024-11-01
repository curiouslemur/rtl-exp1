
import * as dao from '../_utils/firebase-config'

export const onClickStart = (navigate, nextUrl) => {
    // add tuto answers info from sessionStrorage to gemography: tuto: "[array here]" 
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.languageOther = JSON.stringify(dem.languageOther)
    sessionStorage.setItem('demography', JSON.stringify(dem))
    dao.logDem(dem)
    navigate(nextUrl)
}

