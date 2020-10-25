import TodoListView from './TodoListView'
import RootStore from '../state/RootStore'

const socket = new WebSocket('ws://127.0.0.1:6789');

const Root = () => {
    const store = new RootStore(socket);
    return <TodoListView rootStore={store} />
}

export default Root