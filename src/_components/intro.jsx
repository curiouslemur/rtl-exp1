import React, { useEffect, useState, createContext, useContext } from "react";
import { Box, Chip, Button, Grid, Modal, Slider, Typography } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"

const IntroContext = createContext()

export const Intro = (props) => {
    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCannotStart(false)
        }, 1000) // TODO: make this like 30s instead 
        return () => clearTimeout(timeout);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <IntroContext.Provider value={{ labels, setCannotStart }}>
            <Grid container justifyContent="center">
                <Grid item xl={6} xs={10}>

                    <h2>{labels.introTitle}</h2>
                    <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />
                    <props.expPages.Intro keywordColor="#ea3433" /> <br />

                    <Button variant='contained' style={{ marginTop: '5ch' }}
                        disabled={cannotStart}
                        onClick={(nav, nu) => {
                            ic.onClickStart(props.navigate, props.nextUrl)
                        }}> {labels.start} </Button>

                </Grid>
            </Grid>
        </IntroContext.Provider>
    )
}

export const ConceptChip = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (<>
        <Chip
            disabled={disabled}
            label={props.label}
            style={{ marginTop: 10, marginRight: 10 }}
            onClick={(cl) => {
                setDisabled(true) // set the Chip as disabled
                props.handleChipClick(true);
            }} />
    </>)
}

// The tuto section of the intro page comprises the Question w/ qualifier, the color patches,
// clicking on one color patch opens the modal


export default Intro;