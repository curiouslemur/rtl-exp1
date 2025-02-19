import React, { useState, useEffect, useContext } from "react";
import { Container, Box, Button, Grid, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { StudyContext } from "../_utils/contexts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import '../App.css'
import * as tc from "../_controllers/trialController"
import { loadStimuli_inLang } from "../_utils/content-loader";

const styles = {
    button: { marginTop: 20, marginBottom: 20 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '5%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Trial = ({ chartType, meta, navigate, nextUrl }) => {

    // let expLang = meta.expLang
    const { expLang } = useContext(StudyContext)

    const labels = meta.expText.trial

    const [progress, setProgress] = useState(0) // TODO: when saving progress: add +1

    const [stimuli, setStimuli] = useState(null)
    // --------------------------------
    const [cannotNext, setCannotNext] = React.useState(true);
    const [chartIsVisible, setChartIsVisible] = React.useState(false);
    const [cannotShowChart, setCannotShowChart] = React.useState(false)
    const [timeoutID, setTimeoutID] = React.useState(null)

    // --------------------------------
    const [visibilityAnsField, setVisibilityAnserwField] = React.useState("hidden") // possible values: hidden or visible
    const [ansValue, setAnsValue] = useState()

    // --------------------------------

    useEffect(() => { tc.addEmptyPlaceholder("#chartDiv"); }, []);

    useEffect(() => { setStimuli(loadStimuli_inLang(expLang, chartType)) }, [chartType, expLang])

    // useEffect(() => {
    //     if (chartIsVisible === true) {
    //         const timeoutT = setTimeout(() => {
    //             console.log("resetting timeout")
    //             tc.addEmptyPlaceholder("#chartDiv");
    //             setChartIsVisible(false)
    //         }, 5000) // TODO: update the time 
    //         setTimeoutID(timeoutT)
    //         return () => clearTimeout(timeoutT);
    //     }}, [chartIsVisible])

    useEffect(() => { return () => clearTimeout(timeoutID) }, [timeoutID])

    return (
        stimuli === null ? <></> :
            <Container maxWidth='md'>
                <Grid container justify="center" align="center">
                    <Grid item xs={12} marginTop={2}>
                        <Typography fontSize={20} fontWeight='bold'>
                            {stimuli[progress][expLang].q}
                        </Typography>
                        <Typography fontSize={16} marginTop={2}>
                            {stimuli[progress][expLang].note}
                        </Typography>
                        <Button sx={{ display: '' }} style={styles.button} variant="outlined"
                            onClick={(e, divId, stimulusData, svaf, scsc, sciv, p, am, expL, chrtT, stoID) => tc.onClickShowChart(
                                "chartDiv",
                                stimuli[progress],
                                setVisibilityAnserwField,
                                setCannotShowChart,
                                setChartIsVisible, progress, labels.alertMessage,
                                expLang, chartType,
                                setTimeoutID)}
                            disabled={cannotShowChart} > {labels.showChartButton}</Button>
                    </Grid>

                    {chartIsVisible ? <img src={expLang + "/" + chartType + "/" + stimuli[progress].imgSrc} alt={chartType} id="chartvg"
                        style={{ width: "100%" }}
                    /> :
                        <img src={expLang + "/" + chartType + "/empty-placeholder.png"} alt={"empty"} style={{ width: '100%' }}></img>
                    }

                    {/* answer section below */}
                    <Grid item xs={12} marginTop={2}>
                        {visibilityAnsField === "visible" ?
                            <>
                                <AnswerSection
                                    chartType={chartType}
                                    answerType={stimuli[progress].ansType}
                                    labels={labels}
                                    cannotNext={cannotNext}
                                    setCannotNext={setCannotNext}
                                    setCannotShowChart={setCannotShowChart}
                                    setVisibilityAnserwField={setVisibilityAnserwField}
                                    stimulusData={stimuli[progress]}
                                    expLang={meta.expLang}
                                    setAnsValue={setAnsValue}
                                />
                                <Grid>

                                    <Button id="trial-next-button" variant="contained" color="secondary"
                                        disableRipple disableFocusRipple style={styles.button}
                                        disabled={cannotNext}

                                        onClick={(e, p, setP, chartSvgId, scsc, svaf,
                                            scn, answer, ct, stim, nav, nU,
                                            toid, stoid, sciv) => tc.onClickNext(
                                                e, progress, setProgress, "#chartSvg",
                                                setCannotShowChart, setVisibilityAnserwField,
                                                setCannotNext,
                                                ansValue,
                                                chartType,
                                                stimuli, navigate, nextUrl,
                                                timeoutID, setTimeoutID, setChartIsVisible
                                            )}
                                    > {labels.nextButton} </Button>
                                </Grid>
                            </> : <></>
                        }
                    </Grid>
                    <HelpIcon meta={meta} chartType={chartType} />
                </Grid>

            </Container >
    )
}

const AnswerSection = (props) => {
    const [optionValue, setOptionValue] = useState('')
    const labels = props.labels
    const ansElements = props.stimulusData[props.expLang]

    switch (props.answerType) {
        case "input":
            return (
                <>
                    <Box sx={{ minwidth: 120, display: 'inline-flex', alignItems: 'center' }}>
                        {/* <Grid item xs={12} marginTop={2}> */}
                        <TextField id="standard-basic" placeholder={labels.ansTextfieldLabel} variant="standard"
                            type={props.chartType === "bar" ? "number" : "string"}
                            minwidth={5}
                            onChange={(e, scn, sav) => tc.onChangeAnsTextField(e, props.setCannotNext, props.setAnsValue)}
                            InputProps={{
                                inputProps: {
                                    style: { textAlign: 'center' }
                                }
                            }}
                        />
                        {/* </Grid>  */}
                    </Box>
                </>
            )
        case "select":
            let options = ansElements.ansOptions
            let values = ansElements.ansValues

            return (<>
                <Box sx={{ minWidth: 120, display: 'inline-flex', alignItems: 'center' }}>
                    <InputLabel>{ansElements.ansLabel} </InputLabel>
                    <FormControl variant="standard" style={{ minWidth: 110 }}>
                        <Select
                            placeholder="Select"
                            labelId="answer-select-label"
                            id="answer-select"
                            value={optionValue}
                            label="age"
                            onChange={(e, scn, sav) => { setOptionValue(e.target.value); tc.onChangeAnsSelect(e, props.setCannotNext, props.setAnsValue) }}
                        >
                            {options.map((option, index) => {
                                return (
                                    // <MenuItem key={option} value={option}>{option}</MenuItem>
                                    <MenuItem key={option} value={values[index]}>{option}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box >
            </>)
        default: return (<></>)
    }
}

const HelpIcon = ({ meta, chartType }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openHelpModal = () => { setIsModalOpen(true) }
    const closeHelpModal = () => { setIsModalOpen(false) }

    const labels = meta.expText.trial
    const handleOverlayClick = (e) => { // Function to handle clicks outside of modal content
        if (e.target.className === 'modal-overlay') {
            closeHelpModal();
        }
    }


    return (
        <>
            <div className="help-icon" >
                <FontAwesomeIcon icon={faInfoCircle} size="2x" onClick={openHelpModal} />
            </div>
            {/* <HelpModal open={isModalOpen} close={closeHelpModal} meta={meta} chartType={chartType} /> */}
            {
                isModalOpen ? <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <span>{labels.helpModalIntro}</span>
                        <br /> <br />
                        <img src={meta.expLang + "/" + chartType + "/intro-" + chartType + "-ex.png"} alt="Help modal" className="modal-content" />
                        <br />
                        <video controls autoplay loop className="modal-content">
                            <source src={meta.expLang + "/" + chartType + "/intro-" + chartType + "-task.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Button onClick={closeHelpModal} variant="contained">{labels.helpModalCloseButton}</Button>
                    </div>
                </div>
                    : <> </>

            }


        </>
    )
}

export default Trial;