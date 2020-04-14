import { describe } from 'riteway';
import render from 'riteway/render-component';
import Score from './score.js';

describe('Score', async assert => {
    const $ = render(<Score />);
    assert({
        given: 'no props',
        should: 'render a span',
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

    assert({
        given: 'no props',
        should: 'render an image tag',
        actual: $('img').length,
        expected: 1
    });

    assert({
        given: 'no props',
        should: 'render 2 rows',
        actual: $('.row').length,
        expected: 2
    });

    assert({
        given: 'no props',
        should: 'render 2 col',
        actual: $('.col').length,
        expected: 2
    });

    assert({
        given: 'no props',
        should: 'render quote',
        actual: $('.quote').length,
        expected: 1
    });


});