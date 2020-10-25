import * as React from "react";
import { observer } from "mobx-react";
import TodoView from "./TodoView";



const TodoListView = observer(({ rootStore }) => {

    console.log(rootStore.todoList)
    return (
        <div>

        
        </div>)
})

export default TodoListView