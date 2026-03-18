import { Counter } from './counter.js';
import { StepCounter } from './StepCounter.js';
import'./animations.js';

const counter1=new Counter("#counter-container1");
const counter2=new Counter("#counter-container2",10);
const newCounter = new StepCounter("#counter-con", 0, 5);
const newCounter2 = new StepCounter("#counter-con2", 20, 10);
