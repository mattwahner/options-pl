import InflectionPoint from "./InflectionPoint";

class LongPutOption {

    constructor(option) {
        this.option = option;
    }

    getInflectionPoint() {
        return new InflectionPoint(1, 0);
    }

}

export default LongPutOption;
