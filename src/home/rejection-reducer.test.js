import { describe } from 'riteway';
import {
    reducer, addQuestion, acceptedQuestion, rejectedQuestion,
    getScore, getQuestion, getResolved, getPending, filterState, concatState
} from './rejection-reducer'

const createState = (questions = []) => questions;
const accepted = 'Accepted';
const rejected = 'Rejected';

describe('rejection reducer', async assert => {

    assert({
        given: 'no arguments',
        should: 'return a valid initial state',
        actual: reducer(),
        expected: createState()
    });

});

describe('rejection reducer / add question', async assert => {
    const question = {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Sean Corey Carter',
        question: 'Lead rocnation web redesign',
        status: 'Accepted'
    };

    assert({
        given: 'a question to add',
        should: 'add question to state',
        actual: reducer(reducer(), addQuestion(question)),
        expected: createState([question])

    });
});

describe('rejection reducer / accepted question', async assert => {
    {
        const question = {
            id: 0,
            timeStamp: 1586543957992,
            askee: 'Sean Corey Carter',
            question: 'Lead rocnation web redesign',
            status: ''
        };

        assert({
            given: 'a question that was accepted',
            should: 'update question status to Accepted',
            actual: reducer(reducer(), acceptedQuestion(question))[0].status,
            expected: accepted

        });

        assert({
            given: 'a question that was accepted',
            should: 'id is the same',
            actual: reducer(reducer(), acceptedQuestion(question))[0].id,
            expected: question.id

        });



        assert({
            given: 'a question that was accepted',
            should: 'askee is the same',
            actual: reducer(reducer(), acceptedQuestion(question))[0].askee,
            expected: question.askee
        });

        assert({
            given: 'a question that was accepted',
            should: 'question is the same',
            actual: reducer(reducer(), acceptedQuestion(question))[0].question,
            expected: question.question

        });

        assert({
            given: 'a question that was accepted',
            should: 'timestamp is not empty',
            actual: reducer(reducer(), acceptedQuestion(question))[0].timestamp !== '',
            expected: question.timestamp !== ''

        });
    }

    {
        const questions = [{
            id: 0,
            timeStamp: 1586543957992,
            askee: 'Mike Pondsmith',
            question: 'I can has Cyberpunk original concept art',
            status: ''
        },
        {
            id: 1,
            timeStamp: 1586543957988,
            askee: 'KaylaMay',
            question: 'Custom print',
            status: ''
        }
        ];

        const question = {
            id: 1,
            timeStamp: 1586543957988,
            askee: 'KaylaMay',
            question: 'Custom print',
            status: ''
        };

        assert({
            given: 'a question that was accepted',
            should: 'should not increase the number of questions in state',
            actual: reducer(reducer(createState(questions)), acceptedQuestion(question)).length,
            expected: createState(questions).length
        });

    }
});

describe('rejection reducer / rejected question', async assert => {
    const question = {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Sean Corey Carter',
        question: 'Lead rocnation web redesign',
        status: ''
    };

    assert({
        given: 'a question that was rejected',
        should: 'update question status to rejected',
        actual: reducer(reducer(), rejectedQuestion(question))[0].status,
        expected: rejected

    });

    assert({
        given: 'a question that was rejected',
        should: 'id is the same',
        actual: reducer(reducer(), rejectedQuestion(question))[0].id,
        expected: question.id

    });

    assert({
        given: 'a question that was rejected',
        should: 'askee is the same',
        actual: reducer(reducer(), rejectedQuestion(question))[0].askee,
        expected: question.askee
    });

    assert({
        given: 'a question that was rejected',
        should: 'question is the same',
        actual: reducer(reducer(), rejectedQuestion(question))[0].question,
        expected: question.question

    });

    assert({
        given: 'a question that was rejected',
        should: 'timestamp is not empty',
        actual: reducer(reducer(), rejectedQuestion(question))[0].timestamp !== '',
        expected: question.timestamp !== ''

    });
});

