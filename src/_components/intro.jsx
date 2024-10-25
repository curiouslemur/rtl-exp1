import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import * as ic from "../_controllers/introController"

// const IntroContext = createContext()

export const Intro = ({ chartType, meta, navigate, nextUrl }) => {
    const [intro_md, setintro_md] = useState('');

    const [cannotStart, setCannotStart] = useState(true)

    useEffect(() => {

        fetch(meta.expLang + "/" + chartType + "/intro-" + chartType + ".md")
            .then((response) => response.text()).then((text) => { setintro_md(text) }).catch((err) => console.error(err)) //:

        if (JSON.parse(sessionStorage.getItem('demography')).countryResLen === '999') {
            setCannotStart(false)
        } else {
            const timeout = setTimeout(() => {
                setCannotStart(false)
            }, 15000)
            return () => clearTimeout(timeout);
        } // TODO: make this like 30s instead 

        // fetch(meta.expLang + "/intro-bar.md")
    }, [chartType, meta.expLang]);

    const labels = meta.expText.intro
    return (
        // <IntroContext.Provider value={{ labels, setCannotStart }}>
        <Grid container justifyContent="center">
            <Grid item xl={6} xs={10}>
                <hr style={{ color: "#9c27b0", backgroundColor: "#9c27b0", height: 2 }} />

                <div className="markdown-content">
                    <ReactMarkdown children={intro_md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />
                </div>

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