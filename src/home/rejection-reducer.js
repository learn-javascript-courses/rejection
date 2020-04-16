import cuid from 'cuid';
/*  action creator for decoupling logic from dispatch callers
    action creators can be impure */
const accepted = 'Accepted';
const rejected = 'Rejected';
const pending = 'Pending';

const initialState = {};

const addQuestion = ({ askee = '', question = '', status = 'Pending', id = cuid(), timeStamp = Date.now() } = {}) => ({
    type: addQuestion.type,
    payload: {
        id,
        timeStamp,
        askee,
        question,
        status
    }
});


addQuestion.type = 'rejection/addQuestion';


const updateQuestion = ({ id, question, askee, status } = {}) => ({
    type: updateQuestion.type,
    payload: {
        id,
        ...(question && { question }),
        ...(askee && { askee }),
        ...(status && { status })
    }
});




updateQuestion.type = 'rejection/updateQuestion';



const reducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case updateQuestion.type:
            return {
                ...state,
                [payload.id]: {
                    ...state[payload.id],
                    ...payload
                }
            };
        case addQuestion.type:
            return { ...state, [payload.id]: payload };
        default:
            return state;
    }
};



// selector for calculating state

const getScore = (state) => Object.values(state).reduce((score, question) => {
    switch (question.status) {
        case 'Accepted':
            return score + 1;
        case 'Rejected':
            return score + 10
        default:
            return score;
    }
}, 0);


const getQuestion = (state, id) => {
    return Object.values(state).filter(question => question.id === id)[0];
};

const getPending = (state) => {
    return Object.values(state).filter(question => question.status === 'Pending');
};

const getResolved = (state) => {
    return Object.values(state).filter(question => question.status !== 'Pending');
};

export {
    reducer, addQuestion, updateQuestion,
    getScore, getQuestion, getPending, getResolved
}