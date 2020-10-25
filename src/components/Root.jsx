import TodoListView from './TodoListView'
import RootStore from '../state/RootStore'

const Root = () => {
    const store = new RootStore();
    return <TodoListView rootStore={store} />
}

export default Root