import TodoListView from './TodoListView'
import store from '../state/RootStore'

const Root = () => {
    return <TodoListView todoList={store} />
}

export default Root