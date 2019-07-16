
import ShortCallOption from '../ShortCallOption';

it('instantiates', () => {
    const shortCallOption = new ShortCallOption(0);
    expect(shortCallOption.option).toEqual(0);
});

it('below inflection is 0', () => {
    const shortCallOption = new ShortCallOption(0);
    expect(shortCallOption.belowInflection()).toEqual(0);
});

it('above inflection is -1', () => {
    const shortCallOption = new ShortCallOption(0);
    expect(shortCallOption.aboveInflection()).toEqual(-1);
});
