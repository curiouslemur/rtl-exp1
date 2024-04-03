/** Update 2024-04-03 : ALL ansL and ansR will be added later for the data analysis
 * by comparing with the images
 * Same fro valL and valR
 */

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
        anchors: [{ pos: -1, val: 0 }, { pos: -1, val: 0 }],
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 16, ansL: 16, ansR: 16,
        ansType: "input",
        ansOptions: [7, 8, 9, 10, 11],
        en: { q: "How many days did the data collection last?" },
        ar: { q: "Question in arabic: How many days did the data collection last?" }
    }, {
        qId: 2, // The second question will be either of the sst or sts versions
        chartType: "bar",
        imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],
        cat: "identify-trend", sorted: "",
        anchors: [{ pos: -1, val: 0 }, { pos: -1, val: 0 }],
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", // two possible answers depending on from where participant starts
        ansL: "increase", // answer had the user started from the left
        ansR: "decrease", // answer had the user started from the right
        ansType: "select",
        en: {
            q: "Did the number of visitors increase or decrease over the course of the study?",
            ansLabel: "The number of visitors ",
            ansOptions: ["increased", "decreased"],
        }, ar: {
            q: "Question in arabic?",
            ansLabel: "The number of visitors ",
            ansOptions: ["increased", "decreased"],
        }
    }, {
        qId: 3,
        chartType: "bar",
        imgSrc: imgPath + "bar-3-u.svg",
        cat: "extract-value",
        sorted: "u",
        anchors: [{ pos: -1, val: 0 }, { pos: -1, val: 0 }],
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", ansL: -1, ansR: -1,
        ansType: "input",
        en: { q: "How many visitors on the fifth (5th) day?" },
        ar: { q: "كم عدد الزوار في اليوم الخامس؟" }
    }, {
        qId: 4,
        chartType: "bar",
        imgSrc: imgPath + ["bar-4-sst.svg", "bar-4-sts.svg"][(Math.random() > 0.5) ? 1 : 0],
        cat: "extract-value",
        sorted: "",
        anchors: [{ pos: -1, val: 0 }, { pos: -1, val: 0 }],
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", ansL: -1, ansR: -1, // ansL and aansR can be added later to the data
        ansType: "input",
        en: { q: "How many visitors on the sixth (6th) day?" },
        ar: { q: "Question in arabic?" }
    }, {
        qId: 5,
        chartType: "bar",
        imgSrc: imgPath + ".svg"
    }
]
