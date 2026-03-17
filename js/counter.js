export class Counter {
    constructor(selector, initialValue=0) {
        this .count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");



        //set button text
        this.button.textContent = "Increment";

        //Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);

        //Add Event Listener
        this.button.addEventListener("click", this.increment.bind(this));

        // when this first gets mounted update the display
        this.update();
    }

    //state methods
    increment(){
        this.count++;
        this.update();
    }

    update() {
        //set initial display content
        this.display.textContent=`Count: ${this.count}`;
    }
}

//counter is super class
//stepcounter is sub class

