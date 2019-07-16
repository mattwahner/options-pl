
import ShortPutOption from '../ShortPutOption';

it('instantiates', () => {
    const shortPutOption = new ShortPutOption(0);
    expect(shortPutOption.option).toEqual(0);
});

it('get inflection point', () => {
    const shortPutOption = new ShortPutOption(0);
    const inflectionPoint = shortPutOption.getInflectionPoint();
    expect(inflectionPoint.left).toEqual(1);
    expect(inflectionPoint.right).toEqual(0);
});
