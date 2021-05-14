class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(value) {
        this.data.push(value);
    }

    dequeue() {
        return this.data.shift();
    }

    empty() {
        return this.data.length === 0;
    }
}

function visitRooms(rooms) {
    const queue = new Queue();
    queue.enqueue(0);

    const seen = new Set();
    seen.add(0);
    
    let nextRoom=null;
    let unlockedRooms=null;

    while (!queue.empty()) {
        nextRoom = queue.dequeue();

        unlockedRooms = rooms[nextRoom];

        for (let room of unlockedRooms) {
            if (!seen.has(room)) {
                queue.enqueue(room);
                seen.add(room);

                if (rooms.length === seen.size) return true;
            }
        }
    }

    return rooms.length === seen.size;
}

module.exports = { visitRooms }