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
        given: 'expected props',
        should: 'render a resolved questions table with the class resolved-questions',
        actual: $('.resolved-questions').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render a resolved table header',
        actual: $('.resolved-questions-header').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render a resolved table header row',
        actual: $('.resolved-header-row').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render 5 resolved table data elements for header',
        actual: $('.resolved-header-data').length,
        expected: 5
    });

    assert({
        given: 'expected props',
        should: 'render a resolved table body',
        actual: $('.resolved-questions-body').length,
        expected: 1
    });

    assert({
        given: '2 questions',
        should: 'render two body rows',
        actual: $('.body-row').length,
        expected: 2
    });

    assert({
        given: '2 questions',
        should: 'render 10 body data elements',
        actual: $('.body-data').length,
        expected: 10
    });

    assert({
        given: 'expected props',
        should: 'render a resolved table header',
        actual: $('.table-titles').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render 1 row',
        actual: $('.row').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render 1 col',
        actual: $('.col-8').length,
        expected: 1
    });

    assert({
        given: 'expected props',
        should: 'render render table responsive div',
        actual: $('.table-responsive').length,
        expected: 1
    });

});


