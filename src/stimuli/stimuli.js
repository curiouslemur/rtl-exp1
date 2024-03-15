/** Key definitions
 * sorted: From left to right of the image chart is unsorted "u", sorted short to tall "stt", tall to short "tts"
 * posAnchor1, posAnchor2, posAnchor3: From left to right of the image: -1 no anchor i.e. no marked element otherwise [0...n-1] which are the data's index
 * valMarked: value of the marked bar / wedge / dot: 0 if no mark
 * valL: value to the left of the marked element: 0 if no mark
 * valR: value to the right of the marked element: 0 if no mark
 * hideAfter: time in ms after which to hide the image
 * ansType: The expected type of answer from participants: two buttons (increasing / decreasing), input text
 **/

const imgPath = "figures/"
export const stimuli = [ // questions and labels in English. Order is important here
    {
        qId: 1,
        chartType: "bar", chartName: "bar-1.svg",
        cat: "count-all",
        imgSrc: imgPath + "bar-1.svg",
        sorted: "u",
        anchors: [
            { pos: -1, val: 0 },
            { pos: -1, val: 0 },
            { pos: -1, val: 0 }
        ],
        anchorVal1: 0, anchorVal2: 0, anchorVal3: 0,
        valMarked: 0,
        valL: 0,
        valR: 0,
        showAfter: 2000,
        hideAfter: 8000,
        data: [],
        ansExpected: 11,
        ansType: "input",
        ansOptions: [7, 8, 9, 10, 11],
        en: {
            q: "How many days did the data collection last?",
            nextButton: "Next"
        },
        ar: {
            q: "Question in arabic: How many days did the data collection last?",
            nextButton: "التالي"
        }
    }, {
        qId: 2,
        chartType: "bar", chartName: "bar-1.svg",
        imgSrc: imgPath + "bar-2.svg",
        cat: "count-all",
        sorted: "u",
        posAnchor1: "none", posAnchor2: "none", posAnchor3: "none",
        valMarked: 0,
        valL: 0,
        valR: 0,
        showAfter: 2000,
        hideAfter: 8000,
        ansType: "input",
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
