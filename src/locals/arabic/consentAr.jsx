import React from "react";
import { Grid } from "@mui/material";

// const styles = {
//     root: { flexGrow: 1, margin: "2%", }, button: { marginTop: 10, marginBottom: 10 }, container: { display: 'flex', flexWrap: 'wrap', },
//     textField: { marginLeft: 10, marginRight: 10, width: 200, }
//     , label: { margin: 0 }
// }

export const ConsentAr = (props) => {
    return (
        <Grid align='justify'></Grid>
    )
}


export const ConsentLabelsAr = {
    mobileWarning: "يرجى استخدام جهاز أو كمبيوتر بشاشة أعرض.",
    consentTitle: "مرحباً",

    countryResQ: "من أي بلد تشارك في هذا الاستطلاع؟ *",
    countryResLabel: "بلد الإقامة",
    countryResLenQ: "كم سنة عشت هناك؟ *",
    countryResLenLabel: "",
    countryResLongestQ: "في أي بلد عشت أطول فترة؟ *",
    countryResLongestLabel: "أطول دولة إقامة",

    langNativeQ: "ما هي لغتك الأم؟ *",
    langNativeLabel: "لغة أم",
    langOtherQ: "ما هي اللغات الأخرى التي تعرفها بطلاقة؟",
    langOtherLabel: "قم بإدراج كل ما ينطبق",

    ageQ: "كم عمرك؟ *", ageLabel: "عمر",
    genderQ: "ما هو جنسك؟ *", genderLabel: "جنس",

    professionQ: "ما هي مهنتك؟ *", professionLabel: "مهنة",

    visFamiliarityQ: "ما مدى تكرار استخدامك للمخططات أو تصورات البيانات؟",
    visFamiliarityLabel: "",
    sign: "يوافق"
}

export default ConsentAr;