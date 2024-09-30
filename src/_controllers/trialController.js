import * as dao from '../_utils/firebase-config'
import * as d3 from 'd3'

export const shuffle = (a) => { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i]; a[i] = a[j]; a[j] = x;
    } return a;
}

export const onClickNext_old = (
    setColorCodeList, colorCodeList, conceptList,
    setProgressColor, progressColor,
    setSliderValue, sliderValue,
    setShowComponent,
    setCannotNext, setCanPressEnter,
    setProgressBlock, progressBlock,
    nextBlockAlertMessage,
    navigate, nextUrl) => {

    setCanPressEnter(false)

    let dem = JSON.parse(sessionStorage.getItem('demography'))
    dem.progressBlock = progressBlock + 1
    dem.progressColor = progressColor + 1

    const record = {}
    const recordData = {
        ID: dem.sessionID,
        ans: sliderValue,
        color: colorCodeList[progressColor],
        concept: conceptList[progressBlock].toLowerCase(),
        progressBlock: progressBlock + 1,
        progressColor: progressColor + 1,
        expCountry: dem.expCountry
    }

    const idx = (progressBlock * colorCodeList.length) + progressColor + 1
    record[idx] = recordData


    dao.logData(dem, record)
    dao.logDem(dem)

    sessionStorage.setItem("demography", JSON.stringify(dem))

    if (progressColor === 0 & progressBlock === 0) { alert("You can also press Enter to progress to the next trial") }

    if (progressColor < colorCodeList.length - 1) { // colorCodeLength = 37. Within the same block but with a different color
        setProgressColor(progressColor + 1)
        setSliderValue(50)
        setCannotNext(true)
        setShowComponent(false)
    } else if (progressBlock < conceptList.length - 1) { // when all colors in a block were done
        // } else if (progressBlock < conceptList.length - 15) { // The - 15 here is only for testing purposes: to get to the outro page faster
        setProgressBlock(progressBlock + 1)
        setProgressColor(0)
        setColorCodeList(shuffle(colorCodeList))
        // TODO: here alert the next block
        setSliderValue(50)
        alert(nextBlockAlertMessage + conceptList[progressBlock + 1].toUpperCase())
    } else { navigate(nextUrl) }

}

export const addEmptyPlaceholder = (divId) => {
    d3.select("#chartSvg").remove()
    d3.select(divId).append('svg')
        .attr('width', 720).attr('height', 340)
        .attr('id', "chartSvg")
}


export const onClickShowChart = (divId, stimulusData, setVisibilityAnserwField, setCannotShowChart, setChartIsVisible, progress, alertMessage) => {
    if (progress === 0) { alert(alertMessage) }

    d3.select("#chartSvg").remove()

    var elem = document.createElement("img");
    document.getElementById(divId).appendChild(elem);
    elem.src = stimulusData.imgSrc;
    elem.id = "chartSvg"
    elem.style.width = "100%"
    // elem.style.height = 

    setVisibilityAnserwField("visible")
    setCannotShowChart(true)
    setChartIsVisible(true)
}

export const onChangeAnsTextField = (e, setCannotNext, setAnsValue) => {
    if (e.target.value.length >= 1) {
        setCannotNext(false)
        setAnsValue(e.target.value)
    }
}

export const onChangeAnsSelect = (e, setCannotNext, setAnsValue) => {
    // setOptionValue(e.target.value)
    setCannotNext(false)
    setAnsValue(e.target.value)
}



/**
 * @param {*} e 
 * @param {*} progress initiated at 0
 * @param {*} setProgress 
 * @param {*} chartSvgId 
 * @param {*} setCannotShowChart 
 * @param {*} setVisibilityAnserwField 
 * @param {*} totalQ 
 * @param {*} stimulusData 
 */
export const onClickNext = (e, progress, setProgress, chartSvgId, setCannotShowChart, setVisibilityAnserwField,
    setCannotNext,
    totalQ, stimulusData, ansValue,
    navigate, nextUrl) => {

    let dem = JSON.parse(sessionStorage.getItem('demography'))
    // console.log(dem)
    dem.progress = progress + 1 // because progress was initiated at 0
    dao.logDem(dem)
    sessionStorage.setItem("demography", JSON.stringify(dem))

    delete stimulusData[dem.expLang];
    stimulusData.ans = ansValue // ans is the answer from the participant
    stimulusData.sessionID = dem.sessionID

    let idx = progress + 1
    let record = {}
    record[idx] = stimulusData

    dao.logData(dem, record)

    if (progress < totalQ - 1) {
        setProgress(progress + 1)
        addEmptyPlaceholder(chartSvgId)
        setCannotShowChart(false)
        setVisibilityAnserwField("hidden")
        setCannotNext(true)
    } else {
        navigate(nextUrl)
    }

}