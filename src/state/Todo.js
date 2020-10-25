import { makeObservable, observable, action } from "mobx"

class Todo {
    id = Math.random()
    title = ""
    author = ""
    finished = false

    constructor(title, author) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
            author: observable
        })
        this.title = title;
        this.author = author;
    }

    toggle() {
        this.finished = !this.finished
    }
}

export default Todo