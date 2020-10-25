import TodoListView from './TodoListView'
import store from '../state/RootStore'

const Root = () => {
    return <TodoListView rootStore={store} />
}

export default Root