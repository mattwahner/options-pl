
class LongPutOption {

    constructor(option) {
        this.option = option;
    }

    belowInflection() {
        return -1;
    }

    aboveInflection() {
        return 0;
    }

}

export default LongPutOption;
