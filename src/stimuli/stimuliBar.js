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

const imgPath = "img-trials/"
export const stimuliBar = [ // questions and labels in English. Order is important here
    { // index: 0
        qId: "1-u",
        chartType: "bar",
        cat: "count-all", // also attention-checker
        imgSrc: imgPath + "bar-1-u.svg",
        sorted: "u",
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 10, ansL: 10, ansR: 10,
        ansType: "input",
        en: { q: "How many days did the data collection last?", unit: "days." },
        ar: { q: "كم يوما استغرقت عملية جمع البيانات؟", unit: "days" }
    }, { // index: 1
        qId: "2-sst", // The second question will be either of the sst or sts versions
        chartType: "bar",
        // imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],
        imgSrc: imgPath + "bar-2-sst.svg",
        cat: "identify-trend", sorted: "sst",
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", // two possible answers depending on from where participant starts
        ansL: "increased", // answer had the user started from the left
        ansR: "decreased", // answer had the user started from the right
        ansType: "select",
        en: {
            q: "Did the number of visitors increase or decrease over the course of the study?",
            ansLabel: "The number of visitors ", ansOptions: ["increased", "decreased"], ansValues: ["increased", "decreased"]
        }, ar: {
            q: "هل زاد عدد الزوار أم انخفض خلال فترة الدراسة؟",
            ansLabel: "عدد الزوار", ansOptions: ["في تزايد", "في انخفاض"], ansValues: ["increased", "decreased"],
        }
    }, { // index: 2
        qId: "2-sts", // The second question will be either of the sst or sts versions
        chartType: "bar",
        // imgSrc: imgPath + ["bar-2-sst.svg", "bar-2-sts.svg"][(Math.random() > 0.5) ? 1 : 0],
        imgSrc: imgPath + "bar-2-sts.svg",
        cat: "identify-trend", sorted: "sts",
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", // two possible answers depending on from where participant starts
        ansL: "increased", // answer had the user started from the left
        ansR: "decreased", // answer had the user started from the right
        ansType: "select",
        en: {
            q: "Did the number of visitors increase or decrease over the course of the study?",
            ansLabel: "The number of visitors ", ansOptions: ["increased", "decreased"], ansValues: ["increased", "decreased"]
        }, ar: {
            q: "هل زاد عدد الزوار أم انخفض خلال فترة الدراسة؟",
            ansLabel: "عدد الزوار", ansOptions: ["في تزايد", "في انخفاض"], ansValues: ["increased", "decreased"]
        }
    }, {// index: 3
        qId: "3-u",
        chartType: "bar",
        imgSrc: imgPath + "bar-3-u.svg",
        cat: "extract-value",
        sorted: "u",
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", ansL: 133, ansR: 200,
        ansType: "input",
        en: { q: "How many visitors on the fifth (5th) day?" },
        ar: { q: "كم عدد الزوار في اليوم الخامس؟" }
    }, {// index: 4
        qId: "4-sst", // The fourth question will be either of the sst or sts versions
        chartType: "bar",
        imgSrc: imgPath + "bar-4-sst.svg",
        cat: "extract-value",
        sorted: "sst",
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", ansL: 44, ansR: 64, // TODO: Rather add it final now xxxx ansL and ansR can be added later to the data
        ansType: "input",
        en: { q: "How many visitors on the sixth (6th) day?" },
        ar: { q: "كم عدد الزوار في اليوم السادس؟" }
    }, {// index: 5
        qId: "4-sts",
        chartType: "bar",
        imgSrc: imgPath + "bar-4-sts.svg",
        cat: "extract-value",
        sorted: "sts",
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: "either", ansL: 88, ansR: 31, // TODO: Rather add it final now 
        ansType: "input",
        en: { q: "How many visitors on the sixth (6th) day?" },
        ar: { q: "كم عدد الزوار في اليوم السادس؟" }
    }, {// index: 6
        qId: "5-u-1", // the fifth question will be either of the u-1 or u-2 versions
        chartType: "bar",
        imgSrc: imgPath + "bar-5-u-1.svg",
        cat: "count", // also attention-checker
        sorted: "u",
        anchorPos: 3,
        valMarked: 50, valL: 89, valR: 46,
        ansExpected: 1, ansL: 1, ansR: 1,
        ansType: 'input',
        en: { q: "How many holidays were there during the study?" },
        ar: { q: "كم عدد العطلات التي كانت هناك أثناء الدراسة؟" }
    },
    {// index: 7
        qId: "5-u-2",
        chartType: "bar",
        imgSrc: imgPath + "bar-5-u-2.svg",
        cat: "count", // also attention-checker
        sorted: "u",
        anchorPos: 3,
        valMarked: 0, valL: 0, valR: 0,
        ansExpected: 2, ansL: 2, ansR: 2,
        ansType: 'input',
        en: { q: "How many holidays were there during the study?" },
        ar: { q: "كم عدد العطلات التي كانت هناك أثناء الدراسة؟" }
    },
    {// index: 8
        qId: "6-count-until",
        chartType: "bar",
        imgSrc: imgPath + "bar-6-u.svg",
        cat: "count",
        sorted: "u",
        anchorPos: 11,
        valMarked: 108, valL: 81, valR: 140,
        ansExpected: "either", ansL: 10, ansR: 5,
        ansType: 'input',
        en: { q: "How many days have passed before the holiday?", note: "(Do not include the holiday in your count.)" }, // answer would be 11 or 6
        ar: {
            q: "كم يوم مضى حتى العطلة الرسمية؟", note: "(لا تقم بتضمين العطلة الرسمية في حسابك.)"
        }
    }, {// index: 9
        qId: "6-count-from",
        chartType: "bar",
        imgSrc: imgPath + "bar-6-u.svg",
        cat: "count",
        sorted: "u",
        anchorPos: 11,
        valMarked: 108, valL: 81, valR: 140,
        ansExpected: "either", ansL: 5, ansR: 10,
        ansType: 'input',
        en: { q: "How many days have passed after the holiday?", note: "(Do not include the holiday in your count.)" },
        ar: {
            q: "كم يوم مر على العطلة الرسمية؟", note: "(لا تقم بتضمين العطلة الرسمية في حسابك.)"
        }
    }, {// index: 10
        qId: "7-extract-before-u",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-u.svg",
        cat: "extract-before",
        sorted: "u",
        anchorPos: 7,
        valMarked: 90, valL: 157, valR: 103,
        ansExpected: "either", ansL: 157, ansR: 103,
        ansType: 'input',
        en: { q: "How many visistors were there on the day before the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم السابق للعطلة الرسمية؟" }
    },
    {// index: 11
        qId: "7-extract-before-sst",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-sst.svg",
        cat: "extract-before",
        sorted: "sst",
        anchorPos: 7,
        valMarked: 65, valL: 64, valR: 70,
        ansExpected: "either", ansL: 64, ansR: 70,
        ansType: 'input',
        en: { q: "How many visistors were there on the day before the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم السابق للعطلة؟" }
    }, {// index: 12
        qId: "7-extract-before-sts",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-sts.svg",
        cat: "extract-before",
        sorted: "sts",
        anchorPos: 7,
        valMarked: 99, valL: 100, valR: 88,
        ansExpected: "either", ansL: 100, ansR: 88,
        ansType: 'input',
        en: { q: "How many visistors were there on the day before the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم السابق للعطلة؟" }
    }, {// index: 13
        qId: "7-extract-after-u",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-u.svg",
        cat: "extract-after",
        sorted: "u",
        anchorPos: 7,
        valMarked: 90, valL: 157, valR: 103,
        ansExpected: "either", ansL: 103, ansR: 157,
        ansType: 'input',
        en: { q: "How many visistors were there on the day after the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم التالي للعطلة الرسمية؟" }
    }, {// index: 14
        qId: "7-extract-after-sst",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-sst.svg",
        cat: "extract-after",
        sorted: "sst",
        anchorPos: 7,
        valMarked: 65, valL: 64, valR: 70,
        ansExpected: "either", ansL: 70, ansR: 64,
        ansType: 'input',
        en: { q: "How many visistors were there on the day after the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم التالي للعطلة؟" }
    }, {// index: 15
        qId: "7-extract-after-sts",
        chartType: "bar",
        imgSrc: imgPath + "bar-7-sts.svg",
        cat: "extract-after",
        sorted: "sts",
        anchorPos: 7,
        valMarked: 99, valL: 100, valR: 88,
        ansExpected: "either", ansL: 88, ansR: 100,
        ansType: 'input',
        en: { q: "How many visistors were there on the day after the holiday?" },
        ar: { q: "كم عدد الزوار في اليوم التالي للعطلة الرسمية؟" }
    }

    // {// index: 
    //     qId: "8-rank", // it's is hard to collect the data from this so maybe skip this one?
    //     chartType: "bar",
    //     imgSrc: imgPath + "bar-8-u.svg",
    //     cat: "locate-variable",
    //     sorted: "u",
    //     anchorPos: 11,
    //     valMarked: 146, valL: 33, valR: 55,
    //     ansExpected: "either", ansL: 6, ansR: 11,
    //     ansType: 'input-rank',
    //     en: { q: "On which day did the museum have 146 visitors?", note: "Holidays are represented with dark colored bars." }, // answer would be 11th or 6th
    //     ar: { q: "في أي يوم كان عدد زوار المتحف 146؟" }
    // },
    //, {
    //     qId: 0,
    //     chartType: "bar",
    //     imgSrc: imgPath + "bar--u.svg",
    //     cat: "",
    //     sorted: "",
    //     anchorPos: -1,
    //     valMarked: 0, valL: 89, valR: 46,
    //     ansExpected: 1, ansL: 1, ansR: 1,
    //     ansType: '',
    //     en: { q: "" },
    //     ar: { q: "" }
    // }
]