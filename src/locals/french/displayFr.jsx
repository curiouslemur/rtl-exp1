import React from "react";
import { Grid, Typography } from "@mui/material";

export const DisplayFr = (props) => {
    return (
        <Grid container alignContent='justify'
            marginTop={'2%'}
        // direction="column"
        // justifyContent="flex-start"
        // alignItems="center"
        >

            <Typography> <b>Ajuster la luminosité </b>
                de votre écran de sorte à voir distinctivement chaque tranches des niveaux de gris sur l'image ci-dessous.
            </Typography>

            <Typography ><b>Désactivez le "Mode Nuit" </b> ou filtre pour lumière bleue le cas échéant.</Typography>
        </Grid >
    )
}

export const DisplayLabelsFr = {
    confirm: 'Confirmez combien de tranches vous voyez: '
}

export default DisplayFr;