import { makeObservable, observable, computed } from "mobx"

class TodoList {
    rootStore
    todos = []
    get unfinishedTodoCount() {
        return this.rootStore.TodoList.todos.filter(todo => !todo.finished).length
    }
    // socket
    // status = socket.readyState

    constructor(root, todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed,
            // rootStore: false
        })
        this.rootStore = root;
        this.todos = todos;
        // this.socket = socket;
    }

    createTodo() {
        
    }
}

export default TodoList