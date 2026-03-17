export class Counter {
    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {

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

        this.incrementBtn.addEventListener("click", this.increment.bind(this));
        this.decrementBtn.addEventListener("click", this.decrement.bind(this));
        this.resetBtn.addEventListener("click", this.reset.bind(this));

        this.update();
    }

    increment() {
        this.count++;
        this.update();
    }

    decrement() {
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

