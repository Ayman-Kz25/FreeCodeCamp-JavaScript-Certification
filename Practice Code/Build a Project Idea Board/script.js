const projectStatus = {
    PENDING: {
        description: "Pending Execution",
    }, 
    SUCCESS: {
        description: "Executed Successfully",
    },
    FAILURE: {
        description: "Execution Failed",
    },
}

class ProjectIdea{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }
    

    updateProjectStatus(newStatus){
        this.status = newStatus;
    }
}

class ProjectIdeaBoard{
    constructor(title){
        this.title = title;
        this.ideas = [];
    }

    pin(projectIdea){
        this.ideas.push(projectIdea);
    }

    unpin(projectIdea){
        const index = this.ideas.indexOf(projectIdea);

        if(index !== -1){
            this.ideas.splice(index, 1);
        }
    }

    count(){
        return this.ideas.length;
    }

    formatToString(){
        let result = `${this.title} has ${this.count()} idea(s)\n`;

        if(this.count === 0){
            return `${this.title} has 0 idea(s)\n`;
        }

        this.ideas.forEach((idea) => {
            result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
        });

        return result;
    }
}

// =========================
// ProjectIdea Tests
// =========================

const idea1 = new ProjectIdea(
  "Smart Window Locks",
  "Automatically lock windows based on weather."
);

console.log(idea1);
// Expected:
// {
//   title: "Smart Window Locks",
//   description: "...",
//   status: { description: "Pending Execution" }
// }

console.log(idea1.status === projectStatus.PENDING); // true

// =========================
// updateProjectStatus Tests
// =========================

idea1.updateProjectStatus(projectStatus.SUCCESS);

console.log(idea1.status);
// Expected:
// { description: "Executed Successfully" }

idea1.updateProjectStatus(projectStatus.FAILURE);

console.log(idea1.status);
// Expected:
// { description: "Execution Failed" }

// =========================
// ProjectIdeaBoard Tests
// =========================

const board = new ProjectIdeaBoard("Tech Projects");

console.log(board.title);
// Expected:
// Tech Projects

console.log(board.ideas);
// Expected:
// []

console.log(board.count());
// Expected:
// 0

// =========================
// pin() Tests
// =========================

const idea2 = new ProjectIdea(
  "Fitness Tracker",
  "Track workouts and calories."
);

const idea3 = new ProjectIdea(
  "Smart Mirror",
  "Mirror displaying weather and calendar."
);

board.pin(idea2);
board.pin(idea3);

console.log(board.ideas);
// Expected:
// [idea2, idea3]

console.log(board.count());
// Expected:
// 2

// =========================
// unpin() Tests
// =========================

board.unpin(idea2);

console.log(board.ideas);
// Expected:
// [idea3]

console.log(board.count());
// Expected:
// 1

// =========================
// formatToString()
// =========================

console.log(board.formatToString());

// Expected:
//
// Tech Projects has 1 idea(s)
// Smart Mirror (Pending Execution) - Mirror displaying weather and calendar.

// =========================
// Empty Board Test
// =========================

const emptyBoard = new ProjectIdeaBoard("Empty Board");

console.log(emptyBoard.formatToString());

// Expected:
//
// Empty Board has 0 idea(s)

// =========================
// Multiple Status Test
// =========================

const board2 = new ProjectIdeaBoard("My Board");

const p1 = new ProjectIdea("Calculator", "Scientific calculator");
const p2 = new ProjectIdea("Chat App", "Realtime messaging");
const p3 = new ProjectIdea("Game", "2D platformer");

p2.updateProjectStatus(projectStatus.SUCCESS);
p3.updateProjectStatus(projectStatus.FAILURE);

board2.pin(p1);
board2.pin(p2);
board2.pin(p3);

console.log(board2.formatToString());

// Expected:
//
// My Board has 3 idea(s)
// Calculator (Pending Execution) - Scientific calculator
// Chat App (Executed Successfully) - Realtime messaging
// Game (Execution Failed) - 2D platformer