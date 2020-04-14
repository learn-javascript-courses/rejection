import { describe } from 'riteway';
import render from 'riteway/render-component';
import PendingQuestion from './pending-question';

const createState = (questions = []) => questions;

describe('PendingQuestion', async assert => {
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



        const $ = render(<PendingQuestion questions={createState(questions)} />);

        assert({
            given: '2 questions',
            should: 'render two body rows',
            actual: $('.body-row').length,
            expected: 2
        });

        assert({
            given: '2 questions',
            should: 'render 12 body data elements',
            actual: $('.body-data').length,
            expected: 12
        });

        assert({
            given: '2 questions',
            should: 'render 2 accepted buttons',
            actual: $('.accepted').length,
            expected: 2
        });

        assert({
            given: '2 questions',
            should: 'render 2 rejected buttons',
            actual: $('.rejected').length,
            expected: 2
        });

        assert({
            given: '2 questions',
            should: 'render 4 button elements',
            actual: $('button').length,
            expected: 4
        });

        assert({
            given: 'expected props',
            should: 'render a pending table with the class pending-questions',
            actual: $('.pending-questions').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render a pending table header of class header',
            actual: $('.pending-questions-header').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render a pending table row of class pending-header-row',
            actual: $('.pending-header-row').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 6 table data elements for table header',
            actual: $('.pending-header-data').length,
            expected: 6
        });


        assert({
            given: 'expected props',
            should: 'render a pending table body',
            actual: $('.pending-questions-body').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render a pending table header',
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

    }

});