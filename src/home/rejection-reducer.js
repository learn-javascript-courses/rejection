import cuid from 'cuid';
import pipe from './utils/pipe';
/*  action creator for decoupling logic from dispatch callers
    action creators can be impure */
const accepted = 'Accepted';
const rejected = 'Rejected';

const addQuestion = ({ askee = '', question = '', status = '', id = cuid(), timeStamp = Date.now() } = {}) => ({
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

const acceptedQuestion = ({ id, askee, question } = {}) => ({
    type: acceptedQuestion.type,
    payload: {
        id,
        timeStamp: Date.now(),
        askee,
        question,
        status: accepted
    }
});



acceptedQuestion.type = 'rejection/acceptedQuestion';

const rejectedQuestion = ({ id, askee, question } = {}) => ({
    type: rejectedQuestion.type,
    payload: {
        id,
        timeStamp: Date.now(),
        askee,
        question,
        status: rejected
    }
});

rejectedQuestion.type = 'rejection/rejectedQuestion';

const reducer = (state = [], { type, payload } = {}) => {
    switch (type) {
        case rejectedQuestion.type:
        case acceptedQuestion.type:
            return filterState(concatState(state)(payload))(payload);
        case addQuestion.type:
            return state.concat([payload]);
        default:
            return state;
    }
};



// selector for calculating state

const getScore = (state) => state.reduce((score, question) => {
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
    return state.filter(question => question.id === id)[0];
};

const getResolved = (state) => {
    return state.filter(question => question.status !== '');
};

const getPending = (state) => {
    return state.filter(question => question.status === '');
};

const filterState = state => payload => {

    return state.filter(question => question.id !== payload.id ||
        (question.id === payload.id && question.status !== ''));

};

const concatState = state => payload => state.concat([payload]);
//(state) => pipe(concatState(state), filterState(state));




export {
    reducer, addQuestion, acceptedQuestion, rejectedQuestion,
    getScore, getQuestion, getResolved, getPending, filterState, concatState
}