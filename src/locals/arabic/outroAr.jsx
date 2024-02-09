import React from "react";
import { Grid } from '@mui/material';

export const OutroAr = (props) => {
    return (
        <Grid container alignContent='justify' marginTop={'2%'}>
        </Grid>
    )
}

export const OutroLabelsAr = {
    outroTitle: "Thank you for your participation.",
    closeBrowser: "You may now close this window.",
    prolificUserYes: "Prolific user, click below to collect your reward before closing this window",
    prolificUserButton: "Collect"
}

export default OutroAr;

