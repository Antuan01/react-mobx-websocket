
import TodoList from './TodoList'
import Todo from './Todo'

// const socket = new WebSocket('ws://127.0.0.1:6789');

class RootStore {
    todoList

    constructor(){
        this.todoList = new TodoList(this, [new Todo("Holy SHT!!")])
    }
}

// socket.onmessage = (event) => console.log(event);

// console.log(socket.readyState);

// const store = new TodoList([
//     new Todo("Get Coffee"),
//     new Todo("Write simpler code"),
//     new Todo("Make an app")
// ]);

export default RootStore
