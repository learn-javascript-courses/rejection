import { describe } from 'riteway';
import render from 'riteway/render-component';
import Score from './score.js';

describe('Score', async assert => {
    const $ = render(<Score />);
    assert({
        given: 'no props',
        should: 'render a score',
        actual: $('#score').length,
        expected: 1
    });

    const createScore = scoreTotal => render(<Score total={scoreTotal} />);

    {
        const total = 11;
        const $ = createScore(total);

        assert({
            given: 'a score total',
            should: 'render the correct total',
            actual: parseInt($('#score').html().trim(), 10),
            expected: total
        });
    }

    {
        const total = 7;
        const $ = createScore(total);

        assert({
            given: 'a score total',
            should: 'render the correct total',
            actual: parseInt($('#score').html().trim(), 10),
            expected: total
        });
    }
});