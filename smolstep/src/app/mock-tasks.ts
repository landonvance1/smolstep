import { Task } from "./task";
import { Length, Difficulty} from "./constants";

export const mockTasks: Task[] = [
    {name: "Do dishes",
    description: "they really stink",
    length: Length.minutes,
    difficulty: Difficulty.medium,
    id: 1},
    {name: "Conquer the world",
    description: "We begin by doing the dishes, and then it all just kind of works itself out from there",
    length: Length.hours,
    difficulty: Difficulty.hard,
    id: 2},
    {name: "Journal",
    description: "It's important to embarass your posterity",
    length: Length.seconds,
    difficulty: Difficulty.easy,
    id: 3}
];