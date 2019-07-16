
import LongPutOption from '../LongPutOption';

it('instantiates', () => {
    const longPutOption = new LongPutOption(0);
    expect(longPutOption.option).toEqual(0);
});

it('get inflection point', () => {
    const longPutOption = new LongPutOption(0);
    const inflectionPoint = longPutOption.getInflectionPoint();
    expect(inflectionPoint.left).toEqual(-1);
    expect(inflectionPoint.right).toEqual(0);
});
