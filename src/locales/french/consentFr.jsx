import React from "react";
import { Grid, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const b = { color: '#3e3a53' }

export const ConsentFr = (props) => {
    return (
        <Grid container alignContent={'justify'}>
            <Typography paragraph> Avant de commencer, lisez cette page attentivement.</Typography>
            <Typography paragraph><b style={b}>Le but de cette étude est de </b>
                comprendre comment les gens associent différentes couleurs aux différents concepts dans la vie de tous les jours.
            </Typography>

            <Typography paragraph><b style={b}>Démarche: </b>
                Il vous est demandé d'indiquer combien vous pensez qu'une coleur représente un concept donné et vice versa, en utilisant une échelle allant de <i>"Pas du tou"</i>
                à <i> très fortement</i>.
                Avant de commencer, on vous posera quelques questions à propos de vous et vous demandera d'ajuster la luminosité de votre écran.
            </Typography>

            <Grid style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
                <Typography><HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" />
                    À tout moment vous pouvez cliquer sur le symbole d'aide pour revoir les instructions.
                </Typography>
            </Grid>

            <Typography paragraph> <b style={b}>Durée: </b> L'étude durera approximativement 40 minutes. </Typography>

            <Typography paragraph> <b style={b}>Risques: </b>
                Il n'y a pas de risques liées à votre participation à cette étude au-delà de celles liées à l'utilisation normales d'une ordinateur.
            </Typography>

            <Typography paragraph> <b style={b}>Données privées: </b> Votre participation est anonyme et votre réponse ne permettra pas de vous identifier.</Typography>

            <Typography paragraph> <b style={b}>Sauvegarde des données: </b> Vos réponses seront tenues confidentielles dans la mesure permise par la loi.
                Les membres de l'équipe de recherche et, dans certains cas, le WPI Institutional Review Board auront accès aux données collectées.
                Toute publication ou présentation des résultats ne permettra <b>pas</b> de vous identifier.
            </Typography>

            <Typography paragraph> <b style={b}> Votre participation à ce questionnaire est volontaire </b>
                Votre refus de participer ne vous causera aucune perte de bénéfices auxquelles vous aviez déjà droit.
                Vous pouvez quitter le questionnaire à tout moment et votre récomponse sera ajusté.
            </Typography>

            <Typography paragraph> <b style={b}>Pour plus d'information</b> sur ce recherche ou quesions concernant vos droits en tant que participant(e), veuillez contacter Dr. Lane Harrison, Email: ltharrison(at)wpi(dot)edu </Typography>
            <Typography paragraph> <b style={b}>Si vous acceptez de participer, </b> veuillez remplir les informations suivantes puis cliquer sur * Signer *</Typography>
            {/* <Typography> <b style={b}></b> </Typography> */}
        </Grid>
    )
}


export const ConsentLabelsFr = {
    consentTitle: "Bienvenue",
    countryResQ: "Quel est votre pays de résidence ? *",
    countryResLabel: "Pays de résidence",
    countryResLenQ: "Depuis combien d'années y vivez-vous ? *",
    countryResLenLabel: "",
    countryResLongestQ: "Dans quel pays avez-vous vécu le plus longtemps ? *",
    countryResLongestLabel: "Pays de plus longue résidence",

    langNativeQ: "Quelle est votre langue maternelle ? *",
    langNativeLabel: "Langue maternelle",
    langOtherQ: "Quelles autres langues connaissez-vous couramment ?",
    langOtherLabel: "",

    ageQ: "Quel est votre âge ? *", ageLabel: "Âge",
    genderQ: "Quel est votre genre ? *", genderLabel: "Genre",

    professionQ: "Quelle est votre profession ? *", professionLabel: "Profession",
    colorblindQ: "Avez-vous une quelconque forme de daltonisme ? *", colorblindLabel: "",
    colorblindDefinition: "( Définition daltonisme )",
    colorblindLink: "https://fr.wikipedia.org/wiki/Daltonisme",
    colorblindYes: "Oui", colorblindNo: "Non", colorblindIdk: "Je ne sais pas",

    mobileWarning: " Veuillez utiliser un appareil avec un écran plus large.",
    sign: "Signer"
}

export default ConsentFr;