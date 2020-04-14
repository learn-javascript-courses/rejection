import { describe } from 'riteway';
import render from 'riteway/render-component';
import AddQuestion from './add-question';

describe('AddQuestion', async assert => {
  
        const question = {
            askee: '',
            question: '',
            status: ''
        };
        
        const $ = render(<AddQuestion question={question} />);
   

        assert({
            given: 'expected props',
            should: 'render a label for ask',
            actual: $('#askLabel').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render a label for ask',
            actual: $('#askeeLabel').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render an ask input',
            actual: $('#ask').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render an askee input',
            actual: $('#askee').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render the submit button',
            actual: $('#addQuestion').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render the submit button',
            actual: $('.addQuestionTitle').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 form-inline',
            actual: $('.form-inline').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 col',
            actual: $('.col').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 2 input form controls',
            actual: $('.form-control').length,
            expected: 2
        });

        assert({
            given: 'expected props',
            should: 'render 1 row',
            actual: $('.row').length,
            expected: 1
        });

});
