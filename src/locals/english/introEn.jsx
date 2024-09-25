import React from "react";
import { Box, Button, Grid, ListItem, Paper, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { InboxIcon, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


export const IntroEn = (props) => {
    const il = IntroLabelsEn
    const [openBarchartDetails, setOpenBarchartDetails] = React.useState(true);
    const [openTaskDetails, setOpenTaskDetails] = React.useState(false);

    const handleMouseEnterBar = () => { // setOpenBarchartDetails(true) 
    };
    const handleClickBar = () => { setOpenBarchartDetails(!openBarchartDetails); }

    const handleMouseEnterTask = () => { //setOpenTaskDetails(true) 
    }
    const handleClickTask = () => { setOpenTaskDetails(!openTaskDetails); }

    return (
        <>

            <Grid container align='justify'>
                <Typography>
                    {il.intro}
                    {/* Note: radial chart? */}
                    {/* Add screenshot of the barcharts */}
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
                    {/* <Typography variant="body1" style={{ padding: '1%' }}> */}
                    {/* <b>{il.scenarioTitle}</b></Typography> */}
                    <Typography variant="body1" style={{ padding: '1.5%', marginTop: 10 }} >
                        You are part of a research team at your local Art Museum, tasked with analyzing visitor patterns.
                        {/* The museum wants to understand how daily attendance varies and use this information to plan future exhibitions and staff scheduling.  */}
                        In the following pages, you will be presented with a series of bar charts <span> <img src="figures/intro-bar.svg" alt="" style={{ height: 20 }} /> </span> that show the number of daily visitors over several days. <br />
                        Your task is to interpret the charts and answer questions to help understand the museum’s daily attendance.

                        <br />
                    </Typography>
                </Box>
                <img src="figures/bar-example-english.svg" alt="" width={'600px'} />

                {/* <Box
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
                    <Paper elevation={0} /> <Paper /> <Paper elevation={3} />
                </Box> */}

                {/* <Box sx={{
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
                            each day is represented by a bar in the barchart.
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
                </Box> */}

                <List
                    sx={{ minWidth: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton sx={{
                        backgroundColor: '#9c27b022', paddingBottom: '5px',
                        '&:hover': { backgroundColor: '#80818312' }
                    }}
                        onClick={handleClickBar}
                        onMouseEnter={handleMouseEnterBar}>
                        <ListItemText> <b>About the barcharts</b></ListItemText>
                        {openBarchartDetails ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openBarchartDetails} timeout="auto" unmountOnExit>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px' }}>
                                each day is represented by one bar in the barchart.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                                the height of a bar represents the number of cars observed during that day (the actual value is sometimes shown above the bar). A general rule of thumb is that the taller the bar, the more cars there are in that day.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>
                                the days are ordered from first to last day of the study.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '15px' }}>    Dark-colored bars indicate <b>holidays</b>
                            </ListItem>
                        </List>
                        <img src="figures/bar-1-u.svg" alt=""></img>
                    </Collapse>
                </List >

                <List
                    sx={{ minWidth: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >

                    <ListItemButton sx={{
                        backgroundColor: '#9c27b022', paddingBottom: '5px',
                        '&:hover': { backgroundColor: '#80818312' }
                    }}
                        onClick={handleClickTask}
                        onMouseEnter={handleMouseEnterTask}>
                        <ListItemText> <b>Your task</b></ListItemText>
                        {openTaskDetails ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openTaskDetails} timeout="auto" unmountOnExit>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
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
                        </List>
                        <img src="figures/bar-1-u.svg" alt=""></img>
                    </Collapse>
                </List >

                <Typography>
                    <br /> You can accessthis instruction page at anytime by clicking on the help icon <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" />
                </Typography>
            </Grid >
        </>
    )
}

export const IntroLabelsEn = {
    introTitle: "Instructions",
    intro: "In this part of the study, consider the following scenario.",
    start: "Start",
    scenarioTitle: "The scenario:",

}
export default IntroEn;