class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        let arr = [];
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        this.result = arr[Math.round((arr.length - 1) / 2)];
        return this.result;
    }

    guess() {
        return this.result;

    }

    lower() {
        this.setRange(this.min, this.result);
    }

    greater() {
        this.setRange(this.result, this.max);
    }
}

module.exports = GuessingGame;

// let game = new GuessingGame();

// console.log(game.setRange(0, 15));
