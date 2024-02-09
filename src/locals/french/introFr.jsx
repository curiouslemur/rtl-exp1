import React from "react";
import { Grid, Typography } from "@mui/material";
import sliderFr from '../../_utils/slider-en.gif' // TODO: add sliderFr gif

export const IntroFr = (props) => {
    return (
        <Grid>
            <Typography > Il vous est demandé d'indiquer <b>
                l'intensité à laquelle vous associer chaque couleur avec chacun des concepts suivants</b>:</Typography>
            <Grid container justifyContent="" marginTop={2}>
                <i style={{ marginTop: 0 }}>
                    {IntroLabelsFr.cptFood},
                    {IntroLabelsFr.cptAbstract},
                    {IntroLabelsFr.cptEmotion},
                    {IntroLabelsFr.cptWeather}<br />
                </i>
            </Grid>
            <br />

            <Typography paragraph>
                Vous indiquerez votre réponse en faisant glisser un curseur le long d'une échelle continue allant de <i> "Pas du tout" </i> à <i>"Très fortement"</i>, comme indiqué ci-dessous.</Typography>
            <div style={{ marginTop: 5 }}>
                <img src={sliderFr} alt={IntroLabelsFr.sliderAltText} width="55%" />
            </div>

            <Typography paragraph style={{ marginTop: '3ch' }}>
                Il y aura <b>16 Blocs</b> de questions, un pour chaque concept.
                Vous évaluerez chaque couleur pour chacun des concepts (blocs) avant d'avancer vers le prochain bloc.</Typography>
            <Typography paragraph> <b>Faison un essai!</b>
                Cliquez sur un des concepts listés ci-dessous.</Typography>
        </Grid >
    )
}

export const IntroLabelsFr = {
    introTitle: "Instructions",
    introOpening: "Durant cette étude, vous verrez chacune des couleurs ci-dessous, une à la fois.",
    sliderAltText: "Example de glissière pour indiquer votre réponse",
    cptFood: ' mangue, pêche, banane, carotte', // cpt is short for concept. !! KEEP the space at the beginning of the list
    cptAbstract: ' sécurité, justice, paix, confort',
    cptEmotion: ' triste, amour, heureux, en colère',
    cptWeather: ' sécheresse, foudre, tempête de sable, ouragan',
    start: "Commencer",
    tutoQMost: "Quelle couleur associez-vous LE PLUS avec ",
    tutoQLeast: "Quelle couleur associez-vous LE MOINS avec ",

    modalWhen: "Alors quand vous voyez cette couleur et le concept de ",
    modalMove: "vous glisseriez le curseur ⚫️ vers ",
    modalMarkerMost: "Très fortement",
    modalMarkerLeast: "Pas du tout",
    modalNext: "Suivant",

    markMost: "Très fortement",
    markLeast: "Pas du tout",

    alertAgain: "Selectionnez un autre concept depuis la liste.",
    alertStart: "Vous pouvez essayer une autre couleur ou un autre concept ou commencer l'étude.",

    noteHelp: "Notez que vous pouvez à tout moment cliquer sur l'icône en haut à gauche pour afficher les instructions."
}
export default IntroFr;