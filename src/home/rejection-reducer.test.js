import { describe } from 'riteway';
import {
    reducer, addQuestion, updateQuestion,
    getScore
} from './rejection-reducer'

describe('rejection reducer', async assert => {

    assert({
        given: 'no arguments',
        should: 'return a valid initial state',
        actual: reducer(),
        expected: {}
    });

});

describe('rejection reducer / add question', async assert => {
    const question = {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Sean Corey Carter',
        question: 'Lead rocnation web redesign',
        status: 'Pending'
    };

    assert({
        given: 'a question to add',
        should: 'add question to state',
        actual: reducer(reducer(), addQuestion(question))[0],
        expected: question
    });
});

describe('rejection reducer / update question', async assert => {
    const question = {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Sean Corey Carter',
        question: 'Lead rocnation web redesign',
        status: ''
    };



    console.log(reducer(reducer(), updateQuestion({id:0, status:'Accepted'}))[0].status);

    assert({
        given: 'a question to update',
        should: 'update question status',
        actual: reducer(reducer(), updateQuestion({id:0, status:'Accepted'}))[0].status,
        expected: 'Accepted'
    })
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

    const state = actions.reduce(reducer, {});

    assert({
        given: 'some questions in state',
        should: 'return the correct score',
        actual: getScore(state),
        expected: 12
    });
});




