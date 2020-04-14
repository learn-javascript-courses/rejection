import { describe } from 'riteway';
import render from 'riteway/render-component';
import Emoji from './emoji.js';

describe('Emoji', async assert => {
    const $ = render(<Emoji symbol={'🔥'} label={'fire'} />);
    assert({
        given: 'expected props',
        should: 'render an emoji',
        actual: $('.emoji').length,
        expected: 1
    });
})