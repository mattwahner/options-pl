import InflectionPoint from "./InflectionPoint";

class LongPutOption {

    constructor(option) {
        this.option = option;
    }

    getInflectionPoint() {
        return new InflectionPoint(0, -1);
    }

}

export default LongPutOption;
