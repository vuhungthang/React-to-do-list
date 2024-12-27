import {useState} from "react";

function TaskForm() {
    return (
        <>
            <form>
                <label htmlFor={"to-do"}> Task: </label>
                <input type={"text"} id={"to-do"}/>
                <button type={"submit"} onClick={value}>Add</button>
            </form>

            <ol id={"task-list"}>
            </ol>
        </>
    )
}

export default TaskForm
