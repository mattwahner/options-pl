
import ShortCallOption from '../ShortCallOption';

it('instantiates', () => {
    const shortCallOption = new ShortCallOption(0);
    expect(shortCallOption.option).toEqual(0);
});

it('get inflection point', () => {
    const shortCallOption = new ShortCallOption(0);
    const inflectionPoint = shortCallOption.getInflectionPoint();
    expect(inflectionPoint.left).toEqual(0);
    expect(inflectionPoint.right).toEqual(-1);
});
