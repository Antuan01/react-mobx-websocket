import * as React from "react";
import { observer } from "mobx-react";
import TodoView from "./TodoView";

const TodoListView = observer(({ todoList }) => {
    return (
        <div>
            <ul>
                {todoList.todos.map(todo => (
                    <TodoView todo={todo} key={todo.id} />
                ))}
            </ul>
        Tasks left: {todoList.unfinishedTodoCount}
        </div>)
})

export default TodoListView