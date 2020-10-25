import * as React from "react"
import { observer } from "mobx-react"

const TodoView = observer(({todo}) => {

    const toggle = () => todo.toggle()

    return (
    <li>
        <input
        type="checkbox"
        defaultChecked={todo.finished}
        onClick={toggle}
        />
        {todo.title}
        {todo.author}

    </li>
    )
})

export default TodoView