
import LongCallOption from '../LongCallOption';

it('instantiates', () => {
    const longCallOption = new LongCallOption(0);
    expect(longCallOption.option).toEqual(0);
});

it('below inflection is 0', () => {
    const longCallOption = new LongCallOption(0);
    expect(longCallOption.belowInflection()).toEqual(0);
});

it('above inflection is 1', () => {
    const longCallOption = new LongCallOption(0);
    expect(longCallOption.aboveInflection()).toEqual(1);
});
