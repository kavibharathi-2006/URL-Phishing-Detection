
const transitions = {
    q0: { h: "q1" },
    q1: { t: "q2" },
    q2: { t: "q3" },
    q3: { p: "q4" },

    q4: {
        ":": "q5",
        s: "q6"
    },

    q5: { "/": "q7" },
    q7: { "/": "q10" },

    q6: { ":": "q8" },
    q8: { "/": "q9" },
    q9: { "/": "q10" },

    q10: { "*": "q11" },
    q11: { "*": "q11" }
};

const acceptingStates = ["q11"];

function isValidURLStructure(url) {
    if (typeof url !== "string") {
        return false;
    }

    const input = url.trim().toLowerCase();

    if (!input || input.includes("\\")) {
        return false;
    }

    let state = "q0";

    for (const character of input) {
        if (/\s/.test(character)) {
            return false;
        }

        if (state === "q10" && character === "/") {
            return false;
        }

        const nextState =
            transitions[state]?.[character] ||
            transitions[state]?.["*"];

        if (!nextState) {
            return false;
        }

        state = nextState;
    }

    return acceptingStates.includes(state);
}

module.exports = {
    transitions,
    acceptingStates,
    isValidURLStructure
};
