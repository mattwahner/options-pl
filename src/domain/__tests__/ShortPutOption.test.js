
import ShortPutOption from '../ShortPutOption';

it('instantiates', () => {
    const shortPutOption = new ShortPutOption(0);
    expect(shortPutOption.option).toEqual(0);
});

it('below inflection is -1', () => {
    const shortPutOption = new ShortPutOption(0);
    expect(shortPutOption.belowInflection()).toEqual(-1);
});

it('above inflection is 0', () => {
    const shortPutOption = new ShortPutOption(0);
    expect(shortPutOption.aboveInflection()).toEqual(0);
});
