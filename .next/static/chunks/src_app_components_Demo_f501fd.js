(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_Demo_f501fd.js", {

"[project]/src/app/components/Demo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Demo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@farcaster/frame-sdk/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@farcaster/frame-sdk/dist/index.js [app-client] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@farcaster/frame-sdk/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
;
;
function Demo() {
    _s();
    const [isSDKLoaded, setIsSDKLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setContext] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"] < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FrameContext"] > any;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Demo.useEffect": ()=>{
            const load = {
                "Demo.useEffect.load": async ()=>{
                    setContext(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].actions.ready();
                }
            }["Demo.useEffect.load"];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$farcaster$2f$frame$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] && !isSDKLoaded) {
                setIsSDKLoaded(true);
                load();
            }
        }
    }["Demo.useEffect"], [
        isSDKLoaded
    ]);
    if (!isSDKLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/Demo.js",
            lineNumber: 22,
            columnNumber: 12
        }, this);
    }
    const [quizData, setQuizData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userAnswers, setUserAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // store selected answers
    const [isQuizComplete, setIsQuizComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Demo.useEffect": ()=>{
            // Fetch quiz data from public folder (or you could embed it directly)
            fetch('/quiz.json').then({
                "Demo.useEffect": (res)=>res.json()
            }["Demo.useEffect"]).then({
                "Demo.useEffect": (data)=>{
                    setQuizData(data);
                    // Initialize userAnswers to match number of questions
                    setUserAnswers(Array(data.questions.length).fill(null));
                }
            }["Demo.useEffect"]).catch({
                "Demo.useEffect": (err)=>{
                    console.error('Failed to load quiz:', err);
                }
            }["Demo.useEffect"]);
        }
    }["Demo.useEffect"], []);
    if (!quizData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: styles.loading,
            children: "Loading quiz..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/Demo.js",
            lineNumber: 47,
            columnNumber: 12
        }, this);
    }
    const handleAnswerClick = (answerIndex)=>{
        // Store the user's choice for this question
        const updatedAnswers = [
            ...userAnswers
        ];
        updatedAnswers[currentQuestionIndex] = answerIndex;
        setUserAnswers(updatedAnswers);
        // Move to the next question or complete the quiz
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizComplete(true);
        }
    };
    // If the quiz is complete, calculate the score
    if (isQuizComplete) {
        const totalQuestions = quizData.questions.length;
        const correctCount = quizData.questions.reduce((count, q, idx)=>{
            const userAnswer = userAnswers[idx];
            return userAnswer === q.correctAnswerIndex ? count + 1 : count;
        }, 0);
        // Calculate the percentage of correct answers
        const scorePercentage = Math.round(correctCount / totalQuestions * 100);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: styles.title,
                    children: "Romance vs HODL Quiz"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Demo.js",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.finalText,
                    children: [
                        "You are ",
                        scorePercentage,
                        "% unworthy to be in a relationship."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Demo.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Demo.js",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    // Otherwise, show the current question
    const questionObj = quizData.questions[currentQuestionIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: styles.title,
                children: "Romance vs HODL Quiz"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Demo.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.description,
                children: quizData.shortDescription
            }, void 0, false, {
                fileName: "[project]/src/app/components/Demo.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.questionCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: styles.questionTitle,
                        children: [
                            "Question ",
                            currentQuestionIndex + 1,
                            " of ",
                            quizData.questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Demo.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: styles.questionText,
                        children: questionObj.question
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Demo.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.answersContainer,
                        children: questionObj.answers.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.answerButton,
                                onClick: ()=>handleAnswerClick(index),
                                children: answer
                            }, index, false, {
                                fileName: "[project]/src/app/components/Demo.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Demo.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Demo.js",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Demo.js",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Demo, "HFyh6VG6hHm47dbsA8Y9JC8yQMY=");
_c = Demo;
const styles = {
    container: {
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '50px auto',
        padding: '1rem'
    },
    title: {
        textAlign: 'center'
    },
    description: {
        marginBottom: '2rem',
        textAlign: 'center'
    },
    loading: {
        textAlign: 'center',
        marginTop: '50px'
    },
    questionCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem'
    },
    questionTitle: {
        margin: 0,
        marginBottom: '0.75rem'
    },
    questionText: {
        margin: 0,
        marginBottom: '1rem'
    },
    answersContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    answerButton: {
        padding: '0.75rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #444',
        backgroundColor: 'blue',
        textAlign: 'left'
    },
    finalText: {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold'
    }
};
var _c;
__turbopack_refresh__.register(_c, "Demo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_Demo_f501fd.js.map