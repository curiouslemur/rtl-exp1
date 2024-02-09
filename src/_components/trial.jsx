import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Modal, Slider, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import '../App.css'
import * as tc from "../_controllers/trialController"
import { sliderTheme } from "../stimuli/slider";

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '5%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Trial = (props) => {
    const labels = props.expPages.TrialLabels
    const [progressBlock, setProgressBlock] = useState(0)
    const [progressColor, setProgressColor] = useState(0)

    const [colorCodeList, setColorCodeList] = useState(props.colorCodes) // list of color codes
    // console.log("showing index: ", progressColor)
    const [showComponent, setShowComponent] = useState(false);

    const [sliderValue, setSliderValue] = useState(50)
    const [cannotNext, setCannotNext] = useState(true)
    const [canPressEnter, setCanPressEnter] = useState(false)

    const [helpIsOpen, setHelpIsOpen] = useState(false)

    const conceptList = props.conceptList
    const nBlock = conceptList.length

    // console.log(progressColor, colorCodeList)

    const marks = [
        { value: -0, label: labels.markLeast, },
        { value: 50, },
        { value: 100, label: labels.markMost, },
    ];

    const onChangeSlider = (e) => {
        setCannotNext(false)
        setSliderValue(e.target.value)
        setCanPressEnter(true)
    }

    const closeHelpModal = () => {
        setHelpIsOpen(false)
    }

    useEffect(() => {
        document.body.classList.add('trial-body');
        const timeoutId = setTimeout(() => {
            setShowComponent(true);
        }, 250)
        return () => clearTimeout(timeoutId);
    }, [showComponent]);

    return (
        <ThemeProvider theme={sliderTheme}>

            <Grid container style={styles.container} justifyContent="center"
            // spacing={5}
            >

                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={0}>
                    <Typography>{labels.block} {progressBlock + 1} / {nBlock}</Typography>
                </Grid>

                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    <Typography style={{ fontSize: '1.25rem' }}><b>{conceptList[progressBlock].toUpperCase()}</b></Typography>
                </Grid>

                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    {!showComponent ?
                        <img style={{ marginTop: 15, marginBottom: 25 }} src={"./png/background.png"} alt={""} width="100px" />
                        : <img style={{ marginTop: 15, marginBottom: 25 }} src={"./png/" + colorCodeList[progressColor] + ".png"} alt={"color-patch-" + colorCodeList[progressColor]} width="100px" />}
                </Grid>

                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    <div style={{ marginTop: 20 }}>
                        <Slider
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    if (canPressEnter) {
                                        tc.onClickNext(
                                            setColorCodeList, colorCodeList, conceptList,
                                            setProgressColor, progressColor,
                                            setSliderValue, sliderValue,
                                            setShowComponent,
                                            setCannotNext, setCanPressEnter,
                                            setProgressBlock, progressBlock,
                                            labels.nextBlockAlertMessage,
                                            props.navigate, props.nextUrl)
                                    }
                                }
                            }}
                            track={false}
                            marks={marks}
                            sx={{ width: 400, boxShadow: 0, }}
                            value={sliderValue}
                            onChange={onChangeSlider}
                        />
                    </div>
                </Grid>

                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={3}>
                    <Button variant="contained"
                        disabled={cannotNext}
                        onClick={(sccL, ccL, cL,
                            spC, pC,
                            ssV, sV,
                            sshowC,
                            scN, scpE,
                            spB, pB,
                            nbaM,
                            nav, nu) => tc.onClickNext(
                                setColorCodeList, colorCodeList, conceptList,
                                setProgressColor, progressColor,
                                setSliderValue, sliderValue,
                                setShowComponent,
                                setCannotNext, setCanPressEnter,
                                setProgressBlock, progressBlock,
                                labels.nextBlockAlertMessage,
                                props.navigate, props.nextUrl)}
                    >{labels.nextButton}</Button>
                </Grid>
                <div style={{ position: 'absolute', top: 10, left: 10, padding: '10px' }}>
                    <HelpOutlineIcon
                        onClick={() => setHelpIsOpen(true)} />
                </div>
                <HelpModal
                    open={helpIsOpen}
                    close={closeHelpModal}
                    helpModalLabels={labels.helpModalLabels} />
            </Grid>
        </ThemeProvider>
    )
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

    const labels = props.helpModalLabels

    return (
        <Modal
            open={props.open}
            onClose={props.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {labels.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {labels.instruction1}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} marginBottom={2}>
                    {labels.instruction2}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} marginTop={1} marginBottom={2}>
                    {labels.break2}
                </Typography>
                <Button onClick={props.close}>{labels.close}</Button>
            </Box>
        </Modal>
    )
}

export default Trial;