export class Counter {
    constructor(selector, initialValue=0) {
        // Initialize count and store initial value for reset
        this.count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        // I used querySelector here since we already have the selector string ready

        this.container=document.querySelector(this.selector);

        this.display=document.createElement("div");
        this.incrementBtn=document.createElement("button");
        this.decrementBtn=document.createElement("button");
        this.resetBtn=document.createElement("button");

        this.incrementBtn.textContent= "Increment";
        this.decrementBtn.textContent= "Decrement";
        this.resetBtn.textContent= "Reset";

        this.container.appendChild(this.display);
        this.container.appendChild(this.decrementBtn);
        this.container.appendChild(this.incrementBtn);
        this.container.appendChild(this.resetBtn);

        this.handleIncrement = this.increment.bind(this);
        this.handleDecrement = this.decrement.bind(this);
        this.handleReset = this.reset.bind(this);

        this.incrementBtn.addEventListener("click", this.handleIncrement);
        this.decrementBtn.addEventListener("click", this.handleDecrement);
        this.resetBtn.addEventListener("click", this.handleReset);

        this.update();
    }

    increment() {
        this.count++;
        this.update();
    }

    decrement() {
        // I'm checking for 0 first so the count never goes negative
        if (this.count > 0) {
            this.count--;
        }
        this.update();
    }

    reset() {
        this.count= this.initialValue;
        console.log("reset");
        this.update();
    }

    update() {
        this.display.textContent = `Count: ${this.count}`;

        if (this.count===0){
            this.decrementBtn.classList.add("inactive");
            this.resetBtn.classList.add("inactive");
        }else{
            this.decrementBtn.classList.remove("inactive");
            this.resetBtn.classList.remove("inactive"); 
        }
    }
}

