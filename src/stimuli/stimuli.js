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
        chartType: "bar",
        cat: "count-all",
        imgSrc: imgPath + "bar-1-u.svg",
        sorted: "u",
        anchors: [
            { pos: -1, val: 0 },
            { pos: -1, val: 0 },
        ],
        valMarked: -1,
        valL: -1,
        valR: -1,
        ansExpected: 16,
        ansL: 16,
        ansR: 16,
        ansType: "input",
        ansOptions: [7, 8, 9, 10, 11],
        en: {
            q: "How many days did the data collection last?",
            ansLabel: "Type a number here",
            ansOptions: [],
            nextButton: "Next"
        },
        ar: {
            q: "Question in arabic: How many days did the data collection last?",
            ansLabel: "Type a number here",
            ansOptions: [],
            nextButton: "التالي"
        }
    }, {
        qId: 2,
        chartType: "bar",
        imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],
        cat: "identify-trends",
        sorted: "sst",
        anchors: [
            { pos: -1, val: 0 },
            { pos: -1, val: 0 },
        ],
        valMarked: -1,
        valL: -1,
        valR: -1,
        ansExpected: "either", // two possible answers depending on from where participant starts
        ansL: "increase", // answer had the user started from the left
        ansR: "decrease", // answer had the user started from the right
        ansType: "select",
        en: {
            q: "Did the number of visitors increase or decrease over the course of the study?",
            ansLabel: "The number of visitors ",
            ansOptions: ["increased", "decreased"],
            nextButton: "Next"
        },
        ar: {
            q: "Question in arabic?",
            ansLabel: "The number of visitors ",
            ansOptions: ["increased", "decreased"],
            nextButton: "التالي"
        }
    }, {
        qId: 3,
        chartType: "bar",
        imgSrc: imgPath + "bar-3-"
    }
]
