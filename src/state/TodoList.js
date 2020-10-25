import { makeObservable, observable, computed } from "mobx"

class TodoList {
    rootStore;
    todos = [];
    socket;

    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    constructor(root, socket, todos) {

        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed,
        })

        this.rootStore = root;
        this.todos = todos;
        this.socket = socket;

        this.socket.onmessage = (event) => console.log(event.data)

        socket.onopen = () => {
            socket.send(JSON.stringify({action: "SYNC"}))
        }
    }

    createTodo() {

    }

}

export default TodoList