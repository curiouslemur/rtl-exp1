import React, { useState, useEffect } from "react";
import { Container, Box, Button, Grid, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import '../App.css'
import * as tc from "../_controllers/trialController"
// import { stimuli } from "../stimuli/stimuli";

const styles = {
    button: { marginTop: 20, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '5%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Trial = (props) => {
    let expLang = props.config.expLang
    // const labels = props.expPages.TrialLabels
    const labels = trialLabels[expLang]

    const [progress, setProgress] = useState(0) // TODO: when saving progress: add +1
    // --------------------------------
    const [cannotNext, setCannotNext] = React.useState(true);
    const [chartIsVisible, setChartIsVisible] = React.useState(false);
    const [cannotShowChart, setCannotShowChart] = React.useState(false)
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => { setShowAlert(true); };
    const handleCloseAlert = () => { setShowAlert(false); };

    // --------------------------------

    const [visibilityAnsField, setVisibilityAnserwField] = React.useState("hidden") // possible values: hidden or visible
    const [ansValue, setAnsValue] = useState()

    const stimuli = props.stimuli
    // --------------------------------

    useEffect(() => { tc.addEmptyPlaceholder("#chartDiv"); }, []);

    useEffect(() => {
        if (chartIsVisible === true) {
            const timeoutT = setTimeout(() => {
                tc.addEmptyPlaceholder("#chartDiv");
                setChartIsVisible(false)
            }, 5000) // TODO: update the time 
            return () => clearTimeout(timeoutT);
        }

    }, [chartIsVisible])

    return (
        // <ThemeProvider> </ThemeProvider>
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
                        onClick={(e, divId, stimulusData, svaf, scsc, sciv, p, am) => tc.onClickShowChart(
                            "chartDiv",
                            stimuli[progress],
                            setVisibilityAnserwField,
                            setCannotShowChart,
                            setChartIsVisible, progress, labels.alertMessage)}
                        disabled={cannotShowChart} > {labels.showChartButton}</Button>
                </Grid>

                <Grid id="chartDiv" item xs={12} marginTop={2}></Grid>
                {/* answer section below */}
                <Grid item xs={12} marginTop={2}>
                    {visibilityAnsField === "visible" ?
                        <>
                            <AnswerSection
                                answerType={stimuli[progress].ansType}
                                labels={labels}
                                cannotNext={cannotNext}
                                setCannotNext={setCannotNext}
                                // progress={progress} setProgress={setProgress}
                                setCannotShowChart={setCannotShowChart}
                                setVisibilityAnserwField={setVisibilityAnserwField}
                                // totalQ={stimuli.length}
                                stimulusData={stimuli[progress]}
                                expLang={props.expLang}
                                setAnsValue={setAnsValue}
                            // navigate={props.navigate} nextUrl={props.nextUrl}
                            />
                            <Grid>

                                <Button id="trial-next-button" variant="contained" color="secondary"
                                    disableRipple disableFocusRipple style={styles.button}
                                    // onClick={(e, p, n) => { tc.onClickNext(e, props.config, props.stimuli[qIndex[0] - 1], setProgress, progress, setCannotShowChart, setDisplayAnserwField, setCannotNext, navigate) }}
                                    disabled={cannotNext}
                                    onClick={(e, p, setP, chartSvgId, scsc, svaf,
                                        scn,
                                        tq, stimData, answer, nav, nU) => tc.onClickNext(
                                            e, progress, setProgress, "#chartSvg",
                                            setCannotShowChart, setVisibilityAnserwField,
                                            setCannotNext,
                                            stimuli.length, stimuli[progress], ansValue,
                                            props.navigate, props.nextUrl)}
                                > {labels.nextButton} </Button>
                            </Grid>
                        </> : <></>
                    }
                </Grid>
            </Grid>

            {/* {showAlert && (
                <Alert message="This is a custom alerfdsfdsfsdfsdfs fdso loooongt!" onClose={handleCloseAlert} />
            )} */}
            <HelpIcon expLang={props.expLang} />
        </Container >
    )
}

const AnswerSection = (props) => {
    const [optionValue, setOptionValue] = useState('')
    // console.log(props.answerType)
    const labels = props.labels
    const ansElements = props.stimulusData[props.expLang]

    switch (props.answerType) {
        case "input":
            return (
                <>
                    <Box sx={{ minwidth: 120, display: 'inline-flex', alignItems: 'center' }}>
                        {/* <Grid item xs={12} marginTop={2}> */}
                        <TextField id="standard-basic" placeholder={labels.ansTextfieldLabel} variant="standard"
                            type="number"
                            minwidth={5}
                            // helperText={labels.ansTextfieldHelper}
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
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box >
            </>)
        default: return (<></>)
    }
}

const HelpIcon = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openHelpModal = () => { setIsModalOpen(true) }
    const closeHelpModal = () => { setIsModalOpen(false) }

    return (
        <>
            <div className="help-icon" >
                <FontAwesomeIcon icon={faInfoCircle} size="2x" onClick={openHelpModal} />
            </div>
            <HelpModal open={isModalOpen} close={closeHelpModal} modalLabels={props.modalLabels} expLang={props.expLang} />
        </>
    )
}

const HelpModal = ({ open, close, expLang }) => { // !!!!! Cooler way to pass props than 
    // const HelpModal = (props) => { if (!props.open) return null;
    if (!open) return null;

    const handleOverlayClick = (e) => { // Function to handle clicks outside of modal content
        if (e.target.className === 'modal-overlay') {
            close();
        }
    }
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">

                <span>{trialLabels[expLang].helpModalIntro}</span>
                <br /> <br />
                <img src={expLang + "/intro-bar-bar.png"} alt="Help modal" className="modal-image" />
                <br />
                <video width="100%" controls autoplay loop>
                    <source src="en/intro-bar-task.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Button onClick={close}>{trialLabels[expLang].helpModalCloseButton}</Button>
            </div>
        </div>
    )
}

const trialLabels = {
    "ar": {
        "showChartButton": "إظهار الرسم البياني",
        "alertMessage": "تذكر أن الرسم البياني سيكون مرئيًا لبضع ثوانٍ فقط.",
        "nextButton": "التالي",
        "helpModalIntro": "أنت جزء من فريق مكلف بتحليل أنماط الزوار في متحف محلي على مدار فترة زمنية. يتم تصور البيانات باستخدام مخطط شريطي. مهمتك هي الإجابة على الأسئلة بناءً على التصور.",
        "helpModalCloseButton": "إغلاق"
    },
    "en": {
        "showChartButton": "Show chart",
        "alertMessage": "Remember that the chart will only be visible for a few seconds.",
        "nextButton": "Next",
        "helpModalIntro": "You're part of a team tasked with analyzing visitor patterns at a local museum over a period of time. The data is visualized using a bar chart. Your task is to answer questions based on the visualization.",
        "helpModalCloseButton": "Close"
    },
}

export default Trial;