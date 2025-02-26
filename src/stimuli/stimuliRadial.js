const imgPath = "img-trials/"
export const stimuliRadial = [ // questions and labels in English. Order is important here
    {
        qId: "1",
        chartType: "radial",
        cat: "count-all", // also attention-checker
        imgSrc: imgPath + "radial-1.png",
        firstGuestPos: "not relevant",
        anchorPos: -1, // 
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 9, // ansCounter is if read counter-clockwise, ansClock is if read clockwise
        ansType: "input",
        en: {
            q: "How many visitors are in the room?", note: "(Each small circle in the chart represents one visitor)", unit: "visitors.",
            ansCounter: 9, ansClock: 9
        },
        ar: {
            q: "كم عدد الزوار في الغرفة؟", note: "(كل دائرة صغيرة في الرسم البياني تمثل زائرًا واحدًا)", unit: "زائر.",
            ansCounter: 9, ansClock: 9,
        }
    },
    {
        qId: "2-",
        chartType: "radial",
        cat: "extract-value",
        imgSrc: imgPath + "radial-2-",
        firstGuestPos: 0,       // indicates the position of the first arriving guest
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either',
        ansType: "select",
        en: {
            q: "Who is the visitor who arrived fourth?", unit: "",
            ansCounter: 'Sami', ansClock: 'Eva', // this answer should also be in ansOptions, and should be the same regardless of the firstQuestPos
            ansOptions: ["Eva", "Lane", "Sami", "Theo"],
            ansValues: ["Eva", "Lane", "Sami", "Theo"]
        },
        ar: {
            q: "ما اسم الزائر الرابع الذي وصل إلى الغرفة؟", unit: "",
            ansCounter: 'Akram', ansClock: 'Fadoua',
            ansOptions: ["أكرم", "يونس", "فدوى", "منى"],
            ansValues: ["Akram", "Yunus", "Fadoua", "Muna"]
        }
    },
    {
        qId: "3-after-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-3-",
        firstGuestPos: 0,
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either',
        ansType: "select",
        en: {
            q: "Who is the visitor who arrived after Damian?", unit: "",
            ansCounter: 'Chantal', ansClock: 'Annie',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"],
            ansValues: ["Annie", "Chantal", "Lane", "Theo"]
        },
        ar: {
            q: "من هو الزائر الذي وصل الغرفة بعد منى؟", unit: ".",
            ansCounter: 'Yunus', ansClock: 'Dany',
            ansOptions: ["داني", "فاطمة", "يونس", "جميل"],
            ansValues: ["Dany", "Fatma", "Yunus", "Jamil"]
        }
    },
    {
        qId: "3-before-",
        chartType: "radial",
        cat: "extract-value", // also attention-checker
        imgSrc: imgPath + "radial-3-",
        anchorPos: -1,
        valMarked: -1, valL: -1, valR: -1,
        ansExpected: 'either',
        ansType: "select",
        en: {
            q: "Which guest arrived before Damian?", unit: "",
            ansCounter: 'Annie', ansClock: 'Chantal',
            ansOptions: ["Annie", "Chantal", "Lane", "Theo"],
            ansValues: ["Annie", "Chantal", "Lane", "Theo"]
        },
        ar: {
            q: "من هو الضيف الذي وصل الغرفة قبل منى؟", unit: ".",
            ansCounter: 'Dany', ansClock: 'Yunus',
            ansOptions: ["داني", "فاطمة", "يونس", "جميل"],
            ansValues: ["Dany", "Fatma", "Yunus", "Jamil"]
        }
    },
    {
        qId: "4-sg-count-", // sg == special guest
        chartType: "radial",
        cat: "count", // also attention-checker
        imgSrc: imgPath + "radial-4-",
        firstGuestPos: 0,
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0,
        ansType: "input",
        en: {
            q: "How many special guests are in the room?", note: "(A special guest is represented by a black small circle.)", unit: "",
            ansCounter: '', ansClock: '',
        },
        ar: {
            q: "كم عدد الضيوف المميزين في الغرفة؟", note: "(يتم تمثيل الضيف المميز بدائرة صغيرة سوداء.)", unit: "",
            ansCounter: '', ansClock: '',
        }
    },
    {
        qId: "5-sg-after-", // sg == special guest
        chartType: "radial",
        cat: "extract-value",
        imgSrc: imgPath + "radial-5-",
        firstGuestPos: 0,
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0,
        ansType: "select",
        en: {
            q: "Who arrived after the special guest?", unit: "",
            ansCounter: 'Sami', ansClock: 'Akim',
            ansOptions: ["Akim", "Chantal", "Sami", "Theo"],
            ansValues: ["Akim", "Chantal", "Sami", "Theo"]
        },
        ar: {
            q: "من وصل بعد الضيف الخاص؟", unit: "",
            ansCounter: 'Muna', ansClock: 'Jamil',
            ansOptions: ["فدوى", "جميل", "إبتسام", "منى"],
            ansValues: ["Fadoua", "Jamil", "Ibtisam", "Muna"]
        }
    },
    {
        qId: "5-sg-before-",
        chartType: "radial",
        cat: "extract-value",
        imgSrc: imgPath + "radial-5-",
        firstGuestPos: 0,
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0,
        ansType: "select",
        en: {
            q: "Who arrived before the special guest?", unit: "",
            ansCounter: 'Akim', ansClock: 'Sami',
            ansOptions: ["Akim", "Chantal", "Sami", "Theo"],
            ansValues: ["Akim", "Chantal", "Sami", "Theo"]
        },
        ar: {
            q: "من وصل قبل الضيف الخاص؟", unit: "",
            ansCounter: 'Jamil', ansClock: 'Muna',
            ansOptions: ["فدوى", "جميل", "إبتسام", "منى"],
            ansValues: ["Fadoua", "Jamil", "Ibtisam", "Muna"]
        }
    },
    {
        qId: "6-count-after-",
        chartType: "radial",
        cat: "count",
        imgSrc: imgPath + "radial-6-",
        anchorPos: -1, valMarked: -1, valL: -1, valR: -1,
        ansExpected: 0,
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
            q: "كم عدد الزوار الذين وصلوا قبل الضيف الخاص؟", unit: "زائر.",
            ansCounter: 9, ansClock: 3,
            note: "(لا تقم بتضمين الضيف المميز في حسابك.)"
        }
    },

]