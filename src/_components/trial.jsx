import React, { useState, useEffect } from "react";
import { Container, Box, Button, Grid, Modal, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
// import * as d3 from 'd3'
// import { ThemeProvider } from "@mui/material/styles";
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
    const labels = props.expPages.TrialLabels

    const [progress, setProgress] = useState(0) // TODO: when saving progress: add +1
    // --------------------------------
    const [cannotNext, setCannotNext] = React.useState(true);
    const [chartIsVisible, setChartIsVisible] = React.useState(false);
    const [cannotShowChart, setCannotShowChart] = React.useState(false)

    const [visibilityAnsField, setVisibilityAnserwField] = React.useState("hidden") // possible values: hidden or visible
    const [ansValue, setAnsValue] = useState()

    const onClickShowChart = (e, setCannotShowChart) => {
        e.preventDefault()
        setCannotShowChart(true)
        setChartIsVisible(true)
        setVisibilityAnserwField(1)
    }
    const stimuli = props.stimuli
    // --------------------------------
    const [progressBlock, setProgressBlock] = useState(0)
    const [helpIsOpen, setHelpIsOpen] = useState(false)

    const closeHelpModal = () => { setHelpIsOpen(false) }

    useEffect(() => {
        tc.addEmptyPlaceholder("#chartDiv");
    }, []

    );

    useEffect(() => {
        if (chartIsVisible === true) {
            setTimeout(() => {
                tc.addEmptyPlaceholder("#chartDiv");
                setChartIsVisible(false)
            }, 3000)
        }
    }, [chartIsVisible])

    return (
        // <ThemeProvider>
        // </ThemeProvider>
        <Container maxWidth='md'>
            <Grid container justify="center" align="center">
                <Grid item xs={12} marginTop={2}>
                    <Typography fontSize={20} fontWeight='bold'>
                        {stimuli[progress][expLang].q}
                    </Typography>
                    <Button sx={{ display: '' }} style={styles.button} variant="outlined"
                        onClick={(e, divId, stimulusData, svaf, scsc, sciv) => tc.onClickShowChart(
                            "chartDiv",
                            stimuli[progress],
                            setVisibilityAnserwField,
                            setCannotShowChart,
                            setChartIsVisible)}
                        disabled={cannotShowChart} > {labels.showChartButton}</Button>
                </Grid>

                <Grid id="chartDiv" item xs={12} marginTop={2}></Grid>

                <Grid item xs={12} marginTop={2}>
                    {visibilityAnsField === "visible" ?
                        <>
                            <AnswerSection
                                answerType={stimuli[progress].ansType}
                                labels={labels}
                                cannotNext={cannotNext}
                                setCannotNext={setCannotNext}
                                // progress={progress}
                                // setProgress={setProgress}
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
                                        tq, stimData, nav, nU) => tc.onClickNext(
                                            e, progress, setProgress, "#chartSvg",
                                            setCannotShowChart, setVisibilityAnserwField,
                                            setCannotNext,
                                            stimuli.length, stimuli[progress],
                                            props.navigate, props.nextUrl)}
                                > {labels.nextButton} </Button>
                            </Grid>
                        </> : <></>
                    }
                </Grid>
            </Grid>

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
                    {/* <span style={{ marginTop: 10000 }}>{ansElements.ansLabel}</span> */}
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
                            {/* <MenuItem value={10}>{ansElements.ansOptions[1]}</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                </Box >
            </>)
        default: return (<></>)
    }
}

const HelpModal = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const modalLabels = props.modalLabels
    return (
        <Modal
            open={props.open}
            onClose={props.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalLabels.title}
                </Typography>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {modalLabels.instruction1}
                </Typography> */}
                <Button onClick={props.close}>{modalLabels.close}</Button>
            </Box>
        </Modal>
    )
}


export default Trial;