/** Key definitions
 * sorted: From left to right of the image chart is unsorted "u", sorted short to tall "stt", tall to short "tts"
 * posAnchor1, posAnchor2, posAnchor3: From left to right of the image: 0 no anchor i.e. no marked element otherwise [1...n]
 * valM: value of the marked bar / wedge / dot: 0 if no mark
 * valL: value to the left of the marked element: 0 if no mark
 * valR: value to the right of the marked element: 0 if no mark
 * hideAfter: time in ms after which to hide the image
 * ansType: The expected type of answer from participants: two buttons (increasing / decreasing), input text
 **/


export const stimuli = [ // questions and labels in English. Order is important here
    {
        qId: 1,
        chartType: "barchart", chartName: "bar-1.svg",
        cat: "count-all",
        sorted: "u",
        posAnchor1: "none", posAnchor2: "none", posAnchor3: "none",
        valMarked: 0,
        valL: 0,
        valR: 0,
        showAfter: 2000,
        hideAfter: 8000,
        ansType: "buttons",
        en: {
            q: "How many people participated in the experiment on the fourth day?",
            nextButton: "Next"
        },
        ar: {
            q: "Question in arabic?",
            nextButton: "Neeeext"
        }
    }, {
        qId: 2,
        chartType: "barchart", chartName: "bar-1.svg",
        cat: "count-all",
        sorted: "u",
        posAnchor1: "none", posAnchor2: "none", posAnchor3: "none",
        valMarked: 0,
        valL: 0,
        valR: 0,
        showAfter: 2000,
        hideAfter: 8000,
        ansType: "buttons",
        en: {
            q: "How many people participated in the experiment on the fourth day?",
            nextButton: "Next"
        },
        ar: {
            q: "Question in arabic?",
            nextButton: "Neeeext"
        }
    }
]
