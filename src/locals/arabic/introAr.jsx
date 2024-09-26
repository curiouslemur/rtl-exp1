import React from "react";
import { Box, Grid, ListItem, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const IntroAr = (props) => {
    const il = IntroLabelsAr
    return (
        <>
            <Grid container align='justify'>
                <Typography>
                    {il.intro}
                    {/* Note: radial chart? */}
                    {/* <br /> */}
                    {/* Add screenshot of the barcharts */}
                    <br />
                    {/* Each barchart is a visualization of the data for the following fictitious scenario: */}
                    <br />
                </Typography>
            </Grid >
        </>
    )
}

export const IntroLabelsAr = {
    start: "ابدأ"
}
export default IntroAr;