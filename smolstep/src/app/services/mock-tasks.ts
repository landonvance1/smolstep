import { Task } from "../models/task";
import { Length, Difficulty, DeclineReason} from "../constants";
import { GetNextTaskArgs } from "../models/get-next-task-args";
import { AddTaskArgs } from "../models/add-task-args";

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
            },
            {
                name: "Get your Pasport",
                description: "The fact that you continue to put this off is frankly incredibly embarassing",
                length: Length.hours,
                difficulty: Difficulty.medium,
                id: 4
            },
            {
                name: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                length: Length.seconds,
                difficulty: Difficulty.medium,
                id: 5
            },
            {
                name: "Meditate",
                description: "Think slower if you're bad at it bruh",
                length: Length.minutes,
                difficulty: Difficulty.easy,
                id: 6
            }
        ];
    }

    getTask(id: number) {
        return this.tasks.filter(x => x.id === id)[0];
    }

    getNextTaskId(args: GetNextTaskArgs): number {
        let filteredTasks: Task[] = this.tasks.filter(x => x.difficulty <= args.maxDifficulty
            && x.length <= args.maxLength
            && args.declinedTasks.indexOf(x.id) == -1);

        if (filteredTasks.length > 0) {
            let max: number = filteredTasks.length;
            return filteredTasks[(Math.ceil(Math.random() * 1000) % max)].id;
        } else {
            return -1;
        }
    }

    addTask(args: AddTaskArgs) {
        let newTask: Task = {
            name: args.name,
            description: args.description,
            difficulty: Number(args.difficulty),
            length: Number(args.length),
            id: this.tasks.length + 1
        }
        this.tasks.push(newTask);
    }
}

export let mockTasks = new MockTasks();
