import React, { useEffect, useState, createContext } from "react";
import { Button, Grid } from "@mui/material"
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import * as ic from "../_controllers/introController"

const IntroContext = createContext()

export const Intro = ({ chartType, meta, navigate, nextUrl }) => {
    const [introB_md, setintroB_md] = useState('');
    const [introC_md, setintroC_md] = useState('');

    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCannotStart(false)
        }, 3000) // TODO: make this like 30s instead 

        // chartType === "bar" ?
        // fetch(meta.expLang + "/intro-bar.md")
        fetch(meta.expLang + "/intro-" + chartType + ".md")
            .then((response) => response.text()).then((text) => { setintroB_md(text) }).catch((err) => console.error(err)) //:
        // fetch(meta.expLang + "/intro-radial.md")
        //     .then((response) => response.text()).then((text) => { setintroC_md(text) }).catch((err) => console.error(err))

        return () => clearTimeout(timeout);
    });

    const labels = meta.expText.intro
    return (
        <IntroContext.Provider value={{ labels, setCannotStart }}>
            <Grid container justifyContent="center">
                <Grid item xl={6} xs={10}>
                    <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />

                    {chartType === "bar" ?
                        <div className="markdown-content">
                            <ReactMarkdown children={introB_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
                        </div> :
                        <div className="markdown-content">
                            <ReactMarkdown children={introC_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
                        </div>}

                    <Button variant='contained' style={{ marginTop: '4ch', marginBottom: '4ch' }}
                        disabled={cannotStart}
                        onClick={(nav, nu) => {
                            ic.onClickStart(navigate, nextUrl)
                        }}> {labels.start} </Button>
                </Grid>
            </Grid>

        </IntroContext.Provider>
    )
}

export default Intro;