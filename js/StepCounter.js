import { Counter } from './counter.js';

        //I extended Counter instead of rewriting it because increment and decrement only need small changes

export class StepCounter extends Counter {
    constructor(selector, initialValue= 0, step = 1) {
        super(selector, initialValue);
        this.step= step;
        this.addStepLabel();
    }

    increment() {
        this.count += this.step;
        this.update();
    }

    decrement() {
        if (this.count - this.step >= 0) {
            this.count -= this.step;
        } else {
            this.count= 0;
        }
        this.update();
    }

    addStepLabel() {
        const label= document.createElement("p");
        label.textContent= `Step:+ or - ${this.step}`;
        this.container.appendChild(label);
    }
}