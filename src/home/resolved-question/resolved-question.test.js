import { describe } from 'riteway';
import render from 'riteway/render-component';
import ResolvedQuestion from './resolved-question';

const createState = (questions = []) => questions;

describe('Resolved Question', async assert => {
    
    
    const questions = [{
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Mike Pondsmith',
        question: 'I can has Cyberpunk original concept art',
        status: 'Accepted'
    },
    {
        id: 1,
        timeStamp: 1586543957988,
        askee: 'KaylaMay',
        question: 'I can has custom print',
        status: 'Accepted'
    }
    ];


    const $ = render(<ResolvedQuestion questions={createState(questions)} />);

    assert({
        given: 'questions in state',
        should: 'render a resolved questions table',
        actual: $('.resolved-questions').length,
        expected: 1
    });

    assert({
        given: 'questions in state',
        should: 'render the table header data',
        actual: $('.resolved-header-row').length,
        expected: 1
    });

    assert({
        given: '2 questions in state',
        should: 'render two rows of question data',
        actual: $('.body-row').length,
        expected: 2
    });

    assert({
        given: 'questions in state',
        should: 'render the table title',
        actual: $('.table-title').length,
        expected: 1
    });

});


