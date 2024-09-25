import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw';

export const IntroEn = (props) => {
    // const [intro_md, setIntro_md] = useState('');

    useEffect(() => {
        // fetch(props.expLang + "/intro-bar.md")
        //     .then((response) => response.text()).then((text) => { console.log(text); setIntro_md(text) }).catch((err) => console.error(err));
    },);

    return (
        <>
            <Grid container align='justify'> </Grid >
            <Grid>
                {/* <div className="markdown-content">
                    <ReactMarkdown children={intro_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
                </div> */}

                {/* <Typography>
                    <br /> You can access this instruction page at anytime by clicking on the help icon <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" />
                </Typography> */}
            </Grid >
        </>
    )
}

export const IntroLabelsEn = { start: "Start" }
export default IntroEn;