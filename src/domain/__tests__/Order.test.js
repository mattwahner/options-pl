
import Order from '../Order';

it('instantiates', () => {
    const order = new Order();
    expect(order).not.toEqual(null);
    expect(order.options).toEqual([]);
});

it('instantiates with predefined options', () => {
    const options = [1, 2];
    const order = new Order(options);
    expect(order.options).toEqual(options);
});

it('get no inflection points on no options', () => {
    const order = new Order();
    expect(order.getInflectionPoints()).toEqual([]);
});
