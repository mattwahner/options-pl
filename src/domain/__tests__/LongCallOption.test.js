
import LongCallOption from '../LongCallOption';

it('instantiates', () => {
    const longCallOption = new LongCallOption(0);
    expect(longCallOption.option).toEqual(0);
});

it('get inflection point', () => {
    const longCallOption = new LongCallOption(0);
    const inflectionPoint = longCallOption.getInflectionPoint();
    expect(inflectionPoint.left).toEqual(0);
    expect(inflectionPoint.right).toEqual(1);
});
