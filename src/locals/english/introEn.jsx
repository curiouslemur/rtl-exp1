import React from "react";
import { Grid, Typography } from "@mui/material";
import sliderEn from '../../_utils/slider-en.gif'

export const IntroEn = (props) => {
    return (
        <Grid>
            <Typography > You will be asked to rate <b>how much you associate each color with each of the following concepts</b>:</Typography>
            <Grid container justifyContent="" marginTop={2}>
                <i style={{ marginTop: 0 }}>
                    {IntroLabelsEn.cptFood},
                    {IntroLabelsEn.cptAbstract},
                    {IntroLabelsEn.cptEmotion},
                    {IntroLabelsEn.cptWeather}<br />
                </i>
            </Grid>
            <br />

            <Typography paragraph>You will enter your rating by sliding a cursor along a continuous scale ranging from <i>"Not at all"</i> to <i>"Very much"</i>, as shown below</Typography>
            <div style={{ marginTop: 5 }}>
                <img src={sliderEn} alt={IntroLabelsEn.sliderAltText} width="55%" />
            </div>

            <Typography paragraph style={{ marginTop: '3ch' }}>There will be <b>16 blocks</b> of trials, one for each concept. You will be asked to rate all of the colors for each concept before going on to the next block.</Typography>
            <Typography paragraph> <b>Let's try it!</b> Click on one of the concepts below</Typography>
        </Grid >
    )
}

export const IntroLabelsEn = {
    introTitle: "Instructions",
    introOpening: "During this experiment you’ll be presented with each of the colored squares from the set below, one at a time.",
    sliderAltText: "Example slider for enter assocaition rating",
    cptFood: " mango, peach, banana, carrot ", // cpt is short for concept. !! KEEP the space at the beginning of the list
    cptAbstract: " safety, justice, peace, comfort",
    cptEmotion: " sad, love, happy, angry",
    cptWeather: " drought, lightning, sandstorm, hurricane",
    start: "Start",
    tutoQMost: "Which color do you associate MOST with ",
    tutoQLeast: "Which color do you associate LEAST with ",

    modalWhen: "When you see that color with the concept of ",
    modalMove: "you would move the slider ⚫️ near ",
    modalMarkerMost: "Very much",
    modalMarkerLeast: "Not at all",
    modalNext: "Next",

    markMost: "Very much",
    markLeast: "Not at All",

    alertAgain: "Select another concept from the list.",
    alertStart: "You can try another color or concept or start the experiment.",

    noteHelp: "Note that you can review these instructions by clicking on the help icon at the top left of the page."
}
export default IntroEn;