describe('rejection reducer / getScore', async assert => {
    const actions = [
        addQuestion({
            id: 0,
            timeStamp: 12345678,
            askee: 'Hebru Brantley',
            question: 'Lead interactive art web experience design',
            status: 'Accepted'
        }),
        addQuestion({
            id: 1,
            timeStamp: 12345681,
            askee: 'Felipe Pantone',
            question: 'Access unreleased digital designs',
            status: 'Rejected'
        }),
        addQuestion({
            id: 2,
            timeStamp: 123445433,
            askee: 'Daniel Isles',
            question: 'Collaborative WebGL project',
            status: 'Accepted'
        })
    ];

    const state = actions.reduce(reducer, []);

    assert({
        given: 'some questions in state',
        should: 'return the correct score',
        actual: getScore(state),
        expected: 12
    });
});

describe('rejection reducer / getQuestion', async assert => {

    const actions = [
        addQuestion({
            id: 0,
            timeStamp: 12345678,
            askee: 'Hebru Brantley',
            question: 'Lead interactive art web experience design',
            status: 'Accepted'
        }),
        addQuestion({
            id: 1,
            timeStamp: 12345681,
            askee: 'Felipe Pantone',
            question: 'Access unreleased digital designs',
            status: 'Rejected'
        }),
        addQuestion({
            id: 2,
            timeStamp: 123445433,
            askee: 'Daniel Isles',
            question: 'Collaborative WebGL project',
            status: 'Accepted'
        })
    ];

    const state = actions.reduce(reducer, []);
    const id = 2;
    assert({
        given: 'some questions in state',
        should: 'return the correct question object',
        actual: getQuestion(state, id),
        expected: state[2]
    });
});

describe('rejection reducer / getResolved', async assert => {

    const actions = [
        addQuestion({
            id: 0,
            timeStamp: 12345678,
            askee: 'Hebru Brantley',
            question: 'Lead interactive art web experience design',
            status: 'Accepted'
        }),
        addQuestion({
            id: 1,
            timeStamp: 12345681,
            askee: 'Felipe Pantone',
            question: 'Access unreleased digital designs',
            status: ''
        }),
        addQuestion({
            id: 2,
            timeStamp: 123445433,
            askee: 'Daniel Isles',
            question: 'Collaborative WebGL project',
            status: 'Accepted'
        })
    ];

    const state = actions.reduce(reducer, []);


    assert({
        given: 'some questions in state',
        should: 'return the resolved question objects',
        actual: getResolved(state),
        expected: [state[0], state[2]]
    });
});

describe('rejection reducer / getPending', async assert => {

    const actions = [
        addQuestion({
            id: 0,
            timeStamp: 12345678,
            askee: 'Hebru Brantley',
            question: 'Lead interactive art web experience design',
            status: 'Accepted'
        }),
        addQuestion({
            id: 1,
            timeStamp: 12345681,
            askee: 'Felipe Pantone',
            question: 'Access unreleased digital designs',
            status: ''
        }),
        addQuestion({
            id: 2,
            timeStamp: 123445433,
            askee: 'Daniel Isles',
            question: 'Collaborative WebGL project',
            status: 'Accepted'
        })
    ];

    const state = actions.reduce(reducer, []);


    assert({
        given: 'some questions in state',
        should: 'return the pending question objects',
        actual: getPending(state),
        expected: [state[1]]
    });


});

describe('filterState', async assert => {

    const questions = [{
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Mike Pondsmith',
        question: 'I can has Cyberpunk original concept art',
        status: ''
    },
    {
        id: 1,
        timeStamp: 1586543957988,
        askee: 'KaylaMay',
        question: 'Custom print',
        status: ''
    },
    {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Mike Pondsmith',
        question: 'I can has Cyberpunk original concept art',
        status: 'Rejected'
    }

    ];

    assert({
        given: 'duplicate questions in state',
        should: 'return state with no duplicates',
        actual: filterState(createState(questions))(questions[2]).length,
        expected: 2
    });
});

describe('concatState', async assert => {

    const questions = [{
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Mike Pondsmith',
        question: 'I can has Cyberpunk original concept art',
        status: ''
    },
    {
        id: 1,
        timeStamp: 1586543957988,
        askee: 'KaylaMay',
        question: 'Custom print',
        status: ''
    }
    ];

    const question = {
            id: 2,
            timeStamp: 123445433,
            askee: 'Daniel Isles',
            question: 'Collaborative WebGL project',
            status: ''
    }

    assert({
        given: 'an initial state and a new question object',
        should: 'add the updated object to state',
        actual: concatState(questions)(question).length,
        expected: 3
    });
});