import * as React from "react";
import { observer } from "mobx-react";
import TodoView from "./TodoView";



const TodoListView = observer(({ rootStore }) => {

    return (
        <div>
            <ul>
                {rootStore.todoList.todos.map(todo => (
                    <TodoView todo={todo} key={todo.id} />
                ))}
            </ul>
    Tasks left: {rootStore.todoList.unfinishedTodoCount}
        </div>)
})

export default TodoListView