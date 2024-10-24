const imgPath = "img-trials/"
export const stimuliRadial = [ // questions and labels in English. Order is important here
    {
        qId: "1",
        chartType: "radial",
        cat: "count-all", // also attention-checker
        imgSrc: imgPath + "radial-1.png",
        first: "not relevant",
        anchorPos: -1, // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 9, // ansCounter is if read counter-clockwise, ansClock is if read clockwise
        ansType: "input",
        en: {
            q: "How many visitors were in the room?", unit: "visitors.",
            ansCounter: 9, ansClock: 9
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 9, ansClock: 9,
        }
    },
    {
        qId: "2-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-2-",
        first: 0,       // indicates the position of the first arriving guest
        anchorPos: -1,  // no anchor i.e. no special guests
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either',
        ansType: "select",
        en: {
            q: "Who is the visitor who arrived fourth?", unit: "",
            ansCounter: 'Sami', ansClock: 'Eva',
            ansOptions: ["Eva", "Lane", "Sami", "Theo"]
        },
        ar: {
            q: "ما اسم الزائر الذي وصل في اليوم الرابع؟", unit: "",
            ansCounter: 'أكرم', ansClock: 'فدوى',
            ansOptions: ["أكرم", "يونس", "فدوى", "منى"]
        }
    },
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
            q: "Who is the visitor who arrived after Damian?", unit: "",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"]
        },
        ar: {
            q: "من هو الزائر الذي وصل بعد منى؟", unit: ".",
            ansCounter: 'يونس', ansClock: 'داني',
            ansOptions: ["داني", "فاطمة", "يونس", "جميل"]
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
            q: "كم عدد الزوار في الغرفة؟", unit: ".",
            ansCounter: 'داني', ansClock: 'يونس',
            ansOptions: ["داني", "فاطمة", "يونس", "جميل"]
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
        ansExpected: 0,
        ansType: "input",
        en: {
            q: "How many special guests are in the room?", unit: "",
            ansCounter: '', ansClock: '',
        },
        ar: {
            q: "كم عدد الضيوف المميزين في الغرفة؟", unit: "",
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
            q: "كم عدد الزوار في الغرفة؟", unit: "",
            ansCounter: 'منى', ansClock: 'جميل',
            ansOptions: ["فدوى", "جميل", "إبتسام", "منى"]
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
            q: "كم عدد الزوار في الغرفة؟", unit: "",
            ansCounter: 'جميل', ansClock: 'منى',
            ansOptions: ["فدوى", "جميل", "إبتسام", "منى"]
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
            q: "كم عدد الزوار الذين وصلوا بعد الضيف المميز؟", unit: "زائر.",
            ansCounter: 2, ansClock: 8,
            note: "(لا تقم بتضمين الضيف المميز وأول ضيف يصل في حسابك.)"
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
            ansCounter: 9, ansClock: 3,
            note: "(Do not include the special guest in your count.)"
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", unit: "زائر.",
            ansCounter: 9, ansClock: 3,
            note: "(لا تقم بتضمين الضيف المميز في حسابك.)"
        }
    },

]