import React from "react";

export const TrialEn = (props) => {
    console.log(props.question)
    switch (props.progressQ) {
        case 1:
            return (
                <>

                </>
            )
        default:
            return (<></>)
    }
}

export const TrialLabelsEn = {
    nextButton: "Next",
    showChartButton: "Show chart",

    ansTextfieldLabel: "Type a number here",
    ansTextfieldHelper: "number only",
    modalLabels: {
        title: "Instructions",
        close: "Close"
    }
}

