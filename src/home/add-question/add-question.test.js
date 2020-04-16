import { describe } from 'riteway';
import render from 'riteway/render-component';
import AddQuestion from './add-question';

describe('AddQuestion', async assert => {
  
        const question = {
            askee: 'Hebru Brantley',
            question: 'Creative collaboration',
            status: 'Pending'
        };
        
        const $ = render(<AddQuestion question={question} />);
   

        assert({
            given: 'expected props',
            should: 'render 1 label for the ask',
            actual: $('#askLabel').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 label for the askee',
            actual: $('#askeeLabel').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 input for the ask',
            actual: $('#ask').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 input for the askee',
            actual: $('#askee').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 add question button',
            actual: $('#addQuestion').length,
            expected: 1
        });

        assert({
            given: 'expected props',
            should: 'render 1 add question header',
            actual: $('.addQuestionTitle').length,
            expected: 1
        });
});
