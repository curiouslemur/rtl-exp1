import React, { useEffect, useState, createContext } from "react";
import { Button, Grid } from "@mui/material"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import * as ic from "../_controllers/introController"
import { faW } from "@fortawesome/free-solid-svg-icons";

// const IntroContext = createContext()

export const Intro = ({ chartType, meta, navigate, nextUrl }) => {
    const [intro_md, setintro_md] = useState('');
    const [introC_md, setintroC_md] = useState('');

    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCannotStart(false)
        }, 3000) // TODO: make this like 30s instead 

        // fetch(meta.expLang + "/intro-bar.md")

        fetch(meta.expLang + "/" + chartType + "/intro-" + chartType + ".md")
            .then((response) => response.text()).then((text) => { setintro_md(text) }).catch((err) => console.error(err)) //:

        return () => clearTimeout(timeout);
    });

    const labels = meta.expText.intro
    return (
        // <IntroContext.Provider value={{ labels, setCannotStart }}>
        <Grid container justifyContent="center">
            <Grid item xl={6} xs={10}>
                <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />

                {chartType === "bar" ?
                    <div className="markdown-content">
                        <ReactMarkdown children={intro_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
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

        // </IntroContext.Provider>
    )
}

export default Intro;