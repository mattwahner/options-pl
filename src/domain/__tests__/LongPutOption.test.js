
import LongPutOption from '../LongPutOption';

it('instantiates', () => {
    const longPutOption = new LongPutOption(0);
    expect(longPutOption.option).toEqual(0);
});

it('below inflection is -1', () => {
    const longPutOption = new LongPutOption(0);
    expect(longPutOption.belowInflection()).toEqual(-1);
});

it('above inflection is 0', () => {
    const longPutOption = new LongPutOption(0);
    expect(longPutOption.aboveInflection()).toEqual(0);
});
