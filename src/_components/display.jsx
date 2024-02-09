import React, { useEffect } from "react";
import { Autocomplete, Box, Grid, InputLabel, TextField, Typography } from "@mui/material";


import * as dc from "../_controllers/displayController"
import greyscale from '../_utils/gray-scale-donut.png'

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}


export const Display = (props) => {
    useEffect(() => {
        document.body.classList.add('display-body');
    }, []);

    const labels = props.expPages.DisplayLabels
    return (
        <Grid container style={styles.container} justifyContent="center">

            <Grid item xl={6} xs={9}>
                <Typography variant="h4"></Typography>

                <Grid item >
                    {/* <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} /> */}
                    <props.expPages.Display />
                </Grid>

                <Grid container justifyContent="center">
                    <div style={{ marginTop: 50 }}>
                        <img src={greyscale} alt="Donut chart in gray-scale" width="65%" />
                    </div>
                </Grid>

                <Box id="grayscale-select" marginTop={5}>
                    <InputLabel>{labels.confirm}</InputLabel>
                    <Autocomplete style={{ maxWidth: '20ch' }}
                        openOnFocus
                        options={["4", "5", "6", "7", "8", "9", "10", "11"]}
                        getOptionLabel={(option) => option}
                        onChange={(e, val, nav, nextUrl) => {
                            if (val !== null) { setTimeout(dc.onChangeSelect(e, val, props.navigate, props.nextUrl), 5000) }
                            else { }
                        }}
                        renderInput={(params) => (
                            <TextField {...params} variant="standard"
                                placeholder={labels.colorblindLabel} />
                        )} />
                </Box>
            </Grid>
        </Grid>
    )
}


export default Display;