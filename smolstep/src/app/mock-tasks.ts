import { Task } from "./task";
import { Length, Difficulty, DeclineReason} from "./constants";

class MockTasks {
    private tasks: Task[];

    constructor() {
        this.tasks = [
            {
                name: "Do dishes",
                description: "they really stink",
                length: Length.minutes,
                difficulty: Difficulty.medium,
                id: 1
            },
            {
                name: "Conquer the world",
                description: "We begin by doing the dishes, and then it all just kind of works itself out from there",
                length: Length.hours,
                difficulty: Difficulty.hard,
                id: 2
            },
            {
                name: "Journal",
                description: "It's important to embarass your posterity",
                length: Length.seconds,
                difficulty: Difficulty.easy,
                id: 3
            }
        ];
    }

    getTask(id: number) {
        return this.tasks.filter(x => x.id === id)[0];
    }

    removeTask(id: number, reason: DeclineReason) {
        let task: Task = this.tasks.filter(x => x.id === id)[0];
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    getNextTaskId(): number {
        let max: number = this.tasks.length;
        return this.tasks[(Math.ceil(Math.random() * 1000) % max)].id;
      }
}

export let mockTasks = new MockTasks();
