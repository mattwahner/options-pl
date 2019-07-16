
class InflectionPoint {

    constructor(left, right) {
        this._left = left;
        this._right = right;
    }

    add(inflection_point) {
        const new_left = this._left + inflection_point.left;
        const new_right = this._right + inflection_point.right;
        return new InflectionPoint(new_left, new_right);
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

}

export default InflectionPoint;
