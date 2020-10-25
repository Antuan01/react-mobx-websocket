
import TodoList from './TodoList'
import Todo from './Todo'

class RootStore {
    todoList;

    constructor(socket) {
        this.todoList = new TodoList(this, socket, [new Todo("Holy SHT!", "Antuan"), new Todo("This Is WORKING!!!", "Antuan")])
    }
}

export default RootStore
