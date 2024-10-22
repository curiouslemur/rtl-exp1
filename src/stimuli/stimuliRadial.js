const imgPath = "img-trials/"
export const stimuliRadial = [ // questions and labels in English. Order is important here
    {
        qId: "1",
        chartType: "radial",
        cat: "count-all", // also attention-checker
        imgSrc: imgPath + "radial-1.svg",
        first: "",
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 9, ansCounter: 9, ansClock: 9, // ansCounter is if read counter-clockwise, ansClock is if read clockwise
        ansType: "input",
        en: { q: "How many visitors were in the room?", unit: "visitors." },
        ar: { q: "كم عدد الزوار في الغرفة؟", unit: "زائر." }
    },
    {
        qId: "2-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-2-",
        first: 0, // sorted indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either', // ansCounter: 'Sami', ansClock: 'Eva',
        ansType: "select",
        en: {
            q: "Which guest arrived fourth?", unit: "",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Eva", "Lane", "Sami", "Theo"]
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Eva", "Lane", "Sami", "Theo"]
        }
    },
    // {
    //     qId: "2-5",
    //     chartType: "radial",
    //     cat: "extract-value", // also attention-checker
    //     imgSrc: imgPath + "radial-2-5.svg",
    //     first: 5, // sorted indicates the position of the first arriving guest
    //     anchorPos: -1, // no anchor i.e. no special guests
    //     valMarked: -1, valL: -1, valR: -1,
    //     ansExpected: 'either', ansCounter: 'Sami', ansClock: 'Eva',
    //     ansType: "select",
    //     en: { q: "Which guest arrived fourth?", unit: "", ansOptions: ["Eva", "Lane", "Sami", "Theo"] },
    //     ar: { q: "كم عدد الزوار في الغرفة؟", unit: "زائر.", ansOptions: ["Eva", "Lane", "Sami", "Theo"] }
    // }, {
    //     qId: "2-6",
    //     chartType: "radial",
    //     cat: "extract-value", // also attention-checker
    //     imgSrc: imgPath + "radial-2-6.svg",
    //     first: 6, // sorted indicates the position of the first arriving guest
    //     anchorPos: -1, // no anchor i.e. no special guests
    //     valMarked: -1, valL: -1, valR: -1,
    //     ansExpected: 'either', ansCounter: 'Sami', ansClock: 'Eva',
    //     ansType: "select",
    //     en: { q: "Which guest arrived fourth?", unit: "", ansOptions: ["Eva", "Lane", "Sami", "Theo"] },
    //     ar: { q: "كم عدد الزوار في الغرفة؟", unit: "زائر.", ansOptions: ["Sami", "Eva", "Lane", "Theo"] }
    // },
    // {
    //     qId: "2-11",
    //     chartType: "radial",
    //     cat: "extract-value", // also attention-checker
    //     imgSrc: imgPath + "radial-2-11.svg",
    //     first: 11, // sorted indicates the position of the first arriving guest
    //     anchorPos: -1, // no anchor i.e. no special guests
    //     valMarked: -1, valL: -1, valR: -1,
    //     ansExpected: 'either', ansCounter: 'Sami', ansClock: 'Eva',
    //     ansType: "select",
    //     en: { q: "Which guest arrived fourth?", unit: "", ansOptions: ["Eva", "Lane", "Sami", "Theo"] },
    //     ar: { q: "كم عدد الزوار في الغرفة؟", unit: "زائر.", ansOptions: ["Sami", "Eva", "Lane", "Theo"] }
    // },
    // {
    //     qId: "2-12",
    //     chartType: "radial",
    //     cat: "extract-value", // also attention-checker
    //     imgSrc: imgPath + "radial-2-12.svg",
    //     first: 12, // sorted indicates the position of the first arriving guest
    //     anchorPos: -1, // no anchor i.e. no special guests
    //     valMarked: -1, valL: -1, valR: -1,
    //     ansExpected: 'either', ansCounter: 'Sami', ansClock: 'Eva',
    //     ansType: "select",
    //     en: { q: "Which guest arrived fourth?", unit: "", ansOptions: ["Eva", "Lane", "Sami", "Theo"] },
    //     ar: { q: "كم عدد الزوار في الغرفة؟", unit: "زائر.", ansOptions: ["Sami", "Eva", "Lane", "Theo"] }
    // },
    {
        qId: "3-after-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-3-",
        first: 0, // sorted indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either', //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "select",
        en: {
            q: "Which guest arrived after Damian?", unit: "",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        }
    }
]