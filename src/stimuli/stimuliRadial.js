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
        first: 0, // indicates the position of the first arriving guest
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
    //     first: 5, // indicates the position of the first arriving guest
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
    //     first: 6, // indicates the position of the first arriving guest
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
    //     first: 11, // indicates the position of the first arriving guest
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
    //     first: 12, // indicates the position of the first arriving guest
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
        first: 0, // indicates the position of the first arriving guest
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
    },
    {
        qId: "3-before-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-3-",
        first: 0, // indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either', //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "select",
        en: {
            q: "Which guest arrived before Damian?", unit: "",
            ansCounter: 'Annie', ansClock: 'Chantal',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        }
    },
    {
        qId: "4-sg-count-", // sg == special guest
        chartType: "radial",
        cat: "count", // also attention-checker
        imgSrc: imgPath + "radial-4-",
        first: 0, // indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0, //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "input",
        en: {
            q: "How many special guests were in the room?", unit: "",
            ansCounter: '', ansClock: '',
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: '', ansClock: '',
        }
    },
    {
        qId: "5-sg-after-", // sg == special guest
        chartType: "radial",
        cat: "extract-value",
        imgSrc: imgPath + "radial-5-",
        first: 0, //indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0, //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "select",
        en: {
            q: "Who arrived after the special guest?", unit: "",
            ansCounter: 'Sami', ansClock: 'Akim',
            ansOptions: ["Akim", "Chantal", "Sami", "Theo"]
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 'Sami', ansClock: 'Chantal',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        }
    },
    {
        qId: "5-sg-before-",
        chartType: "radial",
        cat: "extract-value",
        imgSrc: imgPath + "radial-5-",
        first: 0, // indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0, //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "select",
        en: {
            q: "Who arrived before the special guest?", unit: "",
            ansCounter: 'Akim', ansClock: 'Sami',
            ansOptions: ["Akim", "Chantal", "Sami", "Theo"]
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 'Akim', ansClock: 'Sami',
            ansOptions: ["Akim", "Chantal", "Sami", "Theo"]
        }
    },
    {
        qId: "6-count-after-",
        chartType: "radial",
        cat: "count",
        imgSrc: imgPath + "radial-6-",
        // first: 0, // indicates the position of the first arriving guest
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0, //ansCounter: 'Chantal', ansClock: 'Annie',
        ansType: "input",
        en: {
            q: "How many visitors arrived after the special guest?", unit: "visitors",
            ansCounter: 2, ansClock: 8,
            note: "(Do not include the special guest and the first arriving guest in your count.)"
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
        }
    }, {
        qId: "6-count-before-",
        chartType: "radial",
        cat: "count",
        imgSrc: imgPath + "radial-6-",
        // first: 0, // indicates the position of the first arriving guest. 
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0,
        ansType: "input",
        en: {
            q: "How many visitors arrived before the special guest?", unit: "visitors",
            ansCounter: 8, ansClock: 2,
            note: "(Do not include the special guest and the first arriving guest in your count.)"
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
        }
    },

]