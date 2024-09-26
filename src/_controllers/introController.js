
// import * as d3 from 'd3'
// import { colorCoord } from '../stimuli/colors'

import * as dao from '../_utils/firebase-config'

export const onClickStart = (navigate, nextUrl) => {
    // add tuto answers info from sessionStrorage to gemography: tuto: "[array here]" 
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    sessionStorage.setItem('demography', JSON.stringify(dem))
    dao.logDem(dem)
    navigate(nextUrl)
}

