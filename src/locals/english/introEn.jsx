import React from "react";
import { Box, Grid, ListItem, Paper, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
                    width: '100%', backgroundColor: '#80818312',
                    '&:hover': {
                        backgroundColor: '#9c27b022', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography variant="body1" style={{ padding: '1%' }}>
                        <b>{il.scenarioTitle}</b></Typography>
                    <Typography variant="body1" style={{ padding: '1%', paddingTop: 0 }} >
                        Following a request from the city council, the number of daily visitors of the art museum is recorded over several days.
                        The data collected are presented visually using a barchart, a linechart, or a radial chart.
                        <br />
                    </Typography>
                </Box>
                <img src="figures/bar-example-english.svg" alt="" width={'600px'} />

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: '31%',
                            height: 128,
                        },
                    }}
                >
                    <Paper elevation={0} />
                    <Paper />
                    <Paper elevation={3} />
                </Box>

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

                <br />
                <Box sx={{
                    width: '100%', backgroundColor: '#9c27b022', paddingBottom: '10px',
                    '&:hover': {
                        backgroundColor: '#80818312', //opacity: [0.9, 0.8, 0.7]
                    }
                }}>
                    <Typography variant="body1" style={{ padding: '1%' }}>
                        <b> About the trials: </b>
                    </Typography>
                    <Typography>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            Each trial consists of a question and an interactive chart. There are no trick questions.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            When ready, click the button to show the chart.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                            The chart is only visible for a few seconds so read it as quickly as possible. You will see different barchart configurations, however, the instruction remains the same.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}> Depending on the question, you will answer by selecting from a dropdown list, or write in a text area.
                        </ListItem>
                    </Typography>
                </Box>

                <Typography>
                    <br /> You can accessthis instruction page at anytime by clicking on the help icon <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" />
                </Typography>
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