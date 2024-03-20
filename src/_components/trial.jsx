import React, { useState, useEffect } from "react";
import { Container, Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import * as d3 from 'd3'
// import { ThemeProvider } from "@mui/material/styles";
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import '../App.css'
import * as tc from "../_controllers/trialController"
import { stimuli } from "../stimuli/stimuli";
import { Visibility } from "@mui/icons-material";

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '5%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Trial = (props) => {
    let imagePath = "figures/"
    let expLang = props.config.expLang
    const labels = props.expPages.TrialLabels

    const [progress, setProgress] = useState(0) // TODO: when saving progress: add +1
    // --------------------------------
    const [cannotNext, setCannotNext] = React.useState(true);
    const [chartIsVisible, setChartIsVisible] = React.useState(false);
    const [cannotShowChart, setCannotShowChart] = React.useState(false)

    const [visibilityAnsField, setVisibilityAnserwField] = React.useState("hidden") // possible values: hidden or visible

    const onClickShowChart = (e, setCannotShowChart) => {
        e.preventDefault()
        setCannotShowChart(true)
        setChartIsVisible(true)
        setVisibilityAnserwField(1)
    }

    // --------------------------------
    const [progressBlock, setProgressBlock] = useState(0)
    const [helpIsOpen, setHelpIsOpen] = useState(false)

    const closeHelpModal = () => { setHelpIsOpen(false) }

    useEffect(() => {
        tc.addEmptyPlaceholder("#chartDiv")
    }, []);

    useEffect(() => {
        if (chartIsVisible === true) {
            setTimeout(() => {
                tc.addEmptyPlaceholder("#chartDiv");
                setChartIsVisible(false)
            }, 4000)
        }
    }, [chartIsVisible])

    return (
        // <ThemeProvider>
        // <Grid container style={styles.container} justifyContent="center" >
        //     <Button sx={{ display: '' }} style={styles.button} variant="outlined"
        //         onClick={(e, c) => onClickShowChart(e, setCannotShowChart)}
        //         disabled={cannotShowChart} > {labels.showChartButton}</Button>
        //     <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}> </Grid>

        //     <Grid>
        //         <div style={{ position: 'absolute', top: 10, left: 10, padding: '10px' }}>
        //             <HelpOutlineIcon
        //                 onClick={() => setHelpIsOpen(true)} />
        //         </div>
        //         <HelpModal
        //             open={helpIsOpen}
        //             close={closeHelpModal}
        //             modalLabels={labels.modalLabels} />
        //     </Grid>
        // </Grid>
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
                        <AnswerSection
                            answerType={stimuli[progress].ansType}
                            labels={labels}
                            cannotNext={cannotNext}
                            setCannotNext={setCannotNext}
                            progress={progress}
                            setProgress={setProgress}
                            setCannotShowChart={setCannotShowChart}
                            setVisibilityAnserwField={setVisibilityAnserwField}
                            totalQ={stimuli.length}
                            stimulusData={stimuli[progress]}
                            navigate={props.navigate} nextUrl={props.nextUrl}
                        /> : <></>
                    }

                </Grid>
            </Grid>

        </Container >
    )
}

const AnswerSection = (props) => {
    // console.log(props.answerType)
    const labels = props.labels
    switch (props.answerType) {
        case "input":
            return (
                <>
                    <Grid item xs={12} marginTop={2}>
                        <TextField id="standard-basic" placeholder={labels.ansTextfieldLabel} variant="standard"
                            type="number"
                            // helperText={labels.ansTextfieldHelper}
                            onChange={(e, scn) => tc.onChangeAnsField(e, props.setCannotNext)}
                        />
                        <Grid item xs={12}>

                            <Button id="consent-next-button" variant="contained" color="secondary"
                                disableRipple disableFocusRipple style={styles.button}
                                // onClick={(e, p, n) => { tc.onClickNext(e, props.config, props.stimuli[qIndex[0] - 1], setProgress, progress, setCannotShowChart, setDisplayAnserwField, setCannotNext, navigate) }}
                                disabled={props.cannotNext}
                                onClick={(e, p, setP, chartSvgId, scsc, svaf,
                                    scn,
                                    tq, sd, nav, nU) => tc.onClickNext(
                                        e, props.progress, props.setProgress, "#chartSvg",
                                        props.setCannotShowChart, props.setVisibilityAnserwField,
                                        props.setCannotNext,
                                        props.totalQ, props.stimulusData,
                                        props.navigate, props.nextUrl)}
                            > {labels.nextButton} </Button>
                        </Grid>
                    </Grid>
                </>

            )
        case "buttons":
            return (
                <>
                    <Button>Button1</Button>
                    <Button>Button2</Button>
                </>
            )
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