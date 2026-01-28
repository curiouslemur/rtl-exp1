import * as dao from '../_utils/firebase-config'
import * as d3 from 'd3'

export const shuffle = (a) => { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i]; a[i] = a[j]; a[j] = x;
    } return a;
}

export const addEmptyPlaceholder = (divId) => {
    d3.select("#chartSvg").remove()
    d3.select(divId).append('svg')
        .attr('width', 720).attr('height', 380)
        .attr('id', "chartSvg")
}


export const onClickShowChart = (divId, stimulusData, setVisibilityAnserwField, setCannotShowChart, setChartIsVisible, progress, alertMessage, expLang, chartType, setTimeoutID) => {

    if (progress === 0) { alert(alertMessage) }

    if (d3.select("#chartSvg")) { d3.select("#chartSvg").remove() }

    // var elem = document.createElement("img");
    // document.getElementById(divId).appendChild(elem);
    // // elem.src = stimulusData.imgSrc;
    // elem.src = expLang + "/" + chartType + "/" + stimulusData.imgSrc
    // elem.id = "chartSvg"
    // elem.style.height = "380px"
    // elem.style.height = 

    setVisibilityAnserwField("visible")
    setCannotShowChart(true)
    setChartIsVisible(true)

    const id = setTimeout(() => {
        // console.log("resetting timeout")
        addEmptyPlaceholder("#chartDiv");
        setChartIsVisible(false)
    },
        JSON.parse(sessionStorage.getItem('demography')).expCountry === 'demo' ? 20000 :
            5000) // timeout to hide chart after 5s
    setTimeoutID(id)
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


export const onClickNext = (e, progress, setProgress, chartSvgId, setCannotShowChart,
    setVisibilityAnserwField,
    setCannotNext,
    ansValue,
    chartType,
    stimuli,
    navigate, nextUrl,
    timeoutID, setTimeoutID,
    setChartIsVisible) => {

    if (timeoutID) {
        clearTimeout(timeoutID)
        setTimeoutID(null)
    }

    let dem = JSON.parse(sessionStorage.getItem('demography'))
    let stimulusData = stimuli[progress]

    dem.progress = progress + 1 // because progress was initiated at 0

    let demPath = dem.expLang + "-" + dem.expName + "-dem/" + dem.sessionID
    dao.logDem(demPath, dem)
    sessionStorage.setItem("demography", JSON.stringify(dem))

    stimulusData.ans = ansValue // ans is the answer from the participant
    stimulusData.sessionID = dem.sessionID

    if (chartType === "radial") {
        stimulusData.ansCounter = stimulusData[dem.expLang].ansCounter
        stimulusData.ansClock = stimulusData[dem.expLang].ansClock
        delete stimulusData["valR"]; delete stimulusData["valL"]
        delete stimulusData["valMarked"]; delete stimulusData["anchorPos"]
    }

    let idx = chartType + "-" + (progress + 1)
    let record = {}

    delete stimulusData[dem.expLang];

    record[idx] = stimulusData

    // dao.logData(dem, record)
    // path: en-rtl1/sessionID-B
    let path = dem.expLang + "-" + dem.expName + '/' + dem.sessionID
    dao.logData(path, dem, record)

    if (progress < stimuli.length - 1) {
        setProgress(progress + 1)
        addEmptyPlaceholder(chartSvgId)
        setCannotShowChart(false)
        setVisibilityAnserwField("hidden")
        setCannotNext(true)
        setChartIsVisible(false)
    } else {
        navigate(nextUrl)
    }

}