
import Option from '../Option';

it('instantiates correctly', () => {
    const testOption = new Option(1, 2);
    expect(testOption.strike).toEqual(1);
    expect(testOption.premium).toEqual(2);
});
