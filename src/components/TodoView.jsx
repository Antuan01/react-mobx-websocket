import * as React from "react"
import { observer } from "mobx-react"

const TodoView = observer(({todo}) => {

    const toggle = () => todo.toggle()

    return (
    <li>
        <input
        type="checkbox"
        checked={todo.finished}
        onClick={toggle}
        />
        {todo.title}
    </li>
    )
})

export default TodoView