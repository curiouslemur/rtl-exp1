import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

const styles = {
    root: { flexGrow: 1, margin: "2%", }, button: { marginTop: 10, marginBottom: 10 }, container: { display: 'flex', flexWrap: 'wrap', },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }
    , label: { margin: 0 }
}

export const ConsentEn = (props) => {
    const [intro_md, setIntro_md] = useState('');

    useEffect(() => {
        // fetch('rtl-exp1/en/consent.md')
        fetch(props.expTitle + "/" + props.expLang + "/consent.md")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((text) => setIntro_md(text))
            .catch((err) => console.error('Error fetching the Markdown file:', err));
    }, []);

    return (
        <Grid align='justify'>
            <div className="markdown-content">
                <ReactMarkdown children={intro_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
            </div>
            {/* <Typography paragraph style={styles}> Before starting the study, please read this page carefully.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>The goal of this research is </b> to understand how people read data visualization to form their most intuitive answer to a given question.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Procedure: </b> You will read about a fictitious context for which data was collected and visually presented.
                The study asks questions about what you see on the visualizations. You will have to <i>identify a scpecific element</i> or <i>count elements in the chart.</i>
                The charts will be visible only for a short time, so read it quickly, then type your answer in the provided area right below the chart. </Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>What you will get: </b> We hope that you will find the exercise enjoyable.
                Your participation will help us understand how people quickly read charts to form answer to questions.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Duration: </b> about 10 minutes.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Privacy: </b> Your participation is anonymous and your responses cannot be used to identify you.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Record keeping: </b> Records of your participation will be held confidential so far as permitted by law.
                However, the study investigators and, under certain circumstances, the Worcester Polytechnic Institute Institutional Review Board (WPI IRB) will be able to inspect and have access to this data.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Risks: </b> We do not expect there to be any risks beyond daily use of computer devices.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>Your participation in this research is voluntary.</b> We do not expect there to be any risks. Your refusal to participate will not result in any penalty to you or any loss of benefits to which you may otherwise be entitled.
                You may decide to stop participating at any time without penalty or loss of other benefits. </Typography>
            <Typography paragraph>For more information about your rights as a research participant, or any concerns related to this study, please contact Prof. Lane Harrison (ltharrison@wpi.edu)</Typography>
            <br />
            <Typography paragraph>By filling in the following form, and clicking 'NEXT', you agree to participate in the study.</Typography> */}
        </Grid>
    )
}


export const ConsentLabelsEn = {
    mobileWarning: "Please use a device or a computer with wider screen.",
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

    colorblindQ: "Do you have some form of color blindness? *", colorblindLabel: "",
    olorblindDefinition: "(What is Color blindness?)",
    colorblindLink: "https://en.wikipedia.org/wiki/Color_blindness",
    colorblindYes: "Yes", colorblindNo: "No", colorblindIdk: "I don't know",

    visFamiliarityQ: "How often do you use charts or data visualizations?",
    visFamiliarityLabel: "",
    sign: "Sign"
}

export default ConsentEn;