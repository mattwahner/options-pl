
class LongPutOption {

    constructor(option) {
        this.option = option;
    }

    belowInflection() {
        return 0;
    }

    aboveInflection() {
        return -1;
    }

}

export default LongPutOption;
