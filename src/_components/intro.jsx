import React, { useEffect, useState, createContext } from "react";
import { Button, Grid } from "@mui/material"
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import * as ic from "../_controllers/introController"

const IntroContext = createContext()

export const Intro = (props) => {
    const [intro_md, setIntro_md] = useState('');

    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCannotStart(false)
        }, 3000) // TODO: make this like 30s instead 

        fetch(props.expLang + "/intro-bar.md")
            .then((response) => response.text()).then((text) => { console.log(text); setIntro_md(text) }).catch((err) => console.error(err));

        return () => clearTimeout(timeout);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <IntroContext.Provider value={{ labels, setCannotStart }}>
            <Grid container justifyContent="center">
                <Grid item xl={6} xs={10}>
                    <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />

                    <div className="markdown-content">
                        <ReactMarkdown children={intro_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
                    </div>

                    {/* <props.expPages.Intro keywordColor="#ea3433" expLang={props.expLang} /> <br /> */}

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