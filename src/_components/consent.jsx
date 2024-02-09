import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Button, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material"

// import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"
import { loadCountries_inLang, loadLanguages_inLang } from "../_utils/content-loader";

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Consent = (props) => {
    const [disabledButton, setDisabledButton] = useState(true);
    const [selectedValues, setSelectedValues] = useState()
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => { setIsMobile(window.innerWidth < 1094) }

    useEffect(
        () => {
            document.body.classList.add('consent-body');
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }, []);

    const labels = props.expPages.ConsentLabels
    const sessionID = props.config.sessionID
    const countryNames = loadCountries_inLang(props.expLang)
    const languageNames = loadLanguages_inLang(props.expLang)

    if (isMobile) {
        return (
            <Grid container style={styles.container} justifyContent="center">
                <Typography> {labels.mobileWarning}</Typography>
            </Grid>
        )
    } else if (!props.expLang) {
        return (
            <Grid container style={styles.container} justifyContent="center">
                <Typography variant="h4"> Language undefined</Typography>
            </Grid>
        )
    }

    return (
        <Grid container style={styles.container} justifyContent="center">

            <Grid item xl={6} xs={10} marginTop={2}>
                <Typography variant="h4">{labels.consentTitle}</Typography>

                <Grid item >
                    <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} />
                    <props.expPages.Consent /> <br />
                </Grid>

                <Stack marginTop={0} spacing={5} direction="row" justifyContent="flex-start">
                    <Box id="country-res-select" >
                        <InputLabel>{labels.countryResQ}</InputLabel>
                        <Autocomplete style={{ minWidth: '40ch', maxWidth: '55ch' }}
                            // value={countryRes}
                            options={countryNames}
                            getOptionLabel={(option) => option.name || ""}
                            onChange={(e, val, key, scs) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "countryRes", setDisabledButton) }
                                else { cc.onChangeField({ alpha3: "" }.alpha3, "countryRes", setDisabledButton) }
                            }}
                            // onChange={(e, newVal) => { console.log(countryRes); setCountryRes(newVal.name) }}
                            renderInput={(params) => (
                                <TextField  {...params} variant="standard"
                                    // label={labels.countryResLabel}
                                    placeholder={labels.countryResLabel} />)}
                        />
                    </Box>
                    <Box id="country-res-length-field">
                        <InputLabel>{labels.countryResLenQ}</InputLabel>
                        <TextField required style={{ minWidth: '15ch' }}
                            type="number"
                            variant="standard" placeholder=""
                            onChange={(e) => cc.onChangeField(e.target.value, "countryResLen", setDisabledButton)} />
                    </Box>
                </Stack>

                <Stack spacing={4} style={{ marginTop: '25px' }}>
                    <Box id="country-res-longest-select">
                        <InputLabel>{labels.countryResLongestQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '40ch' }}
                            options={countryNames}
                            getOptionLabel={(option) => option.name}
                            onChange={(e, val, key) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "countryResLongest", setDisabledButton) }
                                else { cc.onChangeField({ alpha3: "" }.alpha3, "countryResLongest", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.countryResLongestLabel} />)}
                        />
                    </Box>
                    <Box id="lang-native-select">
                        <InputLabel>{labels.langNativeQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '40ch' }}
                            options={languageNames}
                            getOptionLabel={(option) => option.lang}
                            onChange={(e, val, key) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "languageNative", setDisabledButton) }
                                else { cc.onChangeField({ alpha3: "" }.alpha3, "languageNative", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.langNativeLabel} />)} />
                    </Box>
                    <Box id="lang-other-select">
                        <InputLabel>{labels.langOtherQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '40ch' }}
                            multiple
                            options={languageNames}
                            getOptionLabel={(option) => option.lang}
                            value={selectedValues}
                            onChange={(e, val) => {
                                setSelectedValues(val.alpha3)
                                let selections = val.map(obj => obj.alpha3)
                                if (val !== null) { cc.onChangeField(selections, "languageOther", setDisabledButton) }
                                else { cc.onChangeField([], "languageOther", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.langOtherLabel} />
                            )} />

                    </Box>
                </Stack>
                <Stack marginTop={3} spacing={4} direction="row" justifyContent="flex-start" alignItems="center">
                    <Box id="age-field">
                        <InputLabel>{labels.ageQ}</InputLabel>
                        <TextField required style={{ minWidth: '18ch' }}
                            variant="standard" placeholder={labels.ageLabel}
                            type="number"
                            onChange={(e) => cc.onChangeField(e.target.value, "age", setDisabledButton)} />
                    </Box>
                    <Box id="gender-field">
                        <InputLabel>{labels.genderQ}</InputLabel>
                        <TextField required style={{ minWidth: '19ch' }}
                            variant="standard" placeholder={labels.genderLabel}
                            onChange={(e) => cc.onChangeField(e.target.value, "gender", setDisabledButton)} />
                    </Box>
                </Stack>
                <Stack marginTop={3} spacing={4}>
                    <Box id="profession-field">
                        <InputLabel>{labels.professionQ}</InputLabel>
                        <TextField required style={{ minWidth: '40ch', maxWidth: '40ch' }}
                            variant="standard" placeholder={labels.professionLabel}
                            onChange={(e) => cc.onChangeField(e.target.value, "profession", setDisabledButton)} />
                    </Box>

                    <Box id="colorblind-select">
                        <InputLabel>{labels.colorblindQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '40ch' }}
                            openOnFocus
                            options={[labels.colorblindNo, labels.colorblindYes, labels.colorblindIdk]}
                            getOptionLabel={(option) => option}
                            onChange={(e, val, key) => {
                                if (val !== null) { cc.onChangeField(val, "colorblind", setDisabledButton) }
                                else { cc.onChangeField("", "colorblind", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.colorblindLabel} />
                            )} />
                    </Box>
                </Stack>

                <Button style={{ marginTop: '20px' }}
                    variant="contained"
                    disabled={disabledButton}
                    onClick={(sid, nav, nu) => {
                        cc.onClickStart(sessionID, props.navigate, props.nextUrl)
                    }}> {labels.sign} </Button>
            </Grid>
        </Grid>
    )
}


const MobileWarning = (props) => {
    switch (props.expLang) {
    }
}

export default Consent