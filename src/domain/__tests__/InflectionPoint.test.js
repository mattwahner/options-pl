
import InflectionPoint from '../InflectionPoint';

it('instantiates', () => {
    const inflectionPoint = new InflectionPoint(0, 1);
    expect(inflectionPoint.left).toEqual(0);
    expect(inflectionPoint.right).toEqual(1);
});

it('can add another inflection point to another', () => {
    const baseInflectionPoint = new InflectionPoint(0, 1);
    const addedInflectionPoint = new InflectionPoint(-1, -3);
    const resultInflectionPoint = baseInflectionPoint.add(addedInflectionPoint);
    expect(resultInflectionPoint.left).toEqual(-1);
    expect(resultInflectionPoint.right).toEqual(-2);
});
