
import * as d3 from 'd3'
import { colorCoord } from '../stimuli/colors'

import * as dao from '../_utils/firebase-config'

export const addGridColorPatches = (divId, pW, spacing) => {
    d3.select(divId).selectAll("*").remove()
    let colors = colorCoord.slice(0, -1) // remove the last entry which is the coordinates for the background color

    let patchW = pW, patchH = patchW
    let nrow = 4

    var svg = d3.select(divId).append('svg')
        .attr('width', (pW + spacing) * 10)
        .attr('height', (patchH + spacing) * nrow + 2 * spacing)

    const rect = svg.selectAll('rect').data(colors)
        .enter()
        .append('rect')
        .attr('id', d => d.code)
        .attr("width", patchW)
        .attr("height", patchH)
        .attr('x', (d, i) => Math.floor(i / nrow) * (patchW + spacing))
        .attr('y', (d, i) => (i % nrow) * (patchH + spacing) + 10)
        .attr('fill', (d) => d3.lab(d.L, d.a, d.b))

    return rect
}

export const addGridColorPatchesTuto = (divId, pW, spacing, handleOpenModal) => {
    const rect = addGridColorPatches(divId, pW, spacing)
    rect.on('mouseover', function () {
        let strokeColor = d3.select(this).attr('fill')
        d3.select(this).attr("stroke", strokeColor)
            .attr("stroke-width", 6)
    }).on('mouseout', function () {
        d3.select(this).attr("stroke-width", 0)
    }).on('click', function () {
        handleOpenModal(d3.select(this).attr('id'))
    })
}


export const getConceptList = (lang) => {
    switch (lang) {
        case "en":
        default:
    }
}

export const onClickStart = (navigate, nextUrl) => {
    // add tuto answers info from sessionStrorage to gemography: tuto: "[array here]" 
    let dem = JSON.parse(sessionStorage.getItem('demography'))
    let tut = sessionStorage.getItem('tutoValues') // record the tutoValues as string in the demography data

    dem.tutoValues = tut

    sessionStorage.setItem('demography', JSON.stringify(dem))
    // dao.logDem(dem.sessionID, dem, dem.expLang, dem.expName)
    dao.logDem(dem)
    document.body.classList.remove('intro-body');
    navigate(nextUrl)
}

