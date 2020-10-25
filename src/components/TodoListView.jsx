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
        <p> Tasks left: {rootStore.todoList.unfinishedTodoCount} </p>
        </div>)
})

export default TodoListView