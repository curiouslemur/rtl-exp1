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
            <Grid>
                <Box sx={{
                    width: '100%', backgroundColor: '#9c27b022',
                    '&:hover': {
                        backgroundColor: '#80818312', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography variant="body1" style={{ padding: '1%' }}>
                        <b>{il.scenarioTitle}</b> Following a request from the city council, the number of daily visitors of the art museum is recorded over several days.
                        {/* The recorded number of visitors per day is visualized using barcharts. */}
                        The data collected are presented visually using a barchart, a linechart, or a radial chart.
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
                            each day is represented by one chart attribute: a bar in a barchart, a connected dot in a linechart, and a wedge in the radial chart.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            the height of a bar represents the number of cars observed during that day (the actual value is sometimes shown above the bar). A general rule of thumb is that the taller the bar, the more cars there are in that day.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            the days are ordered from first to last day of the study.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}> Dark-colored bars indicate <b>holidays</b>
                        </ListItem>
                    </Typography>
                </Box>
                <Typography>
                    <br /> Each chart comes with a question about the data. You will be given a few seconds to read each question carefully.
                    <br /> When ready, click the button to show the chart.
                    <br /> Use your intuition to answer as fast as you can.
                    <br /> Click on the chart answer and move on to the next question.
                </Typography>
                <br />
                <Box sx={{
                    width: '100%', height: '30px', backgroundColor: '#9c27b022', padding: '10px',
                    '&:hover': {
                        backgroundColor: '#80818312', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography fontWeight={'bold'}>The charts will be visible only during a few seconds, so answer quickly.</Typography>
                </Box>
                <Typography >
                    <br /> There are no trick questions. Feel free to follow your intuition when answering the question.
                </Typography>

                <Typography>
                    <br /> Type your answer in the space provided. Unless otherwise indicated, we expect your answer to be numerical only.
                    {/* <br /> <b> a GIF that showing typing 1, or 3 or </b> */}
                </Typography>

                <Typography>
                    <br /> When you are happy with your answer, click next to proceed to the next question
                    <br /> You can access the scenario and this instruction page at anytime by clicking on the help icon <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" />
                </Typography>
            </Grid >

        </>
    )
}

export const IntroLabelsAr = {
    introTitle: "Instructions",
    intro: "In the following pages you will see a series of barcharts representing the data from the fictitious scenario highlighted below.",
    start: "Start",
    scenarioTitle: "The scenario:",

}
export default IntroAr;