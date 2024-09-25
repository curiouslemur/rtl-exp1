import React, { useEffect, useState, createContext } from "react";
import { Button, Grid } from "@mui/material"
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"

const IntroContext = createContext()

export const Intro = (props) => {
    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCannotStart(false)
        }, 3000) // TODO: make this like 30s instead 
        return () => clearTimeout(timeout);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <IntroContext.Provider value={{ labels, setCannotStart }}>
            <Grid container justifyContent="center">
                <Grid item xl={6} xs={10}>
                    <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />

                    <props.expPages.Intro keywordColor="#ea3433" expLang={props.expLang} /> <br />

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

export default Intro;