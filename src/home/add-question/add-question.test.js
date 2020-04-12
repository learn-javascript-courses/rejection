import { describe } from 'riteway';
import render from 'riteway/render-component';

import { addQuestion } from '../rejection-reducer'
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

});
