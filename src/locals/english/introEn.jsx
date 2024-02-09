import React from "react";
import { Box, Grid, ListItem, Typography } from "@mui/material";

export const IntroEn = (props) => {
    const il = IntroLabelsEn
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
            <Grid>
                <Box sx={{
                    width: '100%', backgroundColor: '#9c27b022',
                    '&:hover': {
                        backgroundColor: '#80818312', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography variant="body1" style={{ padding: '1%' }}>
                        <b>{il.scenarioTitle}</b> Following a request from the city of Worcesterland, officials recorded the daily number of cars passing in front of the city hall.
                        {/* the number of cars passing in front of the main theater building was recorded daily.  */}
                        The recorded counts per day are visualized using barcharts.
                        The data collected during the study are presented visually using the barchart.
                        <br />
                    </Typography>
                </Box>
                <img src="figures/bar-example-english.svg" alt="" width={'600px'} />
                <Box sx={{
                    width: '100%', backgroundColor: '#9c27b022', paddingBottom: '10px',
                    '&:hover': {
                        backgroundColor: '#80818312', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography variant="body1" style={{ padding: '1%' }}>
                        <b> About the barcharts: </b>
                    </Typography>
                    <Typography>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            each day is represented by a bar in the barchart
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            the height of a bar represents the number of cars observed during that day (the actual value is shown above each bar)
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            the days are ordered from first to last day of the study. Dark-colored bars indicate <b>holidays</b>
                        </ListItem>
                    </Typography>
                </Box>
            </Grid >
        </>
    )
}

export const IntroLabelsEn = {
    introTitle: "Instructions",
    intro: "In the following pages you will see a series of barcharts representing the data from the fictitious scenario highlighted below.",
    start: "Start",
    scenarioTitle: "The scenario:",

}
export default IntroEn;