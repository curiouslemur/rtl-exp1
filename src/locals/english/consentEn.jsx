import React from "react";
import { Grid } from "@mui/material";

export const ConsentEn = (props) => {
    return (
        <Grid align='justify'> </Grid>
    )
}


export const ConsentLabelsEn = {
    mobileWarning: "Please set your browser to full screen, or use a device or a computer with a wider display.",
    consentTitle: "Welcome",

    countryResQ: "From which country are you taking this survey? *",
    countryResLabel: "Country of residence",
    countryResLenQ: "How many years have you lived there? *",
    countryResLenLabel: "",
    countryResLongestQ: "In which country have you lived the longest? *",
    countryResLongestLabel: "Longest country of residence",

    langNativeQ: "What is your native language? *",
    langNativeLabel: "Mother tongue",
    langOtherQ: "What other languages do you know fluently?",
    langOtherLabel: "List all that apply",

    ageQ: "How old are you? *", ageLabel: "Age",
    genderQ: "What is your gender? *", genderLabel: "Gender",

    professionQ: "What is your profession? *", professionLabel: "Profession",

    visFamiliarityQ: "How often do you use charts or data visualizations?",
    visFamiliarityLabel: "",
    sign: "Sign"
}

export default ConsentEn;