
import TodoList from './TodoList'
import Todo from './Todo'


const store = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code"),
    new Todo("Make an app")
]);

export default store
